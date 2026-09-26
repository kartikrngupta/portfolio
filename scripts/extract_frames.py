import cv2
import numpy as np
import os
import sys

def find_video_path():
    candidates = [
        os.path.join("public", "character.mp4"),
        os.path.join("public", "character.mp4.mp4"),
    ]
    for c in candidates:
        if os.path.exists(c):
            return c
    return None

def apply_edge_feather(img, bg_bgr=[37, 36, 176], fade_w=220, fade_h=160):
    """
    Feathers the outer border (top, left, right) seamlessly into the backdrop color.
    Kartik's head/torso are located centrally and downwards, so they remain unaffected.
    """
    h, w = img.shape[:2]
    result = img.astype(np.float32).copy()
    bg = np.array(bg_bgr, dtype=np.float32)

    # 1D alpha profiles
    # Left
    for x in range(fade_w):
        alpha = (x / float(fade_w)) ** 1.8
        result[:, x] = alpha * result[:, x] + (1 - alpha) * bg

    # Right
    for i, x in enumerate(range(w - fade_w, w)):
        alpha = ((fade_w - 1 - i) / float(fade_w)) ** 1.8
        result[:, x] = (1 - alpha) * result[:, x] + alpha * bg

    # Top
    for y in range(fade_h):
        alpha = (y / float(fade_h)) ** 1.8
        result[y, :] = alpha * result[y, :] + (1 - alpha) * bg

    return np.clip(result, 0, 255).astype(np.uint8)

def main():
    video_path = find_video_path()
    if not video_path:
        print("ERROR: character.mp4 not found in public folder!")
        sys.exit(1)

    print(f"Loading video: {video_path}")
    cap = cv2.VideoCapture(video_path)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    w = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    h = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    duration = total_frames / fps if fps > 0 else 0

    print("=" * 50)
    print("CHARACTER ANIMATION VIDEO INSPECTION")
    print("=" * 50)
    print(f"File:       {video_path}")
    print(f"Frames:     {total_frames}")
    print(f"FPS:        {fps:.1f}")
    print(f"Dimensions: {w}x{h}")
    print(f"Duration:   {duration:.2f} seconds")

    frames = []
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        frames.append(frame)
    cap.release()

    if len(frames) == 0:
        print("ERROR: Could not read frames from video.")
        sys.exit(1)

    # Detect exact background color from outer border across all frames
    colors = []
    for f in frames[::5]:
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

    print(f"Exact Background BGR: {mean_bgr}")
    print(f"Exact Background RGB: {mean_rgb}")
    print(f"Exact Background HEX: {hex_color}")
    print("=" * 50)

    # Output directory
    out_dir = os.path.join("public", "frames")
    os.makedirs(out_dir, exist_ok=True)

    # 1. Save center.webp from frame 0 (looking directly at user)
    center_frame = frames[0]
    center_feathered = apply_edge_feather(center_frame, bg_bgr=mean_bgr)
    center_path = os.path.join(out_dir, "center.webp")
    cv2.imwrite(center_path, center_feathered, [cv2.IMWRITE_WEBP_QUALITY, 92])
    print(f"Saved: {center_path} ({os.path.getsize(center_path) / 1024:.1f} KB)")

    # 2. Map 64 directional frames along the 360-degree rotation
    # Direction anchors:
    # 0 (UP): 26
    # 8 (UPPER-RIGHT): 48
    # 16 (RIGHT): 70
    # 24 (LOWER-RIGHT): 92
    # 32 (DOWN): 114
    # 40 (LOWER-LEFT): 136
    # 48 (LEFT): 154
    # 56 (UPPER-LEFT): 166
    # 64 wraps back to 0 (UP, 26)

    anchors = [
        (0, 26),
        (8, 48),
        (16, 70),
        (24, 92),
        (32, 114),
        (40, 136),
        (48, 154),
        (56, 166),
    ]

    target_video_frames = [0] * 64

    # Interpolate segments 0 to 6
    for seg in range(7):
        start_idx, start_v = anchors[seg]
        end_idx, end_v = anchors[seg + 1]
        count = end_idx - start_idx
        for i in range(count):
            t = i / float(count)
            vf = int(round(start_v + t * (end_v - start_v)))
            target_video_frames[start_idx + i] = vf

    # Segment 7: from 56 (UPPER-LEFT: 166) to 64 (UP: 26)
    # Uses smooth path through upper-arc frames: 166, 168, 170, 172, 18, 20, 22, 24
    seg7_frames = [166, 168, 170, 172, 18, 20, 22, 24]
    for i, vf in enumerate(seg7_frames):
        target_video_frames[56 + i] = vf

    print(f"\nExtracting 64 directional frames into {out_dir}/...")
    preview_thumbnails = []

    for idx, vf in enumerate(target_video_frames):
        vf_clamped = min(max(0, vf), len(frames) - 1)
        raw_frame = frames[vf_clamped]
        feathered = apply_edge_feather(raw_frame, bg_bgr=mean_bgr)

        # Save primary frame: frame_{idx}.webp
        path = os.path.join(out_dir, f"frame_{idx}.webp")
        cv2.imwrite(path, feathered, [cv2.IMWRITE_WEBP_QUALITY, 90])

        # Also create zero-padded alias frame_{idx:02d}.webp
        alias_path = os.path.join(out_dir, f"frame_{idx:02d}.webp")
        if alias_path != path:
            cv2.imwrite(alias_path, feathered, [cv2.IMWRITE_WEBP_QUALITY, 90])

        # Collect thumbnail for preview
        thumb = cv2.resize(feathered, (120, 68))
        cv2.putText(thumb, f"{idx}", (5, 20), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255, 255, 255), 2)
        preview_thumbnails.append(thumb)

    # Save 8x8 contact sheet of all 64 frames
    rows = []
    for r in range(8):
        row = np.hstack(preview_thumbnails[r*8:(r+1)*8])
        rows.append(row)
    grid = np.vstack(rows)
    cv2.imwrite("scratch/all_64_frames_grid.jpg", grid)

    print("Successfully extracted all 64 directional frames + center.webp!")
    print("Saved preview collage to scratch/all_64_frames_grid.jpg")
    print(f"Background color to use in CSS: {hex_color}")

if __name__ == "__main__":
    main()
