import Link from 'next/link'
import { Calendar, Tag } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PostMeta } from '@/lib/posts'

interface PostCardProps {
  post: PostMeta
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="h-full transition-all hover:shadow-lg hover:scale-[1.02]">
      <CardHeader>
        <CardTitle className="line-clamp-2">
          <Link 
            href={`/posts/${post.slug}`}
            className="hover:text-primary transition-colors"
          >
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {post.summary}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
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
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 mr-2" />
          {new Date(post.date).toLocaleDateString('zh-CN')}
        </div>
      </CardContent>
    </Card>
  )
}