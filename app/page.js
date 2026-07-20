'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Star, ShieldCheck, Zap, Gamepad2, MessageSquare, Bot, Boxes, Globe2, Smartphone, LayoutDashboard, Rocket } from 'lucide-react'
import HeaderClient from '@/components/HeaderClient'
import FooterCTA from '@/components/FooterCTA'
import DemoModal from '@/components/DemoModal'
import GameChallenge from '@/components/GameChallenge'
import { OliImage } from '@/components/OliMascot'

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

const QUICK_LINKS = [
  { name: 'Services', href: '/services', desc: '12 service categories', icon: Sparkles },
  { name: 'Products', href: '/products', desc: '15 Oli software apps', icon: Boxes },
  { name: 'Industries', href: '/industries', desc: '12 verticals we serve', icon: LayoutDashboard },
  { name: 'Blog', href: '/blog', desc: '12 playbooks & case studies', icon: Rocket },
  { name: 'Game Challenge', href: '/game', desc: 'How healthy is your business?', icon: Gamepad2 },
  { name: 'Contact', href: '/contact', desc: 'Talk to a human', icon: MessageSquare },
]

function Home() {
  const [demoOpen, setDemoOpen] = useState(false)
  const [gameOpen, setGameOpen] = useState(false)

  return (
    <main className="relative bg-white text-neutral-900 overflow-x-hidden">
      <HeaderClient />

      {/* HERO */}
      <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-brand-200 opacity-70 blob" />
          <div className="absolute top-20 -right-20 h-[520px] w-[520px] rounded-full bg-orange-100 opacity-80 blob" style={{ animationDelay: '-4s' }} />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-amber-100 opacity-60 blob" style={{ animationDelay: '-8s' }} />
          <div className="absolute inset-0 grid-pattern opacity-50" />
        </div>

        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-brand-100 text-xs sm:text-sm text-neutral-700 shadow-soft">
                <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
                Meet OLI — our AI-powered business co-pilot
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-4xl sm:text-6xl md:text-7xl font-bold mt-6 tracking-tight leading-[1.05]">
                Every problem <br className="hidden sm:block" />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-brand-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">has a solution.</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none"><path d="M2 8 C 80 2, 220 2, 298 8" stroke="#FF7A00" strokeWidth="3" strokeLinecap="round" /></svg>
                </span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
                className="text-base sm:text-lg md:text-xl text-neutral-600 mt-6 max-w-2xl mx-auto lg:mx-0">
                From <b className="text-neutral-900">CRM</b> to <b className="text-neutral-900">ERP</b>, <b className="text-neutral-900">AI Automation</b> to <b className="text-neutral-900">Mobile Apps</b> — Olive Orange helps businesses become smarter, faster and more profitable.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <button onClick={() => setDemoOpen(true)} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 shadow-glow transition">
                  Book Free Demo <ArrowRight className="h-4 w-4" />
                </button>
                <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 text-white font-semibold hover:bg-black transition">
                  Explore Services
                </Link>
                <button onClick={() => setGameOpen(true)} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-neutral-200 text-neutral-900 font-semibold hover:border-brand-500 hover:text-brand-600 transition">
                  <Play className="h-4 w-4" /> Play the Game
                </button>
              </motion.div>

              <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start">
                <div><div className="font-display text-2xl font-bold"><Counter to={500} />+</div><div className="text-xs text-neutral-500">Happy clients</div></div>
                <div><div className="font-display text-2xl font-bold"><Counter to={15} />+</div><div className="text-xs text-neutral-500">Oli products</div></div>
                <div><div className="font-display text-2xl font-bold"><Counter to={99} />%</div><div className="text-xs text-neutral-500">CSAT</div></div>
                <div><div className="font-display text-2xl font-bold">24/7</div><div className="text-xs text-neutral-500">Support</div></div>
              </div>
            </div>

            {/* OLI hero image */}
            <div className="lg:col-span-5">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mx-auto max-w-md">
                <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-brand-100 via-orange-50 to-white p-6 border border-brand-200 shadow-glow">
                  <Image src="/brand/oli-mascot.jpg" alt="OLI mascot" width={520} height={520} priority className="w-full h-auto rounded-[2rem]" />
                </div>
                <div className="hidden md:block absolute -left-8 top-8 float-y">
                  <BadgeIcon icon={Zap} label="Fast" />
                </div>
                <div className="hidden md:block absolute -right-6 top-32 float-y" style={{ animationDelay: '-1.5s' }}>
                  <BadgeIcon icon={ShieldCheck} label="Secure" />
                </div>
                <div className="hidden md:block absolute -right-8 -bottom-4 float-y" style={{ animationDelay: '-2.5s' }}>
                  <BadgeIcon icon={Bot} label="AI Ready" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS — 6 gateway cards to the multi-page structure */}
      <section className="py-16 bg-gradient-to-b from-white via-brand-50/30 to-white">
        <div className="container max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold uppercase tracking-widest">Explore</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">Everything under one roof</h2>
            <p className="text-neutral-600 mt-3">Dive into any section — each is a full experience of its own.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {QUICK_LINKS.map((l, i) => (
              <motion.div key={l.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link href={l.href} className="group block rounded-3xl p-6 bg-white border border-neutral-100 shadow-soft card-lift">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center shadow-glow">
                    <l.icon className="h-6 w-6" />
                  </div>
                  <div className="font-display font-semibold text-xl mt-4">{l.name}</div>
                  <p className="text-neutral-500 text-sm mt-1">{l.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-brand-600 text-sm font-semibold group-hover:gap-2 transition-all">
                    Open <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET OLI teaser */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-neutral-900 text-white p-8 sm:p-14 grid md:grid-cols-2 gap-8 items-center">
            <div className="absolute -top-24 -right-24 h-[400px] w-[400px] rounded-full bg-brand-500/40 blob" />
            <div className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-orange-400/30 blob" style={{ animationDelay: '-3s' }} />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs uppercase tracking-widest text-brand-200 font-semibold"><Sparkles className="h-3.5 w-3.5" /> Meet OLI</div>
              <h3 className="font-display text-3xl sm:text-5xl font-bold mt-4 leading-tight">Your friendly <span className="text-brand-400">AI co-pilot</span>.</h3>
              <p className="text-neutral-300 mt-4 text-base sm:text-lg">OLI walks with you across every page — suggesting services, running the Business Health game, booking demos and connecting you to our team on WhatsApp.</p>
              <div className="flex flex-wrap gap-3 mt-6">
                <button onClick={() => setGameOpen(true)} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 shadow-glow transition">
                  <Gamepad2 className="h-4 w-4" /> Play with OLI
                </button>
                <a href="https://wa.me/919624689325" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition">
                  <MessageSquare className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-glow overflow-hidden">
                <OliImage size={280} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterCTA />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      <GameChallenge open={gameOpen} onClose={() => setGameOpen(false)} />
    </main>
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

export default Home
