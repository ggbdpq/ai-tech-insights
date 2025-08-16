import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Tag } from 'lucide-react'
import { getPostsByTag, getAllTags } from '@/lib/posts'
import { PostCard } from '@/components/post-card'
import { Button } from '@/components/ui/button'

interface TagPageProps {
  params: Promise<{
    tag: string
  }>
}

export async function generateStaticParams() {
  const tags = getAllTags()
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag),
  }))
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params
  // 处理可能的双重编码问题
  let decodedTag = tag
  try {
    decodedTag = decodeURIComponent(tag)
    // 如果还是编码状态，再次解码
    if (decodedTag.includes('%')) {
      decodedTag = decodeURIComponent(decodedTag)
    }
  } catch {
    // 如果解码失败，使用原始tag
    decodedTag = tag
  }
  const posts = getPostsByTag(decodedTag)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="container py-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/tags">
            <Button variant="ghost" className="pl-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回标签列表
            </Button>
          </Link>
        </div>

        {/* Page Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Tag className="w-6 h-6" />
            <h1 className="text-3xl font-bold tracking-tight">
              {decodedTag}
            </h1>
          </div>
          <p className="text-muted-foreground">
            共 {posts.length} 篇文章
          </p>
        </header>

        {/* Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}