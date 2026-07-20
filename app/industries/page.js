import Link from 'next/link'
import { INDUSTRY_LIST } from '@/lib/industries-data'
import { Illustration } from '@/components/IndustryIllustrations'
import HeaderClient from '@/components/HeaderClient'
import FooterCTA from '@/components/FooterCTA'
import { ChevronRight, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Industries — Olive Orange Technologies',
  description: 'Software solutions tailored for 12 industries: Manufacturing, Healthcare, Education, Retail, Real Estate and more.',
}

export default function IndustriesIndex() {
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
            <Sparkles className="h-3.5 w-3.5" /> Industries
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold mt-4 tracking-tight leading-[1.05]">
            Software tailored for <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">your industry.</span>
          </h1>
          <p className="text-neutral-600 text-lg mt-5 max-w-2xl mx-auto">
            From factories to hospitals, classrooms to construction sites — 12 verticals, each with a purpose-built stack.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="container max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRY_LIST.map((ind, i) => (
            <Link key={ind.slug} href={`/industries/${ind.slug}`} className="group">
              <div className="h-full rounded-3xl bg-white border border-neutral-100 shadow-soft overflow-hidden card-lift">
                <div className="relative bg-gradient-to-br from-brand-50 to-white">
                  <Illustration kind={ind.illustration} />
                </div>
                <div className="p-6">
                  <div className="font-display font-bold text-xl">{ind.name}</div>
                  <p className="text-neutral-500 text-sm mt-1">{ind.tagline}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-brand-600 text-sm font-semibold group-hover:gap-2 transition-all">
                    Explore <ChevronRight className="h-4 w-4" />
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
