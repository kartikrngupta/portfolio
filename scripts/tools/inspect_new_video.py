import cv2
import numpy as np
import os

video_candidates = [
    os.path.join("public", "character1.mp4"),
    os.path.join("public", "character1.mp4.mp4"),
    os.path.join("public", "character.mp4"),
    os.path.join("public", "character.mp4.mp4"),
]

video_path = None
for c in video_candidates:
    if os.path.exists(c):
        video_path = c
        break

print(f"Target video found: {video_path}")
cap = cv2.VideoCapture(video_path)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
fps = cap.get(cv2.CAP_PROP_FPS)
w = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
h = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
duration = total_frames / fps if fps > 0 else 0

print(f"Total Frames: {total_frames}")
print(f"FPS: {fps}")
print(f"Resolution: {w}x{h}")
print(f"Duration: {duration:.2f}s")

# Read all frames to inspect
all_frames = []
for i in range(total_frames):
    ret, frame = cap.read()
    if not ret:
        break
    all_frames.append(frame)
cap.release()

print(f"Successfully read {len(all_frames)} frames.")

# Inspect background color across edges
colors = []
for f in all_frames[::5]:
    top_bar = f[0:15, :]
    left_bar = f[:, 0:15]
    right_bar = f[:, -15:]
    colors.append([
        np.mean(top_bar, axis=(0,1)),
        np.mean(left_bar, axis=(0,1)),
        np.mean(right_bar, axis=(0,1))
    ])
mean_bgr = np.mean(np.array(colors), axis=(0, 1))
mean_rgb = [int(round(mean_bgr[2])), int(round(mean_bgr[1])), int(round(mean_bgr[0]))]
hex_color = f"#{mean_rgb[0]:02x}{mean_rgb[1]:02x}{mean_rgb[2]:02x}".upper()

print(f"Detected Background RGB: {mean_rgb}")
print(f"Detected Background HEX: {hex_color}")

# Let's save a contact sheet of 24 samples across the entire video
os.makedirs("scratch", exist_ok=True)
sample_indices = [int(i * (len(all_frames) - 1) / 23) for i in range(24)]
thumbs = []
for idx in sample_indices:
    f = all_frames[idx]
    small = cv2.resize(f, (320, 180))
    cv2.putText(small, f"F:{idx}", (15, 35), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (255, 255, 255), 2)
    thumbs.append(small)

row1 = np.hstack(thumbs[0:6])
row2 = np.hstack(thumbs[6:12])
row3 = np.hstack(thumbs[12:18])
row4 = np.hstack(thumbs[18:24])
grid = np.vstack([row1, row2, row3, row4])

cv2.imwrite("scratch/new_video_timeline.jpg", grid)
print("Saved scratch/new_video_timeline.jpg")
