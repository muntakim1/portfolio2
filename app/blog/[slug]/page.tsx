import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { Container } from "@/components/ui/container";
import { getBlogPost, getBlogPosts } from "@/lib/blog-data";
import { MarkdownRenderer } from "@/components/markdown/MarkdownRenderer";
import { Separator } from "@/components/ui/separator";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const posts = await getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="py-20 min-h-screen">
            <Container className="max-w-3xl">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-12 transition-colors group"
                >
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </Link>

                <header className="mb-12 space-y-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
                            <Tag className="h-3.5 w-3.5" />
                            {post.category}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            {post.date}
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
                        {post.title}
                    </h1>

                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {post.excerpt}
                    </p>
                </header>

                <Separator className="my-12" />

                <MarkdownRenderer content={post.content} />
            </Container>
        </article>
    );
}
