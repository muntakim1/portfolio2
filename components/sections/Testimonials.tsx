"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/static-data";

export function Testimonials() {
    return (
        <section className="py-20 bg-muted/30">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Testimonials
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        What people say about my work.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full border-none shadow-md">
                                <CardContent className="pt-6">
                                    <Quote className="h-8 w-8 text-primary/40 mb-4" />
                                    <p className="text-muted-foreground mb-4 italic">
                                        &quot;{testimonial.content}&quot;
                                    </p>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
