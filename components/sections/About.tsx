"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { experiences, personalInfo } from "@/lib/static-data";

export function About() {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-3xl"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">
                        About Me
                    </h2>
                    <p className="text-lg text-muted-foreground mb-12 text-center">
                        {personalInfo.about}
                    </p>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative border-l-2 border-primary/20 pl-8 pb-8 last:pb-0"
                            >
                                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                                    <span className="text-sm text-muted-foreground bg-background px-2 py-1 rounded border">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-lg font-medium text-primary mb-2">
                                    {exp.company}
                                </p>
                                <p className="text-muted-foreground">{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
