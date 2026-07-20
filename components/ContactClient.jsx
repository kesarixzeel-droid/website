'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageSquare, Mail, Instagram, Facebook, MapPin, ArrowRight, Sparkles, Send, Building2 } from 'lucide-react'
import { toast } from 'sonner'
import HeaderClient from '@/components/HeaderClient'
import FooterCTA from '@/components/FooterCTA'
import DemoModal from '@/components/DemoModal'

export default function ContactClient() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', company: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)

  const submit = async () => {
    if (!form.name || !form.phone) { toast.error('Name and phone are required'); return }
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data?.ok) {
        toast.success('Message received! We’ll get back within 2 hours.')
        window.__oliCelebrate?.()
        setForm({ name: '', phone: '', email: '', company: '', message: '' })
      } else toast.error('Failed. Please try again.')
    } catch { toast.error('Network error') }
    setSubmitting(false)
  }

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
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" /> Contact
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold mt-4 tracking-tight leading-[1.05]">
            Let’s <span className="bg-gradient-to-r from-brand-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">talk business.</span>
          </h1>
          <p className="text-neutral-600 text-lg mt-5 max-w-2xl mx-auto">
            Prefer WhatsApp? Phone? Email? Whichever way you reach us — a human replies in under 2 hours.
          </p>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="pb-16">
        <div className="container max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="tel:+919624689325" className="rounded-3xl bg-white border border-neutral-100 shadow-soft p-6 card-lift flex flex-col">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center shadow-glow"><Phone className="h-6 w-6" /></div>
            <div className="font-display font-semibold text-lg mt-4">Call us</div>
            <div className="text-neutral-600 text-sm mt-1">+91 96246 89325</div>
            <div className="text-xs text-neutral-400 mt-1">Mon–Sat, 9am–9pm IST</div>
          </a>
          <a href="https://wa.me/919624689325" target="_blank" rel="noreferrer" className="rounded-3xl bg-white border border-neutral-100 shadow-soft p-6 card-lift flex flex-col">
            <div className="h-12 w-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-glow"><MessageSquare className="h-6 w-6" /></div>
            <div className="font-display font-semibold text-lg mt-4">WhatsApp</div>
            <div className="text-neutral-600 text-sm mt-1">Fastest response</div>
            <div className="text-xs text-neutral-400 mt-1">Reply in &lt; 5 minutes</div>
          </a>
          <a href="mailto:hello@oliveorange.tech" className="rounded-3xl bg-white border border-neutral-100 shadow-soft p-6 card-lift flex flex-col">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center shadow-glow"><Mail className="h-6 w-6" /></div>
            <div className="font-display font-semibold text-lg mt-4">Email</div>
            <div className="text-neutral-600 text-sm mt-1">hello@oliveorange.tech</div>
            <div className="text-xs text-neutral-400 mt-1">Reply in &lt; 2 hours</div>
          </a>
          <div className="rounded-3xl bg-white border border-neutral-100 shadow-soft p-6 card-lift flex flex-col">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center shadow-glow"><Building2 className="h-6 w-6" /></div>
            <div className="font-display font-semibold text-lg mt-4">Visit</div>
            <div className="text-neutral-600 text-sm mt-1">Surat, Gujarat, India</div>
            <div className="text-xs text-neutral-400 mt-1">By appointment only</div>
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="pb-20">
        <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl bg-white border border-neutral-100 shadow-soft p-8">
            <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold uppercase tracking-widest">Send a Message</div>
            <h3 className="font-display text-2xl font-bold mt-3">Tell us what you need</h3>
            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Full name*" className="px-4 py-3 rounded-xl border border-neutral-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
              <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Phone / WhatsApp*" className="px-4 py-3 rounded-xl border border-neutral-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
              <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" className="px-4 py-3 rounded-xl border border-neutral-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
              <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Company" className="px-4 py-3 rounded-xl border border-neutral-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
            </div>
            <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" rows={4} className="w-full mt-3 px-4 py-3 rounded-xl border border-neutral-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <button onClick={submit} disabled={submitting} className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 shadow-glow disabled:opacity-60 transition">
                {submitting ? 'Sending…' : (<>Send Message <Send className="h-4 w-4" /></>)}
              </button>
              <button onClick={() => setDemoOpen(true)} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 text-white font-semibold hover:bg-black transition">
                Book Demo Instead <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          {/* Map + social */}
          <div className="space-y-4">
            <div className="rounded-3xl bg-white border border-neutral-100 shadow-soft overflow-hidden">
              <div className="aspect-[16/10] w-full">
                <iframe
                  title="Olive Orange — Surat"
                  src="https://www.google.com/maps?q=Surat,Gujarat,India&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center"><MapPin className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold">Olive Orange Technologies</div>
                  <div className="text-sm text-neutral-500">Surat, Gujarat, India</div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-white border border-neutral-100 shadow-soft p-6">
              <div className="font-display font-semibold">Follow us</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white text-sm font-semibold hover:opacity-90 transition"><Instagram className="h-4 w-4" /> Instagram</a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1877F2] text-white text-sm font-semibold hover:opacity-90 transition"><Facebook className="h-4 w-4" /> Facebook</a>
                <a href="https://wa.me/919624689325" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:opacity-90 transition"><MessageSquare className="h-4 w-4" /> WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterCTA />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  )
}
