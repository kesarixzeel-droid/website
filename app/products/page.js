import Link from 'next/link'
import Image from 'next/image'
import { PRODUCTS } from '@/lib/products-data'
import HeaderClient from '@/components/HeaderClient'
import FooterCTA from '@/components/FooterCTA'
import { ChevronRight, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Products — Olive Orange Technologies',
  description: '15 beautifully-designed software products for every business function — CRM, ERP, HRMS, POS, and more.',
}

export default function ProductsIndex() {
  return (
    <main className="relative bg-white text-neutral-900 overflow-x-hidden">
      <HeaderClient />

      {/* Hero */}
      <section className="relative pt-36 pb-14 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 h-[400px] w-[400px] rounded-full bg-brand-200 opacity-60 blob" />
          <div className="absolute top-10 -right-20 h-[500px] w-[500px] rounded-full bg-orange-100 opacity-70 blob" style={{ animationDelay: '-4s' }} />
          <div className="absolute inset-0 grid-pattern opacity-40" />
        </div>
        <div className="container max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" /> Products
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold mt-4 tracking-tight leading-[1.05]">
            The Oli product suite. <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">15 apps. One ecosystem.</span>
          </h1>
          <p className="text-neutral-600 text-lg mt-5 max-w-2xl mx-auto">
            Beautifully-designed software for every function — built to work together, priced to grow with you.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="container max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="group">
              <div className="h-full rounded-3xl bg-white border border-neutral-100 shadow-soft overflow-hidden card-lift">
                <div className="relative aspect-[16/10] bg-gradient-to-br from-brand-50 to-white overflow-hidden">
                  <Image src={p.image + '?w=800&auto=format&fit=crop&q=70'} alt={p.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] uppercase tracking-widest font-bold text-brand-700">{p.tag}</div>
                </div>
                <div className="p-6">
                  <div className="font-display font-bold text-xl">{p.name}</div>
                  <p className="text-neutral-500 text-sm mt-1 line-clamp-2">{p.tagline}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-neutral-400 line-through">₹ {p.pricing.mrp.toLocaleString('en-IN')}</div>
                      <div className="font-display text-lg font-bold text-brand-600">₹ {p.pricing.offer.toLocaleString('en-IN')}</div>
                    </div>
                    <div className="inline-flex items-center gap-1 text-brand-600 text-sm font-semibold group-hover:gap-2 transition-all">
                      Explore <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FooterCTA />
    </main>
  )
}
