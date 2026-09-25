import cv2
import numpy as np

f0 = cv2.imread("scratch/new_heads/head_000.jpg")
f5 = cv2.imread("scratch/new_heads/head_005.jpg")
f225 = cv2.imread("scratch/new_heads/head_225.jpg")
f230 = cv2.imread("scratch/new_heads/head_230.jpg")
f235 = cv2.imread("scratch/new_heads/head_235.jpg")

strip = np.hstack([f0, f5, f225, f230, f235])
cv2.imwrite("scratch/center_candidates.jpg", strip)
print("Saved center_candidates.jpg")
