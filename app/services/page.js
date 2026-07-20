import Link from 'next/link'
import { Bot, Globe2, Smartphone, Wrench, Palette, Briefcase, TrendingUp, Cloud, Zap, Boxes, LayoutDashboard, BarChart3, Sparkles, ChevronRight } from 'lucide-react'
import { SERVICE_CATEGORIES } from '@/lib/services-data'
import HeaderClient from '@/components/HeaderClient'
import FooterCTA from '@/components/FooterCTA'

const ICON_MAP = { Bot, Globe2, Smartphone, Wrench, Palette, Briefcase, TrendingUp, Cloud, Zap, Boxes, LayoutDashboard, BarChart3 }

export const metadata = {
  title: 'Services — Olive Orange Technologies',
  description: 'Twelve deeply-engineered service categories: AI, Web, Mobile, DevOps, Automation, Consulting, Marketing, BI and more.',
}

export default function ServicesIndex() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-widest">Services</div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold mt-4 tracking-tight leading-[1.05]">
            Twelve powerful services. <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">One growth partner.</span>
          </h1>
          <p className="text-neutral-600 text-lg mt-5 max-w-2xl mx-auto">
            From AI to Cloud, Websites to Consulting — explore the full Olive Orange service stack.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="container max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICE_CATEGORIES.map((c, i) => {
            const Icon = ICON_MAP[c.icon] || Sparkles
            return (
              <Link key={c.slug} href={`/services/${c.slug}`} className="group">
                <div className="h-full rounded-3xl bg-white border border-neutral-100 shadow-soft p-6 card-lift relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-100 opacity-0 group-hover:opacity-100 transition" />
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center shadow-glow">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="font-display font-semibold text-lg">{c.name}</div>
                        <p className="text-neutral-500 text-sm mt-1">{c.tagline}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {c.subServices.slice(0, 4).map(s => (
                        <span key={s} className="text-[11px] px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 font-medium">{s}</span>
                      ))}
                      {c.subServices.length > 4 && (
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500 font-medium">+{c.subServices.length - 4} more</span>
                      )}
                    </div>
                      <div className="mt-5 inline-flex items-center gap-1 text-brand-600 text-sm font-semibold group-hover:gap-2 transition-all">
                      Explore <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <FooterCTA />
    </main>
  )
}
