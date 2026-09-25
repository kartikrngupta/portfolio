import cv2
import numpy as np
import os

video_path = "public/character1.mp4.mp4" if os.path.exists("public/character1.mp4.mp4") else "public/character1.mp4"
cap = cv2.VideoCapture(video_path)

colors = []
for i in range(240):
    ret, frame = cap.read()
    if not ret: break
    # Top 20 rows, left 20 cols, right 20 cols
    top_bar = frame[0:20, :]
    left_bar = frame[:, 0:20]
    right_bar = frame[:, -20:]
    colors.append([
        np.mean(top_bar, axis=(0,1)),
        np.mean(left_bar, axis=(0,1)),
        np.mean(right_bar, axis=(0,1))
    ])
cap.release()

colors = np.array(colors)
mean_all = np.mean(colors, axis=(0, 1)) # BGR
rgb_all = [int(round(mean_all[2])), int(round(mean_all[1])), int(round(mean_all[0]))]
hex_all = f"#{rgb_all[0]:02x}{rgb_all[1]:02x}{rgb_all[2]:02x}".upper()

print(f"New Video Exact Backdrop BGR: {mean_all}")
print(f"New Video Exact Backdrop RGB: {rgb_all} -> HEX: {hex_all}")
