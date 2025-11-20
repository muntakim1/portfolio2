"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { achievements } from "@/lib/static-data";

export function Achievements() {
    return (
        <section id="achievements" className="py-20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Achievements & Awards
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Recognition for contributions to the field of Data Science and AI.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-3">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow border-primary/20">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                                            <Trophy className="h-6 w-6" />
                                        </div>
                                        <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                                            {achievement.year}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold leading-tight">
                                        {achievement.title}
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm font-medium text-primary mb-2">
                                        {achievement.organization}
                                    </p>
                                    <p className="text-muted-foreground">
                                        {achievement.description}
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
