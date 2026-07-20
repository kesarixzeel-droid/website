import HeaderClient from '@/components/HeaderClient'
import FooterCTA from '@/components/FooterCTA'
import GamePageClient from '@/components/GamePageClient'

export const metadata = {
  title: 'Game Challenge — How Healthy Is Your Business?',
  description: 'Take our 60-second Business Health Challenge. Get your AI score and personalized recommendations.',
}

export default function GamePage() {
  return <GamePageClient />
}
