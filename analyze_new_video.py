import cv2
import numpy as np
import os

video_path = os.path.join("public", "character1.mp4.mp4")
if not os.path.exists(video_path):
    video_path = os.path.join("public", "character1.mp4")

cap = cv2.VideoCapture(video_path)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

all_frames = []
for i in range(total_frames):
    ret, frame = cap.read()
    if not ret: break
    all_frames.append(frame)
cap.release()

os.makedirs("scratch/new_heads", exist_ok=True)
# Save head crops for every 5 frames across the 240 frames
for i in range(0, total_frames, 5):
    crop = all_frames[i][50:650, 700:1220]
    cv2.putText(crop, f"{i}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 255), 2)
    cv2.imwrite(f"scratch/new_heads/head_{i:03d}.jpg", crop)

# Build a montage of 6x8 (48 images)
import glob
files = sorted(glob.glob("scratch/new_heads/head_*.jpg"))
imgs = [cv2.resize(cv2.imread(f), (130, 150)) for f in files]
rows = []
for r in range(6):
    row_imgs = imgs[r*8:(r+1)*8]
    rows.append(np.hstack(row_imgs))

montage = np.vstack(rows)
cv2.imwrite("scratch/new_rotation_montage.jpg", montage)
print(f"Saved scratch/new_rotation_montage.jpg with {len(files)} frames.")
