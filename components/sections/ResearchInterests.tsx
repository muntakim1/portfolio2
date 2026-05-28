"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { researchInterests } from "@/lib/static-data";

export function ResearchInterests() {
    return (
        <section id="research" className="py-20 bg-muted/40 relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-50 -z-10" />
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">
                        Research Areas
                    </p>
                    <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        Research Interests
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Building toward a coherent agenda: making the post-quantum,
                        encrypted Internet observable, adaptive, and secure.
                    </p>
                </motion.div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {researchInterests.map((interest, index) => {
                        const Icon = interest.icon;
                        return (
                            <motion.div
                                key={interest.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-primary/5 transition-transform group-hover:translate-x-8 group-hover:-translate-y-8" />
                                <div className="relative">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-serif text-lg font-semibold leading-snug mb-2">
                                        {interest.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {interest.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
