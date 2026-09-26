import cv2
import numpy as np

# Let's save frames 160 to 185 and 15 to 35 as individual images to examine
import os
os.makedirs("scratch/fine_inspect", exist_ok=True)
all_frames = []
video_path = "public/character.mp4" if os.path.exists("public/character.mp4") else "public/character.mp4.mp4"
cap = cv2.VideoCapture(video_path)
while True:
    ret, f = cap.read()
    if not ret: break
    all_frames.append(f)
cap.release()

for i in range(160, 185):
    crop = all_frames[i][50:650, 700:1220]
    cv2.putText(crop, f"{i}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 255), 2)
    cv2.imwrite(f"scratch/fine_inspect/f_{i:03d}.jpg", crop)

for i in range(15, 35):
    crop = all_frames[i][50:650, 700:1220]
    cv2.putText(crop, f"{i}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 255), 2)
    cv2.imwrite(f"scratch/fine_inspect/f_{i:03d}.jpg", crop)

print("Saved fine inspection frames.")
