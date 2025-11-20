"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Education
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Academic background and qualifications.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-2">
                                    <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                                        <GraduationCap className="h-6 w-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <CardTitle className="text-xl font-semibold">
                                            {edu.institution}
                                        </CardTitle>
                                        <p className="text-base font-medium text-muted-foreground">
                                            {edu.degree}
                                        </p>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                                        <Calendar className="mr-2 h-4 w-4" />
                                        {edu.year}
                                    </div>
                                    <p className="text-muted-foreground">
                                        {edu.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
