import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Muntakimur Rahaman | AI-Enabled CPS Security & Quantum-Safe Networking",
  description:
    "Researcher at Multimedia University working on AI-enabled cyber-physical systems security, privacy-preserving network monitoring, encrypted traffic intelligence, anomaly detection, and quantum-safe networking.",
  keywords: [
    "Muntakimur Rahaman",
    "Muntakim",
    "AI-Enabled CPS Security",
    "Privacy-Preserving Network Monitoring",
    "Anomaly Detection",
    "Zero-Day Detection",
    "Post-Quantum Cryptography",
    "QKD",
    "O-RAN Security",
    "Encrypted Traffic Classification",
    "AI Cybersecurity",
    "MMU",
    "Researcher",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.variable,
          serif.variable,
          inter.className,
          "min-h-screen flex flex-col antialiased"
        )}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
