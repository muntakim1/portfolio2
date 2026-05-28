"use client";

import { motion } from "framer-motion";
import { Medal, Award } from "lucide-react";
import { Container } from "@/components/ui/container";
import { achievements } from "@/lib/static-data";

const iconForIndex = (i: number) => (i === 0 ? Medal : Award);

export function Achievements() {
    return (
        <section id="awards" className="py-20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">
                        Recognition
                    </p>
                    <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        Awards &amp; Honors
                    </h2>
                </motion.div>

                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
                    {achievements.map((a, i) => {
                        const Icon = iconForIndex(i);
                        return (
                            <motion.div
                                key={a.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:shadow-xl"
                            >
                                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 blur-2xl" />
                                <div className="relative flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 text-accent">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between gap-2">
                                            <p className="font-mono text-xs text-muted-foreground">
                                                {a.year}
                                            </p>
                                        </div>
                                        <h3 className="font-serif text-xl font-semibold leading-snug mt-1">
                                            {a.title}
                                        </h3>
                                        <p className="mt-1 text-sm font-medium text-primary">
                                            {a.organization}
                                        </p>
                                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                            {a.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
