import cv2
import numpy as np
import os

png_path = os.path.join("public", "character.png")
if not os.path.exists(png_path):
    png_path = os.path.join("public", "character.png.png")

if os.path.exists(png_path):
    png_img = cv2.imread(png_path)
    print(f"character.png shape: {png_img.shape}")
    # Compare with frame 0
    f0 = cv2.imread("scratch/inspect_circle/f_000.jpg")
    print(f"f0 shape: {f0.shape}")
    if f0.shape == png_img.shape:
        diff = np.mean(np.abs(f0.astype(float) - png_img.astype(float)))
        print(f"Mean pixel difference f0 vs character.png: {diff:.2f}")

# Let's inspect frames around 0..25 and 175..191
# Let's write a composite image of 0, 5, 10, 15, 20, 25 and 175, 180, 185, 190, 191
preview_idxs = [0, 5, 10, 15, 20, 25, 170, 175, 180, 185, 190, 191]
imgs = [cv2.imread(f"scratch/inspect_circle/f_{i:03d}.jpg") if os.path.exists(f"scratch/inspect_circle/f_{i:03d}.jpg") else None for i in preview_idxs]
imgs = [cv2.resize(cv2.imread(f"scratch/inspect_circle/f_{i:03d}.jpg"), (320, 180)) for i in preview_idxs if os.path.exists(f"scratch/inspect_circle/f_{i:03d}.jpg")]

grid = np.vstack([np.hstack(imgs[:len(imgs)//2]), np.hstack(imgs[len(imgs)//2:])])
cv2.imwrite("scratch/loop_transition.jpg", grid)
print("Saved loop_transition.jpg")
