import os
import sys

def find_video_file():
    candidates = [
        os.path.join("public", "character.mp4"),
        os.path.join("public", "character.mp4.mp4"),
    ]
    for c in candidates:
        if os.path.exists(c):
            return c
    return None

def main():
    try:
        import cv2
        import numpy as np
    except ImportError as e:
        print(f"Error importing cv2/numpy: {e}")
        return

    video_path = find_video_file()
    if not video_path:
        print("Video file not found in public folder!")
        return

    print(f"Opening video: {video_path}")
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print(f"Failed to open {video_path}")
        return

    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    duration = total_frames / fps if fps > 0 else 0

    print(f"--- Video Info ---")
    print(f"Path: {video_path}")
    print(f"Total Frames: {total_frames}")
    print(f"FPS: {fps}")
    print(f"Resolution: {width}x{height}")
    print(f"Duration: {duration:.2f}s")

    # Sample corners to determine background color
    ret, first_frame = cap.read()
    if ret:
        # Sample corner pixels (e.g., top-left, top-right, bottom-left, bottom-right)
        corners = [
            first_frame[5:25, 5:25], # top-left
            first_frame[5:25, width-25:width-5], # top-right
            first_frame[height-25:height-5, 5:25], # bottom-left
            first_frame[height-25:height-5, width-25:width-5], # bottom-right
        ]
        corner_stack = np.concatenate(corners, axis=0)
        mean_bgr = np.mean(corner_stack, axis=(0, 1))
        # cv2 uses BGR, so convert to RGB
        mean_rgb = [int(round(mean_bgr[2])), int(round(mean_bgr[1])), int(round(mean_bgr[0]))]
        hex_color = f"#{mean_rgb[0]:02x}{mean_rgb[1]:02x}{mean_rgb[2]:02x}"
        print(f"Detected Background BGR: {mean_bgr}")
        print(f"Detected Background RGB: {mean_rgb}")
        print(f"Detected Background HEX: {hex_color.upper()}")

    cap.release()

if __name__ == "__main__":
    main()
