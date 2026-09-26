import cv2
import numpy as np
import os

video_path = os.path.join("public", "character.mp4")
if not os.path.exists(video_path):
    video_path = os.path.join("public", "character.mp4.mp4")

cap = cv2.VideoCapture(video_path)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
print(f"Total frames: {total_frames}")

# Let's save a grid of 16 sample frames to inspect timeline
os.makedirs("scratch", exist_ok=True)
indices = [int(i * (total_frames - 1) / 15) for i in range(16)]

frames = []
for idx in range(total_frames):
    ret, frame = cap.read()
    if not ret:
        break
    if idx in indices:
        # Resize for preview
        h, w = frame.shape[:2]
        small = cv2.resize(frame, (w // 4, h // 4))
        # Add frame number text
        cv2.putText(small, f"F:{idx}", (20, 40), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)
        frames.append(small)

cap.release()

# Arrange in 4x4 grid
row1 = np.hstack(frames[0:4])
row2 = np.hstack(frames[4:8])
row3 = np.hstack(frames[8:12])
row4 = np.hstack(frames[12:16])
grid = np.vstack([row1, row2, row3, row4])

cv2.imwrite("scratch/timeline_preview.jpg", grid)
print("Saved scratch/timeline_preview.jpg")
