import { getAllPosts } from '@/lib/posts'
import { PostCard } from '@/components/post-card'

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div className="container py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          小七AI资讯
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          分享技术，探索创新，启迪思想
        </p>
      </div>

      {/* Posts Grid */}
      {posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            暂无文章，敬请期待...
          </p>
        </div>
      )}
    </div>
  )
}