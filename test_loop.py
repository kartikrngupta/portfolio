import cv2
import numpy as np

# Let's see what happens if we sample the path:
# 166 -> 168 -> 170 -> 172 -> 20 -> 22 -> 24 -> 26
# Let's save a strip of these frames
sample_seq = [164, 166, 168, 170, 172, 19, 21, 23, 25, 27]
crops = []
for i in sample_seq:
    img = cv2.imread(f"scratch/fine_inspect/f_{i:03d}.jpg")
    if img is not None:
        crops.append(cv2.resize(img, (140, 160)))

strip = np.hstack(crops)
cv2.imwrite("scratch/test_loop_strip.jpg", strip)
print("Saved test_loop_strip.jpg")
