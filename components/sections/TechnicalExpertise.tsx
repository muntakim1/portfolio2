"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Cloud, Wrench, Layers } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/lib/static-data";

const iconMap = {
    languages: Code2,
    frameworks: Layers,
    mlops: Wrench,
    cloud: Cloud,
    algorithms: Brain,
};

const categoryTitles = {
    languages: "Languages",
    frameworks: "Frameworks",
    mlops: "MLOps & Development",
    cloud: "Cloud & Data",
    algorithms: "Algorithms",
};

const categoryColors = {
    languages: "from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 border-blue-500/30",
    frameworks: "from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 border-purple-500/30",
    mlops: "from-orange-500/20 to-red-500/20 hover:from-orange-500/30 hover:to-red-500/30 border-orange-500/30",
    cloud: "from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 border-green-500/30",
    algorithms: "from-amber-500/20 to-yellow-500/20 hover:from-amber-500/30 hover:to-yellow-500/30 border-amber-500/30",
};

export function TechnicalExpertise() {
    return (
        <section id="skills" className="py-12 sm:py-16 md:py-20 bg-muted/30">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 sm:mb-10 md:mb-12 text-center"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
                        Technical Expertise
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                        A comprehensive toolset for building advanced AI solutions and scalable applications.
                    </p>
                </motion.div>

                <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {(Object.keys(skills) as Array<keyof typeof skills>).map((category, index) => {
                        const Icon = iconMap[category];
                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <CardTitle className="text-lg font-semibold">
                                            {categoryTitles[category]}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4">
                                            {skills[category].map((skill) => (
                                                <span
                                                    key={skill}
                                                    className={`inline-flex items-center rounded-lg bg-gradient-to-r ${categoryColors[category]} px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-foreground border transition-all duration-200 hover:scale-105 cursor-default`}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
