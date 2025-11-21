import { Container } from "@/components/ui/container";
import { getBlogPosts } from "@/lib/blog-data";
import { BlogCard } from "@/components/BlogCard";

export default async function BlogPage() {
    const posts = await getBlogPosts();

    return (
        <div className="py-20">
            <Container>
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                        Blog
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Thoughts on AI, Machine Learning, and Technology.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <div key={post.slug}>
                            <BlogCard post={post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
