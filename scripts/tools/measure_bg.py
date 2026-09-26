import cv2
import numpy as np
import glob
import os

video_path = "public/character.mp4" if os.path.exists("public/character.mp4") else "public/character.mp4.mp4"
cap = cv2.VideoCapture(video_path)

colors = []
for i in range(192):
    ret, frame = cap.read()
    if not ret: break
    # check edges: top row, bottom row, left col, right col
    edges = np.concatenate([
        frame[0:5, :].reshape(-1, 3),
        frame[-5:, :].reshape(-1, 3),
        frame[:, 0:5].reshape(-1, 3),
        frame[:, -5:].reshape(-1, 3)
    ], axis=0)
    colors.append(np.mean(edges, axis=0))
cap.release()

mean_bgr = np.mean(colors, axis=0)
mean_rgb = [int(round(mean_bgr[2])), int(round(mean_bgr[1])), int(round(mean_bgr[0]))]
hex_color = f"#{mean_rgb[0]:02x}{mean_rgb[1]:02x}{mean_rgb[2]:02x}"
print(f"Grand Average Background RGB: {mean_rgb} => HEX: {hex_color.upper()}")
