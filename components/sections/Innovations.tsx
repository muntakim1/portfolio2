"use client";

import { motion } from "framer-motion";
import { BrainCircuit, ExternalLink, KeyRound, Network } from "lucide-react";
import { Container } from "@/components/ui/container";
import { innovations } from "@/lib/static-data";

const icons = [Network, BrainCircuit, KeyRound];

export function Innovations() {
    return (
        <section id="innovations" className="py-20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">
                        Research Software · Inventions
                    </p>
                    <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        Latest Innovations
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Public research-software overviews, filed IP, and quantum-safe
                        systems work now anchoring the research portfolio.
                    </p>
                </motion.div>

                <div className="grid gap-5 lg:grid-cols-3">
                    {innovations.map((item, index) => {
                        const Icon = icons[index] ?? Network;

                        return (
                            <motion.article
                                key={item.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.06 }}
                                className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg"
                            >
                                <div className="mb-5 flex items-start justify-between gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div className="text-right">
                                        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                                            {item.year}
                                        </p>
                                        <p className="mt-1 text-xs font-medium text-accent">
                                            {item.status}
                                        </p>
                                    </div>
                                </div>

                                <h3 className="font-serif text-xl font-semibold leading-snug">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    {item.summary}
                                </p>

                                <ul className="mt-5 space-y-2">
                                    {item.highlights.map((highlight) => (
                                        <li
                                            key={highlight}
                                            className="relative pl-4 text-sm text-muted-foreground before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1.5 before:rounded-full before:bg-accent"
                                        >
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-5 flex flex-wrap gap-1.5">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-md bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {item.url !== "#" && (
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                                    >
                                        View repository
                                        <ExternalLink className="h-3 w-3" />
                                    </a>
                                )}
                            </motion.article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
