"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";
import { useEffect, useState } from "react";

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    const [isNew, setIsNew] = useState(false);

    useEffect(() => {
        const checkIsNew = () => {
            // 1. Check if recent (within 7 days)
            const postDate = new Date(post.date);
            const sevenDaysAgo = new Date();
            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

            const isRecent = postDate >= sevenDaysAgo;

            if (!isRecent) {
                return false;
            }

            // 2. Check if read in localStorage
            try {
                const readPosts = JSON.parse(localStorage.getItem("readPosts") || "[]");
                return !readPosts.includes(post.slug);
            } catch (e) {
                console.error("Error parsing readPosts from localStorage", e);
                return true; // Default to showing if error
            }
        };

        setIsNew(checkIsNew());
    }, [post.date, post.slug]);

    const handleClick = () => {
        try {
            const readPosts = JSON.parse(localStorage.getItem("readPosts") || "[]");
            if (!readPosts.includes(post.slug)) {
                const updatedReadPosts = [...readPosts, post.slug];
                localStorage.setItem("readPosts", JSON.stringify(updatedReadPosts));
                setIsNew(false);
            }
        } catch (e) {
            console.error("Error updating readPosts in localStorage", e);
        }
    };

    return (
        <Link href={`/blog/${post.slug}`} onClick={handleClick}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group relative overflow-hidden">
                {isNew && (
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10 shadow-sm">
                        NEW
                    </div>
                )}
                <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                            {post.category}
                        </span>
                        <span className="text-sm text-muted-foreground">{post.date}</span>
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
                        Read more{" "}
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
