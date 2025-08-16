import Link from 'next/link'
import { Tag } from 'lucide-react'
import { getAllTags, getPostsByTag } from '@/lib/posts'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function TagsPage() {
  const tags = getAllTags()

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-4">
            文章标签
          </h1>
          <p className="text-muted-foreground">
            按标签浏览所有文章
          </p>
        </header>

        {tags.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tags.map((tag) => {
              const postsCount = getPostsByTag(tag).length
              return (
                <Link key={tag} href={`/tags/${encodeURIComponent(tag)}`}>
                  <Card className="h-full transition-all hover:shadow-lg hover:scale-[1.02]">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Tag className="w-5 h-5" />
                        {tag}
                      </CardTitle>
                      <CardDescription>
                        {postsCount} 篇文章
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              暂无标签
            </p>
          </div>
        )}
      </div>
    </div>
  )
}