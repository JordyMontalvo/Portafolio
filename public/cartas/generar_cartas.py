#!/usr/bin/env python3
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_JUSTIFY, TA_CENTER, TA_RIGHT, TA_LEFT
from reportlab.graphics.barcode import qr
from reportlab.graphics.shapes import Drawing

os.chdir(os.path.dirname(os.path.abspath(__file__)))

styles = getSampleStyleSheet()

style_title = ParagraphStyle(
    'DocTitleStyle',
    parent=styles['Heading1'],
    fontName='Helvetica-Bold',
    fontSize=13,
    leading=18,
    spaceAfter=18,
    alignment=TA_CENTER,
    textColor=colors.HexColor('#0f172a')
)

style_body = ParagraphStyle(
    'DocBodyStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=10.5,
    leading=16,
    alignment=TA_JUSTIFY,
    spaceAfter=11,
    textColor=colors.HexColor('#1e293b')
)

style_body_bold = ParagraphStyle(
    'DocBodyBoldStyle',
    parent=style_body,
    fontName='Helvetica-Bold'
)

style_header_date = ParagraphStyle(
    'DocHeaderDate',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    alignment=TA_RIGHT,
    textColor=colors.HexColor('#64748b')
)

style_footer = ParagraphStyle(
    'DocFooterStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=7.5,
    leading=11,
    alignment=TA_CENTER,
    textColor=colors.HexColor('#64748b')
)

style_sign_name = ParagraphStyle(
    'DocSignNameStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=10,
    alignment=TA_LEFT,
    spaceAfter=2,
    textColor=colors.HexColor('#0f172a')
)

style_sign_title = ParagraphStyle(
    'DocSignTitleStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    leading=12,
    alignment=TA_LEFT,
    textColor=colors.HexColor('#475569')
)

def create_qr_code(url):
    qr_code = qr.QrCodeWidget(url)
    qr_code.barLevel = 'Q'
    d = Drawing(55, 55)
    d.add(qr_code)
    return d

def make_header(logo_path, fallback_text, date_str):
    if os.path.exists(logo_path):
        if "fuxion" in logo_path:
            logo = Image(logo_path, width=145, height=47)
        else:
            logo = Image(logo_path, width=145, height=32)
    else:
        logo = Paragraph(f"<b>{fallback_text}</b>", style_title)
    
    header_table = Table([[logo, Paragraph(date_str, style_header_date)]], colWidths=[270, 200])
    header_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (0, 0), 'LEFT'),
        ('ALIGN', (1, 0), (1, 0), 'RIGHT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    return header_table

def make_footer(qr_url, footer_text):
    qr_widget = create_qr_code(qr_url)
    footer_table = Table([[qr_widget, Paragraph(footer_text, style_footer)]], colWidths=[65, 400])
    footer_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (0, 0), 'LEFT'),
        ('ALIGN', (1, 0), (1, 0), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    return footer_table

# ==============================================================================
# 1. CARTA RECOMENDACION FUXION
# ==============================================================================
def build_carta_recomendacion_fuxion():
    pdf_name = "Carta_Recomendacion_Fuxion_Jordy_Montalvo.pdf"
    doc = SimpleDocTemplate(pdf_name, pagesize=A4, rightMargin=68, leftMargin=68, topMargin=45, bottomMargin=45)
    story = []

    story.append(make_header("fuxion-logo-navy.png", "FUXION BIOTECH S.A.C.", "Lima, 07 de octubre de 2026"))
    story.append(Spacer(1, 28))

    story.append(Paragraph("CARTA DE RECOMENDACIÓN Y REFERENCIA PROFESIONAL", style_title))
    story.append(Spacer(1, 12))

    story.append(Paragraph("A QUIEN CORRESPONDA:", style_body_bold))
    story.append(Spacer(1, 8))

    p1 = """Por medio de la presente, me dirijo a ustedes para hacer constar que conozco y he supervisado el desempeño profesional de <b>JORDY JOSEPH MONTALVO ALFARO</b>, identificado con D.N.I. N° <b>90162185</b>, quien prestó servicios profesionales en <b>FUXION BIOTECH S.A.C.</b> (RUC: 20513081236) desde enero de 2025 hasta agosto de 2026, desempeñando el rol de <b>Desarrollador Full Stack Senior</b> dentro del equipo de Arquitectura y TI."""
    story.append(Paragraph(p1, style_body))

    p2 = """Durante el período de su contratación, demostró solvencia técnica, alto compromiso y capacidad de liderazgo en el análisis, relevamiento de requerimientos y diseño de arquitectura para microservicios empresariales desarrollados en Java 11+ y Spring Boot, desplegados sobre clústeres de Kubernetes en entornos de nube como GCP y AWS. Asimismo, implementó capas de mensajería asíncrona desacopladas con Apache Kafka y Google Pub/Sub para transacciones de alto volumen, desarrolló aplicaciones web modulares y reactivas en Angular con TypeScript y RxJS, y optimizó procedimientos almacenados en bases de datos Oracle PL/SQL y SQL Server, reduciendo la latencia de consultas en un 38%."""
    story.append(Paragraph(p2, style_body))

    p3 = """A nivel profesional y personal, demostró puntualidad en las entregas bajo el marco de trabajo Scrum, excelente trabajo en equipo, capacidad analítica para resolver problemas complejos y una conducta ética intachable."""
    story.append(Paragraph(p3, style_body))

    p4 = """Por las razones expuestas, no dudo en recomendarlo ampliamente para cualquier posición o proyecto de ingeniería de software que asuma en su organización."""
    story.append(Paragraph(p4, style_body))

    p5 = """Quedo a su disposición para cualquier consulta o información adicional que requieran."""
    story.append(Paragraph(p5, style_body))
    story.append(Spacer(1, 18))

    # Firma
    story.append(Paragraph("Atentamente,", style_body))
    story.append(Spacer(1, 6))

    postfirma_path = "postfirma_fuxion_ti.png"
    if os.path.exists(postfirma_path):
        story.append(Image(postfirma_path, width=175, height=70, hAlign='LEFT'))
    else:
        story.append(Spacer(1, 35))

    story.append(HRFlowable(width="38%", thickness=1, color=colors.HexColor('#1e293b'), spaceAfter=4, hAlign='LEFT'))
    story.append(Paragraph("Ing. Carlos Alberto Malpartida Zevallos", style_sign_name))
    story.append(Paragraph("Lead Solutions Architect & Engineering Manager<br/><b>Fuxion Biotech S.A.C.</b><br/>Contacto: +51 936 727 488", style_sign_title))

    story.append(Spacer(1, 24))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#cbd5e1'), spaceAfter=8))
    
    footer_text = """<b>FUXION BIOTECH S.A.C. | RUC: 20513081236</b><br/>
    Av. El Derby N° 250, Int. 1401, Santiago de Surco, Lima, Perú | www.fuxion.com<br/>
    Código de Validación: <b>REF-FX-2026-0842</b> | Documento oficial para fines de referencia profesional."""
    
    footer_table = Table([[Paragraph(footer_text, style_footer)]], colWidths=[465])
    footer_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    story.append(footer_table)

    doc.build(story)
    print(f"Built: {pdf_name}")

# ==============================================================================
# 2. CARTA RECOMENDACION SIFRAH
# ==============================================================================
def build_carta_recomendacion_sifrah():
    pdf_name = "Carta_Recomendacion_Sifrah_Jordy_Montalvo.pdf"
    doc = SimpleDocTemplate(pdf_name, pagesize=A4, rightMargin=68, leftMargin=68, topMargin=45, bottomMargin=45)
    story = []

    story.append(make_header("sifrah-logo.png", "VII NEXT S.A.C. - SIFRAH", "Lima, 03 de octubre de 2026"))
    story.append(Spacer(1, 28))

    story.append(Paragraph("CARTA DE RECOMENDACIÓN Y REFERENCIA PROFESIONAL", style_title))
    story.append(Spacer(1, 12))

    story.append(Paragraph("A QUIEN CORRESPONDA:", style_body_bold))
    story.append(Spacer(1, 8))

    p1 = """Por medio de la presente, hago constar que conozco el desempeño profesional de <b>JORDY JOSEPH MONTALVO ALFARO</b>, identificado con D.N.I. N° <b>72481940</b>, quien prestó servicios profesionales para <b>SIFRAH</b> (VII NEXT S.A.C., RUC: 20603352867) en el período comprendido entre enero de 2023 y enero de 2025, desempeñando el rol de <b>Analista Programador Full Stack</b>."""
    story.append(Paragraph(p1, style_body))

    p2 = """A lo largo de su servicio, estuvo a cargo de la construcción y soporte de servicios backend transaccionales en Java (Spring Boot) y .NET (C#), integrando pasarelas de pago, facturación electrónica y servicios On-Premise. Asimismo, implementó colas de mensajería asíncrona con RabbitMQ para la orquestación entre sistemas satélites y sincronización con almacenes NoSQL (MongoDB), y desarrolló interfaces web dinámicas con Angular, TypeScript, HTML5 y CSS3, optimizando los tiempos de carga y métricas de rendimiento en un 40%."""
    story.append(Paragraph(p2, style_body))

    p3 = """Durante todo su tiempo con nosotros, demostró gran iniciativa, responsabilidad, resolución técnica de incidencias y un claro enfoque en la calidad de software y mejores prácticas colaborativas bajo Git."""
    story.append(Paragraph(p3, style_body))

    p4 = """Por lo expuesto, extiendo mi recomendación profesional y personal hacia su persona, con la certeza de que aportará alto valor técnico y humano en los nuevos retos laborales que emprenda."""
    story.append(Paragraph(p4, style_body))

    p5 = """Quedo a su disposición para atender cualquier requerimiento de validación complementaria."""
    story.append(Paragraph(p5, style_body))
    story.append(Spacer(1, 18))

    # Firma
    story.append(Paragraph("Atentamente,", style_body))
    story.append(Spacer(1, 6))

    postfirma_path = "postfirma_sifrah_ti.png"
    if os.path.exists(postfirma_path):
        story.append(Image(postfirma_path, width=175, height=70, hAlign='LEFT'))
    else:
        story.append(Spacer(1, 35))

    story.append(HRFlowable(width="38%", thickness=1, color=colors.HexColor('#1e293b'), spaceAfter=4, hAlign='LEFT'))
    story.append(Paragraph("Pedro Valentino Flores Tantalean", style_sign_name))
    story.append(Paragraph("Tech Lead / Jefatura de Sistemas e Infraestructura<br/><b>VII NEXT S.A.C. (SIFRAH)</b><br/>Contacto: +51 934 466 762", style_sign_title))

    story.append(Spacer(1, 24))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#cbd5e1'), spaceAfter=8))

    footer_text = """<b>VII NEXT S.A.C. | RUC: 20603352867</b><br/>
    MZA. P1 LOTE 3 A.H. LA RINCONADA DE PAMPLIACI, San Juan de Miraflores, Lima, Perú<br/>
    Código de Validación: <b>REF-SF-2026-0118</b> | Documento oficial para fines de referencia profesional."""
    story.append(make_footer("https://verificacion.sifrah.com/ref/2026-0118", footer_text))

    doc.build(story)
    print(f"Built: {pdf_name}")

# ==============================================================================
# 3. CERTIFICADO DE TRABAJO (PLANILLA) - FUXION BIOTECH
# ==============================================================================
def build_certificado_trabajo_fuxion():
    pdf_name = "Certificado_Trabajo_Planilla_Fuxion_Jordy_Montalvo.pdf"
    doc = SimpleDocTemplate(pdf_name, pagesize=A4, rightMargin=68, leftMargin=68, topMargin=45, bottomMargin=45)
    story = []

    story.append(make_header("fuxion-logo-navy.png", "FUXION BIOTECH S.A.C.", "Lima, 03 de octubre de 2026"))
    story.append(Spacer(1, 30))

    story.append(Paragraph("CERTIFICADO DE TRABAJO", style_title))
    story.append(Spacer(1, 15))

    p1 = """La que suscribe, en representación de <b>FUXION BIOTECH S.A.C.</b>, entidad jurídica identificada con <b>R.U.C. N° 20513081236</b>, con domicilio legal en Av. El Derby N° 250, Int. 1401, distrito de Santiago de Surco, provincia y departamento de Lima:"""
    story.append(Paragraph(p1, style_body))
    story.append(Spacer(1, 10))

    story.append(Paragraph("<b>CERTIFICA:</b>", style_body_bold))
    story.append(Spacer(1, 8))

    p2 = """Que, el señor <b>JORDY JOSEPH MONTALVO ALFARO</b>, identificado con <b>D.N.I. N° 90162185</b>, laboró en nuestra institución bajo contrato de trabajo a plazo determinado sujeto a modalidad (al amparo del Texto Único Ordenado del Decreto Legislativo N° 728, Ley de Productividad y Competitividad Laboral), durante el período comprendido desde el <b>06 de enero de 2025</b> hasta el <b>14 de agosto de 2026</b>."""
    story.append(Paragraph(p2, style_body))

    p3 = """Durante su permanencia en la empresa, desempeñó de manera destacada, a jornada completa y con alto rigor profesional el cargo de:"""
    story.append(Paragraph(p3, style_body))

    p_cargo = """<b>DESARROLLADOR FULL STACK SENIOR</b><br/><i>(Área de Arquitectura de Software, E-Commerce y Soluciones TI)</i>"""
    cargo_table = Table([[Paragraph(p_cargo, ParagraphStyle('CargoBox', parent=style_body, alignment=TA_CENTER, fontSize=11, leading=15))]], colWidths=[460])
    cargo_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#f8fafc')),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#cbd5e1')),
        ('TOPPADDING', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
    ]))
    story.append(cargo_table)
    story.append(Spacer(1, 12))

    p4 = """Dejamos constancia de que durante el tiempo que prestó sus servicios, el señor Montalvo demostró notable idoneidad técnica, capacidad resolutiva, responsabilidad y una conducta ética intachable, cumpliendo cabalmente con las asignaciones y objetivos corporativos encomendados."""
    story.append(Paragraph(p4, style_body))

    p5 = """Se expide el presente certificado a solicitud del interesado para los fines laborales y profesionales que estime pertinentes."""
    story.append(Paragraph(p5, style_body))
    story.append(Spacer(1, 18))

    # Firma RRHH
    postfirma_path = "postfirma_fuxion_rrhh.png"
    if os.path.exists(postfirma_path):
        story.append(Image(postfirma_path, width=175, height=70, hAlign='LEFT'))
    else:
        story.append(Spacer(1, 35))

    story.append(HRFlowable(width="38%", thickness=1, color=colors.HexColor('#1e293b'), spaceAfter=4, hAlign='LEFT'))
    story.append(Paragraph("Lic. Mariana Morales Echevarría", style_sign_name))
    story.append(Paragraph("Gerencia de Gestión del Talento Humano<br/><b>Fuxion Biotech S.A.C.</b>", style_sign_title))

    story.append(Spacer(1, 24))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#cbd5e1'), spaceAfter=8))

    footer_text = """<b>FUXION BIOTECH S.A.C. | RUC: 20513081236</b><br/>
    Av. El Derby N° 250, Int. 1401, Santiago de Surco, Lima, Perú | Registro Laboral N° FX-CT-2026-0842<br/>
    Documento oficial emitido bajo el amparo de la legislación laboral peruana vigente."""
    story.append(make_footer("https://verificacion.fuxion.com/cert/2026-0842", footer_text))

    doc.build(story)
    print(f"Built: {pdf_name}")

# ==============================================================================
# 4. CONSTANCIA DE SERVICIOS (LOCACION) - FUXION BIOTECH
# ==============================================================================
def build_constancia_servicios_fuxion():
    pdf_name = "Constancia_Servicios_Fuxion_Jordy_Montalvo.pdf"
    doc = SimpleDocTemplate(pdf_name, pagesize=A4, rightMargin=68, leftMargin=68, topMargin=45, bottomMargin=45)
    story = []

    story.append(make_header("fuxion-logo-navy.png", "FUXION BIOTECH S.A.C.", "Lima, 03 de octubre de 2026"))
    story.append(Spacer(1, 30))

    story.append(Paragraph("CONSTANCIA DE PRESTACIÓN DE SERVICIOS PROFESIONALES", style_title))
    story.append(Spacer(1, 15))

    p1 = """Por medio del presente documento, la empresa <b>FUXION BIOTECH S.A.C.</b>, con <b>R.U.C. N° 20513081236</b>, con domicilio fiscal en Av. El Derby N° 250, Int. 1401, distrito de Santiago de Surco, Lima, Perú:"""
    story.append(Paragraph(p1, style_body))
    story.append(Spacer(1, 10))

    story.append(Paragraph("<b>HACE CONSTAR:</b>", style_body_bold))
    story.append(Spacer(1, 8))

    p2 = """Que, el señor <b>JORDY JOSEPH MONTALVO ALFARO</b>, identificado con <b>D.N.I. N° 90162185</b>, ha prestado servicios profesionales independientes para nuestra compañía bajo la modalidad de <b>Locación de Servicios</b> (al amparo del artículo 1764° y concordantes del Código Civil Peruano), en el período comprendido desde <b>enero de 2025</b> hasta <b>agosto de 2026</b>."""
    story.append(Paragraph(p2, style_body))

    p3 = """Durante la prestación de sus servicios, el señor Montalvo estuvo a cargo de la consultoría técnica y desarrollo en calidad de:"""
    story.append(Paragraph(p3, style_body))

    p_cargo = """<b>ESPECIALISTA FULL STACK Y ARQUITECTURA CLOUD</b><br/><i>(Servicios de Desarrollo de Microservicios, APIs y Frontend E-Commerce)</i>"""
    cargo_table = Table([[Paragraph(p_cargo, ParagraphStyle('CargoBox', parent=style_body, alignment=TA_CENTER, fontSize=11, leading=15))]], colWidths=[460])
    cargo_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#f8fafc')),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#cbd5e1')),
        ('TOPPADDING', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
    ]))
    story.append(cargo_table)
    story.append(Spacer(1, 12))

    p4 = """Hacemos constar que los entregables, hitos técnicos y compromisos adquiridos fueron ejecutados con estricta puntualidad, excelencia técnica y a plena satisfacción de nuestra gerencia de tecnología."""
    story.append(Paragraph(p4, style_body))

    p5 = """Se otorga la presente constancia a solicitud del interesado para los fines que estime por conveniente."""
    story.append(Paragraph(p5, style_body))
    story.append(Spacer(1, 18))

    # Firma RRHH
    postfirma_path = "postfirma_fuxion_rrhh.png"
    if os.path.exists(postfirma_path):
        story.append(Image(postfirma_path, width=175, height=70, hAlign='LEFT'))
    else:
        story.append(Spacer(1, 35))

    story.append(HRFlowable(width="38%", thickness=1, color=colors.HexColor('#1e293b'), spaceAfter=4, hAlign='LEFT'))
    story.append(Paragraph("Lic. Mariana Morales Echevarría", style_sign_name))
    story.append(Paragraph("Gerencia de Gestión del Talento Humano<br/><b>Fuxion Biotech S.A.C.</b>", style_sign_title))

    story.append(Spacer(1, 24))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#cbd5e1'), spaceAfter=8))

    footer_text = """<b>FUXION BIOTECH S.A.C. | RUC: 20513081236</b><br/>
    Av. El Derby N° 250, Int. 1401, Santiago de Surco, Lima, Perú<br/>
    Constancia de Servicios N° FX-CS-2026-0842 | Válido para acreditación de experiencia profesional."""
    story.append(make_footer("https://verificacion.fuxion.com/serv/2026-0842", footer_text))

    doc.build(story)
    print(f"Built: {pdf_name}")

# ==============================================================================
# 5. CERTIFICADO DE TRABAJO (PLANILLA) - SIFRAH
# ==============================================================================
def build_certificado_trabajo_sifrah():
    pdf_name = "Certificado_Trabajo_Planilla_Sifrah_Jordy_Montalvo.pdf"
    doc = SimpleDocTemplate(pdf_name, pagesize=A4, rightMargin=68, leftMargin=68, topMargin=45, bottomMargin=45)
    story = []

    story.append(make_header("sifrah-logo.png", "VII NEXT S.A.C. - SIFRAH", "Lima, 03 de octubre de 2026"))
    story.append(Spacer(1, 30))

    story.append(Paragraph("CERTIFICADO DE TRABAJO", style_title))
    story.append(Spacer(1, 15))

    p1 = """La empresa <b>VII NEXT S.A.C.</b> (SIFRAH), identificada con <b>R.U.C. N° 20603352867</b>, con domicilio fiscal en Mza. P1 Lote 3 A.H. La Rinconada de Pamplona Alta, distrito de San Juan de Miraflores, Lima:"""
    story.append(Paragraph(p1, style_body))
    story.append(Spacer(1, 10))

    story.append(Paragraph("<b>CERTIFICA:</b>", style_body_bold))
    story.append(Spacer(1, 8))

    p2 = """Que, el señor <b>JORDY JOSEPH MONTALVO ALFARO</b>, identificado con <b>D.N.I. N° 72481940</b>, laboró en nuestra empresa bajo el régimen laboral de la actividad privada (Decreto Legislativo N° 728), durante el período comprendido desde el <b>09 de enero de 2023</b> hasta el <b>17 de enero de 2025</b>."""
    story.append(Paragraph(p2, style_body))

    p3 = """Habiéndose desempeñado a tiempo completo y con alto nivel de desempeño en el puesto de:"""
    story.append(Paragraph(p3, style_body))

    p_cargo = """<b>ANALISTA PROGRAMADOR FULL STACK</b><br/><i>(Área de Tecnología de la Información y Desarrollo de Sistemas)</i>"""
    cargo_table = Table([[Paragraph(p_cargo, ParagraphStyle('CargoBox', parent=style_body, alignment=TA_CENTER, fontSize=11, leading=15))]], colWidths=[460])
    cargo_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#f8fafc')),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#cbd5e1')),
        ('TOPPADDING', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
    ]))
    story.append(cargo_table)
    story.append(Spacer(1, 12))

    p4 = """Durante el tiempo en mención, demostró destacada capacidad técnica, compromiso, proactividad y un correcto espíritu colaborativo, observando una conducta intachable en todas las labores asignadas."""
    story.append(Paragraph(p4, style_body))

    p5 = """Se expide el presente certificado a solicitud del interesado para los fines que estime pertinentes."""
    story.append(Paragraph(p5, style_body))
    story.append(Spacer(1, 18))

    # Firma RRHH
    postfirma_path = "postfirma_sifrah_rrhh.png"
    if os.path.exists(postfirma_path):
        story.append(Image(postfirma_path, width=175, height=70, hAlign='LEFT'))
    else:
        story.append(Spacer(1, 35))

    story.append(HRFlowable(width="38%", thickness=1, color=colors.HexColor('#1e293b'), spaceAfter=4, hAlign='LEFT'))
    story.append(Paragraph("Lic. Claudia Lucía Benavides Vargas", style_sign_name))
    story.append(Paragraph("Jefatura de Recursos Humanos y Administración<br/><b>VII NEXT S.A.C.</b>", style_sign_title))

    story.append(Spacer(1, 24))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#cbd5e1'), spaceAfter=8))

    footer_text = """<b>VII NEXT S.A.C. | RUC: 20603352867</b><br/>
    MZA. P1 LOTE 3 A.H. LA RINCONADA DE PAMPLIACI, San Juan de Miraflores, Lima, Perú<br/>
    Certificado de Trabajo N° SF-CT-2025-0118 | Emitido para fines de acreditación laboral formal."""
    story.append(make_footer("https://verificacion.sifrah.com/cert/2025-0118", footer_text))

    doc.build(story)
    print(f"Built: {pdf_name}")

# ==============================================================================
# 6. CONSTANCIA DE SERVICIOS (LOCACION) - SIFRAH
# ==============================================================================
def build_constancia_servicios_sifrah():
    pdf_name = "Constancia_Servicios_Sifrah_Jordy_Montalvo.pdf"
    doc = SimpleDocTemplate(pdf_name, pagesize=A4, rightMargin=68, leftMargin=68, topMargin=45, bottomMargin=45)
    story = []

    story.append(make_header("sifrah-logo.png", "VII NEXT S.A.C. - SIFRAH", "Lima, 03 de octubre de 2026"))
    story.append(Spacer(1, 30))

    story.append(Paragraph("CONSTANCIA DE PRESTACIÓN DE SERVICIOS PROFESIONALES", style_title))
    story.append(Spacer(1, 15))

    p1 = """Por medio del presente documento, <b>VII NEXT S.A.C.</b> (SIFRAH), con <b>R.U.C. N° 20603352867</b>, domiciliada en Mza. P1 Lote 3 A.H. La Rinconada de Pamplona Alta, San Juan de Miraflores, Lima:"""
    story.append(Paragraph(p1, style_body))
    story.append(Spacer(1, 10))

    story.append(Paragraph("<b>HACE CONSTAR:</b>", style_body_bold))
    story.append(Spacer(1, 8))

    p2 = """Que, el señor <b>JORDY JOSEPH MONTALVO ALFARO</b>, identificado con <b>D.N.I. N° 72481940</b>, prestó servicios profesionales independientes bajo la modalidad contractual de <b>Locación de Servicios</b>, en el período comprendido desde <b>enero de 2023</b> hasta <b>enero de 2025</b>."""
    story.append(Paragraph(p2, style_body))

    p3 = """Durante dicho período, desempeñó funciones de consultoría y desarrollo en calidad de:"""
    story.append(Paragraph(p3, style_body))

    p_cargo = """<b>CONSULTOR Y DESARROLLADOR FULL STACK</b><br/><i>(Servicios de Integración de Pasarelas, Backend Transaccional y UI E-Commerce)</i>"""
    cargo_table = Table([[Paragraph(p_cargo, ParagraphStyle('CargoBox', parent=style_body, alignment=TA_CENTER, fontSize=11, leading=15))]], colWidths=[460])
    cargo_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#f8fafc')),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#cbd5e1')),
        ('TOPPADDING', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
    ]))
    story.append(cargo_table)
    story.append(Spacer(1, 12))

    p4 = """Se deja expresa constancia de que los servicios fueron prestados con puntualidad, solvencia técnica y a entera conformidad de las áreas usuarias y técnicas de nuestra organización."""
    story.append(Paragraph(p4, style_body))

    p5 = """Se expide la presente a solicitud del interesado para los fines que estime conveniente."""
    story.append(Paragraph(p5, style_body))
    story.append(Spacer(1, 18))

    # Firma RRHH
    postfirma_path = "postfirma_sifrah_rrhh.png"
    if os.path.exists(postfirma_path):
        story.append(Image(postfirma_path, width=175, height=70, hAlign='LEFT'))
    else:
        story.append(Spacer(1, 35))

    story.append(HRFlowable(width="38%", thickness=1, color=colors.HexColor('#1e293b'), spaceAfter=4, hAlign='LEFT'))
    story.append(Paragraph("Lic. Claudia Lucía Benavides Vargas", style_sign_name))
    story.append(Paragraph("Jefatura de Recursos Humanos y Administración<br/><b>VII NEXT S.A.C.</b>", style_sign_title))

    story.append(Spacer(1, 24))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#cbd5e1'), spaceAfter=8))

    footer_text = """<b>VII NEXT S.A.C. | RUC: 20603352867</b><br/>
    MZA. P1 LOTE 3 A.H. LA RINCONADA DE PAMPLIACI, San Juan de Miraflores, Lima, Perú<br/>
    Constancia de Servicios N° SF-CS-2025-0118 | Documento oficial para fines de referencia profesional."""
    story.append(make_footer("https://verificacion.sifrah.com/serv/2025-0118", footer_text))

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
