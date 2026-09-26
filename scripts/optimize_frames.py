import cv2
import numpy as np
import glob
import os

files = glob.glob("public/frames/*.webp")
print(f"Found {len(files)} files to optimize in public/frames/")

for f in files:
    img = cv2.imread(f)
    if img is None:
        continue
    # Resize to 1280x720 using INTER_AREA (best for downsampling)
    resized = cv2.resize(img, (1280, 720), interpolation=cv2.INTER_AREA)
    cv2.imwrite(f, resized, [cv2.IMWRITE_WEBP_QUALITY, 88])

# Check size
total_size = sum(os.path.getsize(f) for f in files)
print(f"Optimization complete! Total size of all frames: {total_size / (1024 * 1024):.2f} MB")
