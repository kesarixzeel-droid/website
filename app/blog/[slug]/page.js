import { notFound } from 'next/navigation'
import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from '@/lib/blog-data'
import BlogArticleClient from '@/components/BlogArticleClient'

export function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = getPostBySlug(slug)
  if (!p) return { title: 'Blog — Olive Orange' }
  return { title: `${p.title} — Olive Orange Blog`, description: p.excerpt }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()
  const related = getRelatedPosts(slug, 3)
  return <BlogArticleClient post={post} related={related} />
}
