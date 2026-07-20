'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight, Play, Sparkles, CheckCircle2, Star, Rocket, ShieldCheck, Zap,
  Users, Building2, Briefcase, GraduationCap, Stethoscope, Utensils, Home as HomeIcon,
  Truck, ShoppingBag, Factory, Landmark, HardHat, MessageSquare, TrendingUp, Gamepad2,
  Menu, X as XIcon, ChevronRight, Bot, Boxes, Receipt, Warehouse, ClipboardList,
  LayoutDashboard, Smartphone, Globe2, Wrench, Palette, Cloud, BarChart3,
} from 'lucide-react'
import Link from 'next/link'
import OliMascot from '@/components/OliMascot'
import GameChallenge from '@/components/GameChallenge'
import DemoModal from '@/components/DemoModal'
import { SERVICE_CATEGORIES } from '@/lib/services-data'

/* ------------ small helpers ------------ */
function Counter({ to = 100, suffix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    let raf
    const tick = (t) => {
      const p = Math.min(1, (t - start) / (duration * 1000))
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(to * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])
  return <span ref={ref}>{val}{suffix}</span>
}

function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold uppercase tracking-widest ${center ? '' : ''}`}>
          <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-neutral-900 leading-tight">{title}</h2>
      {subtitle && <p className="text-neutral-600 text-base sm:text-lg mt-4">{subtitle}</p>}
    </div>
  )
}

/* ------------ data ------------ */
const NAV = ['Home', 'Services', 'Products', 'Industries', 'Game', 'About', 'Blog', 'Contact']

const _ICON_MAP = { Bot, Globe2, Smartphone, Wrench, Palette, Briefcase, TrendingUp, Cloud, Zap, Boxes, LayoutDashboard, BarChart3 }
const SERVICES = SERVICE_CATEGORIES.map(c => ({
  icon: _ICON_MAP[c.icon] || Sparkles,
  name: c.name,
  desc: c.tagline,
  slug: c.slug,
}))

const PRODUCTS = [
  { name: 'Olive CRM', tag: 'Sales', desc: 'Close deals 3× faster with pipeline AI.' },
  { name: 'Olive ERP', tag: 'Operations', desc: 'The single source of truth for your business.' },
  { name: 'Olive HRMS', tag: 'People', desc: 'Payroll + attendance + performance.' },
  { name: 'Olive POS', tag: 'Retail', desc: 'Lightning-fast billing and inventory sync.' },
  { name: 'Olive Billing', tag: 'Finance', desc: 'GST invoices, e-way bills and reports.' },
  { name: 'Olive School ERP', tag: 'Education', desc: 'All-in-one for K-12 and colleges.' },
  { name: 'Olive Hospital ERP', tag: 'Healthcare', desc: 'Patient journey + billing + pharmacy.' },
  { name: 'Olive Manufacturing ERP', tag: 'Factory', desc: 'BOM, work orders, MRP and QC.' },
  { name: 'Olive Inventory', tag: 'Warehouse', desc: 'Multi-branch stock, barcodes, batches.' },
  { name: 'Olive Project Mgmt', tag: 'Teams', desc: 'Tasks, sprints and time-tracking.' },
  { name: 'Olive Service Desk', tag: 'Support', desc: 'Tickets, SLA, WhatsApp and chat.' },
  { name: 'Olive Visitor Mgmt', tag: 'Front Desk', desc: 'Modern gate-pass with photos and OTPs.' },
  { name: 'Olive Restaurant POS', tag: 'F&B', desc: 'KOT, delivery apps and captain app.' },
  { name: 'Olive AI Assistant', tag: 'AI', desc: 'Your in-house AI for reports & queries.' },
  { name: 'Olive Real Estate CRM', tag: 'Realty', desc: 'From site visit to registration.' },
]

const INDUSTRIES = [
  { icon: Factory, name: 'Manufacturing', slug: 'manufacturing' },
  { icon: Stethoscope, name: 'Healthcare', slug: 'healthcare' },
  { icon: GraduationCap, name: 'Education', slug: 'education' },
  { icon: ShoppingBag, name: 'Retail', slug: 'retail' },
  { icon: Utensils, name: 'Restaurant', slug: 'restaurant' },
  { icon: HomeIcon, name: 'Real Estate', slug: 'real-estate' },
  { icon: Landmark, name: 'Finance', slug: 'finance' },
  { icon: HardHat, name: 'Construction', slug: 'construction' },
  { icon: Boxes, name: 'Textile', slug: 'textile' },
  { icon: Truck, name: 'Logistics', slug: 'logistics' },
  { icon: Wrench, name: 'Service Businesses', slug: 'service-businesses' },
  { icon: Rocket, name: 'Startups', slug: 'startups' },
]

const LOGOS = ['NovaCorp','Zentek','Brightline','Vertex','Lumino','Kinetix','Arcadia','Hyperion','Solstice','Northwind','Meridian','Quantica']

const TESTIMONIALS = [
  { name: 'Priya Shah', role: 'MD, Shah Textiles', quote: 'Olive ERP cut our closing time from 5 days to 6 hours. Genuine game-changer.' },
  { name: 'Rahul Verma', role: 'Founder, Verma Realty', quote: 'The Real Estate CRM is a masterpiece. Our site-visit-to-booking ratio doubled.' },
  { name: 'Dr. Meera Iyer', role: 'Director, CareWell Hospital', quote: 'OPD queues vanished. Patient satisfaction is at an all-time high.' },
  { name: 'Sameer Kapoor', role: 'CEO, KrunchBox F&B', quote: 'POS + KOT + delivery on one screen — waiter productivity up 40%.' },
]

/* ============ MAIN COMPONENT ============ */
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [gameOpen, setGameOpen] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  return (
    <main className="relative overflow-x-hidden bg-white">
      {/* ============ NAVBAR ============ */}
      <header className={`fixed top-3 inset-x-3 sm:inset-x-6 z-50 transition-all`}>
        <div className={`container max-w-7xl mx-auto flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 ${scrolled ? 'glass shadow-soft' : 'bg-white/60 backdrop-blur border border-white/60'}`}>
          <a href="#top" className="flex items-center gap-2">
            <LogoMark />
            <div className="leading-tight">
              <div className="font-display font-bold text-[15px] sm:text-base">Olive Orange</div>
              <div className="text-[10px] uppercase tracking-widest text-neutral-500">Technologies</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map(n => (
              <a key={n} href={n === 'Services' ? '/services' : n === 'Industries' ? '/industries' : `#${n.toLowerCase()}`} className="text-sm font-medium text-neutral-700 hover:text-brand-600 px-3 py-2 rounded-lg hover:bg-brand-50 transition">{n}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setDemoOpen(true)} className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-900 text-white text-sm font-semibold hover:bg-black transition">Book Demo <ArrowRight className="h-3.5 w-3.5" /></button>
            <button className="lg:hidden p-2 rounded-lg hover:bg-brand-50" onClick={() => setMenuOpen(o => !o)}>{menuOpen ? <XIcon className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden container max-w-7xl mx-auto mt-2 rounded-2xl glass shadow-soft p-3">
            {NAV.map(n => <a key={n} onClick={() => setMenuOpen(false)} href={n === 'Services' ? '/services' : n === 'Industries' ? '/industries' : `#${n.toLowerCase()}`} className="block px-3 py-2 rounded-lg hover:bg-brand-50 text-sm font-medium">{n}</a>)}
          </div>
        )}
      </header>

      {/* ============ HERO ============ */}
      <section id="home" ref={heroRef} className="relative pt-36 pb-20 sm:pt-44 sm:pb-28">
        {/* Background blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-brand-200 opacity-70 blob" />
          <div className="absolute top-20 -right-20 h-[520px] w-[520px] rounded-full bg-orange-100 opacity-80 blob" style={{ animationDelay: '-4s' }} />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-amber-100 opacity-60 blob" style={{ animationDelay: '-8s' }} />
          <div className="absolute inset-0 grid-pattern opacity-50" />
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-brand-100 text-xs sm:text-sm text-neutral-700 shadow-soft">
            <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
            Now with OLI — our AI-powered business co-pilot
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-bold mt-6 tracking-tight text-neutral-900 leading-[1.05]">
            We Build Software <br className="hidden sm:block" />
            That <span className="relative inline-block">
              <span className="bg-gradient-to-r from-brand-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">Grows Businesses</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none"><path d="M2 8 C 80 2, 220 2, 298 8" stroke="#FF7A00" strokeWidth="3" strokeLinecap="round" /></svg>
            </span>.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base sm:text-lg md:text-xl text-neutral-600 mt-6 max-w-2xl mx-auto">
            From <b className="text-neutral-900">CRM</b> to <b className="text-neutral-900">ERP</b>, <b className="text-neutral-900">AI Automation</b> to <b className="text-neutral-900">Mobile Apps</b> — Olive Orange helps businesses become smarter, faster and more profitable.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => setDemoOpen(true)} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 shadow-glow transition">
              Book Free Demo <ArrowRight className="h-4 w-4" />
            </button>
            <a href="/services" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 text-white font-semibold hover:bg-black transition">
              Explore Services
            </a>
            <button onClick={() => setGameOpen(true)} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-neutral-200 text-neutral-900 font-semibold hover:border-brand-500 hover:text-brand-600 transition">
              <Play className="h-4 w-4" /> Watch Demo
            </button>
          </motion.div>

          {/* Floating shapes */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="relative mt-16 max-w-5xl mx-auto">
            <div className="relative rounded-3xl bg-white/80 backdrop-blur border border-brand-100 shadow-soft p-4 sm:p-6">
              <div className="flex items-center gap-2 pb-3 border-b border-neutral-100">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs text-neutral-400">app.oliveorange.tech</span>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mt-4">
                <MiniCard title="Pipeline Value" val="₹ 24.6L" delta="+38%" up />
                <MiniCard title="Open Tickets" val="12" delta="-46%" up />
                <MiniCard title="New Leads Today" val="87" delta="+21%" up />
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 p-4">
                  <div className="text-xs uppercase tracking-widest text-brand-700 font-semibold">Sales Trend</div>
                  <MiniChart />
                </div>
                <div className="rounded-2xl bg-neutral-900 text-white p-4">
                  <div className="text-xs uppercase tracking-widest text-brand-300 font-semibold">Automation Saved</div>
                  <div className="font-display text-3xl font-bold mt-1"><Counter to={142} />+ <span className="text-brand-400">hrs</span></div>
                  <div className="text-xs text-neutral-400 mt-1">This month across your team</div>
                </div>
              </div>
            </div>
            {/* floating icons */}
            <div className="hidden md:block absolute -left-10 top-10 float-y">
              <BadgeIcon icon={Zap} label="Fast" />
            </div>
            <div className="hidden md:block absolute -right-6 top-24 float-y" style={{ animationDelay: '-1.5s' }}>
              <BadgeIcon icon={ShieldCheck} label="Secure" />
            </div>
            <div className="hidden md:block absolute -right-8 -bottom-6 float-y" style={{ animationDelay: '-2.5s' }}>
              <BadgeIcon icon={Bot} label="AI Ready" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ============ SCROLLING LOGOS ============ */}
      <section className="py-10 border-y border-neutral-100 bg-white">
        <div className="text-center text-xs uppercase tracking-widest text-neutral-500 mb-4">Trusted by 500+ growing businesses</div>
        <div className="overflow-hidden relative">
          <div className="marquee-track flex gap-14 whitespace-nowrap">
            {[...LOGOS, ...LOGOS].map((l, i) => (
              <span key={i} className="font-display text-2xl font-bold text-neutral-300 hover:text-brand-500 transition">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: 500, s: '+', label: 'Happy Clients' },
            { v: 12, s: '+', label: 'Software Solutions' },
            { v: 99, s: '%', label: 'Customer Satisfaction' },
            { v: 24, s: '/7', label: 'Support & Success' },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="rounded-3xl p-6 sm:p-8 bg-white border border-neutral-100 shadow-soft card-lift text-center">
              <div className="font-display text-4xl sm:text-5xl font-bold text-neutral-900">
                <Counter to={s.v} />{s.s}
              </div>
              <div className="text-neutral-500 mt-2 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="py-20 bg-gradient-to-b from-white via-brand-50/40 to-white">
        <div className="container max-w-7xl mx-auto">
          <SectionHeading eyebrow="Services" title="Everything you need to run a modern business" subtitle="Twelve deeply-engineered solutions, one obsession: your growth." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {SERVICES.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="group rounded-3xl bg-white border border-neutral-100 shadow-soft p-6 card-lift relative overflow-hidden">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-100 opacity-0 group-hover:opacity-100 transition" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center shadow-glow"><s.icon className="h-6 w-6" /></div>
                  <div>
                    <div className="font-display font-semibold text-lg">{s.name}</div>
                    <p className="text-neutral-500 text-sm mt-1">{s.desc}</p>
                    <Link href={`/services/${s.slug}`} className="mt-3 inline-flex items-center gap-1 text-brand-600 text-sm font-semibold hover:gap-2 transition-all">Learn more <ChevronRight className="h-4 w-4" /></Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRODUCTS ============ */}
      <section id="products" className="py-20">
        <div className="container max-w-7xl mx-auto">
          <SectionHeading eyebrow="Products" title="The Olive product suite" subtitle="Beautifully-designed apps, built to work together." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {PRODUCTS.slice(0, 9).map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="rounded-3xl bg-white border border-neutral-100 shadow-soft p-6 card-lift">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold">{p.tag}</span>
                  <LayoutDashboard className="h-4 w-4 text-neutral-300" />
                </div>
                <div className="font-display font-semibold text-xl mt-4">{p.name}</div>
                <p className="text-neutral-500 text-sm mt-1">{p.desc}</p>
                <div className="mt-4 h-20 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100/40 border border-brand-100 relative overflow-hidden">
                  <div className="absolute inset-0 grid-pattern" />
                  <div className="absolute bottom-2 left-3 right-3 h-8 rounded-lg bg-white/80 backdrop-blur border border-white/60 flex items-center gap-2 px-3">
                    <div className="h-2 w-2 rounded-full bg-brand-500" />
                    <div className="h-1.5 flex-1 rounded-full bg-neutral-200" />
                    <div className="h-1.5 w-6 rounded-full bg-brand-500" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <button onClick={() => setDemoOpen(true)} className="text-sm font-semibold px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-black transition">Demo</button>
                  <button onClick={() => setDemoOpen(true)} className="text-sm font-semibold px-4 py-2 rounded-full border border-neutral-200 hover:border-brand-500 hover:text-brand-600 transition">Free Trial</button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => setDemoOpen(true)} className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-200 hover:border-brand-500 hover:text-brand-600 font-semibold transition">
              View all {PRODUCTS.length} products <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ============ GAME CHALLENGE CTA ============ */}
      <section id="game" className="py-20">
        <div className="container max-w-6xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-neutral-900 text-white p-8 sm:p-14">
            <div className="absolute -top-24 -right-24 h-[400px] w-[400px] rounded-full bg-brand-500/40 blob" />
            <div className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-orange-400/30 blob" style={{ animationDelay: '-3s' }} />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs uppercase tracking-widest text-brand-200 font-semibold"><Gamepad2 className="h-3.5 w-3.5" /> Game Challenge</div>
                <h3 className="font-display text-3xl sm:text-5xl font-bold mt-4 leading-tight">How Healthy Is Your <span className="text-brand-400">Business?</span></h3>
                <p className="text-neutral-300 mt-4 text-base sm:text-lg">Answer 8 quick questions. Get a personalized Business Health Score + AI recommendations in under 60 seconds.</p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <button onClick={() => setGameOpen(true)} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 shadow-glow transition">
                    Play Now — It's Free <ArrowRight className="h-4 w-4" />
                  </button>
                  <div className="inline-flex items-center gap-1.5 text-xs text-neutral-400 px-3 py-2"><ShieldCheck className="h-4 w-4" /> No spam. Instant results.</div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl bg-white/10 backdrop-blur border border-white/20 p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-xs uppercase tracking-widest text-brand-200 font-semibold">Business Health</div>
                    <div className="text-xs text-neutral-400">Sample Report</div>
                  </div>
                  <div className="font-display text-6xl font-bold mt-3">38<span className="text-brand-400 text-3xl">/100</span></div>
                  <div className="text-sm text-neutral-300 mt-1">Verdict: At Risk — you're losing time and leads.</div>
                  <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[38%] bg-gradient-to-r from-red-500 via-orange-500 to-brand-500" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['CRM','Inventory','Automation','HRMS'].map(r => (
                      <span key={r} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold"><CheckCircle2 className="h-3.5 w-3.5 text-brand-400" /> {r}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES ============ */}
      <section id="industries" className="py-20 bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container max-w-7xl mx-auto">
          <SectionHeading eyebrow="Industries" title="Built for every kind of business" subtitle="From factories to hospitals, classrooms to construction sites." />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
            {INDUSTRIES.map((ind, i) => (
              <Link key={ind.name} href={`/industries/${ind.slug}`}>
                <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}
                  className="rounded-2xl bg-white border border-neutral-100 shadow-soft p-5 flex flex-col items-center text-center card-lift">
                  <div className="h-11 w-11 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center"><ind.icon className="h-5 w-5" /></div>
                  <div className="font-semibold text-sm mt-3">{ind.name}</div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section id="about" className="py-20">
        <div className="container max-w-7xl mx-auto">
          <SectionHeading eyebrow="Loved by founders" title="Real businesses. Real results." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="rounded-3xl p-6 bg-white border border-neutral-100 shadow-soft card-lift">
                <div className="flex gap-0.5 text-brand-500">{[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}</div>
                <p className="text-neutral-700 mt-3 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center font-semibold text-sm">{t.name[0]}</div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-neutral-500">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section id="contact" className="py-20">
        <div className="container max-w-6xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-brand-500 via-orange-500 to-brand-600 p-8 sm:p-14 text-white text-center">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="relative">
              <h3 className="font-display text-3xl sm:text-5xl font-bold">Ready to build a smarter business?</h3>
              <p className="text-white/90 mt-4 max-w-2xl mx-auto">Join 500+ companies growing with Olive Orange. Book a free 30-minute demo — we'll show you the exact solution for your business.</p>
              <div className="flex flex-wrap gap-3 justify-center mt-8">
                <button onClick={() => setDemoOpen(true)} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-brand-600 font-semibold hover:bg-neutral-100 transition">Book Free Demo <ArrowRight className="h-4 w-4" /></button>
                <a href="https://wa.me/919624689325" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 text-white font-semibold hover:bg-black transition">
                  <MessageSquare className="h-4 w-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer id="blog" className="pt-16 pb-8 bg-neutral-950 text-neutral-300">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2">
                <LogoMark />
                <div className="font-display font-bold text-white">Olive Orange</div>
              </div>
              <p className="text-sm text-neutral-400 mt-3">Building smart software for smarter businesses.</p>
              <p className="text-sm text-neutral-400 mt-3">📞 +91 96246 89325</p>
            </div>
            <div>
              <div className="text-white font-semibold mb-3">Services</div>
              <ul className="space-y-2 text-sm">
                {SERVICES.slice(0,6).map(s => <li key={s.name}><Link href={`/services/${s.slug}`} className="hover:text-brand-400">{s.name}</Link></li>)}
              </ul>
            </div>
            <div>
              <div className="text-white font-semibold mb-3">Products</div>
              <ul className="space-y-2 text-sm">
                {PRODUCTS.slice(0,6).map(p => <li key={p.name}><a href="#products" className="hover:text-brand-400">{p.name}</a></li>)}
              </ul>
            </div>
            <div>
              <div className="text-white font-semibold mb-3">Company</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-brand-400">About Us</a></li>
                <li><a href="#game" className="hover:text-brand-400">Game Challenge</a></li>
                <li><a href="#blog" className="hover:text-brand-400">Blog</a></li>
                <li><a href="#contact" className="hover:text-brand-400">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-neutral-500">
            <div>© {new Date().getFullYear()} Olive Orange Technologies. All rights reserved.</div>
            <div>Made with 🧡 in India</div>
          </div>
        </div>
      </footer>

      {/* Modals + Mascot */}
      <GameChallenge open={gameOpen} onClose={() => setGameOpen(false)} />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      <OliMascot onOpenGame={() => setGameOpen(true)} onOpenDemo={() => setDemoOpen(true)} />
    </main>
  )
}

/* ---------- little visual components ---------- */
function LogoMark() {
  return (
    <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 shadow-glow flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
        <path d="M12 2 C 6 2, 3 7, 3 12 C 3 17, 7 22, 12 22 C 17 22, 21 17, 21 12 C 21 8, 18 5, 15 5 C 13 5, 12 6, 12 8 C 12 10, 14 11, 16 11" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function MiniCard({ title, val, delta, up }) {
  return (
    <div className="rounded-2xl bg-white border border-neutral-100 p-4 text-left">
      <div className="text-xs text-neutral-500">{title}</div>
      <div className="font-display text-2xl font-bold mt-1">{val}</div>
      <div className={`text-xs font-semibold mt-1 ${up ? 'text-emerald-600' : 'text-red-600'}`}>{delta}</div>
    </div>
  )
}

function MiniChart() {
  const pts = [10, 22, 18, 30, 26, 42, 38, 55, 60, 72]
  const max = 80
  const w = 260, h = 70
  const step = w / (pts.length - 1)
  const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${i * step} ${h - (p / max) * h}`).join(' ')
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-16 mt-2">
      <defs>
        <linearGradient id="gr" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FF7A00" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L ${w} ${h} L 0 ${h} Z`} fill="url(#gr)" />
      <path d={path} fill="none" stroke="#FF7A00" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BadgeIcon({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-white border border-brand-100 shadow-soft">
      <div className="h-8 w-8 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center"><Icon className="h-4 w-4" /></div>
      <span className="text-sm font-semibold">{label}</span>
    </div>
  )
}

export default App
