import cv2
import numpy as np

imgs1 = [cv2.resize(cv2.imread(f"scratch/fine_inspect/f_{i:03d}.jpg"), (120, 140)) for i in range(160, 185, 2)] # 13 imgs
imgs2 = [cv2.resize(cv2.imread(f"scratch/fine_inspect/f_{i:03d}.jpg"), (120, 140)) for i in range(15, 35, 2)] # 10 imgs
# Make equal width
imgs2.extend([np.zeros((140, 120, 3), dtype=np.uint8)] * (len(imgs1) - len(imgs2)))

row1 = np.hstack(imgs1)
row2 = np.hstack(imgs2)
grid = np.vstack([row1, row2])
cv2.imwrite("scratch/loop_join.jpg", grid)
print("Saved loop_join.jpg")
