'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles, MessageSquare, PlayCircle, ShieldCheck, Rocket, ChevronRight, Building2 } from 'lucide-react'
import HeaderClient from '@/components/HeaderClient'
import FooterCTA from '@/components/FooterCTA'
import DemoModal from '@/components/DemoModal'

function inr(n) { return '₹ ' + n.toLocaleString('en-IN') }

export default function ProductDetailClient({ product, related }) {
  const [demoOpen, setDemoOpen] = useState(false)
  const waLink = `https://wa.me/919624689325?text=${encodeURIComponent('Hi, I want to try ' + product.name + '. Please share demo access.')}`

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
            <Link href="/products" className="hover:text-brand-600">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-900 font-medium">{product.name}</span>
          </nav>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-widest">{product.tag}</div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-4 tracking-tight leading-[1.05]">
                {product.name}
              </motion.h1>
              <p className="font-display text-lg sm:text-xl text-brand-600 font-semibold mt-3">{product.tagline}</p>
              <p className="text-neutral-600 text-base sm:text-lg mt-4 max-w-xl">{product.heroSubtitle}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button onClick={() => setDemoOpen(true)} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 shadow-glow transition">
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => setDemoOpen(true)} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 text-white font-semibold hover:bg-black transition">
                  <PlayCircle className="h-4 w-4" /> Book Demo
                </button>
                <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-neutral-200 text-neutral-900 font-semibold hover:border-brand-500 hover:text-brand-600 transition">
                  <MessageSquare className="h-4 w-4" /> WhatsApp
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-neutral-500">
                <div className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-brand-500" /> 14-day free trial</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand-500" /> No credit card required</div>
                <div className="flex items-center gap-1.5"><Rocket className="h-4 w-4 text-brand-500" /> Live in 48 hours</div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}
                className="relative rounded-3xl overflow-hidden shadow-soft border border-brand-100 bg-white">
                <div className="relative aspect-[16/10]">
                  <Image src={product.image + '?w=1200&auto=format&fit=crop&q=80'} alt={product.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                </div>
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold uppercase tracking-widest">Overview</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">What {product.name} does</h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-4 leading-relaxed">{product.overview}</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 bg-gradient-to-b from-white via-brand-50/40 to-white">
        <div className="container max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold uppercase tracking-widest">Features</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">Everything included</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {product.features.map((f, i) => (
              <motion.div key={f} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}
                className="rounded-2xl p-5 bg-white border border-neutral-100 shadow-soft card-lift">
                <CheckCircle2 className="h-5 w-5 text-brand-500" />
                <div className="font-medium text-sm mt-3 leading-snug">{f}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES + PRICING */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Industries */}
          <div className="rounded-3xl p-8 bg-white border border-neutral-100 shadow-soft">
            <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold uppercase tracking-widest">Best For</div>
            <h3 className="font-display text-2xl font-bold mt-3">Industries we’ve deployed in</h3>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {product.industries.map(ind => (
                <div key={ind} className="flex items-center gap-2.5 rounded-xl bg-brand-50 px-4 py-3">
                  <Building2 className="h-4 w-4 text-brand-600 flex-shrink-0" />
                  <span className="font-medium text-sm">{ind}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="relative rounded-3xl p-8 bg-neutral-900 text-white shadow-soft overflow-hidden">
            <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-brand-500/30 blob" />
            <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-orange-400/20 blob" style={{ animationDelay: '-3s' }} />
            <div className="relative">
              <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 font-semibold uppercase tracking-widest">Pricing</div>
              <h3 className="font-display text-2xl font-bold mt-3">Simple, transparent pricing</h3>
              <div className="mt-6 flex items-baseline gap-3">
                <div className="font-display text-5xl font-bold text-brand-400">{inr(product.pricing.offer)}</div>
                <div className="text-neutral-400 line-through text-lg">{inr(product.pricing.mrp)}</div>
              </div>
              <div className="text-sm text-brand-300 font-semibold mt-1">Save {Math.round(((product.pricing.mrp - product.pricing.offer) / product.pricing.mrp) * 100)}% — launch offer</div>
              <div className="text-sm text-neutral-300 mt-1">{product.pricing.note}</div>
              <button onClick={() => setDemoOpen(true)} className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 shadow-glow transition">
                Start 14-day Free Trial <ArrowRight className="h-4 w-4" />
              </button>
              <div className="mt-3 text-xs text-neutral-400 text-center">No credit card. Cancel anytime.</div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related && related.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-brand-50/40 to-white">
          <div className="container max-w-7xl mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold uppercase tracking-widest">More Products</div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">You might also like</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              {related.map(r => (
                <Link key={r.slug} href={`/products/${r.slug}`} className="group rounded-3xl bg-white border border-neutral-100 shadow-soft overflow-hidden card-lift block">
                  <div className="relative aspect-[16/10]">
                    <Image src={r.image + '?w=600&auto=format&fit=crop&q=70'} alt={r.name} fill sizes="33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] uppercase tracking-widest font-bold text-brand-700">{r.tag}</div>
                  </div>
                  <div className="p-5">
                    <div className="font-display font-bold text-lg">{r.name}</div>
                    <p className="text-neutral-500 text-sm mt-1 line-clamp-2">{r.tagline}</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-brand-600 text-sm font-semibold group-hover:gap-2 transition-all">Explore <ChevronRight className="h-4 w-4" /></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FooterCTA />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  )
}
