'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, MessageSquare } from 'lucide-react'
import DemoModal from '@/components/DemoModal'

export default function FooterCTA() {
  const [demoOpen, setDemoOpen] = useState(false)
  return (
    <>
      <section className="py-20">
        <div className="container max-w-6xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-brand-500 via-orange-500 to-brand-600 p-8 sm:p-14 text-white text-center">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="relative">
              <h3 className="font-display text-3xl sm:text-5xl font-bold">Every problem has a solution.</h3>
              <p className="text-white/90 mt-4 max-w-2xl mx-auto">Talk to Olive Orange — free 30-minute consultation. We’ll audit your business and recommend the right software.</p>
              <div className="flex flex-wrap gap-3 justify-center mt-8">
                <button onClick={() => setDemoOpen(true)} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-brand-600 font-semibold hover:bg-neutral-100 transition">Book Free Consultation <ArrowRight className="h-4 w-4" /></button>
                <a href="https://wa.me/919624689325" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 text-white font-semibold hover:bg-black transition">
                  <MessageSquare className="h-4 w-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="pt-16 pb-8 bg-neutral-950 text-neutral-300">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="relative h-10 w-10 rounded-xl overflow-hidden bg-white">
                  <Image src="/brand/oo-logo.jpg" alt="Olive Orange" width={40} height={40} />
                </div>
                <div className="font-display font-bold text-white text-lg">Olive Orange</div>
              </div>
              <p className="text-sm text-neutral-400 mt-3">Every problem has a solution.</p>
              <p className="text-sm text-neutral-400 mt-3">📞 +91 96246 89325</p>
            </div>
            <div>
              <div className="text-white font-semibold mb-3">Explore</div>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services" className="hover:text-brand-400">Services</Link></li>
                <li><Link href="/products" className="hover:text-brand-400">Products</Link></li>
                <li><Link href="/industries" className="hover:text-brand-400">Industries</Link></li>
                <li><Link href="/game" className="hover:text-brand-400">Game Challenge</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-white font-semibold mb-3">Company</div>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-brand-400">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-brand-400">Contact</Link></li>
                <li><a href="https://wa.me/919624689325" target="_blank" rel="noreferrer" className="hover:text-brand-400">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white font-semibold mb-3">Talk to Us</div>
              <a href="https://wa.me/919624689325" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500 text-white text-sm font-semibold hover:bg-brand-600">WhatsApp <ArrowRight className="h-3.5 w-3.5" /></a>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-neutral-500">
            <div>© {new Date().getFullYear()} Olive Orange Technologies. All rights reserved.</div>
            <div>Made with 🧡 in India</div>
          </div>
        </div>
      </footer>
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  )
}
