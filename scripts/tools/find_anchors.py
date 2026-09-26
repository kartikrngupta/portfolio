import cv2
import numpy as np
import os

video_path = "public/character1.mp4.mp4" if os.path.exists("public/character1.mp4.mp4") else "public/character1.mp4"
cap = cv2.VideoCapture(video_path)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

all_frames = []
for i in range(total_frames):
    ret, f = cap.read()
    if not ret: break
    all_frames.append(f)
cap.release()

# Let's inspect frame ranges:
# UP: 30 to 40
# RIGHT: 65 to 80
# DOWN: 115 to 130
# LEFT: 160 to 175
# UPPER-LEFT: 185 to 205
# UP-TRANSITION: 200 to 215
# CENTER: 220 to 239 and 0 to 15

os.makedirs("scratch/anchors_check", exist_ok=True)
def save_strip(start, end, step, name):
    strip = []
    for i in range(start, end, step):
        crop = all_frames[i][50:650, 700:1220].copy()
        cv2.putText(crop, f"{i}", (10, 35), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (255, 255, 255), 2)
        strip.append(cv2.resize(crop, (120, 140)))
    if strip:
        cv2.imwrite(f"scratch/anchors_check/{name}.jpg", np.hstack(strip))

save_strip(25, 45, 2, "range_up")
save_strip(65, 85, 2, "range_right")
save_strip(110, 130, 2, "range_down")
save_strip(155, 175, 2, "range_left")
save_strip(185, 215, 2, "range_upper_left_to_up")
save_strip(215, 240, 2, "range_center_end")
save_strip(0, 25, 2, "range_center_start")

print("Saved anchor ranges to scratch/anchors_check/")
