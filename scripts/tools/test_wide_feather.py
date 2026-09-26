import cv2
import numpy as np

f0 = cv2.imread("scratch/inspect_circle/f_000.jpg")
h, w = f0.shape[:2]

# Let's inspect the edge color at the boundary:
# Let's take the mean color of the outer 10 pixels:
outer_bgr = np.mean(np.concatenate([
    f0[0:10, :].reshape(-1, 3),
    f0[:, 0:10].reshape(-1, 3),
    f0[:, -10:].reshape(-1, 3)
], axis=0), axis=0)

print("Outer BGR:", outer_bgr)
outer_rgb = [int(round(outer_bgr[2])), int(round(outer_bgr[1])), int(round(outer_bgr[0]))]
hex_bg = f"#{outer_rgb[0]:02x}{outer_rgb[1]:02x}{outer_rgb[2]:02x}"
print(f"Outer RGB: {outer_rgb} -> HEX: {hex_bg}")

# Let's create a smooth fade mask from 0 to 180px
mask = np.ones((h, w), dtype=np.float32)
fade_w = 220
fade_h = 160

# Left fade
for x in range(fade_w):
    mask[:, x] = np.minimum(mask[:, x], (x / fade_w) ** 1.8)

# Right fade
for i, x in enumerate(range(w - fade_w, w)):
    mask[:, x] = np.minimum(mask[:, x], ((fade_w - 1 - i) / fade_w) ** 1.8)

# Top fade
for y in range(fade_h):
    mask[y, :] = np.minimum(mask[y, :], (y / fade_h) ** 1.8)

# Let's blend with outer_bgr
bg = np.full((h, w, 3), outer_bgr, dtype=np.float32)
feathered = (f0.astype(np.float32) * mask[:, :, np.newaxis] + bg * (1.0 - mask[:, :, np.newaxis]))
feathered = np.clip(feathered, 0, 255).astype(np.uint8)

# Put onto a large canvas
canvas = np.full((1400, 2400, 3), outer_bgr, dtype=np.uint8)
y1 = 1400 - 1080
x1 = (2400 - 1920) // 2
canvas[y1:y1+1080, x1:x1+1920] = feathered

cv2.imwrite("scratch/canvas_wide_feather.jpg", cv2.resize(canvas, (960, 560)))
print("Saved canvas_wide_feather.jpg")
