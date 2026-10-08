#!/usr/bin/env python3
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_JUSTIFY, TA_CENTER, TA_RIGHT, TA_LEFT

os.chdir(os.path.dirname(os.path.abspath(__file__)))

styles = getSampleStyleSheet()

# ==============================================================================
# ESTILOS CORPORATIVOS: FUXION BIOTECH (Enfoque Tech Multinacional)
# ==============================================================================
FX_NAVY = colors.HexColor('#0a2540')
FX_BLUE = colors.HexColor('#0284c7')
FX_TEXT = colors.HexColor('#1e293b')
FX_MUTED = colors.HexColor('#64748b')
FX_BORDER = colors.HexColor('#cbd5e1')
FX_BG_BOX = colors.HexColor('#f8fafc')

style_fx_title = ParagraphStyle(
    'FxDocTitle',
    parent=styles['Heading1'],
    fontName='Helvetica-Bold',
    fontSize=11.5,
    leading=15,
    spaceAfter=10,
    alignment=TA_CENTER,
    textColor=FX_NAVY
)

style_fx_body = ParagraphStyle(
    'FxDocBody',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9.2,
    leading=13.8,
    alignment=TA_JUSTIFY,
    spaceAfter=7,
    textColor=FX_TEXT
)

style_fx_body_bold = ParagraphStyle(
    'FxDocBodyBold',
    parent=style_fx_body,
    fontName='Helvetica-Bold'
)

style_fx_header_meta = ParagraphStyle(
    'FxDocHeaderMeta',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=11.5,
    alignment=TA_RIGHT,
    textColor=FX_MUTED
)

style_fx_footer = ParagraphStyle(
    'FxDocFooter',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=7.2,
    leading=10.2,
    alignment=TA_CENTER,
    textColor=FX_MUTED
)

style_fx_sign_name = ParagraphStyle(
    'FxSignName',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=9.5,
    alignment=TA_LEFT,
    spaceAfter=2,
    textColor=FX_NAVY
)

style_fx_sign_title = ParagraphStyle(
    'FxSignTitle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.2,
    leading=11.2,
    alignment=TA_LEFT,
    textColor=colors.HexColor('#475569')
)

# ==============================================================================
# ESTILOS INSTITUCIONALES: VII NEXT - SIFRAH (Enfoque Formal Notarial / Retail)
# ==============================================================================
SF_CHARCOAL = colors.HexColor('#1c1917')
SF_AMBER = colors.HexColor('#b45309')
SF_TEXT = colors.HexColor('#292524')
SF_MUTED = colors.HexColor('#78716c')
SF_BORDER = colors.HexColor('#e7e5e4')
SF_BG_BOX = colors.HexColor('#fefce8')

style_sf_title = ParagraphStyle(
    'SfDocTitle',
    parent=styles['Heading1'],
    fontName='Helvetica-Bold',
    fontSize=11.5,
    leading=15,
    spaceAfter=10,
    alignment=TA_CENTER,
    textColor=SF_CHARCOAL
)

style_sf_body = ParagraphStyle(
    'SfDocBody',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9.2,
    leading=13.8,
    alignment=TA_JUSTIFY,
    spaceAfter=7,
    textColor=SF_TEXT
)

style_sf_body_bold = ParagraphStyle(
    'SfDocBodyBold',
    parent=style_sf_body,
    fontName='Helvetica-Bold'
)

style_sf_header_meta = ParagraphStyle(
    'SfDocHeaderMeta',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=11.5,
    alignment=TA_RIGHT,
    textColor=SF_MUTED
)

style_sf_footer = ParagraphStyle(
    'SfDocFooter',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=7.2,
    leading=10.2,
    alignment=TA_CENTER,
    textColor=SF_MUTED
)

style_sf_sign_name = ParagraphStyle(
    'SfSignName',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=9.5,
    alignment=TA_LEFT,
    spaceAfter=2,
    textColor=SF_CHARCOAL
)

style_sf_sign_title = ParagraphStyle(
    'SfSignTitle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.2,
    leading=11.2,
    alignment=TA_LEFT,
    textColor=colors.HexColor('#57534e')
)

# ==============================================================================
# COMPONENTES DE ENCABEZADO Y PIE
# ==============================================================================
def make_fuxion_header(date_str):
    """Encabezado Corporativo Moderno para Fuxion Biotech S.A.C."""
    logo_path = "fuxion-logo-navy.png"
    if os.path.exists(logo_path):
        logo = Image(logo_path, width=128, height=41)
    else:
        logo = Paragraph("<b>FUXION BIOTECH S.A.C.</b>", style_fx_title)
    
    meta_text = f"<b>FUXION BIOTECH S.A.C.</b><br/>R.U.C. N° 20513081236 &bull; Sede Central<br/>{date_str}"
    header_table = Table([[logo, Paragraph(meta_text, style_fx_header_meta)]], colWidths=[250, 240])
    header_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (0, 0), 'LEFT'),
        ('ALIGN', (1, 0), (1, 0), 'RIGHT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
    ]))
    return header_table

def make_sifrah_header(date_str):
    """Encabezado Formal Clásico para VII NEXT S.A.C. (Sifrah)"""
    logo_path = "sifrah-logo.png"
    if os.path.exists(logo_path):
        logo = Image(logo_path, width=135, height=30)
    else:
        logo = Paragraph("<b>VII NEXT S.A.C. (SIFRAH)</b>", style_sf_title)
    
    meta_text = f"<b>VII NEXT S.A.C. &bull; SIFRAH</b><br/>R.U.C. N° 20603352867 &bull; Retail & Comercio<br/>{date_str}"
    header_table = Table([[logo, Paragraph(meta_text, style_sf_header_meta)]], colWidths=[250, 240])
    header_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (0, 0), 'LEFT'),
        ('ALIGN', (1, 0), (1, 0), 'RIGHT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
    ]))
    return header_table

def make_fuxion_footer(doc_code):
    """Pie de página Corporativo Fuxion (Sin QR)"""
    footer_text = f"""<b>FUXION BIOTECH S.A.C. &bull; R.U.C. 20513081236</b><br/>
    Av. El Derby N° 250, Int. 1401, Santiago de Surco, Lima, Perú | www.fuxion.com<br/>
    Registro y Control Documentario N° <b>{doc_code}</b> | Documento oficial expedido para fines laborales y profesionales."""
    
    footer_table = Table([[Paragraph(footer_text, style_fx_footer)]], colWidths=[490])
    footer_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 2),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
    ]))
    return footer_table

def make_sifrah_footer(doc_code):
    """Pie de página Formal Sifrah (Sin QR)"""
    footer_text = f"""<b>VII NEXT S.A.C. (SIFRAH) &bull; R.U.C. N° 20603352867</b><br/>
    MZA. P1 LOTE 3 A.H. La Rinconada de Pamplona Alta, San Juan de Miraflores, Lima, Perú<br/>
    Acreditación Laboral Oficial N° <b>{doc_code}</b> | Documento expedido conforme a la legislación peruana vigente."""
    
    footer_table = Table([[Paragraph(footer_text, style_sf_footer)]], colWidths=[490])
    footer_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 2),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
    ]))
    return footer_table


# ==============================================================================
# 1. CARTA DE RECOMENDACIÓN — FUXION BIOTECH
# ==============================================================================
def build_carta_recomendacion_fuxion():
    pdf_name = "Carta_Recomendacion_Fuxion_Jordy_Montalvo.pdf"
    doc = SimpleDocTemplate(pdf_name, pagesize=A4, rightMargin=52, leftMargin=52, topMargin=34, bottomMargin=30)
    story = []

    # Encabezado
    story.append(make_fuxion_header("Lima, 07 de octubre de 2026"))
    story.append(HRFlowable(width="100%", thickness=1.5, color=FX_NAVY, spaceAfter=10, spaceBefore=3))

    # Título
    story.append(Paragraph("CARTA DE RECOMENDACIÓN Y REFERENCIA PROFESIONAL", style_fx_title))
    story.append(Paragraph("A QUIEN CORRESPONDA:", style_fx_body_bold))
    story.append(Spacer(1, 4))

    p1 = """Por medio de la presente, me dirijo a ustedes para hacer constar que conozco y he supervisado el desempeño profesional de <b>JORDY JOSEPH MONTALVO ALFARO</b>, identificado con D.N.I. N° <b>90162185</b>, quien prestó servicios profesionales en <b>FUXION BIOTECH S.A.C.</b> (R.U.C. N° 20513081236) desde enero de 2025 hasta agosto de 2026, desempeñando el rol de <b>Desarrollador Full Stack Senior</b> dentro del equipo de Arquitectura y Tecnologías de la Información (TI)."""
    story.append(Paragraph(p1, style_fx_body))

    p2 = """Durante el período de su contratación, demostró solvencia técnica, alto compromiso y capacidad de liderazgo en el análisis, relevamiento de requerimientos y diseño de arquitectura para microservicios empresariales desarrollados en Java 11+ y Spring Boot, desplegados sobre clústeres de Kubernetes en entornos de nube como GCP y AWS. Asimismo, implementó capas de mensajería asíncrona desacopladas con Apache Kafka y Google Pub/Sub para transacciones de alto volumen, desarrolló aplicaciones web modulares y reactivas en Angular con TypeScript y RxJS, y optimizó procedimientos almacenados en bases de datos Oracle PL/SQL y SQL Server, reduciendo la latencia de consultas en un 38%."""
    story.append(Paragraph(p2, style_fx_body))

    p3 = """A nivel profesional y personal, demostró puntualidad en las entregas bajo el marco de trabajo Scrum, excelente trabajo en equipo, capacidad analítica para resolver problemas complejos y una conducta ética intachable."""
    story.append(Paragraph(p3, style_fx_body))

    p4 = """Por las razones expuestas, no dudo en recomendarlo ampliamente para cualquier posición o proyecto de ingeniería de software que asuma en su organización."""
    story.append(Paragraph(p4, style_fx_body))

    p5 = """Quedo a su entera disposición para cualquier consulta o información adicional que requieran."""
    story.append(Paragraph(p5, style_fx_body))
    story.append(Spacer(1, 6))

    story.append(Paragraph("Atentamente,", style_fx_body))
    story.append(Spacer(1, 4))

    # Firma Líder Técnico Fuxion
    postfirma_path = "postfirma_fuxion_ti.png"
    if os.path.exists(postfirma_path):
        story.append(Image(postfirma_path, width=145, height=58, hAlign='LEFT'))
    else:
        story.append(Spacer(1, 28))

    story.append(HRFlowable(width="38%", thickness=1, color=FX_NAVY, spaceAfter=3, hAlign='LEFT'))
    story.append(Paragraph("Ing. Carlos Alberto Malpartida Zevallos", style_fx_sign_name))
    story.append(Paragraph("Lead Solutions Architect & Engineering Manager<br/><b>Fuxion Biotech S.A.C.</b><br/>Contacto: +51 936 727 488", style_fx_sign_title))

    story.append(Spacer(1, 10))
    story.append(HRFlowable(width="100%", thickness=0.5, color=FX_BORDER, spaceAfter=5))
    story.append(make_fuxion_footer("REF-FX-2026-0842"))

    doc.build(story)
    print(f"Built: {pdf_name}")


# ==============================================================================
# 2. CARTA DE RECOMENDACIÓN — VII NEXT (SIFRAH)
# ==============================================================================
def build_carta_recomendacion_sifrah():
    pdf_name = "Carta_Recomendacion_Sifrah_Jordy_Montalvo.pdf"
    doc = SimpleDocTemplate(pdf_name, pagesize=A4, rightMargin=52, leftMargin=52, topMargin=34, bottomMargin=30)
    story = []

    # Encabezado
    story.append(make_sifrah_header("Lima, 03 de octubre de 2026"))
    story.append(HRFlowable(width="100%", thickness=1.5, color=SF_AMBER, spaceAfter=10, spaceBefore=3))

    # Título
    story.append(Paragraph("CARTA DE RECOMENDACIÓN Y REFERENCIA PROFESIONAL", style_sf_title))
    story.append(Paragraph("A QUIEN CORRESPONDA:", style_sf_body_bold))
    story.append(Spacer(1, 4))

    p1 = """Por medio de la presente, hago constar que conozco el desempeño profesional de <b>JORDY JOSEPH MONTALVO ALFARO</b>, identificado con D.N.I. N° <b>72481940</b>, quien prestó servicios profesionales para <b>SIFRAH</b> (VII NEXT S.A.C., R.U.C. N° 20603352867) en el período comprendido entre enero de 2023 y enero de 2025, desempeñando el rol de <b>Analista Programador Full Stack</b> en el área de Tecnología de la Información y Desarrollo de Sistemas."""
    story.append(Paragraph(p1, style_sf_body))

    p2 = """A lo largo de su servicio, estuvo a cargo de la construcción y soporte de servicios backend transaccionales en Java (Spring Boot) y .NET (C#), integrando pasarelas de pago, facturación electrónica y servicios On-Premise. Asimismo, implementó colas de mensajería asíncrona con RabbitMQ para la orquestación entre sistemas satélites y sincronización con almacenes NoSQL (MongoDB), y desarrolló interfaces web dinámicas con Angular, TypeScript, HTML5 y CSS3, optimizando los tiempos de carga y métricas de rendimiento en un 40%."""
    story.append(Paragraph(p2, style_sf_body))

    p3 = """Durante todo su tiempo con nosotros, demostró gran iniciativa, responsabilidad, resolución técnica de incidencias y un claro enfoque en la calidad de software y mejores prácticas colaborativas bajo Git."""
    story.append(Paragraph(p3, style_sf_body))

    p4 = """Por lo expuesto, extiendo mi recomendación profesional y personal hacia su persona, con la certeza de que aportará alto valor técnico y humano en los nuevos retos laborales que emprenda."""
    story.append(Paragraph(p4, style_sf_body))

    p5 = """Quedo a su disposición para atender cualquier requerimiento de validación complementaria."""
    story.append(Paragraph(p5, style_sf_body))
    story.append(Spacer(1, 6))

    story.append(Paragraph("Atentamente,", style_sf_body))
    story.append(Spacer(1, 4))

    # Firma Tech Lead Sifrah
    postfirma_path = "postfirma_sifrah_ti.png"
    if os.path.exists(postfirma_path):
        story.append(Image(postfirma_path, width=145, height=55, hAlign='LEFT'))
    else:
        story.append(Spacer(1, 28))

    story.append(HRFlowable(width="38%", thickness=1, color=SF_CHARCOAL, spaceAfter=3, hAlign='LEFT'))
    story.append(Paragraph("Pedro Valentino Flores Tantalean", style_sf_sign_name))
    story.append(Paragraph("Tech Lead / Jefatura de Sistemas e Infraestructura<br/><b>VII NEXT S.A.C. (SIFRAH)</b><br/>Contacto: +51 934 466 762", style_sf_sign_title))

    story.append(Spacer(1, 10))
    story.append(HRFlowable(width="100%", thickness=0.5, color=SF_BORDER, spaceAfter=5))
    story.append(make_sifrah_footer("REF-SF-2026-0118"))

    doc.build(story)
    print(f"Built: {pdf_name}")


# ==============================================================================
# 3. CERTIFICADO DE TRABAJO (PLANILLA) — FUXION BIOTECH
# ==============================================================================
def build_certificado_trabajo_fuxion():
    pdf_name = "Certificado_Trabajo_Planilla_Fuxion_Jordy_Montalvo.pdf"
    doc = SimpleDocTemplate(pdf_name, pagesize=A4, rightMargin=52, leftMargin=52, topMargin=34, bottomMargin=30)
    story = []

    # Encabezado
    story.append(make_fuxion_header("Lima, 07 de octubre de 2026"))
    story.append(HRFlowable(width="100%", thickness=1.5, color=FX_NAVY, spaceAfter=12, spaceBefore=3))

    # Título
    story.append(Paragraph("CERTIFICADO DE TRABAJO", style_fx_title))
    story.append(Spacer(1, 3))

    p1 = """La que suscribe, en representación de <b>FUXION BIOTECH S.A.C.</b>, entidad jurídica identificada con <b>R.U.C. N° 20513081236</b>, con domicilio legal en Av. El Derby N° 250, Int. 1401, distrito de Santiago de Surco, provincia y departamento de Lima:"""
    story.append(Paragraph(p1, style_fx_body))
    story.append(Spacer(1, 4))

    story.append(Paragraph("<b>CERTIFICA:</b>", style_fx_body_bold))
    story.append(Spacer(1, 3))

    p2 = """Que, el señor <b>JORDY JOSEPH MONTALVO ALFARO</b>, identificado con <b>D.N.I. N° 90162185</b>, laboró en nuestra institución bajo contrato de trabajo a plazo determinado sujeto a modalidad (al amparo del Texto Único Ordenado del Decreto Legislativo N° 728, Ley de Productividad y Competitividad Laboral), durante el período comprendido desde el <b>06 de enero de 2025</b> hasta el <b>14 de agosto de 2026</b>."""
    story.append(Paragraph(p2, style_fx_body))

    p3 = """Durante su permanencia en la empresa, desempeñó de manera destacada, a jornada completa y con alto rigor profesional el cargo de:"""
    story.append(Paragraph(p3, style_fx_body))

    # Cargo Box - Estilo Moderno Fuxion (Navy Accent)
    p_cargo = """<b>DESARROLLADOR FULL STACK SENIOR</b><br/><font size="8.5" color="#475569">Área de Arquitectura de Software y Tecnologías de la Información (TI)</font>"""
    cargo_table = Table([[Paragraph(p_cargo, ParagraphStyle('CargoBoxFx', parent=style_fx_body, alignment=TA_CENTER, fontSize=10.5, leading=14.5, textColor=FX_NAVY))]], colWidths=[490])
    cargo_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), FX_BG_BOX),
        ('BOX', (0, 0), (-1, -1), 0.75, FX_BORDER),
        ('LINELEFT', (0, 0), (0, -1), 3.5, FX_NAVY),
        ('TOPPADDING', (0, 0), (-1, -1), 7),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 7),
    ]))
    story.append(cargo_table)
    story.append(Spacer(1, 6))

    p4 = """Dejamos constancia de que durante el tiempo que prestó sus servicios, el señor Montalvo demostró notable idoneidad técnica, capacidad resolutiva, responsabilidad y una conducta ética intachable, cumpliendo cabalmente con las asignaciones y objetivos corporativos encomendados."""
    story.append(Paragraph(p4, style_fx_body))

    p5 = """Se expide el presente certificado a solicitud del interesado para los fines laborales y profesionales que estime pertinentes."""
    story.append(Paragraph(p5, style_fx_body))
    story.append(Spacer(1, 8))

    # Firma RRHH Mujer (Lic. Mariana Morales Echevarría)
    postfirma_path = "postfirma_fuxion_rrhh.png"
    if os.path.exists(postfirma_path):
        story.append(Image(postfirma_path, width=145, height=58, hAlign='LEFT'))
    else:
        story.append(Spacer(1, 28))

    story.append(HRFlowable(width="38%", thickness=1, color=FX_NAVY, spaceAfter=3, hAlign='LEFT'))
    story.append(Paragraph("Lic. Mariana Morales Echevarría", style_fx_sign_name))
    story.append(Paragraph("Gerencia de Gestión del Talento Humano<br/><b>Fuxion Biotech S.A.C.</b>", style_fx_sign_title))

    story.append(Spacer(1, 10))
    story.append(HRFlowable(width="100%", thickness=0.5, color=FX_BORDER, spaceAfter=5))
    story.append(make_fuxion_footer("FX-CT-2026-0842"))

    doc.build(story)
    print(f"Built: {pdf_name}")


# ==============================================================================
# 4. CONSTANCIA DE SERVICIOS (LOCACIÓN) — FUXION BIOTECH (FICHA EJECUTIVA TECH)
# ==============================================================================
def build_constancia_servicios_fuxion():
    pdf_name = "Constancia_Servicios_Fuxion_Jordy_Montalvo.pdf"
    doc = SimpleDocTemplate(pdf_name, pagesize=A4, rightMargin=52, leftMargin=52, topMargin=32, bottomMargin=28)
    story = []

    # Encabezado Ejecutivo Fuxion (Logo con Subtítulo + Caja de Metadatos Azul Cielo)
    logo_path = "fuxion-logo-navy.png"
    if os.path.exists(logo_path):
        logo = Image(logo_path, width=128, height=41)
    else:
        logo = Paragraph("<b>FUXION BIOTECH S.A.C.</b>", style_fx_title)
    
    header_left = [
        logo,
        Spacer(1, 2),
        Paragraph('<font size="6.8" color="#0369a1"><b>DIVISIÓN DE ARQUITECTURA DE SOFTWARE & SOLUCIONES TI</b></font>', styles['Normal'])
    ]
    
    meta_box_text = """<b>FUXION BIOTECH S.A.C.</b><br/>
    <font size="7.5" color="#475569">R.U.C. N° 20513081236 &bull; Sede Central Surco<br/>
    Fecha: Lima, 07 de octubre de 2026<br/>
    Registro Oficial: <b>FX-CS-2026-0842</b></font>"""
    
    meta_table = Table([[Paragraph(meta_box_text, style_fx_header_meta)]], colWidths=[232])
    meta_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#f0f9ff')),
        ('BOX', (0, 0), (-1, -1), 0.75, colors.HexColor('#bae6fd')),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
    ]))
    
    header_table = Table([[header_left, meta_table]], colWidths=[255, 235])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2),
    ]))
    story.append(header_table)
    story.append(HRFlowable(width="100%", thickness=2, color=FX_NAVY, spaceAfter=8, spaceBefore=4))

    # Título Moderno Asimétrico
    title_text = """<font size="11.5" color="#0a2540"><b>CONSTANCIA DE PRESTACIÓN DE SERVICIOS</b></font><br/>
    <font size="8" color="#0284c7"><b>MODALIDAD CONTRACTUAL: LOCACIÓN DE SERVICIOS (ART. 1764° CÓDIGO CIVIL)</b></font>"""
    story.append(Paragraph(title_text, ParagraphStyle('FxTitleModern', parent=styles['Normal'], alignment=TA_LEFT, leading=14, spaceAfter=7)))

    p_intro = """Por medio del presente documento, <b>FUXION BIOTECH S.A.C.</b> (R.U.C. N° 20513081236), con sede corporativa en Av. El Derby N° 250, Int. 1401, distrito de Santiago de Surco, Lima, certifica la prestación de servicios profesionales autónomos conforme a la siguiente ficha técnica:"""
    story.append(Paragraph(p_intro, style_fx_body))
    story.append(Spacer(1, 2))

    # Matriz Ejecutiva de Servicios (Ficha Resumen Técnica Fuxion)
    matrix_data = [
        [
            Paragraph("<b>Profesional Titular:</b>", ParagraphStyle('M1', parent=style_fx_body, fontSize=8.5, leading=11, textColor=FX_NAVY)),
            Paragraph("<b>JORDY JOSEPH MONTALVO ALFARO</b> (D.N.I. N° <b>90162185</b>)", ParagraphStyle('M2', parent=style_fx_body, fontSize=8.5, leading=11))
        ],
        [
            Paragraph("<b>Cargo / Rol Asignado:</b>", ParagraphStyle('M1', parent=style_fx_body, fontSize=8.5, leading=11, textColor=FX_NAVY)),
            Paragraph("<b>DESARROLLADOR FULL STACK SENIOR</b>", ParagraphStyle('M2', parent=style_fx_body, fontSize=8.5, leading=11, textColor=FX_NAVY))
        ],
        [
            Paragraph("<b>Área de Asignación:</b>", ParagraphStyle('M1', parent=style_fx_body, fontSize=8.5, leading=11, textColor=FX_NAVY)),
            Paragraph("Arquitectura de Software y Tecnologías de la Información (TI)", ParagraphStyle('M2', parent=style_fx_body, fontSize=8.5, leading=11))
        ],
        [
            Paragraph("<b>Período de Prestación:</b>", ParagraphStyle('M1', parent=style_fx_body, fontSize=8.5, leading=11, textColor=FX_NAVY)),
            Paragraph("Desde <b>enero de 2025</b> hasta <b>agosto de 2026</b> (19 meses)", ParagraphStyle('M2', parent=style_fx_body, fontSize=8.5, leading=11))
        ],
        [
            Paragraph("<b>Alcance del Servicio:</b>", ParagraphStyle('M1', parent=style_fx_body, fontSize=8.5, leading=11, textColor=FX_NAVY)),
            Paragraph("Diseño e implementación de microservicios Spring Boot, colas asíncronas Kafka, arquitectura cloud en GCP/AWS y frontends modulares e-commerce.", ParagraphStyle('M2', parent=style_fx_body, fontSize=8.2, leading=11))
        ]
    ]
    matrix_table = Table(matrix_data, colWidths=[135, 355])
    matrix_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (0, -1), colors.HexColor('#f1f5f9')),
        ('BACKGROUND', (1, 0), (1, -1), colors.HexColor('#f8fafc')),
        ('BOX', (0, 0), (-1, -1), 0.75, FX_BORDER),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#e2e8f0')),
        ('LINELEFT', (0, 0), (0, -1), 3.5, FX_NAVY),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 7),
        ('RIGHTPADDING', (0, 0), (-1, -1), 7),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    story.append(matrix_table)
    story.append(Spacer(1, 5))

    p_cierre = """Hacemos constar que los entregables técnicos, hitos de consultoría y acuerdos de nivel de servicio fueron cumplidos a entera satisfacción de nuestra gerencia de tecnología, evidenciando alto estándar de ingeniería, proactividad y conducta ética intachable."""
    story.append(Paragraph(p_cierre, style_fx_body))

    p_solicitud = """Se otorga la presente constancia a solicitud del interesado para los fines profesionales y laborales que estime convenientes."""
    story.append(Paragraph(p_solicitud, style_fx_body))
    story.append(Spacer(1, 5))

    # Firma Lic. Mariana Morales
    postfirma_path = "postfirma_fuxion_rrhh.png"
    if os.path.exists(postfirma_path):
        story.append(Image(postfirma_path, width=145, height=58, hAlign='LEFT'))
    else:
        story.append(Spacer(1, 28))

    story.append(HRFlowable(width="38%", thickness=1, color=FX_NAVY, spaceAfter=3, hAlign='LEFT'))
    story.append(Paragraph("Lic. Mariana Morales Echevarría", style_fx_sign_name))
    story.append(Paragraph("Gerencia de Gestión del Talento Humano<br/><b>Fuxion Biotech S.A.C.</b>", style_fx_sign_title))

    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=0.5, color=FX_BORDER, spaceAfter=5))
    story.append(make_fuxion_footer("FX-CS-2026-0842"))

    doc.build(story)
    print(f"Built: {pdf_name}")


# ==============================================================================
# 5. CERTIFICADO DE TRABAJO (PLANILLA) — VII NEXT (SIFRAH)
# ==============================================================================
def build_certificado_trabajo_sifrah():
    pdf_name = "Certificado_Trabajo_Planilla_Sifrah_Jordy_Montalvo.pdf"
    doc = SimpleDocTemplate(pdf_name, pagesize=A4, rightMargin=52, leftMargin=52, topMargin=34, bottomMargin=30)
    story = []

    # Encabezado
    story.append(make_sifrah_header("Lima, 03 de octubre de 2026"))
    story.append(HRFlowable(width="100%", thickness=1.5, color=SF_AMBER, spaceAfter=12, spaceBefore=3))

    # Título
    story.append(Paragraph("CERTIFICADO DE TRABAJO", style_sf_title))
    story.append(Spacer(1, 3))

    p1 = """La empresa <b>VII NEXT S.A.C.</b> (SIFRAH), identificada con <b>R.U.C. N° 20603352867</b>, con domicilio fiscal en Mza. P1 Lote 3 A.H. La Rinconada de Pamplona Alta, distrito de San Juan de Miraflores, Lima:"""
    story.append(Paragraph(p1, style_sf_body))
    story.append(Spacer(1, 4))

    story.append(Paragraph("<b>CERTIFICA:</b>", style_sf_body_bold))
    story.append(Spacer(1, 3))

    p2 = """Que, el señor <b>JORDY JOSEPH MONTALVO ALFARO</b>, identificado con <b>D.N.I. N° 72481940</b>, laboró en nuestra empresa bajo el régimen laboral de la actividad privada (Decreto Legislativo N° 728), durante el período comprendido desde el <b>09 de enero de 2023</b> hasta el <b>17 de enero de 2025</b>."""
    story.append(Paragraph(p2, style_sf_body))

    p3 = """Habiéndose desempeñado a tiempo completo y con alto nivel de desempeño en el puesto de:"""
    story.append(Paragraph(p3, style_sf_body))

    # Cargo Box - Estilo Institucional Sifrah (Amber / Golden Frame)
    p_cargo = """<b>ANALISTA PROGRAMADOR FULL STACK</b><br/><font size="8.5" color="#78350f">Área de Tecnología de la Información y Desarrollo de Sistemas</font>"""
    cargo_table = Table([[Paragraph(p_cargo, ParagraphStyle('CargoBoxSf', parent=style_sf_body, alignment=TA_CENTER, fontSize=10.5, leading=14.5, textColor=SF_CHARCOAL))]], colWidths=[490])
    cargo_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), SF_BG_BOX),
        ('BOX', (0, 0), (-1, -1), 0.75, colors.HexColor('#fde68a')),
        ('LINEBEFORE', (0, 0), (0, -1), 3.5, SF_AMBER),
        ('TOPPADDING', (0, 0), (-1, -1), 7),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 7),
    ]))
    story.append(cargo_table)
    story.append(Spacer(1, 6))

    p4 = """Durante el tiempo en mención, demostró destacada capacidad técnica, compromiso, proactividad y un correcto espíritu colaborativo, observando una conducta intachable en todas las labores asignadas."""
    story.append(Paragraph(p4, style_sf_body))

    p5 = """Se expide el presente certificado a solicitud del interesado para los fines que estime pertinentes."""
    story.append(Paragraph(p5, style_sf_body))
    story.append(Spacer(1, 8))

    # Firma RRHH Mujer (Lic. Claudia Lucía Benavides Vargas)
    postfirma_path = "postfirma_sifrah_rrhh.png"
    if os.path.exists(postfirma_path):
        story.append(Image(postfirma_path, width=145, height=58, hAlign='LEFT'))
    else:
        story.append(Spacer(1, 28))

    story.append(HRFlowable(width="38%", thickness=1, color=SF_CHARCOAL, spaceAfter=3, hAlign='LEFT'))
    story.append(Paragraph("Lic. Claudia Lucía Benavides Vargas", style_sf_sign_name))
    story.append(Paragraph("Jefatura de Recursos Humanos y Administración<br/><b>VII NEXT S.A.C.</b>", style_sf_sign_title))

    story.append(Spacer(1, 10))
    story.append(HRFlowable(width="100%", thickness=0.5, color=SF_BORDER, spaceAfter=5))
    story.append(make_sifrah_footer("SF-CT-2025-0118"))

    doc.build(story)
    print(f"Built: {pdf_name}")


# ==============================================================================
# 6. CONSTANCIA DE SERVICIOS (LOCACIÓN) — VII NEXT (SIFRAH) (FORMATO NOTARIAL TRADICIONAL)
# ==============================================================================
def build_constancia_servicios_sifrah():
    pdf_name = "Constancia_Servicios_Sifrah_Jordy_Montalvo.pdf"
    doc = SimpleDocTemplate(pdf_name, pagesize=A4, rightMargin=52, leftMargin=52, topMargin=32, bottomMargin=28)
    story = []

    # Encabezado Clásico Centrado Tradicional Peruano para Sifrah
    logo_path = "sifrah-logo.png"
    if os.path.exists(logo_path):
        logo = Image(logo_path, width=140, height=31)
    else:
        logo = Paragraph("<b>VII NEXT S.A.C. (SIFRAH)</b>", style_sf_title)

    header_content = [
        logo,
        Spacer(1, 2),
        Paragraph("<b>VII NEXT S.A.C. &bull; SIFRAH</b>", ParagraphStyle('SfH1', parent=styles['Normal'], alignment=TA_CENTER, fontName='Helvetica-Bold', fontSize=9.5, leading=12, textColor=SF_CHARCOAL)),
        Paragraph("R.U.C. N° 20603352867 &bull; DEPARTAMENTO DE RECURSOS HUMANOS Y ADMINISTRACIÓN", ParagraphStyle('SfH2', parent=styles['Normal'], alignment=TA_CENTER, fontName='Helvetica', fontSize=7.6, leading=9.5, textColor=SF_MUTED)),
    ]
    header_table = Table([[header_content]], colWidths=[490])
    header_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2),
    ]))
    story.append(header_table)
    
    # Doble línea clásica dorada
    story.append(HRFlowable(width="100%", thickness=1.5, color=SF_AMBER, spaceAfter=2, spaceBefore=2))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#d97706'), spaceAfter=6, spaceBefore=0))

    story.append(Paragraph("Lima, 03 de octubre de 2026", style_sf_header_meta))
    story.append(Spacer(1, 4))

    # Título Clásico Notarial Centrado
    title_style_spaced = ParagraphStyle(
        'SfTitleSpaced',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=12.5,
        leading=16,
        alignment=TA_CENTER,
        textColor=SF_CHARCOAL,
        spaceAfter=10
    )
    story.append(Paragraph("C O N S T A N C I A &nbsp;&nbsp; D E &nbsp;&nbsp; S E R V I C I O S", title_style_spaced))

    story.append(Paragraph("<b>LA JEFA DE RECURSOS HUMANOS Y ADMINISTRACIÓN DE VII NEXT S.A.C. QUE SUSCRIBE:</b>", style_sf_body_bold))
    story.append(Spacer(1, 3))

    story.append(Paragraph("<b>HACE CONSTAR QUE:</b>", ParagraphStyle('SfHaceConstar', parent=styles['Normal'], alignment=TA_CENTER, fontName='Helvetica-Bold', fontSize=10, leading=13, spaceAfter=5, textColor=SF_CHARCOAL)))

    p1 = """El señor <b>JORDY JOSEPH MONTALVO ALFARO</b>, identificado con <b>D.N.I. N° 72481940</b>, prestó servicios profesionales independientes bajo la modalidad contractual de <b>Locación de Servicios</b> (al amparo del artículo 1764° y concordantes del Código Civil Peruano), en el período comprendido desde <b>enero de 2023</b> hasta <b>enero de 2025</b>."""
    story.append(Paragraph(p1, style_sf_body))

    p2 = """Habiendo desempeñado sus funciones técnicas y profesionales con alto rigor, dedicación y solvencia en el puesto de:"""
    story.append(Paragraph(p2, style_sf_body))

    # Placa Institucional Clásica (Marco Dorado/Ámbar con fondo pergamino marfil)
    p_cargo = """<b>ANALISTA PROGRAMADOR FULL STACK</b><br/><font size="8.5" color="#78350f">Área de Tecnología de la Información y Desarrollo de Sistemas</font>"""
    cargo_table = Table([[Paragraph(p_cargo, ParagraphStyle('CargoBoxSfPlaca', parent=style_sf_body, alignment=TA_CENTER, fontSize=10.5, leading=14.5, textColor=SF_CHARCOAL))]], colWidths=[490])
    cargo_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#fffdf5')),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#d97706')),
        ('LINEABOVE', (0, 0), (-1, 0), 2, SF_AMBER),
        ('LINEBELOW', (0, -1), (-1, -1), 2, SF_AMBER),
        ('TOPPADDING', (0, 0), (-1, -1), 7),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 7),
    ]))
    story.append(cargo_table)
    story.append(Spacer(1, 5))

    p3 = """Se deja expresa constancia de que durante dicho período, el señor Montalvo demostró destacada solvencia técnica en el desarrollo de servicios backend, integración de pasarelas de pago y soporte a la plataforma e-commerce, observando siempre una conducta intachable y alta responsabilidad."""
    story.append(Paragraph(p3, style_sf_body))

    p4 = """A solicitud del interesado y para los fines que estime conveniente, se expide la presente constancia."""
    story.append(Paragraph(p4, style_sf_body))
    story.append(Spacer(1, 5))

    # Firma Lic. Claudia Benavides
    postfirma_path = "postfirma_sifrah_rrhh.png"
    if os.path.exists(postfirma_path):
        story.append(Image(postfirma_path, width=145, height=58, hAlign='LEFT'))
    else:
        story.append(Spacer(1, 28))

    story.append(HRFlowable(width="38%", thickness=1, color=SF_CHARCOAL, spaceAfter=3, hAlign='LEFT'))
    story.append(Paragraph("Lic. Claudia Lucía Benavides Vargas", style_sf_sign_name))
    story.append(Paragraph("Jefatura de Recursos Humanos y Administración<br/><b>VII NEXT S.A.C.</b>", style_sf_sign_title))

    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=0.5, color=SF_BORDER, spaceAfter=5))
    story.append(make_sifrah_footer("SF-CS-2025-0118"))

    doc.build(story)
    print(f"Built: {pdf_name}")


if __name__ == "__main__":
    print("--- INICIANDO GENERACIÓN DE 6 DOCUMENTOS OFICIALES ---")
    build_carta_recomendacion_fuxion()
    build_carta_recomendacion_sifrah()
    build_certificado_trabajo_fuxion()
    build_constancia_servicios_fuxion()
    build_certificado_trabajo_sifrah()
    build_constancia_servicios_sifrah()
    print("--- GENERACIÓN EXITOSA DE TODOS LOS DOCUMENTOS ---")
