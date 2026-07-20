'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Gamepad2, ShieldCheck, Sparkles, CheckCircle2, Clock, TrendingUp, Users, Zap } from 'lucide-react'
import HeaderClient from '@/components/HeaderClient'
import FooterCTA from '@/components/FooterCTA'
import GameChallenge from '@/components/GameChallenge'

export default function GamePageClient() {
  const [gameOpen, setGameOpen] = useState(false)

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
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-widest">
                <Gamepad2 className="h-3.5 w-3.5" /> The Business Health Challenge
              </div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-4 tracking-tight leading-[1.05]">
                How healthy is your <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-brand-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">business, really?</span>
              </motion.h1>
              <p className="text-neutral-600 text-lg mt-5 max-w-xl">
                Answer 8 quick questions. Get a personalized Business Health Score + AI-powered recommendations in under 60 seconds.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button onClick={() => setGameOpen(true)} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 shadow-glow transition">
                  Play Now — It’s Free <ArrowRight className="h-4 w-4" />
                </button>
                <div className="inline-flex items-center gap-1.5 text-xs text-neutral-500 px-3 py-2"><ShieldCheck className="h-4 w-4" /> No spam. Instant results.</div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-neutral-500">
                <div className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-brand-500" /> Takes 60 seconds</div>
                <div className="flex items-center gap-1.5"><Users className="h-4 w-4 text-brand-500" /> 2,400+ played this month</div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-8 shadow-soft">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand-500/30 blob" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="text-xs uppercase tracking-widest text-brand-300 font-semibold">Sample Report</div>
                    <div className="h-3 w-3 rounded-full bg-brand-500 animate-pulse" />
                  </div>
                  <div className="font-display text-7xl font-bold mt-4">38<span className="text-brand-400 text-3xl">/100</span></div>
                  <div className="text-sm text-neutral-300 mt-1">Verdict: At Risk — losing time and leads.</div>
                  <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[38%] bg-gradient-to-r from-red-500 via-orange-500 to-brand-500" />
                  </div>
                  <div className="mt-5 text-xs uppercase tracking-widest text-brand-300 font-semibold">AI Recommendations</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['CRM','Inventory','Automation','HRMS'].map(r => (
                      <span key={r} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-400" /> {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-gradient-to-b from-white via-brand-50/40 to-white">
        <div className="container max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold uppercase tracking-widest">How It Works</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">3 steps, 60 seconds</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {[
              { icon: Gamepad2, title: '1. Answer 8 questions', desc: 'Yes / No / Sometimes — no forms, no essays.' },
              { icon: TrendingUp, title: '2. Reveal your score', desc: 'Get a Business Health Score from 0–100 with a verdict.' },
              { icon: Zap, title: '3. Get AI recommendations', desc: 'Personalized list of software + revenue lift estimate.' },
            ].map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="rounded-3xl p-6 bg-white border border-neutral-100 shadow-soft card-lift">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center shadow-glow">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="font-display font-semibold text-lg mt-4">{s.title}</div>
                <p className="text-neutral-500 text-sm mt-1">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => setGameOpen(true)} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 shadow-glow transition">
              Start the Challenge <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <FooterCTA />
      <GameChallenge open={gameOpen} onClose={() => setGameOpen(false)} />
    </main>
  )
}
