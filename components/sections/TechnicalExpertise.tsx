"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Brain,
    Cloud,
    Wrench,
    Layers,
    ShieldCheck,
    Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { skills } from "@/lib/static-data";

const categoryConfig: Record<
    keyof typeof skills,
    { title: string; icon: typeof Code2; accent: string }
> = {
    securityNetworking: {
        title: "Security & Networking",
        icon: ShieldCheck,
        accent: "from-primary/15 to-primary/5 border-primary/30",
    },
    aiml: {
        title: "Machine Learning & Deep Learning",
        icon: Brain,
        accent: "from-accent/15 to-accent/5 border-accent/30",
    },
    languages: {
        title: "Languages",
        icon: Code2,
        accent: "from-primary/10 to-transparent border-primary/20",
    },
    frameworks: {
        title: "Frameworks",
        icon: Layers,
        accent: "from-accent/10 to-transparent border-accent/20",
    },
    edgeMlops: {
        title: "Edge & MLOps",
        icon: Wrench,
        accent: "from-primary/10 to-transparent border-primary/20",
    },
    cloudData: {
        title: "Cloud & Data",
        icon: Cloud,
        accent: "from-accent/10 to-transparent border-accent/20",
    },
    genai: {
        title: "GenAI & LLM",
        icon: Sparkles,
        accent: "from-primary/10 to-transparent border-primary/20",
    },
};

export function TechnicalExpertise() {
    return (
        <section id="skills" className="py-20 bg-background">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">
                        Tooling
                    </p>
                    <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        Technical Expertise
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        A multi-disciplinary toolset spanning post-quantum security,
                        deep learning, edge inference, and cloud-scale data.
                    </p>
                </motion.div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {(Object.keys(skills) as Array<keyof typeof skills>).map(
                        (key, index) => {
                            const cfg = categoryConfig[key];
                            const Icon = cfg.icon;
                            return (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.06 }}
                                    className="rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="mb-4 flex items-center gap-3">
                                        <div
                                            className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${cfg.accent} text-primary`}
                                        >
                                            <Icon className="h-4 w-4" />
                                        </div>
                                        <h3 className="font-serif text-base font-semibold">
                                            {cfg.title}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {skills[key].map((s) => (
                                            <span
                                                key={s}
                                                className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        }
                    )}
                </div>
            </Container>
        </section>
    );
}
