"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText, BookOpen, Lightbulb } from "lucide-react";
import { Container } from "@/components/ui/container";
import { publications, patents } from "@/lib/static-data";

export function Publications() {
    return (
        <section id="publications" className="py-20 bg-muted/40">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">
                        Research Outputs
                    </p>
                    <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        Publications &amp; IP
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Peer-reviewed work, conference papers, and patent applications
                        on encrypted-traffic analysis and quantum-safe networking.
                    </p>
                </motion.div>

                <div className="mx-auto max-w-4xl space-y-10">
                    {/* Journal Articles */}
                    <div>
                        <div className="mb-4 flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                                Peer-Reviewed Journal Articles
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {publications
                                .filter((p) => p.type === "journal")
                                .map((pub, idx) => (
                                    <PublicationItem key={idx} pub={pub} index={idx + 1} />
                                ))}
                        </div>
                    </div>

                    {/* Conference Papers */}
                    <div>
                        <div className="mb-4 flex items-center gap-2">
                            <FileText className="h-4 w-4 text-primary" />
                            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                                Conference Papers
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {publications
                                .filter((p) => p.type === "conference")
                                .map((pub, idx) => (
                                    <PublicationItem
                                        key={idx}
                                        pub={pub}
                                        index={
                                            publications.filter((p) => p.type === "journal").length +
                                            idx +
                                            1
                                        }
                                    />
                                ))}
                        </div>
                    </div>

                    {/* Patents */}
                    <div>
                        <div className="mb-4 flex items-center gap-2">
                            <Lightbulb className="h-4 w-4 text-primary" />
                            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                                Patents &amp; Intellectual Property
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {patents.map((p, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                    className="group relative rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="cite-num">
                                            {publications.length + idx + 1}
                                        </span>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent">
                                                    {p.status}
                                                </span>
                                                <span className="font-mono text-xs text-muted-foreground">
                                                    {p.year}
                                                </span>
                                            </div>
                                            <h4 className="mt-2 font-serif text-lg font-semibold leading-snug">
                                                {p.title}
                                            </h4>
                                            <p className="mt-1 text-sm text-muted-foreground italic">
                                                {p.inventor}
                                            </p>
                                            <p className="mt-3 text-sm text-muted-foreground">
                                                {p.description}
                                            </p>
                                            <div className="mt-3 flex flex-wrap gap-1.5">
                                                {p.tags.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="rounded-md bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

type Pub = (typeof publications)[number];

function PublicationItem({ pub, index }: { pub: Pub; index: number }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-md transition-all"
        >
            <div className="flex items-start gap-4">
                <span className="cite-num">{index}</span>
                <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                        {"status" in pub && pub.status && (
                            <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent">
                                {pub.status}
                            </span>
                        )}
                        <span className="font-mono text-xs text-muted-foreground">
                            {pub.year}
                        </span>
                    </div>
                    <h4 className="mt-2 font-serif text-lg font-semibold leading-snug">
                        {pub.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground italic">
                        {pub.authors}
                    </p>
                    <p className="mt-1 text-sm text-foreground/80">{pub.venue}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{pub.description}</p>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-1.5">
                            {pub.tags.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-md bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                        {pub.url && pub.url !== "#" && (
                            <a
                                href={pub.url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                            >
                                View paper
                                <ExternalLink className="h-3 w-3" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.article>
    );
}
