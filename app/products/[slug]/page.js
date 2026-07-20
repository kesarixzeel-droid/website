import { notFound } from 'next/navigation'
import { PRODUCTS, getProductBySlug } from '@/lib/products-data'
import ProductDetailClient from '@/components/ProductDetailClient'

export function generateStaticParams() {
  return PRODUCTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = getProductBySlug(slug)
  if (!p) return { title: 'Product — Olive Orange' }
  return {
    title: `${p.name} — ${p.tagline}`,
    description: p.heroSubtitle,
  }
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params
  const p = getProductBySlug(slug)
  if (!p) notFound()
  // Related = other products in same or similar tag (up to 3)
  const related = PRODUCTS.filter(x => x.slug !== p.slug).slice(0, 3).map(x => ({
    slug: x.slug, name: x.name, tag: x.tag, tagline: x.tagline, image: x.image,
  }))
  return <ProductDetailClient product={p} related={related} />
}
