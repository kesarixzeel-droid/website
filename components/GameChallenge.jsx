'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, ArrowLeft, Sparkles, CheckCircle2, TrendingUp, Zap } from 'lucide-react'
import { toast } from 'sonner'

const QUESTIONS = [
  { key: 'lose_leads', q: 'Do you lose leads because of slow follow-ups?', emoji: '📞' },
  { key: 'use_excel', q: 'Do you still run your business on Excel sheets?', emoji: '📊' },
  { key: 'miss_followups', q: 'Do you or your team miss customer follow-ups?', emoji: '⏰' },
  { key: 'customers_wait', q: 'Do customers wait too long to hear back from you?', emoji: '🕐' },
  { key: 'sales_struggling', q: 'Is your sales team struggling to close deals?', emoji: '📉' },
  { key: 'manual_invoices', q: 'Do you send invoices manually?', emoji: '🧾' },
  { key: 'no_hr_system', q: 'Do you manage HR (attendance, payroll) manually?', emoji: '👥' },
  { key: 'no_reports', q: 'Are you missing real-time business reports?', emoji: '📈' },
]

const OPTIONS = [
  { v: 'yes', label: 'Yes, often', color: 'from-red-500 to-red-600' },
  { v: 'sometimes', label: 'Sometimes', color: 'from-amber-500 to-orange-500' },
  { v: 'no', label: 'No, we\u2019re good', color: 'from-emerald-500 to-emerald-600' },
]

export default function GameChallenge({ open, onClose }) {
  const [step, setStep] = useState(0) // 0..QUESTIONS.length-1 = questions, then lead, then result
  const [answers, setAnswers] = useState({})
  const [phase, setPhase] = useState('quiz') // quiz | lead | result | loading
  const [lead, setLead] = useState({ name: '', phone: '', email: '', company: '' })
  const [result, setResult] = useState(null)

  const total = QUESTIONS.length
  const progress = phase === 'quiz' ? (step / total) * 100 : phase === 'lead' ? 92 : 100

  const answer = (v) => {
    const q = QUESTIONS[step]
    setAnswers(a => ({ ...a, [q.key]: v }))
    if (step < total - 1) setStep(step + 1)
    else setPhase('lead')
  }

  const submit = async () => {
    if (!lead.name || !lead.phone) { toast.error('Please enter your name and phone.'); return }
    setPhase('loading')
    try {
      const res = await fetch('/api/game/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers, lead }),
      })
      const data = await res.json()
      if (data?.ok) {
        setResult(data.result)
        setPhase('result')
        window.__oliCelebrate?.()
        toast.success('Your Business Health report is ready!')
      } else {
        toast.error('Something went wrong. Please retry.')
        setPhase('lead')
      }
    } catch (e) {
      toast.error('Network error.')
      setPhase('lead')
    }
  }

  const reset = () => {
    setStep(0); setAnswers({}); setLead({ name: '', phone: '', email: '', company: '' })
    setResult(null); setPhase('quiz')
  }

  const closeAll = () => { reset(); onClose?.() }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeAll}
        >
          <motion.div
            initial={{ y: 40, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 40, scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 250, damping: 24 }}
            className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 sm:px-8 py-5 bg-gradient-to-br from-brand-500 to-brand-600 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-widest opacity-90">Business Health Challenge</span>
                </div>
                <button onClick={closeAll} className="p-1.5 rounded-full hover:bg-white/20"><X className="h-4 w-4" /></button>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mt-2">How Healthy Is Your Business?</h3>
              <div className="mt-4 h-1.5 bg-white/20 rounded-full overflow-hidden">
                <motion.div className="h-full bg-white" animate={{ width: `${progress}%` }} transition={{ type: 'spring', stiffness: 120, damping: 20 }} />
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 min-h-[320px]">
              {phase === 'quiz' && (
                <motion.div key={step} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                  <div className="text-xs text-neutral-500 mb-2">Question {step + 1} of {total}</div>
                  <h4 className="font-display text-xl sm:text-2xl font-semibold text-neutral-900">
                    <span className="mr-2">{QUESTIONS[step].emoji}</span>{QUESTIONS[step].q}
                  </h4>
                  <div className="grid gap-3 mt-6">
                    {OPTIONS.map(o => (
                      <button key={o.v} onClick={() => answer(o.v)}
                        className="group w-full text-left p-4 rounded-2xl border border-neutral-200 hover:border-brand-500 hover:bg-brand-50 transition flex items-center justify-between">
                        <span className="font-medium">{o.label}</span>
                        <span className={`h-8 w-8 rounded-full bg-gradient-to-br ${o.color} text-white flex items-center justify-center opacity-80 group-hover:opacity-100`}>
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </button>
                    ))}
                  </div>
                  {step > 0 && (
                    <button onClick={() => setStep(s => s - 1)} className="mt-6 inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-brand-600">
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                  )}
                </motion.div>
              )}

              {phase === 'lead' && (
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center"><TrendingUp className="h-5 w-5" /></div>
                    <div>
                      <h4 className="font-display text-xl sm:text-2xl font-semibold">Almost there! Where do we send your report?</h4>
                      <p className="text-sm text-neutral-500 mt-1">We'll unlock your Business Health Score + personalized AI recommendations.</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 mt-6">
                    <input value={lead.name} onChange={e => setLead({ ...lead, name: e.target.value })} placeholder="Full name*" className="px-4 py-3 rounded-xl border border-neutral-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
                    <input value={lead.phone} onChange={e => setLead({ ...lead, phone: e.target.value })} placeholder="Phone / WhatsApp*" className="px-4 py-3 rounded-xl border border-neutral-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
                    <input value={lead.email} onChange={e => setLead({ ...lead, email: e.target.value })} placeholder="Email" className="px-4 py-3 rounded-xl border border-neutral-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
                    <input value={lead.company} onChange={e => setLead({ ...lead, company: e.target.value })} placeholder="Company name" className="px-4 py-3 rounded-xl border border-neutral-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
                  </div>
                  <button onClick={submit} className="mt-6 w-full sm:w-auto inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 shadow-glow transition">
                    Reveal My Business Score <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-neutral-400 mt-3">We hate spam. Your info is safe with Olive Orange.</p>
                </motion.div>
              )}

              {phase === 'loading' && (
                <div className="flex flex-col items-center justify-center py-16 text-neutral-500">
                  <div className="h-10 w-10 rounded-full border-4 border-brand-100 border-t-brand-500 animate-spin" />
                  <div className="mt-4 text-sm">OLI is analyzing your answers…</div>
                </div>
              )}

              {phase === 'result' && result && (
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <ScoreRing value={result.health} />
                    <div className="flex-1 text-center sm:text-left">
                      <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold uppercase tracking-wide">{result.verdict}</div>
                      <h4 className="font-display text-2xl sm:text-3xl font-bold mt-2">Your Business Health: {result.health}/100</h4>
                      <p className="text-neutral-600 mt-2">{result.tone}</p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 p-5">
                    <div className="flex items-center gap-2 text-brand-700 font-semibold"><Zap className="h-4 w-4" /> AI Recommendation</div>
                    <p className="text-sm text-neutral-600 mt-1">Based on your answers, you'll benefit most from:</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {result.recommendations.map(r => (
                        <span key={r} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-brand-200 text-neutral-800 text-sm font-medium">
                          <CheckCircle2 className="h-4 w-4 text-brand-500" /> {r}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 text-sm text-neutral-600">Estimated revenue lift after adopting these tools: <span className="font-semibold text-neutral-900">{result.estimatedRevenueLift}</span></div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <a href={`https://wa.me/919624689325?text=${encodeURIComponent('Hi, I scored ' + result.health + '/100 on Olive Orange Business Health Challenge. I want to discuss ' + result.recommendations.join(', ') + '.')}`} target="_blank" rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 shadow-glow transition">
                      Get Free Consultation <ArrowRight className="h-4 w-4" />
                    </a>
                    <button onClick={reset} className="px-6 py-3 rounded-full border border-neutral-200 hover:border-brand-500 text-neutral-800 font-semibold transition">Retake</button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ScoreRing({ value = 0 }) {
  const size = 128
  const stroke = 12
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const offset = c - (value / 100) * c
  const color = value >= 75 ? '#22c55e' : value >= 50 ? '#FF7A00' : value >= 30 ? '#f59e0b' : '#ef4444'
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="score-ring">
        <circle cx={size/2} cy={size/2} r={r} stroke="#FFE9D6" strokeWidth={stroke} fill="none" />
        <motion.circle
          cx={size/2} cy={size/2} r={r} stroke={color} strokeWidth={stroke} fill="none" strokeLinecap="round"
          strokeDasharray={c} initial={{ strokeDashoffset: c }} animate={{ strokeDashoffset: offset }} transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="font-display text-3xl font-bold">{value}</div>
        <div className="text-[10px] text-neutral-500 uppercase tracking-widest">/ 100</div>
      </div>
    </div>
  )
}
