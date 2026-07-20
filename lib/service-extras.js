// Case studies + demo previews for each of the 12 service categories
// Each entry has: caseStudy { client, industry, challenge, solution, results[], quote, role }, demos[]
export const SERVICE_EXTRAS = {
  'ai-solutions': {
    caseStudy: {
      client: 'MediGrow Diagnostics (Chain of 22 labs)',
      industry: 'Healthcare',
      challenge: 'Handling 3,000+ WhatsApp queries a day about reports, appointments and pricing manually. Response times of 4–12 hours were losing 30% of walk-in leads to competitors.',
      solution: 'Deployed a multilingual AI agent (English + Hindi + Marathi) trained on their full FAQ knowledge base + integrated with their LIMS for real-time report status queries. Auto-books appointments via WhatsApp.',
      results: [
        { v: '2.5s', l: 'Average response time' },
        { v: '84%', l: 'Queries resolved without human' },
        { v: '+38%', l: 'Walk-in conversion' },
        { v: '₹6.4L', l: 'Monthly manpower savings' },
      ],
      quote: 'OLI (our AI agent) is now our best sales rep. It never sleeps, speaks 3 languages and closes appointments while we sleep.',
      role: 'Dr. Ramesh Bhatia, MD',
    },
    demos: [
      { title: 'WhatsApp AI Chatbot', desc: 'Multilingual, connects to your CRM/ERP.', image: 'https://images.unsplash.com/photo-1652156752342-c786f1e1d1ce' },
      { title: 'Voice AI Assistant', desc: 'Answers phone calls 24×7 in Hindi/English.', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485' },
      { title: 'Invoice OCR Engine', desc: 'Reads invoices, extracts fields, posts to accounts.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f' },
      { title: 'Recommendation Engine', desc: 'AI cross-sell / up-sell on your storefront.', image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74' },
    ],
  },
  'website-development': {
    caseStudy: {
      client: 'BuildRight Infra',
      industry: 'Construction',
      challenge: 'Existing website was slow (12s load), not mobile-friendly and generating fewer than 5 project inquiries a month despite ₹3L/mo marketing spend.',
      solution: 'Rebuilt on Next.js with hyper-fast landing pages per project, dedicated “book a site visit” flow, WhatsApp lead capture and CMS for the marketing team to update projects.',
      results: [
        { v: '0.9s', l: 'New page load time' },
        { v: '4.2x', l: 'Inquiries per month' },
        { v: '#1', l: 'Google ranking for 12 city keywords' },
        { v: '-42%', l: 'CPL from ads' },
      ],
      quote: 'The new website is a business machine. We stopped counting inquiries — we’re busy converting them.',
      role: 'Nikhil Desai, MD',
    },
    demos: [
      { title: 'Business Website', desc: '5–8 pages, CMS, blog, SEO.', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d' },
      { title: 'E-commerce Storefront', desc: 'Payments, cart, inventory, shipping.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d' },
      { title: 'Landing Page', desc: 'Conversion-focused, single funnel.', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d' },
      { title: 'Portfolio Website', desc: 'For agencies, consultants and creators.', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166' },
    ],
  },
  'mobile-app-development': {
    caseStudy: {
      client: 'CoolCare AC Services',
      industry: 'Service Businesses',
      challenge: 'Bookings via calls and WhatsApp were chaotic. Technicians missed jobs. Customer complaints about no-shows and delays. 40 bookings a day was the ceiling.',
      solution: 'Built customer app (iOS + Android) for bookings, technician app for job cards + payments, admin panel for dispatch. Live GPS tracking + auto SMS updates.',
      results: [
        { v: '180', l: 'Daily bookings (from 40)' },
        { v: '4.8⭐', l: 'App Store rating' },
        { v: '+70%', l: 'Repeat customers' },
        { v: '0', l: 'Missed appointments' },
      ],
      quote: 'The apps unlocked our business. Same team, 4.5× revenue. That’s the ROI story.',
      role: 'Rajat Bansal, Founder',
    },
    demos: [
      { title: 'Food Delivery App', desc: 'Menu, cart, live tracking, payments.', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38' },
      { title: 'Booking App', desc: 'Salons, doctors, service centres.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c' },
      { title: 'E-commerce App', desc: 'Native iOS + Android with backend.', image: 'https://images.unsplash.com/photo-1573867607131-872f83689352' },
      { title: 'CRM Mobile App', desc: 'Sales team on the go.', image: 'https://images.unsplash.com/photo-1573868056472-22834cad367c' },
    ],
  },
  'support-maintenance': {
    caseStudy: {
      client: 'Prime Capital NBFC',
      industry: 'Finance',
      challenge: 'Their loan origination system had 3–5 outages a month during peak hours. Every hour of downtime cost ₹12–18 lakh in stalled disbursals + brand damage.',
      solution: 'AMC contract with 24×7 monitoring, weekly patch cycles, quarterly load tests and disaster recovery drills. Dedicated engineer on Slack.',
      results: [
        { v: '99.98%', l: 'Uptime (12-month rolling)' },
        { v: '<12min', l: 'Mean time to recovery' },
        { v: '₹1.4Cr', l: 'Recovered from prevented outages' },
        { v: '0', l: 'Data breaches' },
      ],
      quote: 'Since Olive Orange took over ops, our loan book grew 40% without a single production incident.',
      role: 'Vikram Rao, COO',
    },
    demos: [
      { title: 'Server Monitoring', desc: 'Real-time alerts + auto-healing.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa' },
      { title: 'Backup & DR', desc: 'RTO < 1 hour, tested quarterly.', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8' },
      { title: 'Security Patching', desc: 'CVE monitoring + weekly patches.', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b' },
      { title: 'Performance Tuning', desc: 'Quarterly deep-dive optimizations.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f' },
    ],
  },
  'branding-creative': {
    caseStudy: {
      client: 'Zentek (SaaS Startup)',
      industry: 'Startups',
      challenge: 'Pre-Series-A startup had a homemade logo, no brand guidelines and inconsistent LinkedIn/website design. Investors kept saying it looked “unfinished”.',
      solution: 'Complete brand identity system: new logo (3 concepts, 4 rounds), 22-page brand guidelines, social media kit (30 templates), pitch deck design and website re-skin.',
      results: [
        { v: '2 weeks', l: 'To Series-A investor commit' },
        { v: '+340%', l: 'LinkedIn engagement' },
        { v: '₹1.5Cr', l: 'Additional round valuation' },
        { v: '10x', l: 'Faster team design output' },
      ],
      quote: 'The rebrand paid for itself in the first investor call. Perception became reality.',
      role: 'Aditi Rao, CEO',
    },
    demos: [
      { title: 'Brand Identity Kit', desc: 'Logo + colors + typography + guidelines.', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d' },
      { title: 'Social Media Templates', desc: '30+ reusable Figma/Canva templates.', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7' },
      { title: 'Company Brochure', desc: 'Print + digital, English + regional.', image: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3' },
      { title: 'Motion Graphics', desc: 'Explainer videos + logo animations.', image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9' },
    ],
  },
  'business-consulting': {
    caseStudy: {
      client: 'Radhe Fabrics (Textile, Surat)',
      industry: 'Textile',
      challenge: '3rd-gen family business with ₹80Cr revenue, 6 disconnected tools, 3 warring departments and no visibility into unit economics per SKU.',
      solution: '12-week transformation engagement: process mapping, unit economics dashboard, vendor selection (ERP + CRM + accounting), 90-day migration plan and monthly steering committee.',
      results: [
        { v: '+4.2%', l: 'Net margin improvement' },
        { v: '3→1', l: 'Consolidated to one ERP' },
        { v: '₹1.8Cr', l: 'Annual savings identified' },
        { v: 'Weekly', l: 'Live unit-economics dashboard' },
      ],
      quote: 'Olive Orange didn’t give us slides. They gave us working software and a clear roadmap. Rare.',
      role: 'Jignesh Patel, Partner',
    },
    demos: [
      { title: 'Digital Maturity Audit', desc: '10-dimension scorecard + report.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978' },
      { title: 'Technology Roadmap', desc: '12/24/36-month phased plan.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40' },
      { title: 'Vendor Selection', desc: 'Unbiased RFP + shortlisting.', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d' },
      { title: 'Fractional CTO', desc: 'Senior engineering leadership on retainer.', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c' },
    ],
  },
  'digital-marketing': {
    caseStudy: {
      client: 'Urban Kart',
      industry: 'Retail',
      challenge: 'Multi-store retail chain spending ₹12L/mo on Google + Meta ads with declining ROAS (below 1.8×). No SEO, no email, no attribution.',
      solution: 'Full-funnel marketing engine: SEO for 40 category keywords, restructured Google Ads (Performance Max + Search), Meta creative refresh weekly, email nurture drips, marketing automation.',
      results: [
        { v: '4.6x', l: 'ROAS (from 1.8x)' },
        { v: '₹6.8L', l: 'Monthly organic revenue' },
        { v: '38%', l: 'Repeat customer rate' },
        { v: '2 stores → 24', l: '8-month growth' },
      ],
      quote: 'From praying to Google Ads to owning our growth. The organic engine is compounding.',
      role: 'Kunal Mehra, Founder',
    },
    demos: [
      { title: 'SEO Sprint', desc: 'Rank on page 1 for buying keywords.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f' },
      { title: 'Google Ads', desc: 'Search, YouTube, Performance Max.', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7' },
      { title: 'Meta / Instagram Ads', desc: 'Video-first + retargeting.', image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868' },
      { title: 'Marketing Automation', desc: 'Email + WA + SMS drip nurture.', image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74' },
    ],
  },
  'cloud-devops': {
    caseStudy: {
      client: 'Zentek (SaaS at 12M ARR)',
      industry: 'Startups',
      challenge: 'Hosted on shared VPS with 6–9 outages/month, sub-second latency requirement, planning for 10× growth in 12 months.',
      solution: 'Migrated to AWS ECS Fargate + Aurora + CloudFront + Route 53. Full IaC on Terraform. Blue-green deploys via GitHub Actions. Datadog + PagerDuty alerts.',
      results: [
        { v: '99.99%', l: 'Uptime achieved' },
        { v: '180ms', l: 'p95 latency (from 1.2s)' },
        { v: '-38%', l: 'Infra cost after right-sizing' },
        { v: '20 deploys/day', l: 'Up from 1/week' },
      ],
      quote: 'AWS-migrated in 4 weeks, zero downtime, cheaper bill, faster app. Kind of magical.',
      role: 'Rohan Shah, VP Engineering',
    },
    demos: [
      { title: 'AWS Migration', desc: 'From shared / on-prem to production AWS.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa' },
      { title: 'Kubernetes Cluster', desc: 'Managed EKS/GKE with auto-scaling.', image: 'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3' },
      { title: 'CI/CD Pipeline', desc: 'GitHub Actions → blue-green deploys.', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97' },
      { title: 'Monitoring & DR', desc: 'Grafana + Datadog + quarterly DR drills.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475' },
    ],
  },
  'automation-solutions': {
    caseStudy: {
      client: 'Verma Realty',
      industry: 'Real Estate',
      challenge: 'Sales team drowning in manual work: lead intake from 6 portals, WhatsApp replies, quotation generation, EMI reminders and broker commission calculations.',
      solution: 'Automated the entire lead → close → collection workflow with WhatsApp API + CRM automation + auto-quote generator + EMI tracker + broker commission engine.',
      results: [
        { v: '2.1x', l: 'Site-visit to booking' },
        { v: '32 hrs', l: 'Saved per rep per week' },
        { v: '100%', l: 'Broker payout accuracy' },
        { v: '0', l: 'Missed EMI follow-ups' },
      ],
      quote: 'Our sales team went from firefighters to closers. Automation gave them their time back.',
      role: 'Rahul Verma, Founder',
    },
    demos: [
      { title: 'WhatsApp Automation', desc: 'Broadcast + auto-reply + booking.', image: 'https://images.pexels.com/photos/6913311/pexels-photo-6913311.jpeg' },
      { title: 'CRM Automation', desc: 'Lead assignment, drips, quotes.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978' },
      { title: 'Invoice Automation', desc: 'Auto-generate + email + WA + reminders.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f' },
      { title: 'RPA Bots', desc: 'For data entry, portal scraping, reconciliation.', image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387' },
    ],
  },
  'industry-software': {
    caseStudy: {
      client: 'Shah Textiles',
      industry: 'Manufacturing',
      challenge: '3-generation manufacturer with 6 Excel systems + 2 legacy tools. Month-end closing took 5 days. No visibility into machine utilization.',
      solution: 'Replaced everything with Oli Manufacturing ERP (BOM + MRP + work orders + QC + IoT integration for OEE).',
      results: [
        { v: '6 hours', l: 'Month-end close (from 5 days)' },
        { v: '+18%', l: 'Machine utilization (OEE)' },
        { v: '₹1.2Cr', l: 'Annual savings' },
        { v: '100%', l: 'Traceability lot-to-invoice' },
      ],
      quote: 'Olive Manufacturing ERP replaced 6 Excel files and 2 legacy tools. Closing time went from 5 days to 6 hours.',
      role: 'Priya Shah, MD',
    },
    demos: [
      { title: 'Oli CRM', desc: 'Sales pipeline + WhatsApp integration.', image: 'https://images.unsplash.com/photo-1648134859177-525771773915' },
      { title: 'Oli ERP', desc: 'Finance + purchase + sales + inventory.', image: 'https://images.unsplash.com/photo-1648134859187-71dadc9f815a' },
      { title: 'Oli HRMS', desc: 'Attendance + payroll + PF/ESI.', image: 'https://images.unsplash.com/photo-1648134859196-3aa762e9440d' },
      { title: 'Oli POS', desc: 'Retail billing + inventory sync.', image: 'https://images.unsplash.com/photo-1560461396-ec0ef7bb29dd' },
    ],
  },
  'business-ecosystem': {
    caseStudy: {
      client: 'KrunchBox F&B Chain',
      industry: 'Restaurant',
      challenge: '12 outlets running 4 disconnected systems (POS, inventory, HR, accounting). No consolidated P&L. HR + payroll on Excel. Vendors on paper.',
      solution: 'Full Oli Business Ecosystem: POS + Inventory + HRMS + Accounting + Vendor Portal + Customer app + Executive BI dashboard.',
      results: [
        { v: 'Live', l: 'Consolidated P&L (was 12 days lag)' },
        { v: '-60%', l: 'HR admin hours' },
        { v: '4 → 1', l: 'Systems consolidated' },
        { v: '+15%', l: 'Same-store growth' },
      ],
      quote: 'One login, one truth. Now I run 12 outlets from my phone.',
      role: 'Sameer Kapoor, CEO',
    },
    demos: [
      { title: 'Unified Data Model', desc: 'Master data across all modules.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71' },
      { title: 'Customer Portal', desc: 'Self-service orders, invoices, tickets.', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d' },
      { title: 'Vendor Portal', desc: 'PO acceptance + delivery + payments.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40' },
      { title: 'BI Dashboard', desc: 'Executive + department + personal.', image: 'https://images.pexels.com/photos/7693218/pexels-photo-7693218.jpeg' },
    ],
  },
  'data-analytics-bi': {
    caseStudy: {
      client: 'FastLine 3PL',
      industry: 'Logistics',
      challenge: 'Fleet of 340 trucks + 3 warehouses. No visibility into fuel efficiency per driver, per route, or per lane. Diesel bill was 42% of costs and rising.',
      solution: 'Built a live Fleet BI dashboard on Power BI + predictive model for route optimization + driver scorecards on mobile.',
      results: [
        { v: '₹6L/mo', l: 'Diesel savings' },
        { v: '18%', l: 'Km reduction per trip' },
        { v: '95%', l: 'On-time deliveries' },
        { v: 'Daily', l: 'CEO dashboard updates' },
      ],
      quote: 'The BI dashboard paid for itself in the first month. We now run logistics like a science.',
      role: 'Ramesh Iyer, Operations Head',
    },
    demos: [
      { title: 'Sales Dashboard', desc: 'Pipeline, revenue, forecasts.', image: 'https://images.pexels.com/photos/7693218/pexels-photo-7693218.jpeg' },
      { title: 'Inventory Analytics', desc: 'Stock turns, dead SKUs, reorder AI.', image: 'https://images.unsplash.com/photo-1590658094082-88f4c5814ea1' },
      { title: 'Financial Reports', desc: 'P&L, balance sheet, cash flow.', image: 'https://images.pexels.com/photos/6248959/pexels-photo-6248959.jpeg' },
      { title: 'Predictive Model', desc: 'Demand forecasting + churn prediction.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f' },
    ],
  },
}

export function getServiceExtras(slug) {
  return SERVICE_EXTRAS[slug] || null
}
