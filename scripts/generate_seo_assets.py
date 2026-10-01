import os
from PIL import Image, ImageDraw, ImageFont

def generate_assets():
    base_dir = r'd:\ZappioTech\pulsecraft'
    public_dir = os.path.join(base_dir, 'public')
    app_dir = os.path.join(base_dir, 'app')
    os.makedirs(public_dir, exist_ok=True)
    os.makedirs(app_dir, exist_ok=True)

    # 1. Load source symbol
    src_symbol = Image.open(os.path.join(public_dir, 'images', 'logo', 'pulsecraft-symbol.png')).convert('RGBA')
    bbox = src_symbol.getbbox()
    cropped = src_symbol.crop(bbox)

    # 2. Master square icon (512x512)
    # Using #0B0B0D background with subtle rounded square and crisp red pulse
    master_size = 512
    master = Image.new('RGBA', (master_size, master_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(master)
    
    # Sleek rounded background
    radius = 110
    bg_color = (11, 11, 13, 255) # #0B0B0D
    border_color = (42, 42, 50, 255) # #2A2A32
    draw.rounded_rectangle([4, 4, master_size - 5, master_size - 5], radius=radius, fill=bg_color, outline=border_color, width=4)

    # Center symbol
    target_w = 404
    target_h = int(cropped.height * (target_w / cropped.width))
    scaled_sym = cropped.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    ox = (master_size - target_w) // 2
    oy = (master_size - target_h) // 2
    master.paste(scaled_sym, (ox, oy), scaled_sym)

    # Save PNG variations
    sizes = {
        'favicon-512x512.png': 512,
        'favicon-192x192.png': 192,
        'favicon-96x96.png': 96,
        'favicon-48x48.png': 48, # Google Favicon Standard!
        'favicon-32x32.png': 32,
        'favicon-16x16.png': 16,
    }

    for name, s in sizes.items():
        res = master.resize((s, s), Image.Resampling.LANCZOS)
        res.save(os.path.join(public_dir, name))
        print(f'Created public/{name} ({s}x{s})')

    # Apple Touch Icon (180x180 - square without transparent corners for iOS)
    apple_icon = Image.new('RGBA', (180, 180), bg_color)
    apple_target_w = 142
    apple_target_h = int(cropped.height * (apple_target_w / cropped.width))
    apple_scaled = cropped.resize((apple_target_w, apple_target_h), Image.Resampling.LANCZOS)
    apple_ox = (180 - apple_target_w) // 2
    apple_oy = (180 - apple_target_h) // 2
    apple_icon.paste(apple_scaled, (apple_ox, apple_oy), apple_scaled)
    apple_icon.save(os.path.join(public_dir, 'apple-touch-icon.png'))
    apple_icon.save(os.path.join(app_dir, 'apple-icon.png'))
    print('Created apple-touch-icon.png')

    # Next.js App Router root icons
    master.save(os.path.join(app_dir, 'icon.png'))
    print('Created app/icon.png')

    # Generate multi-resolution .ico (16, 32, 48, 64, 128, 256)
    ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
    ico_imgs = [master.resize(s, Image.Resampling.LANCZOS) for s in ico_sizes]
    
    # Save favicon.ico to public and app
    ico_imgs[0].save(
        os.path.join(public_dir, 'favicon.ico'),
        format='ICO',
        sizes=ico_sizes,
        append_images=ico_imgs[1:]
    )
    ico_imgs[0].save(
        os.path.join(app_dir, 'favicon.ico'),
        format='ICO',
        sizes=ico_sizes,
        append_images=ico_imgs[1:]
    )
    print('Created public/favicon.ico and app/favicon.ico with multi-resolution formats!')

    # 3. Generate OG Image (1200x630)
    og_w, og_h = 1200, 630
    og = Image.new('RGB', (og_w, og_h), (11, 11, 13)) # #0B0B0D
    og_draw = ImageDraw.Draw(og)

    # Subtle ambient gradient radial glow behind logo
    glow_color = (255, 38, 44, 25) # soft red glow
    for r in range(350, 50, -25):
        alpha_val = int(25 * (1 - r / 350))
        og_draw.ellipse([600 - r, 220 - int(r*0.6), 600 + r, 220 + int(r*0.6)], fill=(255, 10, 20))
    
    # Overlay dark blur box
    dark_overlay = Image.new('RGB', (og_w, og_h), (11, 11, 13))
    og = Image.blend(dark_overlay, og, 0.12)
    og_draw = ImageDraw.Draw(og)

    # Border frame
    og_draw.rectangle([20, 20, og_w - 21, og_h - 21], outline=(38, 38, 46), width=2)
    og_draw.rectangle([24, 24, og_w - 25, og_h - 25], outline=(22, 22, 28), width=1)

    # Place symbol in OG image
    sym_w = 260
    sym_h = int(cropped.height * (sym_w / cropped.width))
    og_sym = cropped.resize((sym_w, sym_h), Image.Resampling.LANCZOS)
    sym_x = (og_w - sym_w) // 2
    sym_y = 100
    og.paste(og_sym, (sym_x, sym_y), og_sym)

    # Fonts
    font_bold_path = r'C:\Windows\Fonts\segoeuib.ttf'
    font_regular_path = r'C:\Windows\Fonts\segoeui.ttf'
    
    title_font = ImageFont.truetype(font_bold_path, 46)
    sub_font = ImageFont.truetype(font_regular_path, 26)
    badge_font = ImageFont.truetype(font_bold_path, 16)
    loc_font = ImageFont.truetype(font_regular_path, 20)

    # Headline
    text_company = "PULSECRAFT TECHNOLOGIES INC."
    tw_comp = og_draw.textlength(text_company, font=title_font)
    og_draw.text(((og_w - tw_comp) // 2, 275), text_company, fill=(255, 255, 255), font=title_font)

    # Tagline
    text_tagline = "Intelligent Technology. Crafted for What’s Next."
    tw_tag = og_draw.textlength(text_tagline, font=sub_font)
    og_draw.text(((og_w - tw_tag) // 2, 345), text_tagline, fill=(200, 200, 210), font=sub_font)

    # Services line
    text_serv = "AI Architectures  •  Cloud Platforms  •  Mobile Engineering  •  Enterprise Web"
    tw_serv = og_draw.textlength(text_serv, font=badge_font)
    
    # Pill box behind services line
    pill_w = tw_serv + 48
    pill_h = 38
    pill_x = (og_w - pill_w) // 2
    pill_y = 415
    og_draw.rounded_rectangle([pill_x, pill_y, pill_x + pill_w, pill_y + pill_h], radius=19, fill=(20, 20, 26), outline=(45, 45, 55), width=1)
    og_draw.text(((og_w - tw_serv) // 2, pill_y + 9), text_serv, fill=(255, 75, 80), font=badge_font)

    # Location footer
    text_loc = "🇨🇦 Oshawa, Ontario, Canada  |  pulsecrafttechnologies.com"
    tw_loc = og_draw.textlength(text_loc, font=loc_font)
    og_draw.text(((og_w - tw_loc) // 2, 530), text_loc, fill=(130, 130, 145), font=loc_font)

    og.save(os.path.join(public_dir, 'og-image.jpg'), quality=95)
    og.save(os.path.join(public_dir, 'og-image.png'))
    print('Created public/og-image.jpg and public/og-image.png (1200x630)')

    # 4. Create site.webmanifest
    manifest_content = '''{
  "name": "PulseCraft Technologies Inc.",
  "short_name": "PulseCraft",
  "icons": [
    {
      "src": "/favicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/favicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "theme_color": "#0B0B0D",
  "background_color": "#0B0B0D",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait"
}'''
    with open(os.path.join(public_dir, 'site.webmanifest'), 'w', encoding='utf-8') as f:
        f.write(manifest_content)
    print('Created public/site.webmanifest')

if __name__ == '__main__':
    generate_assets()
