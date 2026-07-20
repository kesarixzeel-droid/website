import { Inter, Poppins } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'Olive Orange Technologies — Smart Software for Smarter Businesses',
  description: 'From CRM to ERP, AI Automation to Mobile Apps, Olive Orange Technologies helps businesses become smarter, faster, and more profitable.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="font-inter antialiased bg-white text-neutral-900 selection:bg-orange-200 selection:text-orange-900">
        {children}
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  )
}
