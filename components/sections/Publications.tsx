"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { publications } from "@/lib/static-data";
import Link from "next/link";

export function Publications() {
    return (
        <section id="publications" className="py-20 bg-muted/30">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Selected Publications
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Research papers and articles contributing to the field of AI and Data Science.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-center gap-2 text-primary mb-2">
                                            <BookOpen className="h-5 w-5" />
                                            <span className="font-medium">{pub.conference}</span>
                                        </div>
                                        <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                                            {pub.year}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold leading-tight">
                                        {pub.title}
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">
                                        {pub.description}
                                    </p>
                                    <Link
                                        href={pub.url}
                                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                                    >
                                        Read Paper <ExternalLink className="ml-1 h-3 w-3" />
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
