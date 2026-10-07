#!/usr/bin/env python3
import os
import random
from PIL import Image, ImageDraw, ImageFont

os.chdir(os.path.dirname(os.path.abspath(__file__)))

def generate_handwritten_signature(name_text, output_filename, font_path="/System/Library/Fonts/Supplemental/Brush Script.ttf", size=58, color=(20, 45, 110, 240)):
    width, height = 320, 120
    img = Image.new('RGBA', (width, height), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)

    font = ImageFont.truetype(font_path, size)
    bbox = draw.textbbox((0, 0), name_text, font=font)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]

    x = (width - w) / 2
    y = (height - h) / 2

    # Draw cursive name
    draw.text((x, y), name_text, font=font, fill=color)

    # Draw dynamic flourish / underline underline
    p1 = (x - 10, y + h + 5)
    p2 = (x + w / 2, y + h + 15)
    p3 = (x + w + 25, y + h - 5)
    draw.line([p1, p2, p3], fill=color, width=2)

    # Slight rotation
    rotated = img.rotate(-3, resample=Image.Resampling.BICUBIC, expand=True)
    rotated.save(output_filename, "PNG")
    print(f"Generated signature: {output_filename}")

def combine_signature_and_stamp(signature_path, stamp_path, output_filename):
    """
    Overlays signature and stamp naturally, where the signature crosses the stamp.
    """
    sig = Image.open(signature_path).convert("RGBA")
    stamp = Image.open(stamp_path).convert("RGBA")

    canvas_w = max(sig.width, stamp.width) + 80
    canvas_h = max(sig.height, stamp.height) + 40

    composite = Image.new('RGBA', (canvas_w, canvas_h), (255, 255, 255, 0))

    # Stamp on bottom right
    stamp_x = canvas_w - stamp.width - 10
    stamp_y = (canvas_h - stamp.height) // 2 + 10
    composite.paste(stamp, (stamp_x, stamp_y), stamp)

    # Signature slightly overlapping top left
    sig_x = 10
    sig_y = (canvas_h - sig.height) // 2 - 10
    composite.paste(sig, (sig_x, sig_y), sig)

    composite.save(output_filename, "PNG")
    print(f"Generated combined post-firma: {output_filename}")

if __name__ == "__main__":
    # Signatures for HR
    generate_handwritten_signature("M. Morales E.", "firma_mariana.png", "/System/Library/Fonts/Supplemental/Brush Script.ttf", 62, (18, 50, 130, 245))
    generate_handwritten_signature("C. Benavides V.", "firma_claudia.png", "/System/Library/Fonts/Supplemental/Zapfino.ttf", 36, (22, 48, 125, 245))

    # Combine Carlos signature with Carlos stamp (Fuxion TI)
    combine_signature_and_stamp("firma_pedro.png", "sello_fuxion_ti.png", "postfirma_fuxion_ti.png")

    # Combine Mariana signature with Mariana stamp (Fuxion RRHH)
    combine_signature_and_stamp("firma_mariana.png", "sello_fuxion_rrhh.png", "postfirma_fuxion_rrhh.png")

    # Combine Pedro signature with Pedro stamp (Sifrah TI)
    combine_signature_and_stamp("firma_carlos.png", "sello_sifrah_ti.png", "postfirma_sifrah_ti.png")

    # Combine Claudia signature with Claudia stamp (Sifrah RRHH)
    combine_signature_and_stamp("firma_claudia.png", "sello_sifrah_rrhh.png", "postfirma_sifrah_rrhh.png")
