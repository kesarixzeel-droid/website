import { notFound } from 'next/navigation'
import { INDUSTRY_LIST, getIndustryBySlug } from '@/lib/industries-data'
import IndustryDetailClient from '@/components/IndustryDetailClient'
import { getCategoryBySlug } from '@/lib/services-data'

export function generateStaticParams() {
  return INDUSTRY_LIST.map(i => ({ slug: i.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const ind = getIndustryBySlug(slug)
  if (!ind) return { title: 'Industry — Olive Orange' }
  return {
    title: `${ind.name} — Industry Solutions | Olive Orange Technologies`,
    description: ind.tagline,
  }
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params
  const ind = getIndustryBySlug(slug)
  if (!ind) notFound()
  const recommended = (ind.recommended || []).map(s => getCategoryBySlug(s)).filter(Boolean)
    .map(r => ({ slug: r.slug, name: r.name, icon: r.icon, tagline: r.tagline }))
  return <IndustryDetailClient industry={ind} recommended={recommended} />
}
