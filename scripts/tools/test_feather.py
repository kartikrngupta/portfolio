import cv2
import numpy as np

def feather_frame(img, bg_bgr=[36, 34, 174], margin=40):
    """
    Smoothly fades the top, left, and right outer pixels into the exact background color.
    Keeps the character untouched (character is in the center-bottom).
    """
    h, w = img.shape[:2]
    result = img.astype(np.float32).copy()
    bg = np.array(bg_bgr, dtype=np.float32)

    # Left edge fade (x: 0 to margin)
    for x in range(margin):
        alpha = (x / float(margin)) ** 1.5
        result[:, x] = alpha * result[:, x] + (1 - alpha) * bg

    # Right edge fade (x: w - margin to w)
    for i, x in enumerate(range(w - margin, w)):
        alpha = ((margin - 1 - i) / float(margin)) ** 1.5
        result[:, x] = (1 - alpha) * result[:, x] + alpha * bg

    # Top edge fade (y: 0 to margin)
    for y in range(margin):
        alpha = (y / float(margin)) ** 1.5
        result[y, :] = alpha * result[y, :] + (1 - alpha) * bg

    return np.clip(result, 0, 255).astype(np.uint8)

# Test on frame 0
f0 = cv2.imread("scratch/inspect_circle/f_000.jpg")
feathered = feather_frame(f0)

# Create a canvas larger than 1920x1080 (e.g. 2400x1400) filled with the exact bg color
canvas = np.zeros((1400, 2400, 3), dtype=np.uint8)
canvas[:] = [36, 34, 174] # BGR

# Place feathered image in center
y1 = 1400 - 1080
x1 = (2400 - 1920) // 2
canvas[y1:y1+1080, x1:x1+1920] = feathered

# Save a downscaled preview of the canvas
canvas_small = cv2.resize(canvas, (960, 560))
cv2.imwrite("scratch/canvas_seamless_test.jpg", canvas_small)
print("Saved canvas_seamless_test.jpg")
