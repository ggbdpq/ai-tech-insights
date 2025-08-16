import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Calendar, Tag, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="pl-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首页
            </Button>
          </Link>
        </div>

        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center text-muted-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.date).toLocaleDateString('zh-CN')}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link key={tag} href={`/tags/${encodeURIComponent(tag)}`}>
                  <Badge 
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>

          {post.summary && (
            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold mb-2">核心摘要</h2>
              <p className="text-muted-foreground">{post.summary}</p>
            </div>
          )}
        </header>

        {/* Post Content */}
        <article className="prose prose-gray dark:prose-invert max-w-none">
          <MDXRemote source={post.content} />
        </article>
      </div>
    </div>
  )
}