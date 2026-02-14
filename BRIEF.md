# AISecurityBenchmark.com — Project Brief

## What
A "State of Enterprise AI Security" report site. Presents benchmark data, industry breakdowns, and key findings about enterprise AI adoption risks. Generates backlinks, press coverage, and positions Aona AI as a thought leader.

## Tech Stack
- **Next.js 14** (App Router, static export), **Tailwind CSS**, **TypeScript**
- Firebase Hosting (`output: "export"`, `distDir: "out"`)

## Brand
- Dark purple `#11021d` / `#1a0533` / `#2d1054`, accent `#6412A6`, Manrope font
- "Research by Aona AI"

## Pages

### 1. Landing Page (`/`)
- Hero: "2026 State of Enterprise AI Security — The Definitive Benchmark Report"
- Key stat highlights (big bold numbers):
  - "73% of employees use AI tools without IT approval"
  - "45% of organizations have no AI acceptable use policy"
  - "3.2x increase in AI-related data incidents since 2024"
  - "Only 12% of enterprises have full visibility into AI tool usage"
- Executive summary section
- CTA: "Download the Full Report" (email-gated) + "Explore the Data"

### 2. Key Findings (`/findings`)
- 10 key findings with data visualizations:
  1. Shadow AI prevalence by industry
  2. Most common unmanaged AI tools
  3. Data leakage incidents involving AI
  4. AI policy adoption rates
  5. AI governance tool deployment
  6. Employee AI training status
  7. Compliance readiness by framework
  8. AI spend (sanctioned vs unsanctioned)
  9. Top AI security concerns for CISOs
  10. Projected AI governance market growth
- Each finding: stat, chart/visualization, analysis paragraph

### 3. Industry Breakdown (`/industries`)
- Breakdown by industry:
  - Financial Services, Healthcare, Technology, Government, Manufacturing, Education
- For each: AI adoption rate, risk level, common tools, compliance challenges
- Comparative charts

### 4. Methodology (`/methodology`)
- How the data was gathered (survey of 500+ enterprises — aspirational/synthetic for now)
- Sample demographics
- Confidence levels
- Builds credibility

### 5. Download Report (`/download`)
- Email capture form
- Full PDF report download
- "Want to address these findings? Talk to Aona AI" CTA

### 6. About (`/about`)
- About the research
- Aona AI as research sponsor

## Data Visualizations
Build reusable chart components using CSS/SVG (no external charting libs to keep bundle small):
- Bar charts (horizontal + vertical)
- Donut/pie charts
- Stat cards with big numbers
- Comparison tables
All with smooth animations on scroll.

## Content
Use realistic but clearly marked as illustrative data. Make it compelling — the kind of report a CISO would share internally. Base numbers on publicly available industry research trends.

## SEO
- Meta: "2026 State of Enterprise AI Security — Benchmark Report by Aona AI"
- Target: "AI security benchmark", "enterprise AI security report", "shadow AI statistics"
- Schema.org: Report + Dataset markup

## Firebase
- `firebase.json` → `out/`
- `.firebaserc` → project: `aona-ai-security-bench`
