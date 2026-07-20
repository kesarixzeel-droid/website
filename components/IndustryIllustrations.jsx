'use client'
/**
 * Custom SVG illustrations per industry. Brand palette: #FF7A00 (brand), #FFE9D6 (accent),
 * #121212 (ink), plus soft neutrals. Each returns a self-contained SVG (viewBox="0 0 400 300").
 */
import React from 'react'

const BRAND = '#FF7A00'
const BRAND_DARK = '#E56A00'
const ACCENT = '#FFE9D6'
const INK = '#121212'
const PAPER = '#FFF5EB'

function Frame({ children }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyG" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#FFF7EF" />
          <stop offset="100%" stopColor="#FFE9D6" />
        </linearGradient>
        <linearGradient id="brandG" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={BRAND} />
          <stop offset="100%" stopColor={BRAND_DARK} />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="400" height="300" rx="24" fill="url(#skyG)" />
      <circle cx="340" cy="60" r="40" fill={BRAND} opacity="0.15" />
      <circle cx="60" cy="260" r="32" fill={BRAND} opacity="0.12" />
      {children}
    </svg>
  )
}

export function Illustration({ kind }) {
  switch (kind) {
    case 'manufacturing': return <Manufacturing />
    case 'healthcare': return <Healthcare />
    case 'education': return <Education />
    case 'retail': return <Retail />
    case 'restaurant': return <Restaurant />
    case 'realestate': return <RealEstate />
    case 'finance': return <Finance />
    case 'construction': return <Construction />
    case 'textile': return <Textile />
    case 'logistics': return <Logistics />
    case 'services': return <Services />
    case 'startups': return <Startups />
    default: return <Frame><circle cx="200" cy="150" r="60" fill={BRAND} /></Frame>
  }
}

/* Individual illustrations */
function Manufacturing() {
  return (
    <Frame>
      {/* Ground */}
      <rect x="20" y="230" width="360" height="6" rx="3" fill={INK} opacity="0.15" />
      {/* Factory building */}
      <rect x="70" y="140" width="180" height="90" fill={INK} />
      <polygon points="70,140 100,110 130,140" fill={INK} />
      <polygon points="130,140 160,110 190,140" fill={INK} />
      <polygon points="190,140 220,110 250,140" fill={INK} />
      {/* Windows */}
      <rect x="85" y="165" width="18" height="18" fill={BRAND} />
      <rect x="115" y="165" width="18" height="18" fill={BRAND} />
      <rect x="145" y="165" width="18" height="18" fill={BRAND} />
      <rect x="175" y="165" width="18" height="18" fill={BRAND} />
      <rect x="205" y="165" width="18" height="18" fill={BRAND} />
      <rect x="225" y="195" width="25" height="35" fill={ACCENT} />
      {/* Chimney with smoke */}
      <rect x="200" y="90" width="18" height="50" fill={INK} />
      <circle cx="212" cy="75" r="12" fill="#fff" opacity="0.85" />
      <circle cx="225" cy="60" r="14" fill="#fff" opacity="0.75" />
      <circle cx="210" cy="48" r="11" fill="#fff" opacity="0.6" />
      {/* Conveyor + gear */}
      <rect x="265" y="195" width="110" height="12" rx="6" fill={INK} opacity="0.7" />
      <circle cx="280" cy="200" r="9" fill={BRAND} />
      <circle cx="320" cy="200" r="9" fill={BRAND} />
      <circle cx="360" cy="200" r="9" fill={BRAND} />
      {/* Box */}
      <rect x="300" y="172" width="22" height="22" fill="url(#brandG)" />
      <line x1="300" y1="183" x2="322" y2="183" stroke="#fff" strokeWidth="1.5" />
      {/* Gear top */}
      <g transform="translate(320,110)">
        <circle r="18" fill={BRAND} />
        <circle r="7" fill="#fff" />
        {[0,45,90,135,180,225,270,315].map(a => (
          <rect key={a} x="-3" y="-24" width="6" height="8" fill={BRAND} transform={`rotate(${a})`} />
        ))}
      </g>
    </Frame>
  )
}

function Healthcare() {
  return (
    <Frame>
      {/* Building */}
      <rect x="90" y="100" width="220" height="140" rx="8" fill="#fff" stroke={INK} strokeWidth="3" />
      {/* Cross */}
      <rect x="180" y="120" width="40" height="14" rx="3" fill={BRAND} />
      <rect x="193" y="107" width="14" height="40" rx="3" fill={BRAND} />
      {/* Windows */}
      <rect x="110" y="160" width="30" height="25" fill={ACCENT} stroke={INK} strokeWidth="1.5" />
      <rect x="150" y="160" width="30" height="25" fill={ACCENT} stroke={INK} strokeWidth="1.5" />
      <rect x="220" y="160" width="30" height="25" fill={ACCENT} stroke={INK} strokeWidth="1.5" />
      <rect x="260" y="160" width="30" height="25" fill={ACCENT} stroke={INK} strokeWidth="1.5" />
      {/* Door */}
      <rect x="185" y="195" width="30" height="45" fill={INK} />
      {/* Heart pulse */}
      <path d="M 40 155 L 80 155 L 90 130 L 105 180 L 115 145 L 130 155 L 170 155" fill="none" stroke={BRAND} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="40" cy="155" r="4" fill={BRAND} />
      {/* Stethoscope hint */}
      <circle cx="340" cy="200" r="14" fill="none" stroke={INK} strokeWidth="3" />
      <path d="M 340 186 Q 340 160, 320 155" fill="none" stroke={INK} strokeWidth="3" />
      <path d="M 340 186 Q 340 160, 360 155" fill="none" stroke={INK} strokeWidth="3" />
      <circle cx="320" cy="150" r="5" fill={BRAND} />
      <circle cx="360" cy="150" r="5" fill={BRAND} />
    </Frame>
  )
}

function Education() {
  return (
    <Frame>
      {/* Book base */}
      <path d="M 60 200 Q 200 175, 340 200 L 340 245 Q 200 220, 60 245 Z" fill={INK} />
      <path d="M 60 200 Q 200 175, 340 200" fill="none" stroke={BRAND} strokeWidth="3" />
      {/* Grad cap */}
      <polygon points="200,90 320,130 200,170 80,130" fill={INK} />
      <polygon points="200,100 300,132 200,164 100,132" fill={BRAND} />
      <rect x="195" y="170" width="10" height="25" fill={INK} />
      <circle cx="200" cy="200" r="7" fill={BRAND} />
      {/* Tassel */}
      <path d="M 315 132 Q 335 155, 330 190" stroke={BRAND} strokeWidth="3" fill="none" />
      <circle cx="330" cy="192" r="5" fill={BRAND} />
      {/* Small icons */}
      <circle cx="70" cy="85" r="10" fill={BRAND} opacity="0.7" />
      <text x="70" y="90" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">A</text>
      <circle cx="345" cy="80" r="10" fill={INK} />
      <text x="345" y="85" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">1</text>
    </Frame>
  )
}

function Retail() {
  return (
    <Frame>
      {/* Shopping bag */}
      <path d="M 130 130 L 130 240 Q 130 250, 140 250 L 260 250 Q 270 250, 270 240 L 270 130 Z" fill="url(#brandG)" />
      <path d="M 165 135 Q 165 90, 200 90 Q 235 90, 235 135" fill="none" stroke={INK} strokeWidth="5" />
      <circle cx="200" cy="180" r="20" fill="#fff" />
      <text x="200" y="186" textAnchor="middle" fontSize="20" fill={BRAND} fontWeight="bold">%</text>
      {/* Coins */}
      <circle cx="70" cy="210" r="14" fill={BRAND} stroke={INK} strokeWidth="2" />
      <circle cx="85" cy="195" r="14" fill={BRAND} stroke={INK} strokeWidth="2" />
      <text x="85" y="200" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold">₹</text>
      {/* Barcode */}
      <g transform="translate(300, 180)">
        <rect width="2" height="40" fill={INK} />
        <rect x="5" width="4" height="40" fill={INK} />
        <rect x="12" width="2" height="40" fill={INK} />
        <rect x="17" width="5" height="40" fill={INK} />
        <rect x="25" width="3" height="40" fill={INK} />
        <rect x="31" width="6" height="40" fill={INK} />
        <rect x="40" width="2" height="40" fill={INK} />
      </g>
    </Frame>
  )
}

function Restaurant() {
  return (
    <Frame>
      {/* Plate */}
      <ellipse cx="200" cy="210" rx="120" ry="22" fill={INK} opacity="0.12" />
      <circle cx="200" cy="170" r="70" fill="#fff" stroke={INK} strokeWidth="3" />
      <circle cx="200" cy="170" r="55" fill={ACCENT} />
      {/* Food */}
      <circle cx="185" cy="165" r="14" fill={BRAND} />
      <circle cx="215" cy="175" r="11" fill={BRAND_DARK} />
      <circle cx="200" cy="155" r="9" fill={INK} />
      {/* Fork */}
      <g transform="translate(90, 100) rotate(-20)">
        <rect x="0" y="0" width="4" height="40" fill={INK} />
        <rect x="6" y="0" width="4" height="40" fill={INK} />
        <rect x="12" y="0" width="4" height="40" fill={INK} />
        <rect x="-2" y="40" width="20" height="90" fill={INK} />
      </g>
      {/* Knife */}
      <g transform="translate(300, 100) rotate(20)">
        <polygon points="0,0 15,0 12,50 3,50" fill={INK} />
        <rect x="1" y="50" width="13" height="80" fill={INK} />
      </g>
      {/* Steam */}
      <path d="M 180 110 Q 175 95, 185 85 Q 195 75, 185 60" stroke={BRAND} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 210 110 Q 205 95, 215 85 Q 225 75, 215 60" stroke={BRAND} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </Frame>
  )
}

function RealEstate() {
  return (
    <Frame>
      {/* Ground */}
      <rect x="20" y="240" width="360" height="5" fill={INK} opacity="0.15" />
      {/* Skyscraper */}
      <rect x="250" y="90" width="55" height="150" fill={INK} />
      {[0,1,2,3,4,5].map(r => (
        <React.Fragment key={r}>
          <rect x="258" y={100 + r*22} width="12" height="12" fill={BRAND} />
          <rect x="285" y={100 + r*22} width="12" height="12" fill={BRAND} />
        </React.Fragment>
      ))}
      {/* House */}
      <polygon points="80,140 155,90 230,140" fill={BRAND} />
      <rect x="90" y="140" width="130" height="100" fill="url(#brandG)" />
      <rect x="135" y="180" width="40" height="60" fill={INK} />
      <rect x="100" y="155" width="25" height="25" fill={ACCENT} />
      <rect x="190" y="155" width="25" height="25" fill={ACCENT} />
      {/* Key */}
      <g transform="translate(45,190)">
        <circle cx="12" cy="12" r="10" fill="none" stroke={INK} strokeWidth="3" />
        <rect x="20" y="9" width="28" height="6" fill={INK} />
        <rect x="42" y="9" width="4" height="12" fill={INK} />
        <rect x="36" y="9" width="4" height="10" fill={INK} />
      </g>
    </Frame>
  )
}

function Finance() {
  return (
    <Frame>
      {/* Chart bg card */}
      <rect x="60" y="90" width="280" height="160" rx="14" fill="#fff" stroke={INK} strokeWidth="3" />
      {/* Axes */}
      <line x1="85" y1="220" x2="320" y2="220" stroke={INK} strokeWidth="2" />
      <line x1="85" y1="120" x2="85" y2="220" stroke={INK} strokeWidth="2" />
      {/* Bars */}
      <rect x="110" y="180" width="22" height="40" fill={BRAND} opacity="0.5" />
      <rect x="145" y="160" width="22" height="60" fill={BRAND} opacity="0.7" />
      <rect x="180" y="150" width="22" height="70" fill={BRAND} opacity="0.85" />
      <rect x="215" y="130" width="22" height="90" fill={BRAND} />
      <rect x="250" y="115" width="22" height="105" fill={BRAND_DARK} />
      {/* Trend line */}
      <polyline points="120,195 155,175 190,158 226,138 262,120 295,110" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <circle cx="295" cy="110" r="5" fill={INK} />
      {/* Rupee coin */}
      <circle cx="340" cy="75" r="22" fill={BRAND} />
      <text x="340" y="84" textAnchor="middle" fontSize="26" fill="#fff" fontWeight="bold">₹</text>
    </Frame>
  )
}

function Construction() {
  return (
    <Frame>
      {/* Helmet */}
      <path d="M 100 180 Q 100 120, 160 120 Q 220 120, 220 180 Z" fill={BRAND} />
      <rect x="90" y="175" width="140" height="14" rx="3" fill={BRAND_DARK} />
      <rect x="155" y="120" width="10" height="60" fill={BRAND_DARK} />
      {/* Crane */}
      <rect x="280" y="70" width="6" height="180" fill={INK} />
      <rect x="200" y="70" width="120" height="6" fill={INK} />
      <line x1="230" y1="76" x2="283" y2="70" stroke={INK} strokeWidth="2" />
      <line x1="260" y1="76" x2="283" y2="70" stroke={INK} strokeWidth="2" />
      <line x1="220" y1="76" x2="220" y2="110" stroke={INK} strokeWidth="2" />
      <rect x="208" y="110" width="24" height="20" fill="url(#brandG)" />
      {/* Bricks */}
      <rect x="250" y="230" width="30" height="15" fill={BRAND_DARK} />
      <rect x="285" y="230" width="30" height="15" fill={BRAND_DARK} />
      <rect x="267" y="213" width="30" height="15" fill={BRAND} />
      <rect x="302" y="213" width="30" height="15" fill={BRAND} />
    </Frame>
  )
}

function Textile() {
  return (
    <Frame>
      {/* Fabric fold */}
      <path d="M 60 200 Q 130 140, 200 200 Q 270 260, 340 200 L 340 250 L 60 250 Z" fill={BRAND} opacity="0.4" />
      <path d="M 60 170 Q 130 110, 200 170 Q 270 230, 340 170" fill="none" stroke={BRAND} strokeWidth="3" />
      <path d="M 60 150 Q 130 90, 200 150 Q 270 210, 340 150" fill="none" stroke={INK} strokeWidth="2.5" />
      <path d="M 60 130 Q 130 70, 200 130 Q 270 190, 340 130" fill="none" stroke={BRAND_DARK} strokeWidth="2" opacity="0.7" />
      {/* Spool */}
      <g transform="translate(70, 90)">
        <rect x="0" y="0" width="36" height="8" rx="2" fill={INK} />
        <rect x="3" y="8" width="30" height="40" fill={BRAND} />
        <rect x="0" y="48" width="36" height="8" rx="2" fill={INK} />
        <line x1="3" y1="14" x2="33" y2="14" stroke="#fff" strokeWidth="1.5" />
        <line x1="3" y1="22" x2="33" y2="22" stroke="#fff" strokeWidth="1.5" />
        <line x1="3" y1="30" x2="33" y2="30" stroke="#fff" strokeWidth="1.5" />
        <line x1="3" y1="38" x2="33" y2="38" stroke="#fff" strokeWidth="1.5" />
      </g>
      {/* Needle */}
      <line x1="290" y1="70" x2="340" y2="120" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <circle cx="290" cy="70" r="5" fill={INK} />
      <path d="M 288 68 L 285 65" stroke={BRAND} strokeWidth="2" />
    </Frame>
  )
}

function Logistics() {
  return (
    <Frame>
      {/* Road */}
      <rect x="20" y="230" width="360" height="20" fill={INK} />
      <rect x="40" y="238" width="25" height="4" fill="#fff" />
      <rect x="90" y="238" width="25" height="4" fill="#fff" />
      <rect x="140" y="238" width="25" height="4" fill="#fff" />
      <rect x="190" y="238" width="25" height="4" fill="#fff" />
      <rect x="240" y="238" width="25" height="4" fill="#fff" />
      <rect x="290" y="238" width="25" height="4" fill="#fff" />
      {/* Truck body */}
      <rect x="90" y="140" width="140" height="90" rx="6" fill="url(#brandG)" />
      <rect x="230" y="165" width="70" height="65" rx="6" fill={INK} />
      <rect x="245" y="180" width="40" height="25" fill={ACCENT} />
      {/* Wheels */}
      <circle cx="130" cy="235" r="14" fill={INK} />
      <circle cx="130" cy="235" r="6" fill="#fff" />
      <circle cx="200" cy="235" r="14" fill={INK} />
      <circle cx="200" cy="235" r="6" fill="#fff" />
      <circle cx="270" cy="235" r="14" fill={INK} />
      <circle cx="270" cy="235" r="6" fill="#fff" />
      {/* Route pin */}
      <path d="M 340 90 Q 355 90, 355 105 Q 355 120, 340 140 Q 325 120, 325 105 Q 325 90, 340 90 Z" fill={BRAND} />
      <circle cx="340" cy="105" r="5" fill="#fff" />
      {/* Dashed line */}
      <path d="M 340 145 Q 300 170, 250 140" fill="none" stroke={INK} strokeWidth="2" strokeDasharray="4 4" />
    </Frame>
  )
}

function Services() {
  return (
    <Frame>
      {/* Chat bubbles */}
      <path d="M 80 100 Q 80 80, 100 80 L 200 80 Q 220 80, 220 100 L 220 145 Q 220 165, 200 165 L 130 165 L 105 190 L 105 165 L 100 165 Q 80 165, 80 145 Z" fill="url(#brandG)" />
      <circle cx="120" cy="122" r="5" fill="#fff" />
      <circle cx="150" cy="122" r="5" fill="#fff" />
      <circle cx="180" cy="122" r="5" fill="#fff" />
      {/* 5 stars */}
      <g transform="translate(240, 105)">
        {[0,1,2,3,4].map(i => (
          <g key={i} transform={`translate(${i*24}, 0)`}>
            <polygon points="10,0 12,6 18,6 13,10 15,17 10,13 5,17 7,10 2,6 8,6" fill={BRAND} />
          </g>
        ))}
      </g>
      <text x="250" y="155" fontSize="22" fontWeight="bold" fill={INK}>4.8</text>
      <text x="290" y="155" fontSize="12" fill={INK} opacity="0.6">/ 5</text>
      {/* Wrench (service) */}
      <g transform="translate(100, 200) rotate(-30)">
        <path d="M 0 0 L 50 0 L 55 8 L 50 16 L 0 16 Z" fill={INK} />
        <circle cx="5" cy="8" r="10" fill={INK} />
        <circle cx="5" cy="8" r="5" fill="#FFF7EF" />
      </g>
      <g transform="translate(280, 200) rotate(30)">
        <path d="M 0 0 L 50 0 L 55 8 L 50 16 L 0 16 Z" fill={BRAND} />
        <circle cx="5" cy="8" r="10" fill={BRAND} />
        <circle cx="5" cy="8" r="5" fill="#FFF7EF" />
      </g>
    </Frame>
  )
}

function Startups() {
  return (
    <Frame>
      {/* Rocket */}
      <g transform="translate(200,160) rotate(-15)">
        <path d="M 0 -70 Q 25 -60, 25 -20 L 25 40 L -25 40 L -25 -20 Q -25 -60, 0 -70 Z" fill="url(#brandG)" />
        <circle cx="0" cy="-15" r="12" fill="#fff" />
        <circle cx="0" cy="-15" r="6" fill={INK} />
        <path d="M -25 20 L -45 50 L -25 40 Z" fill={INK} />
        <path d="M 25 20 L 45 50 L 25 40 Z" fill={INK} />
        {/* Flames */}
        <path d="M -14 40 Q -10 60, -6 40 Z" fill={BRAND_DARK} />
        <path d="M 0 42 Q 6 70, 12 42 Z" fill={BRAND_DARK} />
        <path d="M 12 40 Q 15 55, 18 40 Z" fill={BRAND} />
      </g>
      {/* Stars */}
      <circle cx="70" cy="70" r="3" fill={BRAND} />
      <circle cx="330" cy="90" r="4" fill={BRAND} />
      <circle cx="340" cy="200" r="3" fill={INK} />
      <circle cx="60" cy="180" r="3" fill={INK} />
      <path d="M 100 60 l 4 0 M 102 58 l 0 4" stroke={INK} strokeWidth="2" />
      <path d="M 310 220 l 6 0 M 313 217 l 0 6" stroke={BRAND} strokeWidth="2" />
      {/* Growth arrow */}
      <polyline points="60,240 110,220 160,200 210,215 260,180 320,140" fill="none" stroke={INK} strokeWidth="2.5" strokeDasharray="4 4" />
      <polygon points="320,140 310,150 320,148 322,158" fill={INK} />
    </Frame>
  )
}
