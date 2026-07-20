'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X as XIcon, ArrowRight } from 'lucide-react'
import DemoModal from '@/components/DemoModal'
import OliMascot from '@/components/OliMascot'
import GameChallenge from '@/components/GameChallenge'

const NAV = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/#products' },
  { name: 'Industries', href: '/industries' },
  { name: 'Game', href: '/#game' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
]

export default function HeaderClient() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)
  const [gameOpen, setGameOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className="fixed top-3 inset-x-3 sm:inset-x-6 z-50">
        <div className={`container max-w-7xl mx-auto flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 ${scrolled ? 'glass shadow-soft' : 'bg-white/60 backdrop-blur border border-white/60'}`}>
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 shadow-glow flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                <path d="M12 2 C 6 2, 3 7, 3 12 C 3 17, 7 22, 12 22 C 17 22, 21 17, 21 12 C 21 8, 18 5, 15 5 C 13 5, 12 6, 12 8 C 12 10, 14 11, 16 11" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-[15px] sm:text-base">Olive Orange</div>
              <div className="text-[10px] uppercase tracking-widest text-neutral-500">Technologies</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map(n => (
              <Link key={n.name} href={n.href} className="text-sm font-medium text-neutral-700 hover:text-brand-600 px-3 py-2 rounded-lg hover:bg-brand-50 transition">{n.name}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setDemoOpen(true)} className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-900 text-white text-sm font-semibold hover:bg-black transition">Book Demo <ArrowRight className="h-3.5 w-3.5" /></button>
            <button className="lg:hidden p-2 rounded-lg hover:bg-brand-50" onClick={() => setMenuOpen(o => !o)}>{menuOpen ? <XIcon className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden container max-w-7xl mx-auto mt-2 rounded-2xl glass shadow-soft p-3">
            {NAV.map(n => <Link key={n.name} onClick={() => setMenuOpen(false)} href={n.href} className="block px-3 py-2 rounded-lg hover:bg-brand-50 text-sm font-medium">{n.name}</Link>)}
          </div>
        )}
      </header>
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      <GameChallenge open={gameOpen} onClose={() => setGameOpen(false)} />
      <OliMascot onOpenGame={() => setGameOpen(true)} onOpenDemo={() => setDemoOpen(true)} />
    </>
  )
}
