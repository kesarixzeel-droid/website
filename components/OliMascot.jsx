'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Gamepad2, Phone, CalendarClock, Sparkles } from 'lucide-react'

const RANDOM_TIPS = [
  "Psst… try the Business Health game — takes 60 seconds!",
  "Need a CRM demo? I can book it for you in 1 click.",
  "Fun fact: our clients save 12+ hours a week. Wanna know how?",
  "Hey there! I'm OLI — your friendly software guide.",
  "Chat with us on WhatsApp — humans respond in under 2 mins.",
]

export default function OliMascot({ onOpenGame, onOpenDemo }) {
  const [open, setOpen] = useState(false)
  const [bubble, setBubble] = useState(null)
  const [sleeping, setSleeping] = useState(false)
  const [celebrating, setCelebrating] = useState(false)
  const idleTimer = useRef(null)
  const tipTimer = useRef(null)

  // Initial welcome
  useEffect(() => {
    const t = setTimeout(() => setBubble("Hi, I'm OLI 👋 Ask me anything!"), 1400)
    return () => clearTimeout(t)
  }, [])

  // Random tips loop
  useEffect(() => {
    tipTimer.current = setInterval(() => {
      if (!open && !sleeping) {
        const tip = RANDOM_TIPS[Math.floor(Math.random() * RANDOM_TIPS.length)]
        setBubble(tip)
        setTimeout(() => setBubble(null), 5000)
      }
    }, 14000)
    return () => clearInterval(tipTimer.current)
  }, [open, sleeping])

  // Inactivity → sleep
  useEffect(() => {
    const reset = () => {
      setSleeping(false)
      clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => setSleeping(true), 45000)
    }
    reset()
    const evs = ['mousemove', 'keydown', 'scroll', 'touchstart']
    evs.forEach(e => window.addEventListener(e, reset))
    return () => { evs.forEach(e => window.removeEventListener(e, reset)); clearTimeout(idleTimer.current) }
  }, [])

  // Expose celebrate globally
  useEffect(() => {
    window.__oliCelebrate = () => {
      setCelebrating(true)
      setBubble("🎉 Yay! You're awesome. We'll be in touch soon!")
      setTimeout(() => setCelebrating(false), 2200)
      setTimeout(() => setBubble(null), 4200)
    }
    return () => { delete window.__oliCelebrate }
  }, [])

  const handleWhatsApp = () => {
    window.open('https://wa.me/919624689325?text=' + encodeURIComponent('Hi Olive Orange team, I want a demo.'), '_blank')
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex items-end gap-3 select-none">
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="w-[320px] sm:w-[360px] rounded-3xl bg-white shadow-2xl border border-brand-100 overflow-hidden mr-2"
          >
            <div className="bg-gradient-to-br from-brand-500 to-brand-600 px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <OliFace size={28} />
                </div>
                <div>
                  <div className="font-display font-semibold">OLI</div>
                  <div className="text-xs opacity-90">Your Olive Orange guide</div>
                </div>
                <button onClick={() => setOpen(false)} className="ml-auto p-1.5 rounded-full hover:bg-white/20"><X className="h-4 w-4" /></button>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <div className="bg-brand-50 text-neutral-800 p-3 rounded-2xl rounded-tl-sm text-sm">
                Hi! I'm OLI. How can I help you today?
              </div>
              <button onClick={() => { onOpenGame?.(); setOpen(false) }} className="w-full flex items-center gap-3 p-3 rounded-2xl border border-neutral-200 hover:border-brand-500 hover:bg-brand-50 transition text-left">
                <Gamepad2 className="h-5 w-5 text-brand-500" />
                <div>
                  <div className="font-medium text-sm">Play Business Health Game</div>
                  <div className="text-xs text-neutral-500">Get your AI score in 60 sec</div>
                </div>
              </button>
              <button onClick={() => { onOpenDemo?.(); setOpen(false) }} className="w-full flex items-center gap-3 p-3 rounded-2xl border border-neutral-200 hover:border-brand-500 hover:bg-brand-50 transition text-left">
                <CalendarClock className="h-5 w-5 text-brand-500" />
                <div>
                  <div className="font-medium text-sm">Book a Free Demo</div>
                  <div className="text-xs text-neutral-500">30-minute walkthrough</div>
                </div>
              </button>
              <button onClick={handleWhatsApp} className="w-full flex items-center gap-3 p-3 rounded-2xl border border-neutral-200 hover:border-green-500 hover:bg-green-50 transition text-left">
                <Phone className="h-5 w-5 text-green-600" />
                <div>
                  <div className="font-medium text-sm">Chat on WhatsApp</div>
                  <div className="text-xs text-neutral-500">+91 96246 89325</div>
                </div>
              </button>
              <div className="text-xs text-neutral-400 text-center pt-1">Powered by Olive Orange AI</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Speech bubble */}
      <AnimatePresence>
        {bubble && !open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-24 right-24 sm:right-28 max-w-[240px] bg-white shadow-xl border border-brand-100 rounded-2xl rounded-br-sm px-4 py-2.5 text-sm text-neutral-800"
          >
            {bubble}
            <div className="absolute -bottom-1.5 right-6 h-3 w-3 bg-white border-r border-b border-brand-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp button */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleWhatsApp}
        aria-label="Chat on WhatsApp"
        className="h-14 w-14 rounded-full bg-[#25D366] shadow-glow flex items-center justify-center text-white"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current"><path d="M19.11 17.28c-.29-.14-1.7-.84-1.96-.94-.26-.1-.46-.14-.65.14-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.56-.89-2.13-.23-.56-.47-.48-.65-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.4 0 1.42 1.03 2.79 1.17 2.98.14.19 2.02 3.08 4.9 4.32.68.29 1.22.46 1.63.59.68.22 1.31.19 1.8.11.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34zM16 4C9.38 4 4 9.38 4 16c0 2.02.53 3.94 1.47 5.61L4 28l6.54-1.44A11.94 11.94 0 0 0 16 28c6.62 0 12-5.38 12-12S22.62 4 16 4zm0 21.98c-1.9 0-3.72-.51-5.31-1.47l-.38-.22-3.88.85.83-3.78-.25-.39A9.94 9.94 0 0 1 6 16c0-5.51 4.49-10 10-10s10 4.49 10 10-4.49 9.98-10 9.98z"/></svg>
      </motion.button>

      {/* OLI Mascot */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => { setOpen(true); setBubble(null); setSleeping(false) }}
        className="relative h-20 w-20 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 shadow-glow flex items-center justify-center overflow-visible idle-bounce"
        aria-label="Open OLI chat"
      >
        <OliFace size={54} sleeping={sleeping} celebrating={celebrating} />
        {sleeping && (
          <>
            <span className="absolute -top-1 -right-1 text-white/90 text-xs zzz-1">z</span>
            <span className="absolute -top-3 right-1 text-white/80 text-sm zzz-2">z</span>
            <span className="absolute -top-5 right-3 text-white/70 text-base zzz-3">z</span>
          </>
        )}
        {celebrating && <ConfettiBurst />}
        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white" />
      </motion.button>
    </div>
  )
}

function ConfettiBurst() {
  const pieces = Array.from({ length: 18 })
  const colors = ['#FF7A00', '#FFE9D6', '#121212', '#FFB878', '#25D366']
  return (
    <div className="absolute inset-0 pointer-events-none">
      {pieces.map((_, i) => (
        <span
          key={i}
          className="absolute confetti-piece"
          style={{
            left: `${50 + (Math.random() * 60 - 30)}%`,
            top: '50%',
            width: 6, height: 10,
            background: colors[i % colors.length],
            borderRadius: 2,
            animationDelay: `${Math.random() * 0.3}s`,
          }}
        />
      ))}
    </div>
  )
}

/* OLI face — cute mascot in orange hoodie, SVG */
export function OliFace({ size = 54, sleeping = false, celebrating = false }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className="drop-shadow-sm">
      {/* Hoodie back */}
      <path d="M15 62 C 15 40, 30 26, 50 26 C 70 26, 85 40, 85 62 L 85 82 L 15 82 Z" fill="#FF7A00" />
      {/* Face */}
      <ellipse cx="50" cy="55" rx="26" ry="25" fill="#FFE9D6" />
      {/* Hood front */}
      <path d="M22 52 C 22 34, 36 22, 50 22 C 64 22, 78 34, 78 52 C 72 46, 62 42, 50 42 C 38 42, 28 46, 22 52 Z" fill="#E56A00" />
      {/* Hood strings */}
      <line x1="42" y1="76" x2="40" y2="88" stroke="#B85400" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="58" y1="76" x2="60" y2="88" stroke="#B85400" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="40" cy="90" r="2.2" fill="#B85400" />
      <circle cx="60" cy="90" r="2.2" fill="#B85400" />
      {/* Cheeks */}
      <circle cx="36" cy="62" r="3.6" fill="#FFB6A3" opacity="0.85" />
      <circle cx="64" cy="62" r="3.6" fill="#FFB6A3" opacity="0.85" />
      {/* Eyes */}
      {sleeping ? (
        <>
          <path d="M38 55 Q 42 58, 46 55" stroke="#121212" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <path d="M54 55 Q 58 58, 62 55" stroke="#121212" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <ellipse cx="42" cy="55" rx="3" ry="4" fill="#121212" />
          <ellipse cx="58" cy="55" rx="3" ry="4" fill="#121212" />
          <circle cx="43" cy="54" r="1" fill="#fff" />
          <circle cx="59" cy="54" r="1" fill="#fff" />
        </>
      )}
      {/* Mouth */}
      {celebrating ? (
        <path d="M40 66 Q 50 76, 60 66 Q 50 72, 40 66 Z" fill="#121212" />
      ) : (
        <path d="M42 66 Q 50 72, 58 66" stroke="#121212" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      )}
      {/* Waving hand */}
      <g className="wave-hand">
        <circle cx="84" cy="48" r="7" fill="#FFE9D6" stroke="#E56A00" strokeWidth="2" />
      </g>
    </svg>
  )
}
