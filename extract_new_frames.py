import cv2
import numpy as np
import os
import sys

def find_video_path():
    candidates = [
        os.path.join("public", "character1.mp4.mp4"),
        os.path.join("public", "character1.mp4"),
        os.path.join("public", "character.mp4.mp4"),
        os.path.join("public", "character.mp4"),
    ]
    for c in candidates:
        if os.path.exists(c):
            return c
    return None

def apply_edge_feather(img, bg_bgr=[25, 26, 143], fade_w=220, fade_h=160):
    """
    Feathers the outer border (top, left, right) seamlessly into the new backdrop color.
    Kartik's head/torso are located centrally and downwards, so they remain pristine.
    """
    h, w = img.shape[:2]
    result = img.astype(np.float32).copy()
    bg = np.array(bg_bgr, dtype=np.float32)

    # 1D alpha profiles
    for x in range(fade_w):
        alpha = (x / float(fade_w)) ** 1.8
        result[:, x] = alpha * result[:, x] + (1 - alpha) * bg

    for i, x in enumerate(range(w - fade_w, w)):
        alpha = ((fade_w - 1 - i) / float(fade_w)) ** 1.8
        result[:, x] = (1 - alpha) * result[:, x] + alpha * bg

    for y in range(fade_h):
        alpha = (y / float(fade_h)) ** 1.8
        result[y, :] = alpha * result[y, :] + (1 - alpha) * bg

    return np.clip(result, 0, 255).astype(np.uint8)

def main():
    video_path = find_video_path()
    if not video_path:
        print("ERROR: character1.mp4 not found!")
        sys.exit(1)

    print(f"Loading video: {video_path}")
    cap = cv2.VideoCapture(video_path)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    w = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    h = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    duration = total_frames / fps if fps > 0 else 0

    print("=" * 60)
    print("CHARACTER1.MP4 VIDEO EXTRACTION (128 EXTRA FRAMES)")
    print("=" * 60)
    print(f"Source Video: {video_path}")
    print(f"Total Frames: {total_frames}")
    print(f"FPS:          {fps:.2f}")
    print(f"Resolution:   {w}x{h}")
    print(f"Duration:     {duration:.2f}s")

    frames = []
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        frames.append(frame)
    cap.release()

    if len(frames) == 0:
        print("ERROR: Failed to read video frames.")
        sys.exit(1)

    # Calculate exact background color
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

    print(f"Detected Background BGR: {mean_bgr}")
    print(f"Detected Background RGB: {mean_rgb}")
    print(f"Detected Background HEX: {hex_color}")
    print("=" * 60)

    out_dir = os.path.join("public", "frames")
    os.makedirs(out_dir, exist_ok=True)

    # 1. Save center.webp from frame 230 (or frame 0)
    center_frame_idx = 230 if len(frames) > 230 else 0
    center_raw = frames[center_frame_idx]
    center_feathered = apply_edge_feather(center_raw, bg_bgr=mean_bgr)
    center_resized = cv2.resize(center_feathered, (1280, 720), interpolation=cv2.INTER_AREA)

    center_path = os.path.join(out_dir, "center.webp")
    cv2.imwrite(center_path, center_resized, [cv2.IMWRITE_WEBP_QUALITY, 88])
    print(f"Saved center frame: {center_path} ({os.path.getsize(center_path) / 1024:.1f} KB)")

    # 2. Map 128 directional frames along complete 360-degree rotation
    TOTAL_FRAMES = 128
    anchors = [
        (0, 32),    # UP
        (16, 55),   # UPPER-RIGHT
        (32, 76),   # RIGHT
        (48, 98),   # LOWER-RIGHT
        (64, 122),  # DOWN
        (80, 146),  # LOWER-LEFT
        (96, 167),  # LEFT
        (112, 187), # UPPER-LEFT
    ]

    target_video_frames = [0] * TOTAL_FRAMES

    # Interpolate octants 0 to 6
    for seg in range(7):
        start_idx, start_v = anchors[seg]
        end_idx, end_v = anchors[seg + 1]
        count = end_idx - start_idx
        for i in range(count):
            t = i / float(count)
            vf = int(round(start_v + t * (end_v - start_v)))
            target_video_frames[start_idx + i] = vf

    # Octant 7: 112 to 128 (UPPER-LEFT: 187 to UP: 32)
    # Complete the full circle without cuts
    arc1 = [int(round(187 + (i / 8.0) * (206 - 187))) for i in range(8)]
    arc2 = [int(round(24 + (i / 8.0) * (32 - 24))) for i in range(8)]
    target_video_frames[112:120] = arc1
    target_video_frames[120:128] = arc2

    print(f"\nExtracting {TOTAL_FRAMES} directional frames into {out_dir}/...")
    preview_thumbnails = []

    for idx, vf in enumerate(target_video_frames):
        vf_clamped = min(max(0, vf), len(frames) - 1)
        raw_frame = frames[vf_clamped]
        feathered = apply_edge_feather(raw_frame, bg_bgr=mean_bgr)
        resized = cv2.resize(feathered, (1280, 720), interpolation=cv2.INTER_AREA)

        path = os.path.join(out_dir, f"frame_{idx}.webp")
        cv2.imwrite(path, resized, [cv2.IMWRITE_WEBP_QUALITY, 88])

        # Also write 0-padded alias for compatibility
        alias_path = os.path.join(out_dir, f"frame_{idx:03d}.webp")
        cv2.imwrite(alias_path, resized, [cv2.IMWRITE_WEBP_QUALITY, 88])

        # Thumbnail for contact sheet preview (every 2nd frame = 64 thumbnails)
        if idx % 2 == 0:
            thumb = cv2.resize(resized, (120, 68))
            cv2.putText(thumb, f"{idx}", (4, 18), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 1)
            preview_thumbnails.append(thumb)

    # Save contact sheet of extracted frames
    rows = []
    for r in range(8):
        row = np.hstack(preview_thumbnails[r*8:(r+1)*8])
        rows.append(row)
    grid = np.vstack(rows)
    cv2.imwrite("scratch/new_128_frames_grid.jpg", grid)

    print("=" * 60)
    print(f"Extraction complete! Successfully generated {TOTAL_FRAMES} frames + center.webp")
    print(f"Saved preview contact sheet to scratch/new_128_frames_grid.jpg")
    print(f"Exact Background HEX: {hex_color}")
    print("=" * 60)

if __name__ == "__main__":
    main()
