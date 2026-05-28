"use client";

import { motion } from "framer-motion";
import {
    GraduationCap,
    Briefcase,
    Check,
    Calendar,
    ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { profileFit } from "@/lib/static-data";

const iconFor = (key: string) =>
    key === "phd" ? GraduationCap : Briefcase;

export function ProfileFit() {
    return (
        <section id="open-to" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 paper-bg opacity-50 -z-10" />

            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">
                        Open To
                    </p>
                    <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        A profile built for two paths
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Equally credentialed for doctoral research and senior
                        industry roles — with concrete evidence for both.
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
                        <Calendar className="h-3.5 w-3.5" />
                        {profileFit.availability}
                    </div>
                </motion.div>

                <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
                    {profileFit.tracks.map((track, idx) => {
                        const Icon = iconFor(track.key);
                        const isPhD = track.key === "phd";
                        return (
                            <motion.div
                                key={track.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div
                                    className={`absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl ${
                                        isPhD ? "bg-primary/10" : "bg-accent/15"
                                    }`}
                                />

                                <div className="relative flex items-start justify-between">
                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                                            isPhD
                                                ? "bg-primary/10 text-primary"
                                                : "bg-accent/15 text-accent"
                                        }`}
                                    >
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <span
                                        className={`rounded-full border px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest ${
                                            isPhD
                                                ? "border-primary/30 bg-primary/5 text-primary"
                                                : "border-accent/30 bg-accent/5 text-accent"
                                        }`}
                                    >
                                        Track 0{idx + 1}
                                    </span>
                                </div>

                                <h3 className="relative mt-5 font-serif text-2xl font-semibold leading-tight">
                                    {track.label}
                                </h3>
                                <p
                                    className={`relative mt-1 text-sm font-medium ${
                                        isPhD ? "text-primary" : "text-accent"
                                    }`}
                                >
                                    {track.tagline}
                                </p>
                                <p className="relative mt-3 text-sm text-muted-foreground leading-relaxed">
                                    {track.description}
                                </p>

                                <ul className="relative mt-6 space-y-3">
                                    {track.evidence.map((e) => (
                                        <li
                                            key={e.label}
                                            className="flex items-start gap-3"
                                        >
                                            <div
                                                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                                                    isPhD
                                                        ? "bg-primary/15 text-primary"
                                                        : "bg-accent/20 text-accent"
                                                }`}
                                            >
                                                <Check className="h-3 w-3" strokeWidth={3} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-foreground leading-snug">
                                                    {e.label}
                                                </p>
                                                <p className="mt-0.5 text-xs text-muted-foreground">
                                                    {e.detail}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={isPhD ? "#publications" : "#about"}
                                    className={`relative mt-7 inline-flex items-center gap-1.5 text-xs font-medium ${
                                        isPhD ? "text-primary" : "text-accent"
                                    } hover:underline`}
                                >
                                    {isPhD
                                        ? "See research outputs"
                                        : "See industry track record"}
                                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                </a>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mt-8 max-w-3xl text-center"
                >
                    <p className="text-sm text-muted-foreground">
                        Looking to recruit, supervise, or collaborate?{" "}
                        <a
                            href="mailto:muntakim.cse@gmail.com"
                            className="font-medium text-primary hover:underline"
                        >
                            Reach out by email
                        </a>{" "}
                        or grab the{" "}
                        <a
                            href="/Muntakim_CV.pdf"
                            download
                            className="font-medium text-primary hover:underline"
                        >
                            full CV
                        </a>
                        .
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}
