import cv2
import numpy as np

def apply_edge_feather(img, bg_bgr=[25, 26, 143], fade_w=220, fade_h=160):
    h, w = img.shape[:2]
    result = img.astype(np.float32).copy()
    bg = np.array(bg_bgr, dtype=np.float32)

    for x in range(fade_w):
        alpha = (x / float(fade_w)) ** 1.8
        result[:, x] = alpha * result[:, x] + (1 - alpha) * bg

    for i, x in enumerate(range(w - fade_w, w)):
        alpha = ((fade_w - 1 - i) / float(fade_w)) ** 1.8
        result[:, x] = (1 - alpha) * result[:, x] + alpha * bg

    for y in range(fade_h):
        alpha = (y / float(fade_h)) ** 1.8
        result[y, :] = alpha * result[y, :] + (1 - alpha) * bg

    return np.clip(result, 0, 255).astype(np.uint8)

cap = cv2.VideoCapture("public/character1.mp4.mp4")
ret, frame = cap.read()
cap.release()

feathered = apply_edge_feather(frame, bg_bgr=[25, 26, 143])

# Create larger canvas
canvas = np.full((1400, 2400, 3), [25, 26, 143], dtype=np.uint8)
y1 = 1400 - 1080
x1 = (2400 - 1920) // 2
canvas[y1:y1+1080, x1:x1+1920] = feathered

cv2.imwrite("scratch/test_new_feather.jpg", cv2.resize(canvas, (960, 560)))
print("Saved test_new_feather.jpg")
