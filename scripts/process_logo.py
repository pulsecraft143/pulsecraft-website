import os
from PIL import Image, ImageFilter
import numpy as np

src_path = r'C:\Users\adnan\.gemini\antigravity-ide\brain\209bd9b0-1189-4e8e-87dc-bb216f77219f\.user_uploaded\media_1790679438984.png'
out_dir = r'd:\ZappioTech\pulsecraft\public\images\logo'
os.makedirs(out_dir, exist_ok=True)

im = Image.open(src_path).convert('RGB')
arr = np.array(im, dtype=np.float32)

# Extract clean alpha from white background
# Background is (255, 255, 255)
bg = 255.0
bg_factor = np.minimum(arr[:, :, 1], arr[:, :, 2]) / bg
alpha = np.clip(1.0 - bg_factor, 0.0, 1.0)
alpha = np.where(alpha < 0.04, 0.0, alpha)

# Recover foreground RGB
fg = np.zeros_like(arr)
mask = alpha > 0.01
for c in range(3):
    fg[:, :, c] = np.where(mask, np.clip((arr[:, :, c] - (1.0 - alpha) * bg) / np.maximum(alpha, 1e-4), 0, 255), 0)

rgba = np.zeros((arr.shape[0], arr.shape[1], 4), dtype=np.uint8)
rgba[:, :, :3] = fg.astype(np.uint8)
rgba[:, :, 3] = (alpha * 255).astype(np.uint8)

clean_im = Image.fromarray(rgba, 'RGBA')
bbox = clean_im.getbbox()
cropped = clean_im.crop(bbox)

# Add comfortable padding around the symbol
pad = 8
padded = Image.new('RGBA', (cropped.width + pad*2, cropped.height + pad*2), (0, 0, 0, 0))
padded.paste(cropped, (pad, pad))

# Save 1x
padded.save(os.path.join(out_dir, 'pulsecraft-symbol-1x.png'))

# High quality upscale (4x) using Lanczos
upscaled = padded.resize((padded.width * 4, padded.height * 4), Image.Resampling.LANCZOS)
upscaled.save(os.path.join(out_dir, 'pulsecraft-symbol.png'))
upscaled.save(os.path.join(out_dir, 'pulsecraft-symbol@2x.png'))

print(f'Successfully generated pulsecraft-symbol.png: {upscaled.size}')
