import Link from 'next/link'
import Image from 'next/image'
import { BLOG_POSTS } from '@/lib/blog-data'
import HeaderClient from '@/components/HeaderClient'
import FooterCTA from '@/components/FooterCTA'
import { Sparkles, Clock, ArrowRight, User } from 'lucide-react'

export const metadata = {
  title: 'Blog — Olive Orange Technologies',
  description: 'Insights, guides and case studies on AI, CRM, ERP, cloud, retail, healthcare and more — from the Olive Orange team.',
}

function fmtDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
}

export default function BlogIndex() {
  const [featured, ...rest] = BLOG_POSTS
  return (
    <main className="relative bg-white text-neutral-900 overflow-x-hidden">
      <HeaderClient />

      {/* Hero */}
      <section className="relative pt-36 pb-10 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 h-[400px] w-[400px] rounded-full bg-brand-200 opacity-60 blob" />
          <div className="absolute top-10 -right-20 h-[500px] w-[500px] rounded-full bg-orange-100 opacity-70 blob" style={{ animationDelay: '-4s' }} />
          <div className="absolute inset-0 grid-pattern opacity-40" />
        </div>
        <div className="container max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" /> Blog
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold mt-4 tracking-tight leading-[1.05]">
            Insights that <span className="bg-gradient-to-r from-brand-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">ship results.</span>
          </h1>
          <p className="text-neutral-600 text-lg mt-5 max-w-2xl mx-auto">
            Honest playbooks, case studies and product deep-dives from the Olive Orange team.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-10">
        <div className="container max-w-7xl mx-auto">
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="grid lg:grid-cols-2 gap-8 items-center rounded-[2rem] overflow-hidden bg-white border border-neutral-100 shadow-soft card-lift">
              <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[280px]">
                <Image src={featured.image + '?w=1200&auto=format&fit=crop&q=75'} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 100vw, 50vw" priority />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-500 text-white text-[10px] uppercase tracking-widest font-bold">Featured</div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="text-xs uppercase tracking-widest text-brand-600 font-semibold">{featured.category}</div>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mt-3 leading-tight">{featured.title}</h2>
                <p className="text-neutral-600 mt-4 leading-relaxed">{featured.excerpt}</p>
                <div className="mt-6 flex items-center gap-4 text-xs text-neutral-500">
                  <div className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {featured.author}</div>
                  <div className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {featured.readMin} min read</div>
                  <div>{fmtDate(featured.date)}</div>
                </div>
                <div className="mt-5 inline-flex items-center gap-1 text-brand-600 text-sm font-semibold group-hover:gap-2 transition-all">Read article <ArrowRight className="h-4 w-4" /></div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Rest */}
      <section className="pb-20">
        <div className="container max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
              <article className="h-full rounded-3xl bg-white border border-neutral-100 shadow-soft overflow-hidden card-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={p.image + '?w=800&auto=format&fit=crop&q=70'} alt={p.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] uppercase tracking-widest font-bold text-brand-700">{p.category}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg leading-snug line-clamp-2">{p.title}</h3>
                  <p className="text-neutral-500 text-sm mt-2 line-clamp-2">{p.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> {p.author.split(' ')[0]}</div>
                      <div className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.readMin}m</div>
                    </div>
                    <div>{fmtDate(p.date)}</div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <FooterCTA />
    </main>
  )
}
