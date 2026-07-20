import { notFound } from 'next/navigation'
import { SERVICE_CATEGORIES, getCategoryBySlug } from '@/lib/services-data'
import { getServiceExtras } from '@/lib/service-extras'
import ServiceDetailClient from '@/components/ServiceDetailClient'

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const cat = getCategoryBySlug(slug)
  if (!cat) return { title: 'Service — Olive Orange' }
  return {
    title: `${cat.name} — Olive Orange Technologies`,
    description: cat.tagline,
  }
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params
  const cat = getCategoryBySlug(slug)
  if (!cat) notFound()
  const related = (cat.related || []).map(s => getCategoryBySlug(s)).filter(Boolean).map(r => ({ slug: r.slug, name: r.name, icon: r.icon, tagline: r.tagline }))
  const extras = getServiceExtras(slug)
  return <ServiceDetailClient category={cat} related={related} extras={extras} />
}
