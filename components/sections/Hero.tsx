"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { personalInfo } from "@/lib/static-data";

export function Hero() {
    return (
        <section className="relative overflow-hidden py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(var(--primary-rgb),0.15),transparent)]" />
            <Container>
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 sm:mb-8 relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl"
                    >
                        <Image
                            src={personalInfo.image}
                            alt={personalInfo.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                            Hi, I&apos;m{" "}
                            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                                {personalInfo.name}
                            </span>
                        </h1>
                        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:mt-6">
                            {personalInfo.role} specializing in{" "}
                            <span className="font-semibold text-foreground bg-primary/10 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-sm sm:text-base">
                                AI Agents
                            </span>{" "}
                            and{" "}
                            <span className="font-semibold text-foreground bg-primary/10 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-sm sm:text-base">
                                Machine Learning
                            </span>
                            .
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-6 sm:mt-8 md:mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4 w-full sm:w-auto"
                    >
                        <a
                            href="/Muntakim_CV.pdf"
                            download
                            className="group inline-flex h-11 sm:h-12 items-center justify-center rounded-lg bg-primary px-6 sm:px-8 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95"
                        >
                            Download CV
                        </a>
                        <Link
                            href="/blog"
                            className="group inline-flex h-11 sm:h-12 items-center justify-center rounded-lg border-2 border-primary/20 bg-background px-6 sm:px-8 text-sm font-medium shadow-sm transition-all hover:border-primary/40 hover:bg-primary/5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95"
                        >
                            Read Blog
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </section >
    );
}
