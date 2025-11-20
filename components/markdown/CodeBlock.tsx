"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    rawContent?: string;
}

export function CodeBlock({ className, rawContent, children, ...props }: CodeBlockProps) {
    const [isCopied, setIsCopied] = useState(false);
    const match = /language-(\w+)/.exec(className || "");
    const language = match ? match[1] : "";
    const content = rawContent || String(children).replace(/\n$/, "");

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(content);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    if (!language) {
        return (
            <code className={cn("bg-muted px-1.5 py-0.5 rounded font-mono text-sm", className)} {...props}>
                {children}
            </code>
        );
    }

    return (
        <div className="relative group rounded-lg overflow-hidden my-6 border bg-zinc-950">
            <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
                <span className="text-xs font-medium text-zinc-400 uppercase">{language}</span>
                <button
                    onClick={copyToClipboard}
                    className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors"
                    aria-label="Copy code"
                >
                    {isCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
            </div>
            <div className="p-4 overflow-x-auto">
                <code className={cn("font-mono text-sm text-zinc-100", className)} {...props}>
                    {children}
                </code>
            </div>
        </div>
    );
}
