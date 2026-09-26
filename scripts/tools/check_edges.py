import cv2
import numpy as np

f0 = cv2.imread("scratch/inspect_circle/f_000.jpg")
h, w = f0.shape[:2]

top_edge = np.mean(f0[0:5, :], axis=(0,1))
bottom_edge = np.mean(f0[-5:, :], axis=(0,1))
left_edge = np.mean(f0[:, 0:5], axis=(0,1))
right_edge = np.mean(f0[:, -5:], axis=(0,1))

def to_rgb(bgr):
    return [int(round(bgr[2])), int(round(bgr[1])), int(round(bgr[0]))]

def to_hex(rgb):
    return f"#{rgb[0]:02x}{rgb[1]:02x}{rgb[2]:02x}".upper()

print(f"Top: {to_rgb(top_edge)} -> {to_hex(to_rgb(top_edge))}")
print(f"Bottom: {to_rgb(bottom_edge)} -> {to_hex(to_rgb(bottom_edge))}")
print(f"Left: {to_rgb(left_edge)} -> {to_hex(to_rgb(left_edge))}")
print(f"Right: {to_rgb(right_edge)} -> {to_hex(to_rgb(right_edge))}")
