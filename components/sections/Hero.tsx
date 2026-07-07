"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Mail, Medal, Sparkles } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { personalInfo } from "@/lib/static-data";

const badges = [
    "Quantum-Safe Systems",
    "QKD Studio",
    "TrafficMAML",
    "Encrypted-Traffic ML",
    "Reproducible Research",
    "Production ML at Scale",
];

export function Hero() {
    return (
        <section className="relative overflow-hidden paper-bg">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background" />
            <div className="absolute -top-32 right-0 -z-10 h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(var(--primary-rgb),0.18),transparent)] blur-3xl" />
            <div className="absolute -bottom-40 left-0 -z-10 h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(var(--accent-rgb),0.14),transparent)] blur-3xl" />

            <Container>
                <div className="grid items-center gap-12 py-16 md:grid-cols-[1.4fr_1fr] md:py-24 lg:py-32">
                    {/* Left: identity + research statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-4 inline-flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                                Researcher · MMU FAIE
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
                                Senior Data Scientist · 5+ yrs
                            </span>
                        </div>

                        <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            {personalInfo.name}
                        </h1>

                        <p className="mt-4 text-lg text-muted-foreground sm:text-xl md:text-2xl">
                            Researching{" "}
                            <span className="text-foreground font-medium">
                                quantum-safe networking
                            </span>{" "}
                            and{" "}
                            <span className="text-foreground font-medium">
                                AI-driven cybersecurity
                            </span>{" "}
                            through reproducible research software — while shipping{" "}
                            <span className="text-foreground font-medium">
                                production ML
                            </span>{" "}
                            across energy, edge, and GenAI for global enterprises.
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <span className="inline-flex items-center gap-1.5">
                                <MapPin className="h-4 w-4 text-primary" />
                                {personalInfo.location}
                            </span>
                            <span className="text-border">·</span>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="inline-flex items-center gap-1.5 hover:text-primary"
                            >
                                <Mail className="h-4 w-4" />
                                {personalInfo.email}
                            </a>
                            <span className="text-border">·</span>
                            <a
                                href={personalInfo.orcidUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="font-mono text-xs hover:text-primary"
                            >
                                ORCID {personalInfo.orcid}
                            </a>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {badges.map((b) => (
                                <span
                                    key={b}
                                    className="rounded-md border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground"
                                >
                                    {b}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <a
                                href={personalInfo.cv}
                                download
                                className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <Download className="h-4 w-4" />
                                Download CV
                            </a>
                            <a
                                href="#open-to"
                                className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg border-2 border-primary/20 bg-background px-6 text-sm font-medium hover:border-primary/40 hover:bg-primary/5"
                            >
                                Profile Fit
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: portrait + award highlight + stat strip */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative mx-auto w-full max-w-sm"
                    >
                        {/* Portrait */}
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10">
                            <Image
                                src={personalInfo.image}
                                alt={personalInfo.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 400px"
                                className="object-cover"
                                priority
                            />

                            {/* Top affiliation pill — small, clean, doesn't fight the photo */}
                            <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-white backdrop-blur-md">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                MMU · FAIE
                            </div>
                        </div>

                        {/* Award highlight — gold-toned card with proper visual weight */}
                        <motion.a
                            href="#awards"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="group mt-5 flex items-center gap-4 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/15 via-amber-400/8 to-orange-500/10 p-4 shadow-lg shadow-amber-500/10 transition-all hover:shadow-xl hover:-translate-y-0.5"
                        >
                            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-md shadow-amber-500/30">
                                <Medal className="h-7 w-7 drop-shadow" />
                                <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-amber-200 animate-pulse" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-mono text-[10px] uppercase tracking-widest text-amber-700 dark:text-amber-300">
                                    Latest Recognition
                                </p>
                                <p className="font-serif text-base font-semibold leading-tight mt-0.5">
                                    Gold Medal — ITEX 2026
                                </p>
                                <p className="mt-0.5 text-xs text-muted-foreground truncate">
                                    PQC + QKD orchestration · Kuala Lumpur
                                </p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-amber-700/70 dark:text-amber-300/70 transition-transform group-hover:translate-x-1" />
                        </motion.a>

                        {/* Stat strip */}
                        <div className="mt-3 grid grid-cols-3 gap-2">
                            {[
                                { v: "6", l: "Outputs" },
                                { v: "3", l: "Innovations" },
                                { v: "1", l: "Patent" },
                            ].map((s) => (
                                <div
                                    key={s.l}
                                    className="rounded-xl border border-border bg-card px-3 py-2 text-center"
                                >
                                    <p className="font-serif text-lg font-semibold leading-none">
                                        {s.v}
                                    </p>
                                    <p className="mt-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                                        {s.l}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
