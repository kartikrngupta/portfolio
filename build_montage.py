import cv2
import numpy as np
import glob
import os

files = sorted(glob.glob("scratch/all_samples/head_*.jpg"))
imgs = [cv2.resize(cv2.imread(f), (130, 150)) for f in files]

rows = []
for r in range(6):
    row_imgs = imgs[r*8:(r+1)*8]
    rows.append(np.hstack(row_imgs))

montage = np.vstack(rows)
cv2.imwrite("scratch/rotation_montage.jpg", montage)
print("Saved scratch/rotation_montage.jpg")
