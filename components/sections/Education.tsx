"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { education } from "@/lib/static-data";

export function Education() {
    return (
        <section id="education" className="py-20 bg-background">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">
                        Academic Background
                    </p>
                    <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        Education
                    </h2>
                </motion.div>

                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg"
                        >
                            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 blur-2xl" />

                            <div className="relative flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <GraduationCap className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-mono text-xs text-muted-foreground">
                                        {edu.faculty}
                                    </p>
                                    <h3 className="font-serif text-xl font-semibold leading-snug mt-0.5">
                                        {edu.institution}
                                    </h3>
                                    <p className="mt-1 text-sm font-medium text-primary">
                                        {edu.degree}
                                    </p>
                                </div>
                            </div>

                            <div className="relative mt-5 grid grid-cols-2 gap-3 text-xs text-muted-foreground">
                                <span className="inline-flex items-center gap-1.5">
                                    <Calendar className="h-3.5 w-3.5" />
                                    {edu.year}
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <MapPin className="h-3.5 w-3.5" />
                                    {edu.location}
                                </span>
                            </div>

                            <p className="relative mt-4 text-sm text-muted-foreground leading-relaxed">
                                {edu.description}
                            </p>

                            <div className="relative mt-4 inline-flex items-center gap-2 rounded-md border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs text-foreground">
                                <Sparkles className="h-3.5 w-3.5 text-accent" />
                                {edu.highlight}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
