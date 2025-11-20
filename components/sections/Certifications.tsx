"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { certifications } from "@/lib/static-data";

export function Certifications() {
    return (
        <section className="py-20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Certifications
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Continuous learning and professional development.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <Award className="h-8 w-8 text-primary" />
                                        {cert.url && (
                                            <a
                                                href={cert.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                <ExternalLink className="h-5 w-5" />
                                            </a>
                                        )}
                                    </div>
                                    <h3 className="font-semibold text-xl">{cert.name}</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-1">{cert.issuer}</p>
                                    <p className="text-sm text-muted-foreground/80">{cert.date}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
