import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getBlogPosts } from "@/lib/blog-data";
import { ArrowRight } from "lucide-react";

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
                            <Link href={`/blog/${post.slug}`}>
                                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                                                {post.category}
                                            </span>
                                            <span className="text-sm text-muted-foreground">
                                                {post.date}
                                            </span>
                                        </div>
                                        <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center text-sm font-medium text-primary">
                                            Read more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
