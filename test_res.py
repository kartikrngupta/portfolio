import cv2
import os

img = cv2.imread("public/frames/frame_0.webp")
h, w = img.shape[:2]
print(f"Original: {w}x{h}, size: {os.path.getsize('public/frames/frame_0.webp')} bytes")

# 720p: 1280x720
img_720 = cv2.resize(img, (1280, 720), interpolation=cv2.INTER_AREA)
cv2.imwrite("scratch/test_720.webp", img_720, [cv2.IMWRITE_WEBP_QUALITY, 85])
print(f"720p (1280x720): size: {os.path.getsize('scratch/test_720.webp')} bytes")

# 540p: 960x540
img_540 = cv2.resize(img, (960, 540), interpolation=cv2.INTER_AREA)
cv2.imwrite("scratch/test_540.webp", img_540, [cv2.IMWRITE_WEBP_QUALITY, 85])
print(f"540p (960x540): size: {os.path.getsize('scratch/test_540.webp')} bytes")
