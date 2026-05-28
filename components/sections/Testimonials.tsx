"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { testimonials } from "@/lib/static-data";

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">
                        References
                    </p>
                    <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        Testimonials
                    </h2>
                </motion.div>

                <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <motion.figure
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="relative rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-all"
                        >
                            <Quote className="absolute -top-3 left-6 h-7 w-7 rounded-full bg-card p-1 text-primary/60" />
                            <blockquote className="pt-2 text-sm leading-relaxed text-foreground/85">
                                &ldquo;{t.content}&rdquo;
                            </blockquote>
                            <figcaption className="mt-5 border-t border-border pt-4">
                                <p className="font-semibold text-sm">{t.name}</p>
                                <p className="text-xs text-muted-foreground">{t.role}</p>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </Container>
        </section>
    );
}
