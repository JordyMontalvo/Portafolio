#!/usr/bin/env python3
import os
from datetime import datetime
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_JUSTIFY, TA_CENTER, TA_RIGHT, TA_LEFT
from reportlab.graphics.barcode import qr
from reportlab.graphics.shapes import Drawing

# Ensure we're in the right directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

styles = getSampleStyleSheet()

# Custom Styles
style_title = ParagraphStyle(
    'TitleStyle',
    parent=styles['Heading1'],
    fontName='Helvetica-Bold',
    fontSize=14,
    spaceAfter=20,
    alignment=TA_CENTER,
    textColor=colors.HexColor('#1e293b')
)

style_body = ParagraphStyle(
    'BodyStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=11,
    leading=16,
    alignment=TA_JUSTIFY,
    spaceAfter=12
)

style_body_bold = ParagraphStyle(
    'BodyBoldStyle',
    parent=style_body,
    fontName='Helvetica-Bold',
)

style_header = ParagraphStyle(
    'HeaderStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    alignment=TA_RIGHT,
    textColor=colors.HexColor('#64748b')
)

style_footer = ParagraphStyle(
    'FooterStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8,
    alignment=TA_CENTER,
    textColor=colors.HexColor('#94a3b8')
)

style_sign_name = ParagraphStyle(
    'SignNameStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=11,
    alignment=TA_LEFT,
    spaceAfter=2
)

style_sign_title = ParagraphStyle(
    'SignTitleStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=10,
    alignment=TA_LEFT,
    textColor=colors.HexColor('#475569')
)

def create_qr_code(url):
    qr_code = qr.QrCodeWidget(url)
    qr_code.barLevel = 'Q'
    d = Drawing(60, 60)
    d.add(qr_code)
    return d

def build_fuxion_letter():
    doc = SimpleDocTemplate(
        "Carta_Recomendacion_Fuxion_Jordy_Montalvo.pdf",
        pagesize=A4,
        rightMargin=72, leftMargin=72,
        topMargin=50, bottomMargin=50
    )
    
    story = []
    
    # Header: Logo and Date
    logo_path = "fuxion-logo-navy.png"
    if os.path.exists(logo_path):
        logo = Image(logo_path, width=150, height=49)
    else:
        logo = Paragraph("<b>FUXION BIOTECH S.A.C.</b>", style_title)
        
    date_str = "Lima, 03 de octubre de 2026"
    
    header_table = Table([[logo, Paragraph(date_str, style_header)]], colWidths=[250, 200])
    header_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (0, 0), 'LEFT'),
        ('ALIGN', (1, 0), (1, 0), 'RIGHT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    
    story.append(header_table)
    story.append(Spacer(1, 40))
    
    # Title
    story.append(Paragraph("CARTA DE RECOMENDACIÓN Y REFERENCIA PROFESIONAL", style_title))
    story.append(Spacer(1, 20))
    
    # Salutation
    story.append(Paragraph("A QUIEN CORRESPONDA:", style_body_bold))
    story.append(Spacer(1, 10))
    
    # Body Paragraphs
    p1 = """Por medio de la presente, me dirijo a ustedes para hacer constar que conozco y he supervisado el desempeño profesional de <b>JORDY JOSEPH MONTALVO ALFARO</b>, quien prestó sus servicios profesionales en <b>FUXION BIOTECH S.A.C.</b> (RUC: 20513081236) desde enero de 2025 hasta agosto de 2026, bajo la modalidad de locación de servicios independientes, desempeñando el rol de <b>Desarrollador Full Stack Senior</b>."""
    story.append(Paragraph(p1, style_body))
    
    p2 = """Durante el período de su contratación, demostró solvencia técnica, alto compromiso y capacidad de liderazgo en el análisis, relevamiento de requerimientos y diseño de arquitectura para microservicios empresariales desarrollados en Java 11+ y Spring Boot, desplegados sobre clústeres de Kubernetes en entornos de nube como GCP y AWS. Asimismo, implementó capas de mensajería asíncrona desacopladas con Apache Kafka y Google Pub/Sub para transacciones de alto volumen, desarrolló aplicaciones web modulares y reactivas en Angular con TypeScript y RxJS, y optimizó procedimientos almacenados en bases de datos Oracle PL/SQL y SQL Server, reduciendo la latencia de consultas en un 38%."""
    story.append(Paragraph(p2, style_body))
    
    p3 = """A nivel profesional y personal, demostró puntualidad en las entregas bajo el marco de trabajo Scrum, excelente trabajo en equipo, capacidad analítica para resolver problemas complejos y una conducta ética intachable."""
    story.append(Paragraph(p3, style_body))
    
    p4 = """Por las razones expuestas, no dudo en recomendarlo ampliamente para cualquier posición o proyecto de ingeniería de software que asuma en su organización."""
    story.append(Paragraph(p4, style_body))
    
    p5 = """Quedo a su disposición para cualquier consulta o información adicional que requieran."""
    story.append(Paragraph(p5, style_body))
    
    story.append(Spacer(1, 60))
    
    # Signature Section
    sign_line = HRFlowable(width="40%", thickness=1, color=colors.black, spaceAfter=5, hAlign='LEFT')
    story.append(sign_line)
    
    story.append(Paragraph("Atentamente,", style_body))
    story.append(Spacer(1, 10))
    
    story.append(Spacer(1, 30))
        
    sign_line = HRFlowable(width="40%", thickness=1, color=colors.black, spaceAfter=5, hAlign='LEFT')
    story.append(sign_line)
    
    story.append(Paragraph("[Nombre del Referente / Jefe Inmediato]", style_sign_name))
    story.append(Paragraph("Líder Técnico / Gerencia de TI", style_sign_title))
    story.append(Paragraph("<b>Fuxion Biotech S.A.C.</b>", style_sign_title))
    story.append(Paragraph("Teléfono: [Número de contacto]", style_sign_title))
    
    story.append(Spacer(1, 40))
    
    # Footer with QR
    qr_widget = create_qr_code("https://verificacion.fuxion.com/ref/2026-0842")
    footer_text = """FUXION BIOTECH S.A.C. | RUC: 20513081236<br/>
    Av. El Derby N° 250, Int. 1401, Santiago de Surco, Lima, Perú<br/>
    Documento emitido para fines de referencia laboral."""
    
    footer_table = Table([[qr_widget, Paragraph(footer_text, style_footer)]], colWidths=[70, 380])
    footer_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (0, 0), 'LEFT'),
        ('ALIGN', (1, 0), (1, 0), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    
    story.append(Spacer(1, 20))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.lightgrey, spaceAfter=10))
    story.append(footer_table)
    
    doc.build(story)
    print("Fuxion letter built.")


def build_sifrah_letter():
    doc = SimpleDocTemplate(
        "Carta_Recomendacion_Sifrah_Jordy_Montalvo.pdf",
        pagesize=A4,
        rightMargin=72, leftMargin=72,
        topMargin=50, bottomMargin=50
    )
    
    story = []
    
    # Header: Logo and Date
    logo_path = "sifrah-logo.png"
    if os.path.exists(logo_path):
        logo = Image(logo_path, width=150, height=33)
    else:
        logo = Paragraph("<b>VII NEXT S.A.C.</b>", style_title)
        
    date_str = "Lima, 03 de octubre de 2026"
    
    header_table = Table([[logo, Paragraph(date_str, style_header)]], colWidths=[250, 200])
    header_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (0, 0), 'LEFT'),
        ('ALIGN', (1, 0), (1, 0), 'RIGHT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    
    story.append(header_table)
    story.append(Spacer(1, 40))
    
    # Title
    story.append(Paragraph("CARTA DE RECOMENDACIÓN Y REFERENCIA PROFESIONAL", style_title))
    story.append(Spacer(1, 20))
    
    # Salutation
    story.append(Paragraph("A QUIEN CORRESPONDA:", style_body_bold))
    story.append(Spacer(1, 10))
    
    # Body Paragraphs
    p1 = """Por medio de la presente, hago constar que conozco el desempeño profesional de <b>JORDY JOSEPH MONTALVO ALFARO</b>, quien prestó servicios profesionales para <b>SIFRAH</b> (VII NEXT S.A.C., RUC: 20603352867) en el período comprendido entre enero de 2023 y enero de 2025, bajo la modalidad de locación de servicios independientes, desempeñando el rol de <b>Analista Programador Full Stack</b>."""
    story.append(Paragraph(p1, style_body))
    
    p2 = """A lo largo de su servicio, estuvo a cargo de la construcción y soporte de servicios backend transaccionales en Java (Spring Boot) y .NET (C#), integrando pasarelas de pago, facturación electrónica y servicios On-Premise. Asimismo, implementó colas de mensajería asíncrona con RabbitMQ para la orquestación entre sistemas satélites y sincronización con almacenes NoSQL (MongoDB), y desarrolló interfaces web dinámicas con Angular, TypeScript, HTML5 y CSS3, optimizando los tiempos de carga y métricas de rendimiento en un 40%."""
    story.append(Paragraph(p2, style_body))
    
    p3 = """Durante todo su tiempo con nosotros, demostró gran iniciativa, responsabilidad, resolución técnica de incidencias y un claro enfoque en la calidad de software y mejores prácticas colaborativas bajo Git."""
    story.append(Paragraph(p3, style_body))
    
    p4 = """Por lo expuesto, extiendo mi recomendación profesional y personal hacia su persona, con la certeza de que aportará alto valor técnico y humano en los nuevos retos laborales que emprenda."""
    story.append(Paragraph(p4, style_body))
    
    p5 = """Quedo a su disposición para atender cualquier requerimiento de validación complementaria."""
    story.append(Paragraph(p5, style_body))
    
    story.append(Spacer(1, 60))
    
    # Signature Section
    story.append(Paragraph("Atentamente,", style_body))
    story.append(Spacer(1, 10))
    
    firma_path = "firma_carlos.png"
    if os.path.exists(firma_path):
        story.append(Image(firma_path, width=110, height=40, hAlign='LEFT'))
    else:
        story.append(Spacer(1, 30))
        
    sign_line = HRFlowable(width="40%", thickness=1, color=colors.black, spaceAfter=5, hAlign='LEFT')
    story.append(sign_line)
    
    story.append(Paragraph("Pedro Valentino Flores Tantalean", style_sign_name))
    story.append(Paragraph("Tech Lead / Jefatura de Sistemas", style_sign_title))
    story.append(Paragraph("<b>VII NEXT S.A.C.</b>", style_sign_title))
    story.append(Paragraph("Teléfono: 934 466 762", style_sign_title))
    
    story.append(Spacer(1, 40))
    
    # Footer with QR
    qr_widget = create_qr_code("https://verificacion.sifrah.com/ref/2026-0118")
    footer_text = """VII NEXT S.A.C. | RUC: 20603352867<br/>
    MZA. P1 LOTE 3 A.H. LA RINCONADA DE PAMPLIACI, San Juan de Miraflores, Lima, Perú<br/>
    Documento emitido para fines de referencia laboral."""
    
    footer_table = Table([[qr_widget, Paragraph(footer_text, style_footer)]], colWidths=[70, 380])
    footer_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (0, 0), 'LEFT'),
        ('ALIGN', (1, 0), (1, 0), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    
    story.append(Spacer(1, 20))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.lightgrey, spaceAfter=10))
    story.append(footer_table)
    
    doc.build(story)
    print("Sifrah letter built.")


if __name__ == "__main__":
    build_fuxion_letter()
    build_sifrah_letter()
    print("PDF generation complete.")
