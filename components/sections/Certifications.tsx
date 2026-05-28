"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { Container } from "@/components/ui/container";
import { certifications } from "@/lib/static-data";

export function Certifications() {
    return (
        <section id="certifications" className="py-20 bg-muted/40">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">
                        Credentials
                    </p>
                    <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        Certifications
                    </h2>
                </motion.div>

                <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {certifications.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.url}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            className="group block rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                        >
                            <div className="mb-3 flex items-center justify-between">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Award className="h-4 w-4" />
                                </div>
                                <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                            </div>
                            <h3 className="font-serif text-base font-semibold leading-snug">
                                {cert.name}
                            </h3>
                            <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                                <span>{cert.issuer}</span>
                                <span className="font-mono">{cert.date}</span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </Container>
        </section>
    );
}
