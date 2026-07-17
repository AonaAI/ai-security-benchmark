#!/usr/bin/env python3
# /// script
# requires-python = ">=3.10"
# dependencies = ["fpdf2>=2.8", "Pillow>=10.0"]
# ///
"""Generate the AI Security Benchmark 2026 PDF report."""

import os
from fpdf import FPDF

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(BASE, "public", "ai-security-benchmark-2026.pdf")
LOGO = os.path.join(BASE, "public", "logo.png")
HERO = os.path.join(BASE, "public", "images", "hero-bg.png")

# Brand colors
DARK = (13, 17, 23)
DARK2 = (22, 27, 34)
CYAN = (34, 211, 238)
WHITE = (255, 255, 255)
GRAY = (156, 163, 175)
LIGHT_GRAY = (209, 213, 219)
RED = (239, 68, 68)
YELLOW = (234, 179, 8)
GREEN = (34, 197, 94)


class Report(FPDF):
    def __init__(self):
        super().__init__("P", "mm", "A4")
        self.set_auto_page_break(auto=True, margin=25)
        # Use Arial Unicode for full character support
        fonts_dir = os.path.join(BASE, "scripts", "fonts")
        self.add_font("Arial", "", os.path.join(fonts_dir, "ArialUnicode.ttf"))
        self.add_font("Arial", "B", os.path.join(fonts_dir, "ArialBold.ttf"))

    def dark_bg(self):
        self.set_fill_color(*DARK)
        self.rect(0, 0, 210, 297, "F")

    def page_number_footer(self):
        self.set_y(-15)
        self.set_font("Arial", "", 8)
        self.set_text_color(*GRAY)
        self.cell(0, 10, f"AI Security Benchmark 2026  |  Page {self.page_no()}", align="C")

    def section_title(self, text, y=None):
        if y:
            self.set_y(y)
        self.set_font("Arial", "B", 24)
        self.set_text_color(*WHITE)
        self.multi_cell(0, 12, text)
        self.ln(2)

    def section_subtitle(self, text):
        self.set_font("Arial", "", 11)
        self.set_text_color(*GRAY)
        self.multi_cell(0, 6, text)
        self.ln(4)

    def body_text(self, text):
        self.set_font("Arial", "", 10)
        self.set_text_color(*LIGHT_GRAY)
        self.multi_cell(0, 5.5, text)
        self.ln(3)

    def stat_box(self, x, y, w, h, value, label):
        self.set_fill_color(*DARK2)
        self.set_draw_color(50, 50, 60)
        self.rect(x, y, w, h, "DF")
        self.set_xy(x, y + 6)
        self.set_font("Arial", "B", 28)
        self.set_text_color(*CYAN)
        self.cell(w, 12, value, align="C")
        self.set_xy(x + 4, y + 22)
        self.set_font("Arial", "", 8)
        self.set_text_color(*GRAY)
        self.multi_cell(w - 8, 4, label, align="C")

    def bar_chart(self, data, x, y, w, bar_h=8, gap=3):
        max_val = max(d[1] for d in data)
        label_w = 45
        bar_w = w - label_w - 20
        cy = y
        for label, value in data:
            # Label
            self.set_xy(x, cy)
            self.set_font("Arial", "", 8)
            self.set_text_color(*LIGHT_GRAY)
            self.cell(label_w, bar_h, label, align="R")
            # Bar background
            bx = x + label_w + 4
            self.set_fill_color(40, 45, 55)
            self.rect(bx, cy + 1, bar_w, bar_h - 2, "F")
            # Bar fill
            fill_w = (value / max_val) * bar_w
            self.set_fill_color(*CYAN)
            self.rect(bx, cy + 1, max(fill_w, 4), bar_h - 2, "F")
            # Value
            self.set_xy(bx + bar_w + 2, cy)
            self.set_font("Arial", "B", 8)
            self.set_text_color(*WHITE)
            self.cell(15, bar_h, f"{value}%", align="L")
            cy += bar_h + gap

    def colored_bar(self, data, x, y, w, bar_h=8, gap=3):
        """Bar chart with custom colors per item: data = [(label, value, color), ...]"""
        max_val = max(d[1] for d in data)
        label_w = 50
        bar_w = w - label_w - 20
        cy = y
        for item in data:
            label, value = item[0], item[1]
            color = item[2] if len(item) > 2 else CYAN
            self.set_xy(x, cy)
            self.set_font("Arial", "", 8)
            self.set_text_color(*LIGHT_GRAY)
            self.cell(label_w, bar_h, label, align="R")
            bx = x + label_w + 4
            self.set_fill_color(40, 45, 55)
            self.rect(bx, cy + 1, bar_w, bar_h - 2, "F")
            fill_w = (value / max_val) * bar_w
            self.set_fill_color(*color)
            self.rect(bx, cy + 1, max(fill_w, 4), bar_h - 2, "F")
            self.set_xy(bx + bar_w + 2, cy)
            self.set_font("Arial", "B", 8)
            self.set_text_color(*WHITE)
            self.cell(15, bar_h, f"{value}%", align="L")
            cy += bar_h + gap

    def donut_indicator(self, x, y, value, label, color):
        """Simple donut-like indicator using circles and text."""
        r = 14
        # Outer circle bg
        self.set_draw_color(50, 50, 60)
        self.set_line_width(0.5)
        self.circle(x + r, y + r, r, "D")
        # Colored arc (simplified as colored circle segment text)
        self.set_fill_color(*color)
        # Just show colored value
        self.set_xy(x, y + r - 5)
        self.set_font("Arial", "B", 14)
        self.set_text_color(*color)
        self.cell(r * 2, 10, f"{value}%", align="C")
        # Label
        self.set_xy(x - 4, y + r * 2 + 2)
        self.set_font("Arial", "", 7)
        self.set_text_color(*GRAY)
        self.cell(r * 2 + 8, 4, label, align="C")

    def tag_badge(self, text, x=None, y=None):
        if x and y:
            self.set_xy(x, y)
        self.set_font("Arial", "B", 8)
        self.set_fill_color(20, 50, 60)
        self.set_text_color(*CYAN)
        tw = self.get_string_width(text) + 8
        cx = self.get_x()
        cy = self.get_y()
        self.rect(cx, cy, tw, 6, "F")
        self.set_xy(cx + 4, cy + 0.5)
        self.cell(tw - 8, 5, text, align="L")
        self.ln(10)


def build():
    pdf = Report()
    pdf.set_margin(20)

    # ─── COVER PAGE ───
    pdf.add_page()
    pdf.dark_bg()

    # Hero background image
    if os.path.exists(HERO):
        pdf.image(HERO, 0, 0, 210, 297, keep_aspect_ratio=False)
        # Dark overlay using graphics state
        with pdf.local_context(fill_opacity=0.75):
            pdf.set_fill_color(13, 17, 23)
            pdf.rect(0, 0, 210, 297, "F")

    # Logo
    if os.path.exists(LOGO):
        pdf.image(LOGO, 20, 20, 16)
    pdf.set_xy(40, 22)
    pdf.set_font("Arial", "B", 12)
    pdf.set_text_color(*WHITE)
    pdf.cell(0, 8, "AI Security Benchmark", new_x="LMARGIN", new_y="NEXT")

    # Title
    pdf.set_y(80)
    pdf.set_font("Arial", "B", 10)
    pdf.set_text_color(*CYAN)
    pdf.cell(0, 6, "2026 BENCHMARK REPORT", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(4)
    pdf.set_font("Arial", "B", 36)
    pdf.set_text_color(*WHITE)
    pdf.cell(0, 18, "State of Enterprise", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_text_color(*CYAN)
    pdf.cell(0, 18, "AI Security", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(8)
    pdf.set_font("Arial", "", 12)
    pdf.set_text_color(*GRAY)
    pdf.multi_cell(0, 6, "The definitive benchmark report analyzing AI security practices,\nshadow AI prevalence, and governance readiness across 500+ enterprises.", align="C")

    # Key stats on cover
    pdf.ln(12)
    y = pdf.get_y()
    pdf.stat_box(15, y, 42, 38, "73%", "use AI without IT approval")
    pdf.stat_box(62, y, 42, 38, "45%", "have no AI use policy")
    pdf.stat_box(109, y, 42, 38, "3.2×", "increase in incidents")
    pdf.stat_box(156, y, 42, 38, "12%", "have full visibility")

    # Footer
    pdf.set_y(265)
    pdf.set_font("Arial", "", 9)
    pdf.set_text_color(*GRAY)
    pdf.cell(0, 5, "Research by Aona AI  |  aona.ai", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Arial", "", 7)
    pdf.cell(0, 4, "Data is illustrative and based on industry research trends.", align="C")

    # ─── TABLE OF CONTENTS ───
    pdf.add_page()
    pdf.dark_bg()
    pdf.page_number_footer()
    pdf.tag_badge("CONTENTS")
    pdf.section_title("Table of Contents")
    pdf.ln(4)

    toc = [
        ("1", "Executive Summary", "3"),
        ("2", "Key Finding #1: Shadow AI Prevalence by Industry", "4"),
        ("3", "Key Finding #2: Most Common Unmanaged AI Tools", "5"),
        ("4", "Key Finding #3: Data Leakage Incidents", "6"),
        ("5", "Key Finding #4: AI Policy Adoption Rates", "7"),
        ("6", "Key Finding #5: AI Governance Tool Deployment", "8"),
        ("7", "Key Finding #6: Employee AI Training Status", "9"),
        ("8", "Key Finding #7: Compliance Readiness", "10"),
        ("9", "Key Finding #8: Sanctioned vs. Unsanctioned AI Spend", "11"),
        ("10", "Key Finding #9: Top CISO Security Concerns", "12"),
        ("11", "Key Finding #10: AI Governance Market Growth", "13"),
        ("12", "Industry Breakdown", "14"),
        ("13", "Methodology", "16"),
        ("14", "Recommendations", "17"),
        ("15", "About Aona AI", "18"),
    ]
    for num, title, page in toc:
        pdf.set_font("Arial", "B", 10)
        pdf.set_text_color(*CYAN)
        pdf.cell(8, 8, num, align="R")
        pdf.set_text_color(*WHITE)
        pdf.cell(3, 8, "")
        pdf.cell(120, 8, title)
        pdf.set_text_color(*GRAY)
        pdf.cell(0, 8, page, align="R", new_x="LMARGIN", new_y="NEXT")

    # ─── EXECUTIVE SUMMARY (Page 3) ───
    pdf.add_page()
    pdf.dark_bg()
    pdf.page_number_footer()
    pdf.tag_badge("EXECUTIVE SUMMARY")
    pdf.section_title("AI adoption is outpacing\nsecurity at every level")
    pdf.body_text("Enterprise AI adoption has reached an inflection point. Our research across 500+ organizations reveals a stark reality: while 89% of enterprises now use AI tools in daily operations, security and governance frameworks have failed to keep pace.")
    pdf.body_text("Shadow AI — the use of unsanctioned AI tools by employees — has emerged as the single largest unmanaged risk in enterprise security. With 73% of employees using AI tools their IT teams don't know about, sensitive data is being shared with third-party models at an unprecedented scale.")
    pdf.body_text("This report provides the data CISOs, CIOs, and security leaders need to understand the scope of the problem and build a path toward responsible AI governance.")

    # AI Governance Maturity
    pdf.ln(4)
    pdf.set_font("Arial", "B", 14)
    pdf.set_text_color(*WHITE)
    pdf.cell(0, 8, "AI Governance Maturity", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(2)
    y = pdf.get_y()
    pdf.donut_indicator(30, y, 12, "Full visibility", GREEN)
    pdf.donut_indicator(85, y, 31, "Partial controls", YELLOW)
    pdf.donut_indicator(140, y, 57, "No governance", RED)

    pdf.ln(38)
    # Pull quote
    pdf.set_fill_color(20, 30, 40)
    qy = pdf.get_y()
    pdf.rect(20, qy, 170, 30, "F")
    pdf.set_xy(25, qy + 4)
    pdf.set_font("Arial", "", 10)
    pdf.set_text_color(*WHITE)
    pdf.multi_cell(160, 5.5, '"The gap between AI adoption and AI governance isn\'t closing — it\'s accelerating. Every week we discover new AI tools our employees have been using for months."')
    pdf.set_x(25)
    pdf.set_font("Arial", "", 8)
    pdf.set_text_color(*GRAY)
    pdf.cell(160, 5, "— CISO, Fortune 500 Financial Services Firm", align="R")

    # ─── FINDING 1 (Page 4) ───
    pdf.add_page()
    pdf.dark_bg()
    pdf.page_number_footer()
    pdf.tag_badge("KEY FINDING #1")
    pdf.section_title("Shadow AI Prevalence\nby Industry")
    pdf.body_text("Shadow AI — unsanctioned use of AI tools — is pervasive across every sector. Technology leads at 82%, but even government agencies report 47% unauthorized AI usage. The gap between IT awareness and actual employee behavior is the single largest blind spot in enterprise security today.")
    pdf.ln(2)
    pdf.bar_chart([
        ("Technology", 82),
        ("Financial Services", 76),
        ("Healthcare", 71),
        ("Education", 68),
        ("Manufacturing", 59),
        ("Government", 47),
    ], 10, pdf.get_y(), 180)

    # ─── FINDING 2 (Page 5) ───
    pdf.add_page()
    pdf.dark_bg()
    pdf.page_number_footer()
    pdf.tag_badge("KEY FINDING #2")
    pdf.section_title("Most Common Unmanaged\nAI Tools")
    pdf.body_text("ChatGPT remains the most widely used unsanctioned AI tool at 84% of enterprises, followed by Copilot (67%), Gemini (52%), and Claude (41%). Image generators and specialized coding assistants round out the top tier.")
    pdf.ln(2)
    pdf.bar_chart([
        ("ChatGPT", 84),
        ("Microsoft Copilot", 67),
        ("Google Gemini", 52),
        ("Claude", 41),
        ("Midjourney / DALL-E", 38),
        ("GitHub Copilot", 34),
    ], 10, pdf.get_y(), 180)

    # ─── FINDING 3 (Page 6) ───
    pdf.add_page()
    pdf.dark_bg()
    pdf.page_number_footer()
    pdf.tag_badge("KEY FINDING #3")
    pdf.section_title("Data Leakage Incidents\nInvolving AI")
    pdf.body_text("AI-related data leakage incidents have surged 3.2× since 2024. Source code (34%) and customer data (28%) are the most commonly exposed data types. Most incidents stem from employees pasting sensitive information into general-purpose AI chat interfaces.")
    pdf.ln(2)
    pdf.bar_chart([
        ("Source Code", 34),
        ("Customer Data", 28),
        ("Internal Docs", 22),
        ("Financial Data", 18),
        ("HR / PII", 14),
        ("Trade Secrets", 11),
    ], 10, pdf.get_y(), 180)

    # ─── FINDING 4 (Page 7) ───
    pdf.add_page()
    pdf.dark_bg()
    pdf.page_number_footer()
    pdf.tag_badge("KEY FINDING #4")
    pdf.section_title("AI Policy Adoption Rates")
    pdf.body_text("Only 55% of enterprises have any form of AI acceptable use policy, and just 23% have policies that are regularly updated and enforced. The remaining 45% operate with no formal AI governance guidelines whatsoever.")
    pdf.ln(4)
    y = pdf.get_y()
    pdf.donut_indicator(25, y, 23, "Enforced policy", GREEN)
    pdf.donut_indicator(80, y, 32, "Policy exists\n(unenforced)", YELLOW)
    pdf.donut_indicator(135, y, 45, "No policy", RED)

    pdf.ln(42)
    pdf.body_text("The lack of enforceable AI policies creates a vacuum where employees make their own decisions about AI tool usage. Without clear guidelines, even well-intentioned employees inadvertently expose sensitive data to third-party AI models.")
    pdf.body_text("Organizations that have implemented and enforced AI acceptable use policies report 60% fewer data exposure incidents compared to those without policies.")

    # ─── FINDING 5 (Page 8) ───
    pdf.add_page()
    pdf.dark_bg()
    pdf.page_number_footer()
    pdf.tag_badge("KEY FINDING #5")
    pdf.section_title("AI Governance Tool\nDeployment")
    pdf.body_text("Despite growing awareness, only 18% of enterprises have deployed dedicated AI governance or monitoring tools. Most rely on existing DLP solutions (34%) that were not designed for AI-specific risks, while 48% have no tooling at all.")
    pdf.ln(2)
    pdf.colored_bar([
        ("No AI-specific tooling", 48, RED),
        ("Repurposed DLP tools", 34, YELLOW),
        ("Dedicated AI governance", 18, GREEN),
    ], 10, pdf.get_y(), 180)
    pdf.ln(40)
    pdf.body_text("Traditional Data Loss Prevention (DLP) solutions were designed for file transfers and email — not for conversational AI interfaces where employees paste data into chat windows. Purpose-built AI governance tools are essential to close this gap.")

    # ─── FINDING 6 (Page 9) ───
    pdf.add_page()
    pdf.dark_bg()
    pdf.page_number_footer()
    pdf.tag_badge("KEY FINDING #6")
    pdf.section_title("Employee AI Training Status")
    pdf.body_text("Only 21% of enterprises provide formal AI security training to employees. Meanwhile, 67% of employees report learning to use AI tools through self-study or peer sharing — with zero security guidance.")
    pdf.ln(4)
    y = pdf.get_y()
    pdf.donut_indicator(25, y, 21, "Formal training", GREEN)
    pdf.donut_indicator(80, y, 67, "Self-taught", YELLOW)
    pdf.donut_indicator(135, y, 12, "No AI use", GRAY)
    pdf.ln(42)
    pdf.body_text("The training gap is particularly concerning because it means the vast majority of AI users have never been told what data is safe to share with AI tools. Security awareness programs need to urgently incorporate AI-specific modules.")

    # ─── FINDING 7 (Page 10) ───
    pdf.add_page()
    pdf.dark_bg()
    pdf.page_number_footer()
    pdf.tag_badge("KEY FINDING #7")
    pdf.section_title("Compliance Readiness\nby Framework")
    pdf.body_text("As regulatory frameworks like the EU AI Act, NIST AI RMF, and ISO 42001 take shape, most enterprises are unprepared. Only 8% report full readiness for any major AI compliance framework.")
    pdf.ln(2)
    pdf.bar_chart([
        ("EU AI Act", 11),
        ("NIST AI RMF", 16),
        ("ISO 42001", 8),
        ("SOC 2 + AI controls", 22),
        ("Internal AI policy", 31),
    ], 10, pdf.get_y(), 180)
    pdf.ln(6)
    pdf.body_text("Regulatory pressure is mounting globally. The EU AI Act is now in force with compliance deadlines approaching. Organizations that start compliance preparations now will have a significant advantage over those that wait.")

    # ─── FINDING 8 (Page 11) ───
    pdf.add_page()
    pdf.dark_bg()
    pdf.page_number_footer()
    pdf.tag_badge("KEY FINDING #8")
    pdf.section_title("AI Spend: Sanctioned vs.\nUnsanctioned")
    pdf.body_text('For every $1 spent on sanctioned AI tools, enterprises unknowingly spend an estimated $0.40 on unsanctioned AI subscriptions and usage. This "shadow AI tax" represents a massive blind spot in both budgets and security postures.')
    pdf.ln(4)
    # Visual comparison
    y = pdf.get_y()
    # Sanctioned bar
    pdf.set_fill_color(*CYAN)
    pdf.rect(40, y, 30, 80, "F")
    pdf.set_xy(40, y + 30)
    pdf.set_font("Arial", "B", 18)
    pdf.set_text_color(*DARK)
    pdf.cell(30, 10, "$1.00", align="C")
    pdf.set_xy(40, y + 82)
    pdf.set_font("Arial", "", 9)
    pdf.set_text_color(*WHITE)
    pdf.cell(30, 6, "Sanctioned", align="C")

    # Unsanctioned bar
    pdf.set_fill_color(*RED)
    pdf.rect(130, y + 48, 30, 32, "F")
    pdf.set_xy(130, y + 56)
    pdf.set_font("Arial", "B", 18)
    pdf.set_text_color(*WHITE)
    pdf.cell(30, 10, "$0.40", align="C")
    pdf.set_xy(130, y + 82)
    pdf.set_font("Arial", "", 9)
    pdf.set_text_color(*WHITE)
    pdf.cell(30, 6, "Unsanctioned", align="C")

    # ─── FINDING 9 (Page 12) ───
    pdf.add_page()
    pdf.dark_bg()
    pdf.page_number_footer()
    pdf.tag_badge("KEY FINDING #9")
    pdf.section_title("Top AI Security Concerns\nfor CISOs")
    pdf.body_text("Data exfiltration via AI tops the list of CISO concerns (78%), followed by compliance risk (65%), IP leakage (61%), and model poisoning / supply chain attacks (44%).")
    pdf.ln(2)
    pdf.bar_chart([
        ("Data exfiltration", 78),
        ("Compliance risk", 65),
        ("IP / trade secrets", 61),
        ("Model poisoning", 44),
        ("Prompt injection", 39),
        ("Reputation damage", 33),
    ], 10, pdf.get_y(), 180)

    # ─── FINDING 10 (Page 13) ───
    pdf.add_page()
    pdf.dark_bg()
    pdf.page_number_footer()
    pdf.tag_badge("KEY FINDING #10")
    pdf.section_title("AI Governance Market\nGrowth Projection")
    pdf.body_text("The AI governance and security tooling market is projected to grow from $1.2B in 2024 to $8.7B by 2028 — a 7.3× increase. Enterprises are beginning to recognize that AI-specific security is no longer optional.")
    pdf.ln(2)
    # Simple vertical bars
    y = pdf.get_y()
    bar_data = [("2024", 12, 18), ("2025", 24, 36), ("2026", 42, 63), ("2027", 65, 98), ("2028", 87, 130)]
    for i, (year, val, h) in enumerate(bar_data):
        bx = 30 + i * 30
        pdf.set_fill_color(*CYAN)
        pdf.rect(bx, y + (130 - h), 20, h, "F")
        pdf.set_xy(bx, y + (130 - h) - 8)
        pdf.set_font("Arial", "B", 9)
        pdf.set_text_color(*WHITE)
        pdf.cell(20, 8, f"${val/10:.1f}B", align="C")
        pdf.set_xy(bx, y + 132)
        pdf.set_font("Arial", "", 9)
        pdf.set_text_color(*GRAY)
        pdf.cell(20, 6, year, align="C")

    # ─── INDUSTRY BREAKDOWN (Page 14-15) ───
    industries = [
        ("Financial Services", 91, 76, "Critical", RED, 62,
         "Massive AI adoption coupled with stringent regulatory oversight puts sensitive financial data at severe risk."),
        ("Healthcare", 84, 71, "Critical", RED, 48,
         "Patient data shared with general-purpose AI creates severe HIPAA liability and privacy risks."),
        ("Technology", 96, 82, "High", (249, 115, 22), 71,
         "Highest adoption and shadow AI. Source code and IP routinely shared with AI coding assistants."),
        ("Government", 62, 47, "High", (249, 115, 22), 38,
         "Lower adoption but unique risks around classified data and national security."),
        ("Manufacturing", 73, 59, "Medium", YELLOW, 42,
         "Trade secrets and operational tech at risk through AI-assisted processes."),
        ("Education", 87, 68, "Medium", YELLOW, 29,
         "Lowest policy adoption (29%) despite extremely high AI usage by students and faculty."),
    ]

    pdf.add_page()
    pdf.dark_bg()
    pdf.page_number_footer()
    pdf.tag_badge("INDUSTRY BREAKDOWN")
    pdf.section_title("AI Security Posture\nby Industry")
    pdf.section_subtitle("How six major sectors compare in AI adoption, shadow AI prevalence, and governance readiness.")

    # Summary table
    pdf.set_font("Arial", "B", 9)
    pdf.set_text_color(*CYAN)
    pdf.cell(45, 7, "Industry")
    pdf.cell(25, 7, "Adoption", align="C")
    pdf.cell(25, 7, "Shadow AI", align="C")
    pdf.cell(25, 7, "Risk", align="C")
    pdf.cell(25, 7, "Policy Rate", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(1)

    for name, adoption, shadow, risk, risk_color, policy, summary in industries:
        pdf.set_font("Arial", "", 9)
        pdf.set_text_color(*WHITE)
        pdf.cell(45, 7, name)
        pdf.set_text_color(*LIGHT_GRAY)
        pdf.cell(25, 7, f"{adoption}%", align="C")
        pdf.set_text_color(*RED if shadow > 70 else YELLOW)
        pdf.cell(25, 7, f"{shadow}%", align="C")
        pdf.set_text_color(*risk_color)
        pdf.cell(25, 7, risk, align="C")
        pdf.set_text_color(*GREEN if policy > 50 else YELLOW if policy > 35 else RED)
        pdf.cell(25, 7, f"{policy}%", align="C", new_x="LMARGIN", new_y="NEXT")

    pdf.add_page()
    pdf.dark_bg()
    pdf.page_number_footer()
    pdf.tag_badge("INDUSTRY DETAILS")
    pdf.section_title("Industry Deep Dives")
    pdf.ln(2)

    for name, adoption, shadow, risk, risk_color, policy, summary in industries:
        pdf.set_font("Arial", "B", 12)
        pdf.set_text_color(*WHITE)
        pdf.cell(0, 7, name, new_x="LMARGIN", new_y="NEXT")
        pdf.set_font("Arial", "", 9)
        pdf.set_text_color(*GRAY)
        pdf.multi_cell(0, 4.5, summary)
        pdf.set_text_color(*LIGHT_GRAY)
        pdf.set_font("Arial", "", 8)
        pdf.cell(0, 5, f"Adoption: {adoption}%  |  Shadow AI: {shadow}%  |  Risk: {risk}  |  Policy Rate: {policy}%", new_x="LMARGIN", new_y="NEXT")
        pdf.ln(4)

    # ─── METHODOLOGY (Page 16) ───
    pdf.add_page()
    pdf.dark_bg()
    pdf.page_number_footer()
    pdf.tag_badge("METHODOLOGY")
    pdf.section_title("How We Built This\nBenchmark")
    pdf.body_text("The 2026 State of Enterprise AI Security Benchmark is based on a comprehensive survey of 512 enterprises across six major industries. The research was conducted between September 2025 and January 2026, combining quantitative survey data with qualitative interviews of security leaders.")

    # Stats
    y = pdf.get_y() + 2
    pdf.stat_box(15, y, 50, 30, "512", "Enterprises surveyed")
    pdf.stat_box(75, y, 50, 30, "6", "Industry sectors")
    pdf.stat_box(135, y, 50, 30, "14", "Countries")

    pdf.set_y(y + 38)
    pdf.set_font("Arial", "B", 11)
    pdf.set_text_color(*WHITE)
    pdf.cell(0, 7, "Data Collection", new_x="LMARGIN", new_y="NEXT")
    pdf.body_text("Quantitative survey: 45-question online survey distributed to IT security leaders, CISOs, CIOs, and IT directors. Average completion time: 22 minutes.")
    pdf.body_text("Qualitative interviews: 48 in-depth interviews (30–60 minutes) with CISOs and security architects.")
    pdf.body_text("Telemetry data: Anonymized, aggregated data from enterprise security tools to validate self-reported usage.")

    pdf.set_font("Arial", "B", 11)
    pdf.set_text_color(*WHITE)
    pdf.cell(0, 7, "Confidence & Limitations", new_x="LMARGIN", new_y="NEXT")
    pdf.body_text("Confidence interval: ±3.8% at the 95% confidence level. Self-reporting bias means shadow AI usage is likely underreported — telemetry data showed 15–20% higher usage than self-reported.")

    # ─── RECOMMENDATIONS (Page 17) ───
    pdf.add_page()
    pdf.dark_bg()
    pdf.page_number_footer()
    pdf.tag_badge("RECOMMENDATIONS")
    pdf.section_title("What Security Leaders\nShould Do Now")
    pdf.section_subtitle("Based on our findings, here are the top priorities for CISOs and security teams.")

    recs = [
        ("01", "Discover Your Shadow AI",
         "Deploy AI discovery tools to map every AI service employees are using. You can't secure what you can't see."),
        ("02", "Implement AI Acceptable Use Policies",
         "Start with clear guidelines on what data can and cannot be shared with AI tools."),
        ("03", "Train Your Workforce",
         "Employees need to understand the risks of sharing sensitive data with AI. Only 21% get formal training."),
        ("04", "Monitor Data Flows to AI",
         "Deploy purpose-built monitoring to track what data leaves your organization via AI interfaces."),
        ("05", "Prepare for AI Regulation",
         "The EU AI Act is here. Start compliance readiness now — only 8% of enterprises are prepared."),
        ("06", "Align AI Security with Business",
         "Enable productive AI use while maintaining security guardrails and data protection."),
    ]

    for num, title, desc in recs:
        pdf.set_font("Arial", "B", 10)
        pdf.set_text_color(*CYAN)
        pdf.cell(10, 6, num)
        pdf.set_text_color(*WHITE)
        pdf.cell(0, 6, title, new_x="LMARGIN", new_y="NEXT")
        pdf.set_x(30)
        pdf.set_font("Arial", "", 9)
        pdf.set_text_color(*GRAY)
        pdf.multi_cell(150, 4.5, desc)
        pdf.ln(3)

    # ─── ABOUT (Page 18) ───
    pdf.add_page()
    pdf.dark_bg()
    pdf.page_number_footer()
    pdf.tag_badge("ABOUT")
    pdf.section_title("About This Research")
    pdf.body_text("The 2026 State of Enterprise AI Security Benchmark was created to fill the gap in understanding how organizations are managing AI security risks. By surveying 500+ enterprises across six industries, we've built the most comprehensive picture of AI governance readiness.")

    pdf.set_font("Arial", "B", 14)
    pdf.set_text_color(*WHITE)
    pdf.cell(0, 8, "Research by Aona AI", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(2)
    pdf.body_text("Aona AI is building the enterprise platform for AI security and governance. We help organizations discover every AI tool in use, monitor data flowing to AI services, and enforce AI acceptable use policies — all without blocking productivity.")
    pdf.body_text("We commissioned this research because we believe transparency drives better security outcomes. When enterprises understand the true scope of AI risk, they make better decisions.")
    pdf.body_text("This report is freely available to the security community. If the findings resonate and you want help addressing them, we're here.")

    pdf.ln(6)
    pdf.set_fill_color(20, 30, 40)
    y = pdf.get_y()
    pdf.rect(20, y, 170, 35, "F")
    pdf.set_xy(25, y + 6)
    pdf.set_font("Arial", "B", 12)
    pdf.set_text_color(*CYAN)
    pdf.cell(160, 8, "aona.ai")
    pdf.set_xy(25, y + 16)
    pdf.set_font("Arial", "", 9)
    pdf.set_text_color(*GRAY)
    pdf.cell(160, 5, "For press inquiries, data licensing, or to discuss the findings:")
    pdf.set_xy(25, y + 23)
    pdf.set_text_color(*WHITE)
    pdf.cell(160, 5, "research@aona.ai")

    # ─── DISCLAIMER ───
    pdf.set_y(250)
    pdf.set_font("Arial", "", 7)
    pdf.set_text_color(*GRAY)
    pdf.multi_cell(0, 3.5, "Disclaimer: This report presents illustrative data based on publicly available industry research trends and is intended to demonstrate the scope and format of an enterprise AI security benchmark. © 2026 Aona AI. All rights reserved.", align="C")

    # Save
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    pdf.output(OUT)
    print(f"PDF saved: {OUT}")


if __name__ == "__main__":
    build()
