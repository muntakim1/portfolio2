"use client";

import { motion } from "framer-motion";
import { Users, MapPin, Calendar } from "lucide-react";
import { Container } from "@/components/ui/container";
import { leadership } from "@/lib/static-data";

export function Leadership() {
    return (
        <section id="service" className="py-20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">
                        Community
                    </p>
                    <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        Leadership &amp; Professional Service
                    </h2>
                </motion.div>

                <div className="mx-auto max-w-3xl space-y-4">
                    {leadership.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="rounded-xl border border-border bg-card p-6 hover:shadow-md transition-all"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Users className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-serif text-lg font-semibold">
                                        {item.role}
                                    </h3>
                                    <p className="text-sm font-medium text-primary">
                                        {item.organization}
                                    </p>
                                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                                        <span className="inline-flex items-center gap-1.5">
                                            <Calendar className="h-3.5 w-3.5" />
                                            {item.year}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5">
                                            <MapPin className="h-3.5 w-3.5" />
                                            {item.venue}, {item.location}
                                        </span>
                                    </div>
                                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
