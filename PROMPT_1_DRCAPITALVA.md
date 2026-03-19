# DR. CAPITAL VA — Complete Healthcare Virtual Assistant Website
# Feed this entire prompt + the drcapitalva-homepage.html reference file to Claude Code.

You are building drcapitalva.com from scratch. This is a standalone Next.js 14+ site for healthcare virtual assistant services. It is NOT a copy of thehuman.capital — it has its own design system, its own voice, its own identity. But it feeds leads to both itself and the parent company.

The file drcapitalva-homepage.html is your design reference. Match its exact aesthetic: deep teal (#0C3B3B) and coral (#D4856A) on warm cream (#FDF9F4), DM Serif Display + Plus Jakarta Sans, soft rounded corners, clinical luxury feel. Every page on this site must look like it belongs to a premium healthcare brand, not a VA agency.

Read every section completely before writing any code.

---

## TECH STACK
```
Framework: Next.js 14+ (App Router)
Styling: Tailwind CSS 3.4+
Animations: CSS @keyframes + Intersection Observer (NO Framer Motion — keep it fast)
Fonts: Google Fonts (DM Serif Display, Plus Jakarta Sans) via next/font/google
Forms: Next.js API route → Resend SDK → info@thehuman.capital
Blog: MDX with next-mdx-remote
Hosting: Vercel
Analytics: Google Analytics 4 + Vercel Analytics
SEO: Next.js metadata API + next-sitemap
Performance target: Lighthouse 95+
```

---

## BRAND SYSTEM

### Colors
```
--teal-deep: #0C3B3B (primary — nav, headings, dark sections, buttons)
--teal-mid: #1A5C5C
--teal-light: #2A8A8A
--teal-accent: #3DB5AD (highlights, badges, active states)
--warm-white: #FDF9F4 (primary background)
--warm-cream: #F5EDE3 (alternate sections)
--warm-sand: #E8DDD0
--coral-accent: #D4856A (secondary accent — emphasis, italic text, hover states)
--text-primary: #1A1A1A
--text-secondary: #5A5A5A
--text-muted: #8A8A8A
```

### Typography
- Headlines: DM Serif Display, italic for emphasis
- Body/UI: Plus Jakarta Sans, weights 300-700
- Section labels: 12px, 700 weight, 0.14em letter-spacing, uppercase, teal-light color
- Section headings: DM Serif Display, clamp(32px, 3.5vw, 48px), teal-deep
- Body: 16-17px, line-height 1.7, text-secondary

### Design Rules
- Rounded corners (16-24px on cards, 60px on buttons)
- Soft shadows, no hard edges
- Radial gradient blurs as background accents
- Top-edge gradient bars on cards (teal-deep → teal-accent → coral)
- NO emojis. NO decorative icons. Typography and color only.
- Feels like a healthcare brand website, not a tech startup

---

## SITE STRUCTURE — ALL PAGES

### CORE PAGES

#### Homepage (`/`)
Use the drcapitalva-homepage.html as the exact reference. Rebuild it in Next.js with all sections:
- Nav with mega-menu (see Navigation section below)
- Hero: "Your practice deserves better than burnout."
- Trust bar: HIPAA Trained, NDA-Protected, Checkr Verified, Encrypted Communication, Dedicated Client Manager
- Services grid: Patient Scheduling, Medical Billing Support, Patient Follow-Up, Intake Management, Referral Coordination, Telehealth Support
- Compliance section: HIPAA training, BAAs, encrypted comms, background checks
- Specialties grid: Primary Care, Dental, Mental Health, Cardiology, Orthopedics, Dermatology, Pediatrics, Multi-Location
- Metrics: 97% retention, 48hr match, 3% hired, $700 starting
- Testimonial
- CTA
- Deep footer

#### About (`/about`) — 2,000+ words
- Hero: "Built for healthcare. Backed by The Human Capital."
- Founder story adapted for healthcare vertical: why healthcare specifically needs human VAs, not chatbots
- Mission: bringing operational support to practices drowning in admin
- The Human Capital connection: "Dr. Capital VA is a division of The Human Capital, a managed virtual assistant agency founded in 2019 by Piyoosh Rai."
- Timeline: Founded 2019 → Healthcare division launched → HIPAA certification program → Client portal launch 2025
- Link back to thehuman.capital

#### How It Works (`/how-it-works`) — 2,000+ words
- 4-step process (Strategy Call → VA Match → Onboarding → Launch)
- Emphasis on HIPAA-specific onboarding: compliance training, BAA signing, system access protocols
- Client Manager role in healthcare context
- Tools: Practice management systems, EHR platforms, scheduling software
- Backup VA coverage during leave — critical for clinics

#### Pricing (`/pricing`) — 1,500+ words
- Three tiers: Part-Time $700, Full-Time $1,300, Enterprise Custom
- Feature comparison focused on healthcare needs
- Cost comparison: medical receptionist salary ($38K-$45K) vs Dr. Capital VA ($700-$1,300/mo)
- Competitor comparison: vs Hello Rache, vs ScribeEMR, vs generic VA agencies
- FAQ (6 questions, healthcare-specific): HIPAA compliance, EHR access, after-hours coverage, multi-location pricing
- All pricing shown in USD on main page
- CTA to contact form

#### Contact (`/contact`)
- Form: Name, Practice Name, Email, Phone, Specialty (dropdown: Primary Care, Dental, Mental Health, Cardiology, Orthopedics, Dermatology, Pediatrics, Multi-Specialty, Other), Message
- Submits to info@thehuman.capital via API route
- Phone: (813) 761-8268
- "We respond within 24 business hours"

#### Client Portal (`/portal`) — 1,000+ words
- Feature overview for healthcare context
- HIPAA-compliant document sharing emphasis
- Screenshot reference from parent site
- "Launching March 2025"

---

### SERVICE PAGES (6 pages, 2,500+ words each)

Each service page must contain:
1. Hero with H1 containing primary keyword
2. 8-10 specific tasks the VA handles, each with full paragraph (not bullets)
3. EHR/Practice Management tools used
4. Compliance section (how this service maintains HIPAA)
5. Cost comparison table (local hire vs freelancer vs Dr. Capital VA)
6. Relevant case study (Challenge → Solution → Result, 200 words)
7. "Which specialties use this service" section with links to specialty pages
8. FAQ (4 questions + FAQPage JSON-LD)
9. "Available in these locations" linking to city-service pages
10. CTA: embedded contact form
11. Interlinking to 3 other service pages, 2 city-service pages, 1 comparison page

#### `/services/patient-scheduling`
Primary keyword: "patient scheduling virtual assistant"
Tasks: Appointment booking, rescheduling, cancellation management, waitlist coordination, multi-provider calendar optimization, new patient slot allocation, recurring visit scheduling, no-show follow-up calls, appointment reminder management, provider calendar blocking
Tools: Athenahealth, Epic, eClinicalWorks, Kareo, DrChrono, Practice Fusion, NextGen
Cost comparison: Medical receptionist $38K-$45K/yr vs Dr. Capital VA $700-$1,300/mo

#### `/services/medical-billing`
Primary keyword: "medical billing virtual assistant"
Tasks: Insurance verification, eligibility checking, claims submission support, payment posting, denial management, patient billing inquiries, EOB review, coding support (CPT/ICD-10 reference only — not coding), collections follow-up, aging report management
Tools: AdvancedMD, Kareo Billing, CollaborateMD, DrChrono, Tebra
Cost comparison: Medical biller $40K-$55K/yr

#### `/services/patient-follow-up`
Primary keyword: "patient follow up virtual assistant"
Tasks: Post-visit calls, appointment reminders (phone, text, email), prescription refill coordination, lab result notification calls, referral follow-through, care plan adherence check-ins, preventive care reminders, patient satisfaction surveys, recall management, chronic care management support
Tools: Practice management phone integration, EHR task systems, patient communication platforms

#### `/services/intake-management`
Primary keyword: "patient intake virtual assistant"
Tasks: New patient registration, insurance card processing, demographic data entry, medical history collection, consent form distribution, HIPAA authorization forms, referral documentation, prior authorization initiation, provider directory verification, patient portal account setup
Tools: EHR intake modules, secure fax, patient portal systems

#### `/services/referral-coordination`
Primary keyword: "referral coordination virtual assistant"
Tasks: Specialist referral processing, prior authorization management, records transfer coordination, appointment scheduling with specialists, follow-up on pending authorizations, insurance network verification, referral tracking and status updates, patient communication regarding referral status
Tools: EHR referral modules, fax systems, insurance portals

#### `/services/telehealth-support`
Primary keyword: "telehealth virtual assistant"
Tasks: Virtual visit scheduling, patient tech support for video platforms, pre-visit form distribution, consent collection for telehealth, post-visit documentation support, prescription follow-up, telehealth billing support, platform troubleshooting, waiting room management
Tools: Doxy.me, Zoom for Healthcare, Teladoc platform, EHR telehealth modules

---

### SPECIALTY PAGES (8 pages, 1,500+ words each)

Each specialty page targets "[specialty] virtual assistant" keywords.

#### `/specialties/primary-care` 
#### `/specialties/dental`
#### `/specialties/mental-health`
#### `/specialties/cardiology`
#### `/specialties/orthopedics`
#### `/specialties/dermatology`
#### `/specialties/pediatrics`
#### `/specialties/multi-location`

Each contains:
1. H1: "[Specialty] Virtual Assistant Services"
2. How a VA supports this specific specialty (400 words)
3. Common tasks unique to this specialty
4. Relevant compliance considerations
5. Case study or proof point
6. Tools specific to this specialty
7. FAQ (3-4 questions)
8. "Available in these locations" with city-service links
9. CTA
10. Links to relevant service pages

---

### COMPLIANCE PAGES (The Standard)

#### `/compliance/hipaa` — 2,500+ words
Primary keyword: "HIPAA compliant virtual assistant"
This is your #1 authority page. Deep dive into:
- What HIPAA requires for remote workers handling PHI
- Business Associate Agreements explained
- How Dr. Capital VA trains and certifies VAs
- Encryption and secure communication protocols
- Access controls and audit trails
- Breach notification procedures
- Annual recertification process
- Checkr background verification
- Comparison: most VA companies don't even mention HIPAA

#### `/compliance/vetting-process` — 2,000+ words
5-step vetting adapted for healthcare context

#### `/compliance/security` — 1,500+ words
Technical security measures, encryption, access controls, data handling

---

### COMPARISON PAGES (5 pages, 2,500+ words each)

#### `/compare/hello-rache`
Hello Rache: Healthcare-focused VAs, Philippines-based, $9.50/hr
Position: Dr. Capital VA offers dedicated Client Manager, Checkr background checks, backup coverage, month-to-month flexibility

#### `/compare/scribeemr`
ScribeEMR: Medical scribing focus, $8-12/hr
Position: Dr. Capital VA covers full admin, not just scribing — scheduling, billing, follow-up, intake

#### `/compare/athena-health-va`
Athena (VA service): $3,000+/mo, 12-month lock-in
Position: Dr. Capital VA at $700-$1,300, month-to-month, same quality vetting

#### `/compare/myoutdesk-healthcare`
MyOutDesk: Real estate focused, some healthcare
Position: Dr. Capital VA is healthcare-only, HIPAA-first, specialty-trained

#### `/compare/generic-va-agencies`
Generic VA agencies: Belay, Wing, etc. — no healthcare specialization
Position: Dr. Capital VA understands clinical workflows, compliance, EHR systems

Each comparison page contains:
- Feature-by-feature table
- Honest analysis (where competitor might be better)
- Who should choose whom
- Pricing comparison
- CTA

---

### TOOL PAGES (6 pages, 1,500+ words each)

#### `/tools/athenahealth` — Athenahealth VA support
#### `/tools/epic` — Epic EHR VA support  
#### `/tools/eclinicalworks` — eClinicalWorks VA support
#### `/tools/kareo` — Kareo/Tebra VA support
#### `/tools/drchrono` — DrChrono VA support
#### `/tools/practice-fusion` — Practice Fusion VA support

Each contains:
- What the platform does
- Specific tasks a VA handles inside this platform
- How VAs are trained on it
- Which specialties commonly use it
- Related service pages
- CTA

---

### LOCATION PAGES (Programmatic SEO)

#### URL Structure:
```
/locations/[region]/                        → Regional hub
/locations/[region]/[city]/                 → City hub
/locations/[region]/[city]/[service-slug]/  → City-service page (MONEY PAGE)
```

#### Regions and Cities:
**United States** `/locations/usa/`
Cities: new-york, los-angeles, miami, chicago, houston, dallas, atlanta, tampa, boston, san-francisco, denver, seattle

**United Kingdom** `/locations/uk/`
Cities: london, manchester, birmingham, edinburgh, dublin

**Middle East** `/locations/middle-east/`
Cities: dubai, abu-dhabi, riyadh, doha

**Australia & NZ** `/locations/apac/`
Cities: sydney, melbourne, perth, brisbane, auckland

#### Service slugs for city-service pages:
- patient-scheduling
- medical-billing
- patient-follow-up
- intake-management
- referral-coordination
- telehealth-support

#### Regional hub pages (2,000+ words each):
- Healthcare landscape in that region
- Compliance frameworks (HIPAA for US, CQC/GDPR for UK, DHA/HAAD for ME, AHPRA for APAC)
- Local salary data for medical admin roles
- City grid with links
- CTA

#### City hub pages (1,500+ words each):
- Healthcare market in that city (major hospital systems, clinics, specialties in demand)
- Local medical admin salary ("A medical receptionist in [City] costs $[X]/year. A Dr. Capital VA costs $700-$1,300/month.")
- Service grid linking to city-service pages
- Compliance note relevant to that city/state
- CTA with embedded form

#### City-service pages — THE MONEY PAGES (2,500+ words each):
Primary keyword: "[service] virtual assistant [city]"
Example: "patient scheduling virtual assistant Miami"

Every city-service page MUST contain:
1. H1: "[Service] Virtual Assistant in [City]"
2. Opening: City-specific healthcare context (150 words). Reference actual hospital systems, medical districts, healthcare employers in that city.
3. What your VA handles: 6-8 tasks specific to this service, full paragraphs (400 words)
4. Local cost comparison table:
   | Option | Monthly Cost | What You Get |
   | Local medical receptionist | $[city-specific]/yr | Salary + benefits + turnover risk |
   | Freelancer | $X/hr | No HIPAA training, no backup |
   | Dr. Capital VA | $700-$1,300/mo | HIPAA trained, dedicated, managed |
5. Compliance section: How this service maintains HIPAA in a remote setting
6. Case study: Most relevant
7. Tools: EHR/practice management platforms used
8. FAQ: 4 city+service specific questions with FAQPage schema
9. CTA: Embedded contact form (not just a link)
10. Interlinking:
    - "Also available in:" → same service, other cities in region
    - "Other services in [City]:" → other services, same city
    - "For your specialty:" → relevant specialty page
    - "Compare us:" → relevant comparison page
    - "Part of The Human Capital" → link to thehuman.capital

#### Currency display on regional pages:
- USA: USD only ($700 / $1,300)
- UK: GBP primary (£560 / £1,040) with note "All invoicing in USD. GBP shown for reference."
- Middle East: AED primary (AED 2,570 / AED 4,775) with same note
- APAC: AUD for Australia (A$1,080 / A$2,010), NZD for Auckland (NZ$1,160 / NZ$2,150)

---

### BLOG POSTS (10 articles, 1,800-2,500 words each)

Every blog post must contain:
- Full article (no stubs, no placeholders)
- H2/H3 subheadings
- Internal links: 2 service pages, 1 city-service page, 1 comparison page, 1 link to thehuman.capital
- Mention of pricing ($700/$1,300) somewhere natural
- CTA at end: "Book a strategy call"
- FAQ section (3 questions + schema)

#### Post 1: "HIPAA-Compliant Virtual Assistants: The Complete Guide for Medical Practices"
Slug: hipaa-va-guide
Keyword: "HIPAA compliant virtual assistant"
Content: What HIPAA requires, how Dr. Capital VA meets every requirement, BAAs, encryption, training. The definitive resource.

#### Post 2: "How Much Does a Medical Virtual Assistant Cost in 2025?"
Slug: medical-va-cost
Keyword: "medical virtual assistant cost"
Content: Pricing breakdown — Hello Rache ($9.50/hr), ScribeEMR ($8-12/hr), local hire ($38K-$45K), Dr. Capital VA ($700-$1,300/mo). ROI math.

#### Post 3: "Patient Scheduling Best Practices: How VAs Reduce No-Shows by 40%"
Slug: reduce-patient-no-shows
Keyword: "reduce patient no shows"
Content: Reminder systems, follow-up protocols, waitlist management, scheduling optimization. How a VA makes this happen consistently.

#### Post 4: "The True Cost of Medical Receptionist Turnover (And How to Avoid It)"
Slug: medical-receptionist-turnover
Keyword: "medical receptionist turnover"
Content: Average receptionist tenure, cost of replacement ($3K-$5K per hire), training time, patient experience impact. Position dedicated VA as the solution.

#### Post 5: "Virtual Assistants for Dental Practices: What You Need to Know"
Slug: dental-va-guide
Keyword: "virtual assistant dental practice"
Content: Dental-specific tasks, recall management, insurance pre-auth, treatment plan follow-up. Specialty deep dive.

#### Post 6: "How Multi-Location Clinics Standardize Admin with Virtual Assistants"
Slug: multi-location-clinic-va
Keyword: "multi location clinic virtual assistant"
Content: Centralized scheduling, standardized intake, cross-location reporting, compliance consistency. Cannabis case study adapted.

#### Post 7: "Medical Billing Virtual Assistants: Claims, Denials, and Revenue Cycle Support"
Slug: medical-billing-va
Keyword: "medical billing virtual assistant"
Content: Insurance verification, claims follow-up, denial management, patient billing. What a VA can and cannot do (not a certified coder).

#### Post 8: "Telehealth Support: Why Your Virtual Visits Need a Virtual Assistant"
Slug: telehealth-va-support
Keyword: "telehealth virtual assistant"
Content: Pre-visit prep, tech support, scheduling, documentation, post-visit follow-up. Growing demand since COVID.

#### Post 9: "EHR Management: How a VA Keeps Your Patient Records Clean and Current"
Slug: ehr-management-va
Keyword: "EHR virtual assistant"
Content: Data entry, chart maintenance, duplicate cleanup, lab result routing, medication list updates. Platform-specific tips.

#### Post 10: "Hello Rache vs. Dr. Capital VA: Which Healthcare VA Service Is Right for You?"
Slug: vs-hello-rache
Keyword: "Hello Rache alternative"
Content: Honest comparison — pricing, features, compliance, management layer. Capture competitor search traffic.

---

### RESOURCE PAGES

#### `/resources/hipaa-checklist` — Email-gated downloadable
"HIPAA Compliance Checklist for Remote Healthcare Workers" — captures email before PDF download

#### `/resources/roi-calculator`
Interactive calculator: Input hourly rate + hours on admin per week → shows annual cost of doing it yourself vs Dr. Capital VA cost → ROI

---

### LEGAL PAGES
- `/privacy` — Privacy policy mentioning HIPAA data handling
- `/terms` — Terms of service

---

## DATA FILE

Create `/lib/healthcare-data.ts` containing:

```typescript
export const regions = [
  {
    name: "United States",
    slug: "usa",
    currency: "USD",
    currencySymbol: "$",
    complianceFrameworks: ["HIPAA", "HITECH"],
    cities: [
      {
        name: "New York",
        slug: "new-york",
        state: "New York",
        timezone: "EST",
        medicalDistricts: ["Manhattan Medical Mile", "Brooklyn Hospital District", "Long Island Medical Centers"],
        majorSystems: ["NYU Langone", "Mount Sinai", "NewYork-Presbyterian"],
        avgSalaries: {
          medicalReceptionist: 42000,
          medicalBiller: 48000,
          officeManager: 58000,
        },
        topSpecialties: ["primary-care", "mental-health", "cardiology", "dermatology"],
        services: ["patient-scheduling", "medical-billing", "patient-follow-up", "intake-management", "referral-coordination", "telehealth-support"],
        context: "New York's dense healthcare market means fierce competition for front-desk talent. Medical receptionists in Manhattan command $42K+ and turnover is high."
      },
      // ... all other cities with same structure
    ]
  },
  // UK with CQC/GDPR compliance, GBP currency
  // Middle East with DHA/HAAD compliance, AED/QAR currency
  // APAC with AHPRA compliance, AUD/NZD currency
];

export const services = [
  {
    name: "Patient Scheduling",
    slug: "patient-scheduling",
    shortDesc: "Appointment booking, reminders, no-show management",
    primaryKeyword: "patient scheduling virtual assistant",
    tools: ["athenahealth", "epic", "eclinicalworks", "kareo"],
    relatedSpecialties: ["all"],
    caseStudy: "healthcare"
  },
  // ... all 6 services
];

export const competitors = [
  {
    name: "Hello Rache",
    slug: "hello-rache",
    price: "$9.50/hr (~$1,520/mo full-time)",
    contract: "Month-to-month",
    hipaaCompliant: true,
    dedicatedVA: true,
    clientManager: false,
    backgroundCheck: "Internal screening",
    backupVA: false,
    strengths: "Low hourly rate, healthcare-focused",
    weaknesses: "No Client Manager, no Checkr verification, Philippines-based only"
  },
  // ... all competitors
];

export const specialties = [
  { name: "Primary Care", slug: "primary-care", tasks: [...], tools: [...] },
  // ... all 8 specialties
];

export const tools = [
  { name: "Athenahealth", slug: "athenahealth", category: "Practice Management & EHR", specialties: [...] },
  // ... all 6 tools
];
```

---

## NAVIGATION

### Header Mega-Menu:
**Services** (dropdown):
- Patient Scheduling | Medical Billing | Patient Follow-Up | Intake Management | Referral Coordination | Telehealth Support

**Specialties** (dropdown):
- Primary Care | Dental | Mental Health | Cardiology | Orthopedics | Dermatology | Pediatrics | Multi-Location

**Compliance** (dropdown):
- HIPAA Compliance | Vetting Process | Security & Data Protection

**Locations** (dropdown):
- United States | United Kingdom | Middle East | Australia & NZ

**Pricing** (link)

**[CTA]** "Book Strategy Call" → /contact

### Deep Footer (6 columns):
1. Brand: Dr. Capital VA logo + description + "A division of The Human Capital"
2. Services: All 6 service pages
3. Specialties: All 8 specialty pages
4. Locations: 4 regions + top 3 cities per region
5. Resources: Blog, HIPAA Checklist, ROI Calculator, Compare pages
6. Company: About, The Standard, Pricing, Contact, The Human Capital (external link)

---

## INTERLINKING RULES

1. Every page has CTA (embedded form or prominent button to /contact)
2. Every city-service page links to: same service in 3 other cities, other services in same city, relevant specialty page, relevant comparison page, thehuman.capital
3. Every service page links to: top 3 city-service pages, relevant tool pages, relevant blog posts, specialty pages
4. Every blog post links to: 2 service pages, 1 city-service page, 1 comparison page, thehuman.capital
5. Every page has breadcrumbs with BreadcrumbList schema
6. Footer on every page: "Part of The Human Capital" with link to thehuman.capital
7. "Not what you're looking for?" block on every page with contextual links

---

## SCHEMA MARKUP (JSON-LD on every page)

- Homepage: Organization + MedicalBusiness + FAQPage
- Service pages: Service + FAQPage + BreadcrumbList
- City-service pages: LocalBusiness + Service + FAQPage + BreadcrumbList
- Specialty pages: MedicalSpecialty + FAQPage + BreadcrumbList
- Comparison pages: FAQPage + BreadcrumbList
- Blog posts: Article + FAQPage + BreadcrumbList
- Compliance pages: Article + BreadcrumbList

---

## MANDATORY CONTENT UNITS — EVERY PAGE

No page under 1,500 words. Money pages (city-service) 2,500+.

Every page must have:
1. Unique H1 with primary keyword
2. Unique meta title: "[Page Title] | Dr. Capital VA"
3. Unique meta description (150-160 chars)
4. Minimum word count met
5. Healthcare-specific context (not generic VA content)
6. Compliance mention (HIPAA, NDA, Checkr — at least one)
7. Pricing anchor ($700/month or "starting at $700")
8. CTA (form or button)
9. 6+ internal links
10. FAQ section with schema
11. Breadcrumbs with schema

---

## GLOBAL ELEMENTS

- Sticky nav with blur on scroll
- Mobile: hamburger menu + sticky bottom CTA bar "Book Strategy Call"
- Floating scroll CTA on desktop (appears after 40% scroll, bottom-right)
- Breadcrumbs on every page except homepage
- Google Analytics 4 (defer loading with next/script strategy="lazyOnload")

---

## GOOGLE ANALYTICS & SEARCH CONSOLE

- Install GA4 with measurement ID (use env variable NEXT_PUBLIC_GA_ID)
- Create sitemap with next-sitemap covering ALL pages
- robots.txt allowing all crawlers
- Expected sitemap: 230+ URLs

---

## BUILD ORDER

1. Create data file with all regions, cities, services, specialties, competitors, tools
2. Build design system: Tailwind config, global styles, fonts
3. Build layout: nav mega-menu, footer, mobile menu, floating CTA
4. Build homepage matching HTML reference exactly
5. Build core pages: About, How It Works, Pricing, Contact, Portal
6. Build 6 service pages (2,500+ words each)
7. Build 8 specialty pages (1,500+ words each)
8. Build compliance pages: HIPAA, Vetting, Security
9. Build 5 comparison pages (2,500+ words each)
10. Build 6 tool pages (1,500+ words each)
11. Build location templates and generate all programmatic pages
12. Build 10 blog posts with full content
13. Build resource pages (HIPAA checklist, ROI calculator)
14. Build legal pages (Privacy, Terms)
15. Add schema markup to every page
16. Add breadcrumbs to every page
17. Wire all interlinking
18. Configure sitemap, robots.txt, analytics
19. Test build: `npx next build` — verify no errors, check page sizes

---

## PART 13: EXCELLENCE AGENT (Chat Widget)

Build the chat widget component from the file ExcellenceAgent.tsx. Customize it for healthcare:

### Config changes for DrCapitalVA:
```
AGENT_CONFIG = {
  name: 'Dr. Capital VA',
  agentName: 'Sarah',
  phone: '(813) 761-8268',
  email: 'info@thehuman.capital',
  bookingLink: '/contact',
}
```

### Healthcare-specific conversation flows:

Replace the generic flows with healthcare-specific ones:

**Entry:** "Hey — I'm Sarah from Dr. Capital VA. Are you looking for VA support for your practice, or looking to join our team?"

**Prospect path — qualification:**
- "What type of practice do you run?" → Primary Care / Dental / Mental Health / Cardiology / Multi-Specialty / Other
- Based on answer, serve specialty-specific response mentioning relevant tasks (e.g., dental → "Recall management, insurance pre-auth, treatment plan follow-up — our dental VAs handle all of it.")
- "Want to set up a quick 15-min call? We'll match you within 48 hours."

**Prospect path — objection handling:**
- "Is this HIPAA compliant?" → "Every VA is HIPAA-trained, background checked through Checkr, and signs an NDA before accessing any systems. We use encrypted communication. Zero breaches since 2019."
- "What does it cost?" → "$700/mo part-time, $1,300 full-time. Month-to-month. No lock-in. That's less than a third of what a medical receptionist costs in most cities."
- "Do they know my EHR?" → "We train VAs on Athenahealth, eClinicalWorks, Kareo, DrChrono, Practice Fusion, and others. If you use something else, we train for it."

**All paths end in ≤3 exchanges at:** Book a Strategy Call link or email capture.

**Transcript delivery:** Same as parent site — fires to /api/contact via Resend when email is captured. Subject line: "Dr. Capital VA Chat Lead — [email]"

Add `<ExcellenceAgent />` to the root layout. Appears on every page. Does NOT appear on /contact page.

---

## PART 14: REAL COMPETITOR DATA (Use in comparison pages and blog posts)

Use these REAL pricing and feature data points. Do not make up competitor information.

### Hello Rache
- Price: $9.50/hr flat rate (~$1,520/mo full-time)
- Founded by Dr. Mark Carnett, D.O. in 2017
- Philippines-based VAs, many are ex-nurses
- HIPAA trained
- No dedicated Client Manager
- No Checkr background verification (internal screening only)
- No backup VA coverage
- Specialties: Medical, Dental, Optometry, Veterinary
- Strengths: Low hourly rate, healthcare-only focus, founder is a physician
- Weaknesses: No management layer, no formal background check service, Philippines timezone only

### MEDVA
- Price: $9.75/hr for dental, custom for medical
- HIPAA compliant, co-founded by practicing oral surgeon
- Specialties: Dental heavy, expanding to medical
- Supports Dentrix, Eaglesoft, Open Dental
- Strengths: Dental expertise, MDA partnership
- Weaknesses: Newer company, less medical breadth

### My Mountain Mover
- Price: ~$8/hr starting
- Claims top 2% of applicants
- HIPAA compliant with compliance officer
- Quarterly computer security checks
- Strengths: Rigorous security, dedicated support team
- Weaknesses: Higher total cost with fees, Philippines-based

### HelpSquad Health
- Price: Starting ~$8-9/hr
- 15+ years in healthcare
- US-based account manager
- HIPAA and PCI compliant, signs BAAs
- 24/7 availability
- Strengths: Long track record, 24/7 support, bilingual
- Weaknesses: Not dedicated (shared pool possible), higher volume focus

### DrCatalyst
- Price: Custom (premium positioning)
- Works with 60+ EHR systems
- Handles 1-3 specialized tasks per VA
- Strengths: Deep EHR integration, specialty focus
- Weaknesses: Premium pricing, less transparent

### Wing (Healthcare)
- Price: Starting ~$899/mo
- General VA company with healthcare add-on
- HIPAA training available
- Strengths: Tech platform, lower starting price
- Weaknesses: Not healthcare-only, reported high turnover, generic approach

### Dr. Capital VA positioning against ALL of these:
- $700/mo part-time, $1,300 full-time (competitive with hourly competitors on a monthly basis)
- Dedicated VA (not shared/rotated)
- Dedicated Client Manager (nobody else at this price point offers this)
- Checkr background verification (most competitors use internal screening)
- Backup VA coverage during leave
- Month-to-month, no lock-in
- Part of The Human Capital network (6-year track record, 97% retention)
- Client Portal launching March 2025

---

## PART 15: KEYWORD TARGETS BY PAGE TYPE

### City-service pages — PRIMARY MONEY KEYWORDS:
Target format: "[service] virtual assistant [city]"
- "patient scheduling virtual assistant New York"
- "medical billing virtual assistant Miami"
- "HIPAA virtual assistant London"
- "healthcare virtual assistant Dubai"
- "dental virtual assistant Los Angeles"
- "medical receptionist virtual assistant Chicago"
- "telehealth virtual assistant San Francisco"
- "patient intake virtual assistant Tampa"

### Service pages — SECONDARY MONEY KEYWORDS:
- "patient scheduling virtual assistant" (1,900 monthly searches estimated)
- "medical billing virtual assistant" (1,600)
- "HIPAA compliant virtual assistant" (1,400)
- "healthcare virtual assistant" (2,200)
- "medical virtual assistant cost" (1,100)
- "virtual medical receptionist" (900)
- "dental virtual assistant" (800)
- "telehealth virtual assistant" (600)

### Blog posts — LONG-TAIL / INFORMATIONAL:
- "how much does a medical virtual assistant cost" (high volume)
- "HIPAA compliant virtual assistant requirements" (mid volume, high intent)
- "reduce patient no shows" (high volume, adjacent)
- "medical receptionist turnover cost" (mid volume, pain-point)
- "Hello Rache alternative" (low volume, very high intent)
- "virtual assistant dental practice" (mid volume)
- "medical billing outsourcing small practice" (mid volume)
- "EHR virtual assistant" (low volume, very specific)

### Comparison pages — COMPETITOR BRANDED KEYWORDS:
- "Hello Rache review" / "Hello Rache alternative" / "Hello Rache vs"
- "MEDVA review" / "MEDVA alternative"
- "My Mountain Mover review" / "My Mountain Mover alternative"
- "HelpSquad healthcare review"
- "DrCatalyst alternative"

### Every page must naturally incorporate its target keyword in:
1. H1 tag
2. Meta title
3. Meta description
4. First 100 words of body content
5. At least one H2 subheading
6. Alt text of any images
7. URL slug

---

## PART 16: TESTIMONIAL FRAMEWORK

Use these real testimonial formats. Adapt the one-liner client quotes into full contextual testimonials:

Format: "[Quote adapted into 2-3 sentences with context]. — [Title], [Practice Type]"

Examples to place throughout the site:
- On patient scheduling pages: testimonial from a multi-specialty clinic about reduced no-shows
- On billing pages: testimonial about revenue cycle improvement
- On compliance pages: testimonial about HIPAA peace of mind
- On pricing pages: testimonial about cost savings vs local hire

Keep all testimonials attribution as: Role + Practice Type (no full names unless Piyoosh provides them). Example: "Practice Administrator, Multi-Specialty Clinic" or "Solo Practitioner, Family Medicine"

---

Build everything. No placeholders. No stubs. Every page fully rendered with real, deep, healthcare-specific content. Every page earns its existence by targeting a specific search query. The Excellence Agent chat widget lives on every page converting browsers into leads. Real competitor data makes comparison pages credible. Keyword targets are baked into every H1, every meta tag, every opening paragraph.
