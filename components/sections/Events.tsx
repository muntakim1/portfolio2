"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { MapPin, Calendar, X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { events } from "@/lib/static-data";

export function Events() {
    const [activeEvent, setActiveEvent] = useState<number | null>(null);
    const [activePhoto, setActivePhoto] = useState(0);

    const openEvent = (i: number) => {
        setActiveEvent(i);
        setActivePhoto(0);
    };
    const closeEvent = useCallback(() => setActiveEvent(null), []);

    const event = activeEvent !== null ? events[activeEvent] : null;

    const next = useCallback(() => {
        if (!event) return;
        setActivePhoto((p) => (p + 1) % event.photos.length);
    }, [event]);
    const prev = useCallback(() => {
        if (!event) return;
        setActivePhoto((p) => (p - 1 + event.photos.length) % event.photos.length);
    }, [event]);

    useEffect(() => {
        if (activeEvent === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeEvent();
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [activeEvent, closeEvent, next, prev]);

    return (
        <section id="events" className="py-20 bg-muted/40">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">
                        Conferences · Exhibitions · Talks
                    </p>
                    <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        Events
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Moments from research events, award ceremonies, and the
                        broader research community.
                    </p>
                </motion.div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {events.map((ev, i) => (
                        <motion.button
                            key={ev.slug}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            onClick={() => ev.photos.length > 0 && openEvent(i)}
                            disabled={ev.photos.length === 0}
                            className="group relative overflow-hidden rounded-xl border border-border bg-card text-left transition-all hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                                {ev.cover ? (
                                    <Image
                                        src={ev.cover}
                                        alt={ev.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center text-muted-foreground">
                                        <ImageIcon className="h-10 w-10 opacity-40" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                                <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-black/40 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur">
                                    {ev.tag}
                                </span>
                                {ev.photos.length > 1 && (
                                    <span className="absolute right-3 top-3 rounded-full border border-white/30 bg-black/40 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur">
                                        +{ev.photos.length} photos
                                    </span>
                                )}
                                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                                    <h3 className="font-serif text-lg font-semibold leading-snug">
                                        {ev.title}
                                    </h3>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                                    <span className="inline-flex items-center gap-1">
                                        <Calendar className="h-3.5 w-3.5" />
                                        {ev.date}
                                    </span>
                                    <span className="inline-flex items-center gap-1">
                                        <MapPin className="h-3.5 w-3.5" />
                                        {ev.venue}
                                    </span>
                                </div>
                                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                                    {ev.summary}
                                </p>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </Container>

            {/* Lightbox */}
            <AnimatePresence>
                {event && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeEvent}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
                    >
                        <button
                            onClick={closeEvent}
                            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
                            aria-label="Close"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                prev();
                            }}
                            className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:left-8"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                next();
                            }}
                            className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:right-8"
                            aria-label="Next"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>

                        <motion.div
                            key={activePhoto}
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.97 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative flex max-h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-card"
                        >
                            <div className="relative aspect-[16/10] w-full bg-black">
                                <Image
                                    src={event.photos[activePhoto]}
                                    alt={`${event.title} — photo ${activePhoto + 1}`}
                                    fill
                                    sizes="100vw"
                                    className="object-contain"
                                />
                            </div>
                            <div className="p-5">
                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <h3 className="font-serif text-lg font-semibold">
                                            {event.title}
                                        </h3>
                                        <p className="text-xs text-muted-foreground">
                                            {event.venue} · {event.date}
                                        </p>
                                    </div>
                                    <span className="font-mono text-xs text-muted-foreground">
                                        {activePhoto + 1} / {event.photos.length}
                                    </span>
                                </div>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    {event.summary}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
