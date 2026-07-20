'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CalendarClock, ArrowRight } from 'lucide-react'
import { toast } from 'sonner'

const SERVICES = [
  'CRM Software','ERP Software','HRMS','Billing Software','Inventory Management',
  'School Management','Hospital Management','Restaurant POS','Real Estate CRM',
  'AI Chatbots','Website Development','Mobile App Development',
]

export default function DemoModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', company: '', service: 'CRM Software', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const submit = async () => {
    if (!form.name || !form.phone) { toast.error('Name and phone are required'); return }
    setSubmitting(true)
    try {
      const res = await fetch('/api/demo', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data?.ok) {
        toast.success('Demo booked! Our team will reach out within 24 hrs.')
        window.__oliCelebrate?.()
        onClose?.()
        setForm({ name: '', phone: '', email: '', company: '', service: 'CRM Software', message: '' })
      } else { toast.error('Failed. Please try again.') }
    } catch { toast.error('Network error') }
    setSubmitting(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
          <motion.div initial={{ y: 40, scale: 0.95, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: 40, scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 250, damping: 24 }}
            className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="px-6 py-5 bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-between">
              <div className="flex items-center gap-2"><CalendarClock className="h-5 w-5" /><span className="font-semibold">Book Free Demo</span></div>
              <button onClick={onClose} className="p-1.5 rounded-full hover:bg-white/20"><X className="h-4 w-4" /></button>
            </div>
            <div className="p-6 space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Full name*" className="px-4 py-3 rounded-xl border border-neutral-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
                <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Phone / WhatsApp*" className="px-4 py-3 rounded-xl border border-neutral-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
                <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" className="px-4 py-3 rounded-xl border border-neutral-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
                <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Company" className="px-4 py-3 rounded-xl border border-neutral-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
              </div>
              <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 bg-white">
                {SERVICES.map(s => <option key={s}>{s}</option>)}
              </select>
              <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us briefly what you need" rows={3} className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
              <button onClick={submit} disabled={submitting} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 shadow-glow disabled:opacity-60 transition">
                {submitting ? 'Booking…' : (<>Book My Demo <ArrowRight className="h-4 w-4" /></>)}
              </button>
              <p className="text-xs text-neutral-400 text-center">30-min personalized walkthrough. No credit card needed.</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
