import cv2
import numpy as np
import os

video_path = os.path.join("public", "character.mp4")
if not os.path.exists(video_path):
    video_path = os.path.join("public", "character.mp4.mp4")

cap = cv2.VideoCapture(video_path)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

# Let's save 32 frames around the circle so we can see the exact frame indices
os.makedirs("scratch/inspect_circle", exist_ok=True)

# Let's see frame 0, frame 5, frame 10, ...
all_frames = []
for idx in range(total_frames):
    ret, frame = cap.read()
    if not ret:
        break
    all_frames.append(frame)

cap.release()

print(f"Read {len(all_frames)} frames.")

# Let's save a strip of frames from 0 to 30 to see where center ends and UP starts
for i in [0, 5, 10, 15, 20, 25, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 175, 185, 191]:
    cv2.imwrite(f"scratch/inspect_circle/f_{i:03d}.jpg", all_frames[i])

print("Saved inspection frames to scratch/inspect_circle")
