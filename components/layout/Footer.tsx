import { personalInfo } from "@/lib/static-data";
import { Container } from "@/components/ui/container";

export function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <Container className="py-12">
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <p className="font-serif text-lg font-semibold">
                            {personalInfo.name}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                            {personalInfo.role}
                        </p>
                        <p className="mt-2 text-xs text-muted-foreground">
                            {personalInfo.location} · {personalInfo.email}
                        </p>
                        <a
                            href={personalInfo.orcidUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-1 inline-block font-mono text-xs text-muted-foreground hover:text-primary"
                        >
                            ORCID {personalInfo.orcid}
                        </a>
                    </div>

                    <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                            Sections
                        </p>
                        <ul className="space-y-1.5 text-sm">
                            <li>
                                <a href="/#research" className="hover:text-primary">
                                    Research Interests
                                </a>
                            </li>
                            <li>
                                <a href="/#publications" className="hover:text-primary">
                                    Publications &amp; IP
                                </a>
                            </li>
                            <li>
                                <a href="/#awards" className="hover:text-primary">
                                    Awards
                                </a>
                            </li>
                            <li>
                                <a href="/#events" className="hover:text-primary">
                                    Events
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                            Connect
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                            {personalInfo.socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                                >
                                    <social.icon className="h-3.5 w-3.5" />
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
                    <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Built with Next.js · Tailwind · Framer Motion
                    </p>
                </div>
            </Container>
        </footer>
    );
}
