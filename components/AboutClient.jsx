'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, Rocket, Target, Heart, Users, CheckCircle2, ShieldCheck, TrendingUp, Award, Zap, Building2, ArrowRight, MessageSquare } from 'lucide-react'
import HeaderClient from '@/components/HeaderClient'
import FooterCTA from '@/components/FooterCTA'

const VALUES = [
  { icon: Rocket, title: 'Ship fast', desc: 'Weeks, not years. We prefer boring, working software over perfect vaporware.' },
  { icon: Heart, title: 'Customer obsession', desc: 'Your KPIs are our KPIs. If it doesn’t move your numbers, we don’t ship it.' },
  { icon: ShieldCheck, title: 'Trust, always', desc: 'No hidden fees. No lock-in. Your data, your code — always yours.' },
  { icon: Zap, title: 'Craft over shortcuts', desc: 'Beautiful design, clean code and thoughtful UX. Every pixel matters.' },
]

const PROCESS = [
  { title: 'Discover', desc: 'We deep-dive into your business — goals, workflows and pain points.' },
  { title: 'Design', desc: 'Interactive prototypes you can click before we write any code.' },
  { title: 'Develop', desc: 'Agile sprints with weekly demos. You see progress every 5 days.' },
  { title: 'Deploy', desc: 'Zero-downtime launch with training and documentation.' },
  { title: 'Delight', desc: 'Quarterly reviews, new features and ongoing growth partnership.' },
]

const TIMELINE = [
  { year: '2019', title: 'The seed is planted', desc: 'Olive Orange founded with a simple belief: every business deserves world-class software.' },
  { year: '2021', title: 'First 100 clients', desc: 'CRM and ERP suite live at manufacturers, hospitals and retailers across India.' },
  { year: '2023', title: 'AI-first pivot', desc: 'Launched Oli AI Assistant — our first LLM-powered product for Indian SMBs.' },
  { year: '2024', title: '500+ businesses served', desc: 'Crossed 500 happy clients. Team of 40+ builders, designers and consultants.' },
  { year: '2026', title: 'OLI, the mascot', desc: 'The signature Olive Orange experience launches — a friendly AI guide for every visitor.' },
]

const ACHIEVEMENTS = [
  { v: '500+', l: 'Businesses served' },
  { v: '15', l: 'Oli products live' },
  { v: '40+', l: 'Team members' },
  { v: '99%', l: 'Client CSAT' },
]

const TEAM = [
  { name: 'Aarav Mehta', role: 'Founder & CEO', initials: 'AM' },
  { name: 'Priya Nair', role: 'Chief Product Officer', initials: 'PN' },
  { name: 'Rohan Shah', role: 'VP Engineering', initials: 'RS' },
  { name: 'Sneha Patel', role: 'Head of Design', initials: 'SP' },
  { name: 'Vikram Rao', role: 'AI Lead', initials: 'VR' },
  { name: 'Ananya Iyer', role: 'Customer Success Head', initials: 'AI' },
]

export default function AboutClient() {
  return (
    <main className="relative bg-white text-neutral-900 overflow-x-hidden">
      <HeaderClient />

      {/* HERO */}
      <section className="relative pt-36 pb-14 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-brand-200 opacity-60 blob" />
          <div className="absolute top-10 -right-20 h-[520px] w-[520px] rounded-full bg-orange-100 opacity-80 blob" style={{ animationDelay: '-4s' }} />
          <div className="absolute inset-0 grid-pattern opacity-40" />
        </div>
        <div className="container max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" /> About Olive Orange
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold mt-4 tracking-tight leading-[1.05]">
            We believe every problem <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">has a solution.</span>
          </h1>
          <p className="text-neutral-600 text-lg mt-5 max-w-2xl mx-auto">
            Olive Orange Technologies is a fast-growing Indian software company — combining the honesty of olive-grove craftsmanship with the energy of an orange sunrise.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-16">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold uppercase tracking-widest">Our Story</div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">Born to solve real problems.</h2>
              <div className="mt-4 space-y-4 text-neutral-600 leading-relaxed">
                <p>We started Olive Orange with a simple observation: most Indian SMBs pay too much for software that solves too little. Global tools are expensive and don’t understand GST, WhatsApp or Indian workflows. Local tools are cheap but ugly, slow and hard to trust.</p>
                <p>So we built a different kind of software company — world-class engineering, beautiful design and honest pricing, purpose-built for Indian businesses. From CRM to ERP, HRMS to POS, AI to Mobile Apps — the Oli suite is our answer.</p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-brand-100 to-orange-50 p-6 border border-brand-200 shadow-soft">
                <Image src="/brand/oli-mascot.jpg" alt="OLI" width={500} height={500} className="w-full h-auto rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="py-16 bg-gradient-to-b from-white via-brand-50/40 to-white">
        <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white border border-neutral-100 shadow-soft p-8 card-lift">
            <div className="h-12 w-12 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center"><Target className="h-6 w-6" /></div>
            <div className="font-display text-2xl font-bold mt-4">Our Mission</div>
            <p className="text-neutral-600 mt-3 leading-relaxed">Make world-class software accessible to every Indian business — from a 5-person startup to a 5,000-person enterprise. Every problem, one solution away.</p>
          </div>
          <div className="rounded-3xl bg-neutral-900 text-white shadow-soft p-8 relative overflow-hidden card-lift">
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand-500/30 blob" />
            <div className="relative">
              <div className="h-12 w-12 rounded-2xl bg-brand-500/20 text-brand-300 flex items-center justify-center"><Rocket className="h-6 w-6" /></div>
              <div className="font-display text-2xl font-bold mt-4">Our Vision</div>
              <p className="text-neutral-300 mt-3 leading-relaxed">To become the operating system of Indian business — powering 10,000+ companies with the Oli suite by 2030, while making OLI the most-loved brand mascot in Indian SaaS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold uppercase tracking-widest">Core Values</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">What we live by</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {VALUES.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="rounded-3xl p-6 bg-white border border-neutral-100 shadow-soft card-lift">
                <div className="h-11 w-11 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center"><v.icon className="h-5 w-5" /></div>
                <div className="font-display font-semibold text-lg mt-4">{v.title}</div>
                <p className="text-neutral-500 text-sm mt-1">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold uppercase tracking-widest">Our Process</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">How we work with you</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4 mt-10">
            {PROCESS.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="relative rounded-2xl p-5 bg-white border border-neutral-100 shadow-soft">
                <div className="absolute -top-3 -left-3 h-9 w-9 rounded-xl bg-brand-500 text-white flex items-center justify-center font-bold shadow-glow">{i + 1}</div>
                <div className="font-display font-semibold mt-2">{s.title}</div>
                <p className="text-neutral-500 text-sm mt-1">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold uppercase tracking-widest">Journey</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">The Olive Orange story so far</h2>
          </div>
          <div className="relative mt-12">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-200 via-brand-300 to-transparent" />
            <div className="space-y-6">
              {TIMELINE.map((t, i) => (
                <motion.div key={t.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="relative pl-16">
                  <div className="absolute left-1.5 top-3 h-9 w-9 rounded-full bg-brand-500 text-white text-xs font-bold flex items-center justify-center shadow-glow">{t.year.slice(-2)}</div>
                  <div className="rounded-2xl p-5 bg-white border border-neutral-100 shadow-soft">
                    <div className="text-xs text-brand-600 font-semibold">{t.year}</div>
                    <div className="font-display font-semibold text-lg mt-1">{t.title}</div>
                    <p className="text-neutral-500 text-sm mt-1">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-16 bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold uppercase tracking-widest">Achievements</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">Numbers we’re proud of</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {ACHIEVEMENTS.map(a => (
              <div key={a.l} className="rounded-3xl bg-white border border-neutral-100 shadow-soft p-6 text-center card-lift">
                <div className="font-display text-4xl font-bold text-brand-600">{a.v}</div>
                <div className="text-neutral-500 text-sm mt-1">{a.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold uppercase tracking-widest">Our Team</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">The humans behind the software</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
            {TEAM.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="rounded-3xl p-6 bg-white border border-neutral-100 shadow-soft card-lift text-center">
                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center font-display text-2xl font-bold shadow-glow">{m.initials}</div>
                <div className="font-display font-semibold mt-4">{m.name}</div>
                <div className="text-sm text-neutral-500">{m.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-gradient-to-b from-white via-brand-50/40 to-white">
        <div className="container max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold uppercase tracking-widest">Why Choose Us</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">Why 500+ businesses picked Olive Orange</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {[
              { icon: Award, title: 'Industry expertise', desc: 'Battle-tested across 12 verticals.' },
              { icon: Zap, title: 'Fast delivery', desc: 'MVPs in weeks, not months.' },
              { icon: ShieldCheck, title: 'Data ownership', desc: 'Your data, your code — always.' },
              { icon: TrendingUp, title: 'Measurable ROI', desc: 'Every project ends with numbers.' },
              { icon: Users, title: 'Founder-friendly pricing', desc: 'Launch-offer plans on every product.' },
              { icon: Building2, title: 'India-first design', desc: 'GST, WhatsApp and Indian workflows baked in.' },
            ].map(c => (
              <div key={c.title} className="rounded-2xl p-5 bg-white border border-neutral-100 shadow-soft card-lift flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center flex-shrink-0"><c.icon className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold">{c.title}</div>
                  <p className="text-neutral-500 text-sm mt-1">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
    </main>
  )
}
