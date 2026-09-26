import cv2
import numpy as np
import os

video_path = "public/character.mp4" if os.path.exists("public/character.mp4") else "public/character.mp4.mp4"
cap = cv2.VideoCapture(video_path)
total = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

all_frames = []
for i in range(total):
    ret, f = cap.read()
    if not ret: break
    all_frames.append(f)
cap.release()

# Let's save a summary of key frames across the whole video
# 192 frames. Let's see every 4 frames (48 frames total)
os.makedirs("scratch/all_samples", exist_ok=True)
for i in range(0, total, 4):
    h, w = all_frames[i].shape[:2]
    # Crop head area: y from 0 to 700, x from 600 to 1320
    crop = all_frames[i][50:650, 700:1220]
    cv2.putText(crop, f"{i}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 255), 2)
    cv2.imwrite(f"scratch/all_samples/head_{i:03d}.jpg", crop)

print(f"Exported {len(range(0, total, 4))} head crops to scratch/all_samples")
