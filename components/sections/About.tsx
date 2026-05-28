"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { experiences, personalInfo } from "@/lib/static-data";
import { FlaskConical, Briefcase } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-4xl"
                >
                    <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3 text-center">
                        Research Statement
                    </p>
                    <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-6 text-center">
                        About
                    </h2>
                    <p className="text-lg leading-relaxed text-muted-foreground text-center max-w-3xl mx-auto">
                        {personalInfo.about}
                    </p>
                </motion.div>

                <div className="mx-auto mt-16 max-w-4xl">
                    <h3 className="font-serif text-2xl font-semibold mb-8">Experience</h3>

                    <div className="relative">
                        <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />

                        {experiences.map((exp, index) => {
                            const Icon = exp.type === "research" ? FlaskConical : Briefcase;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    className="relative pl-12 pb-10 last:pb-0"
                                >
                                    <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-primary/30 bg-card shadow-sm">
                                        <Icon className="h-3.5 w-3.5 text-primary" />
                                    </div>

                                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                                        <div>
                                            <h4 className="text-lg font-semibold">{exp.role}</h4>
                                            <p className="text-sm text-primary">{exp.company}</p>
                                        </div>
                                        <div className="text-xs font-mono text-muted-foreground sm:text-right">
                                            <div>{exp.period}</div>
                                            <div className="opacity-70">{exp.location}</div>
                                        </div>
                                    </div>

                                    <ul className="mt-3 space-y-1.5">
                                        {exp.highlights.map((h, i) => (
                                            <li
                                                key={i}
                                                className="relative pl-4 text-sm text-muted-foreground before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1.5 before:rounded-full before:bg-accent"
                                            >
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
