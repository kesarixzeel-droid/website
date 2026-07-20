'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Bot, Globe2, Smartphone, Wrench, Palette, Briefcase, TrendingUp, Cloud, Zap, Boxes, LayoutDashboard, BarChart3, Sparkles, ArrowRight, CheckCircle2, MessageSquare, Quote, ChevronRight, ShieldCheck } from 'lucide-react'
import HeaderClient from '@/components/HeaderClient'
import FooterCTA from '@/components/FooterCTA'
import DemoModal from '@/components/DemoModal'
import { Illustration } from '@/components/IndustryIllustrations'

const ICON_MAP = { Bot, Globe2, Smartphone, Wrench, Palette, Briefcase, TrendingUp, Cloud, Zap, Boxes, LayoutDashboard, BarChart3 }

export default function IndustryDetailClient({ industry, recommended }) {
  const [demoOpen, setDemoOpen] = useState(false)
  const waLink = `https://wa.me/919624689325?text=${encodeURIComponent('Hi, I run a business in the ' + industry.name + ' industry. I want to discuss software solutions.')}`

  return (
    <main className="relative bg-white text-neutral-900 overflow-x-hidden">
      <HeaderClient />

      {/* HERO */}
      <section className="relative pt-32 pb-14 sm:pt-40 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-brand-200 opacity-60 blob" />
          <div className="absolute top-10 -right-20 h-[520px] w-[520px] rounded-full bg-orange-100 opacity-80 blob" style={{ animationDelay: '-4s' }} />
          <div className="absolute inset-0 grid-pattern opacity-40" />
        </div>
        <div className="container max-w-6xl mx-auto">
          <nav className="text-xs text-neutral-500 mb-4">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/industries" className="hover:text-brand-600">Industries</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-900 font-medium">{industry.name}</span>
          </nav>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-widest">
                Industry — {industry.name}
              </div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-4 tracking-tight leading-[1.05]">
                {industry.tagline}
              </motion.h1>
              <p className="text-neutral-600 text-lg mt-5 max-w-2xl">{industry.heroSubtitle}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button onClick={() => setDemoOpen(true)} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 shadow-glow transition">
                  Book Free Consultation <ArrowRight className="h-4 w-4" />
                </button>
                <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 text-white font-semibold hover:bg-black transition">
                  <MessageSquare className="h-4 w-4" /> WhatsApp Us
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-neutral-500">
                <div className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-brand-500" /> Industry best-practices</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand-500" /> Deployed at 500+ businesses</div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}
                className="relative rounded-3xl bg-white border border-brand-100 shadow-soft p-6 overflow-hidden">
                <Illustration kind={industry.illustration} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold uppercase tracking-widest">Overview</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">Built specifically for {industry.name}</h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-4 leading-relaxed">{industry.overview}</p>
        </div>
      </section>

      {/* PAIN POINTS + METRICS side by side */}
      <section className="py-16 bg-gradient-to-b from-white via-brand-50/40 to-white">
        <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Pain points */}
          <div className="rounded-3xl bg-white border border-neutral-100 shadow-soft p-8">
            <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-red-100 text-red-700 font-semibold uppercase tracking-widest">The Pain</div>
            <h3 className="font-display text-2xl font-bold mt-3">Sound familiar?</h3>
            <ul className="mt-5 space-y-3">
              {industry.painPoints.map(p => (
                <li key={p} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-base leading-none">✕</span>
                  </div>
                  <span className="text-neutral-700">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Metrics */}
          <div className="rounded-3xl bg-neutral-900 text-white shadow-soft p-8 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand-500/30 blob" />
            <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-orange-400/20 blob" style={{ animationDelay: '-3s' }} />
            <div className="relative">
              <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 font-semibold uppercase tracking-widest">Our Impact</div>
              <h3 className="font-display text-2xl font-bold mt-3">Real numbers, real clients</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {industry.metrics.map(m => (
                  <div key={m.l} className="rounded-2xl bg-white/10 border border-white/10 p-4 text-center">
                    <div className="font-display text-3xl font-bold text-brand-400">{m.v}</div>
                    <div className="text-xs text-neutral-300 mt-1 leading-tight">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold uppercase tracking-widest">Solutions</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">What we deploy for {industry.name}</h2>
            <p className="text-neutral-600 mt-3">The exact stack we’ve battle-tested across 500+ deployments.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {industry.solutions.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="rounded-3xl bg-white border border-neutral-100 shadow-soft p-6 card-lift flex flex-col">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center shadow-glow">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="font-display font-semibold text-lg mt-4">{s.title}</div>
                <p className="text-neutral-500 text-sm mt-1 flex-1">{s.desc}</p>
                <Link href={s.link} className="mt-4 inline-flex items-center gap-1 text-brand-600 text-sm font-semibold hover:gap-2 transition-all">
                  Learn more <ChevronRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-20 bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-white border border-brand-100 shadow-soft p-8 sm:p-12">
            <div className="absolute -top-6 left-8 h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center shadow-glow">
              <Quote className="h-6 w-6" />
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold uppercase tracking-widest">Case Study</div>
            <p className="font-display text-xl sm:text-2xl font-medium mt-4 leading-relaxed text-neutral-800">
              “{industry.caseStudy.quote}”
            </p>
            <div className="mt-6 pt-6 border-t border-neutral-100 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center font-bold text-lg">
                {industry.caseStudy.client[0]}
              </div>
              <div>
                <div className="font-semibold">{industry.caseStudy.client}</div>
                <div className="text-sm text-neutral-500">{industry.caseStudy.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECOMMENDED SERVICES */}
      {recommended && recommended.length > 0 && (
        <section className="py-20">
          <div className="container max-w-7xl mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold uppercase tracking-widest">Recommended</div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">Services that fit {industry.name} best</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              {recommended.map(r => {
                const RIcon = ICON_MAP[r.icon] || Sparkles
                return (
                  <Link key={r.slug} href={`/services/${r.slug}`} className="group rounded-3xl p-6 bg-white border border-neutral-100 shadow-soft card-lift block">
                    <div className="flex items-start gap-3">
                      <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center shadow-glow"><RIcon className="h-5 w-5" /></div>
                      <div>
                        <div className="font-display font-semibold">{r.name}</div>
                        <p className="text-neutral-500 text-sm mt-1">{r.tagline}</p>
                      </div>
                    </div>
                    <div className="mt-4 inline-flex items-center gap-1 text-brand-600 text-sm font-semibold group-hover:gap-2 transition-all">Explore <ChevronRight className="h-4 w-4" /></div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <FooterCTA />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  )
}
