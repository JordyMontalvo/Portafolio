#!/usr/bin/env python3
import os
import math
from PIL import Image, ImageDraw, ImageFont

os.chdir(os.path.dirname(os.path.abspath(__file__)))

def create_corporate_stamp(company, ruc, name, title, output_filename, color=(14, 65, 148, 220), rot_deg=-2.5):
    """
    Creates a photorealistic Peruvian corporate post-signature rubber stamp (sello postfirma).
    """
    width, height = 340, 130
    img = Image.new('RGBA', (width, height), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)

    # Use Arial / Helvetica font
    font_path = "/System/Library/Fonts/Supplemental/Arial.ttf"
    if not os.path.exists(font_path):
        font_path = "/System/Library/Fonts/Helvetica.ttc"

    font_comp = ImageFont.truetype(font_path, 15)
    font_ruc = ImageFont.truetype(font_path, 12)
    font_name = ImageFont.truetype(font_path, 13)
    font_title = ImageFont.truetype(font_path, 11)

    # Draw rounded rectangular double border
    box = [6, 6, width - 7, height - 7]
    draw.rounded_rectangle(box, radius=8, outline=color, width=3)
    inner_box = [11, 11, width - 12, height - 12]
    draw.rounded_rectangle(inner_box, radius=5, outline=color, width=1)

    # Draw text lines centered
    lines = [
        (company, font_comp, 18),
        (f"R.U.C. {ruc}", font_ruc, 42),
        (name, font_name, 70),
        (title, font_title, 92)
    ]

    for text, font, y in lines:
        bbox = draw.textbbox((0, 0), text, font=font)
        w = bbox[2] - bbox[0]
        x = (width - w) / 2
        draw.text((x, y), text, font=font, fill=color)

    # Rotate slightly to give natural stamped appearance
    rotated = img.rotate(rot_deg, resample=Image.Resampling.BICUBIC, expand=True)
    rotated.save(output_filename, "PNG")
    print(f"Generated stamp: {output_filename}")

if __name__ == "__main__":
    # 1. Fuxion TI (Carlos Malpartida)
    create_corporate_stamp(
        company="FUXION BIOTECH S.A.C.",
        ruc="20513081236",
        name="ING. CARLOS A. MALPARTIDA Z.",
        title="LÍDER TÉCNICO DE ARQUITECTURA TI",
        output_filename="sello_fuxion_ti.png",
        color=(18, 52, 132, 230),
        rot_deg=-2.0
    )

    # 2. Fuxion RRHH (Mariana Morales)
    create_corporate_stamp(
        company="FUXION BIOTECH S.A.C.",
        ruc="20513081236",
        name="LIC. MARIANA MORALES E.",
        title="GERENCIA DE GESTIÓN DEL TALENTO",
        output_filename="sello_fuxion_rrhh.png",
        color=(16, 60, 145, 230),
        rot_deg=1.8
    )

    # 3. Sifrah / VII NEXT TI (Pedro Flores)
    create_corporate_stamp(
        company="VII NEXT S.A.C. - SIFRAH",
        ruc="20603352867",
        name="PEDRO V. FLORES TANTALEAN",
        title="TECH LEAD / JEFATURA DE SISTEMAS",
        output_filename="sello_sifrah_ti.png",
        color=(15, 55, 135, 230),
        rot_deg=-1.5
    )

    # 4. Sifrah / VII NEXT RRHH (Claudia Benavides)
    create_corporate_stamp(
        company="VII NEXT S.A.C. - SIFRAH",
        ruc="20603352867",
        name="LIC. CLAUDIA BENAVIDES V.",
        title="JEFATURA DE RECURSOS HUMANOS",
        output_filename="sello_sifrah_rrhh.png",
        color=(18, 50, 140, 230),
        rot_deg=2.2
    )
