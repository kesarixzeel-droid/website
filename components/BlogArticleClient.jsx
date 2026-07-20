'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sparkles, Clock, ArrowRight, User, Tag, Calendar, ChevronRight } from 'lucide-react'
import HeaderClient from '@/components/HeaderClient'
import FooterCTA from '@/components/FooterCTA'

function fmtDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })
}

export default function BlogArticleClient({ post, related }) {
  return (
    <main className="relative bg-white text-neutral-900 overflow-x-hidden">
      <HeaderClient />

      {/* HERO */}
      <section className="relative pt-32 pb-10 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 h-[400px] w-[400px] rounded-full bg-brand-200 opacity-60 blob" />
          <div className="absolute top-10 -right-20 h-[500px] w-[500px] rounded-full bg-orange-100 opacity-70 blob" style={{ animationDelay: '-4s' }} />
        </div>
        <div className="container max-w-4xl mx-auto">
          <nav className="text-xs text-neutral-500 mb-4">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-brand-600">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-900 font-medium line-clamp-1">{post.title}</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-widest">
            <Tag className="h-3.5 w-3.5" /> {post.category}
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-bold mt-4 tracking-tight leading-[1.05]">
            {post.title}
          </motion.h1>
          <p className="text-neutral-600 text-lg mt-5 max-w-3xl leading-relaxed">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center font-bold text-xs">
                {post.author.split(' ').map(w => w[0]).join('')}
              </div>
              <div>
                <div className="font-medium text-neutral-900">{post.author}</div>
                <div className="text-xs text-neutral-500">{post.role}</div>
              </div>
            </div>
            <div className="h-6 w-px bg-neutral-200" />
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {fmtDate(post.date)}</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readMin} min read</div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="pb-10">
        <div className="container max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
            className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-soft border border-neutral-100">
            <Image src={post.image + '?w=1600&auto=format&fit=crop&q=80'} alt={post.title} fill priority className="object-cover" sizes="100vw" />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <article className="py-10">
        <div className="container max-w-3xl mx-auto">
          <div className="prose-content space-y-6">
            {post.content.map((para, i) => (
              <p key={i} className={i === 0 ? "text-neutral-800 text-lg leading-relaxed first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:text-brand-500 first-letter:mr-2 first-letter:float-left first-letter:leading-none" : "text-neutral-700 text-lg leading-relaxed"}>
                {para}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-neutral-100 flex flex-wrap gap-2">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mr-2 mt-1.5">Tags:</span>
            {post.tags.map(t => (
              <span key={t} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold">#{t}</span>
            ))}
          </div>

          {/* Author box */}
          <div className="mt-10 rounded-3xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 p-6 flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center font-display text-xl font-bold shadow-glow">
              {post.author.split(' ').map(w => w[0]).join('')}
            </div>
            <div className="flex-1">
              <div className="font-display font-semibold">Written by {post.author}</div>
              <div className="text-sm text-neutral-500">{post.role} — Olive Orange Technologies</div>
            </div>
            <Link href="/contact" className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-900 text-white text-sm font-semibold hover:bg-black transition">Get in touch <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </article>

      {/* Related */}
      {related && related.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-brand-50/40 to-white">
          <div className="container max-w-7xl mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-semibold uppercase tracking-widest">Related</div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">Keep reading</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              {related.map(r => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group rounded-3xl bg-white border border-neutral-100 shadow-soft overflow-hidden card-lift block">
                  <div className="relative aspect-[16/10]">
                    <Image src={r.image + '?w=600&auto=format&fit=crop&q=70'} alt={r.title} fill sizes="33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] uppercase tracking-widest font-bold text-brand-700">{r.category}</div>
                  </div>
                  <div className="p-5">
                    <div className="font-display font-bold leading-snug line-clamp-2">{r.title}</div>
                    <div className="mt-3 inline-flex items-center gap-1 text-brand-600 text-sm font-semibold group-hover:gap-2 transition-all">Read <ChevronRight className="h-4 w-4" /></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FooterCTA />
    </main>
  )
}
