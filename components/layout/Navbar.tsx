"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Open To", href: "/#open-to" },
    { name: "Research", href: "/#research" },
    { name: "Publications", href: "/#publications" },
    { name: "Awards", href: "/#awards" },
    { name: "Events", href: "/#events" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={cn(
                "sticky top-0 z-50 w-full border-b transition-all",
                scrolled
                    ? "border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
                    : "border-transparent bg-background/0"
            )}
        >
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link
                        href="/"
                        className="group flex items-center gap-2"
                    >
                        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-serif text-base font-semibold">
                            M
                        </span>
                        <div className="hidden sm:block leading-tight">
                            <p className="font-serif text-sm font-semibold tracking-tight">
                                Muntakimur Rahaman
                            </p>
                            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                                Researcher
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex md:items-center md:gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-primary/5 hover:text-primary",
                                    pathname === item.href
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href="mailto:muntakim.cse@gmail.com"
                            className="ml-2 inline-flex h-9 items-center rounded-md bg-primary px-4 text-xs font-medium text-primary-foreground transition-all hover:shadow-md hover:shadow-primary/20"
                        >
                            Get in touch
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </Container>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b bg-background"
                    >
                        <Container className="py-4 space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-primary/5 hover:text-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <a
                                href="mailto:muntakim.cse@gmail.com"
                                className="block rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground"
                                onClick={() => setIsOpen(false)}
                            >
                                Get in touch
                            </a>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
