import numpy as np

TOTAL_FRAMES = 128
frames_per_octant = TOTAL_FRAMES // 8  # 16 frames per octant

anchors = [
    # (octant_index, video_frame)
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
# 16 frames: 8 frames from [187..206], and 8 frames from [24..32]
arc1 = [int(round(187 + (i / 8.0) * (206 - 187))) for i in range(8)]
arc2 = [int(round(24 + (i / 8.0) * (32 - 24))) for i in range(8)]
target_video_frames[112:120] = arc1
target_video_frames[120:128] = arc2

print(f"Target video frames count: {len(target_video_frames)}")
for octant in range(8):
    print(f"Octant {octant} (indices {octant*16}..{(octant+1)*16-1}): {target_video_frames[octant*16:(octant+1)*16]}")
