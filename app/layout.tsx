import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { CursorFlow } from "@/components/ui/cursor-flow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muntakim | Data Scientist & Researcher",
  description: "Portfolio of Muntakim, a Data Scientist and Researcher specializing in AI agents and Machine Learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "min-h-screen flex flex-col antialiased")}>
        <Navbar />
        <CursorFlow />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
