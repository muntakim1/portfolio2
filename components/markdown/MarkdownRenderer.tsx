"use client";

import MarkdownIt from "markdown-it";
import parse, { DOMNode, Element, domToReact } from "html-react-parser";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { cn } from "@/lib/utils";
import { CodeBlock } from "./CodeBlock";

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    langPrefix: "hljs language-",
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, { language: lang }).value;
            } catch (__) { }
        }
        return ""; // use external default escaping
    },
});

interface MarkdownRendererProps {
    content: string;
    className?: string;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
    const options = {
        replace: (domNode: any) => {
            if (domNode instanceof Element) {
                // Handle Code Blocks
                if (domNode.name === "pre") {
                    const codeNode = domNode.children[0];
                    if (codeNode instanceof Element && codeNode.name === "code") {
                        const className = codeNode.attribs.class;

                        // Extract raw text content for copy button
                        const getText = (node: any): string => {
                            if (node.type === "text" && node.data) return node.data;
                            if (node.children) {
                                return node.children.map(getText).join("");
                            }
                            return "";
                        };

                        const rawContent = getText(codeNode);

                        return (
                            <CodeBlock className={className} rawContent={rawContent}>
                                {domToReact(codeNode.children as DOMNode[], options)}
                            </CodeBlock>
                        );
                    }
                }

                // Handle Images
                if (domNode.name === "img") {
                    const { src, alt, ...props } = domNode.attribs;
                    return (
                        <figure className="my-8">
                            <img
                                src={src}
                                alt={alt || "Blog image"}
                                className="rounded-xl shadow-lg max-w-full h-auto mx-auto border border-border"
                                {...props}
                            />
                            {alt && (
                                <figcaption className="text-center text-sm text-muted-foreground mt-2">
                                    {alt}
                                </figcaption>
                            )}
                        </figure>
                    );
                }

                // Handle Tables
                if (domNode.name === "table") {
                    return (
                        <div className="overflow-x-auto my-8 rounded-lg border border-border">
                            <table className="w-full text-sm text-left">
                                {domToReact(domNode.children as DOMNode[], options)}
                            </table>
                        </div>
                    );
                }

                // Handle Table Head
                if (domNode.name === "thead") {
                    return (
                        <thead className="bg-muted/50 text-muted-foreground uppercase">
                            {domToReact(domNode.children as DOMNode[], options)}
                        </thead>
                    );
                }

                // Handle Table Header Cell
                if (domNode.name === "th") {
                    return (
                        <th className="px-6 py-3 font-medium">
                            {domToReact(domNode.children as DOMNode[], options)}
                        </th>
                    );
                }

                // Handle Table Data Cell
                if (domNode.name === "td") {
                    return (
                        <td className="px-6 py-4 border-t border-border">
                            {domToReact(domNode.children as DOMNode[], options)}
                        </td>
                    );
                }
            }
        },
    };

    const parsedContent = parse(md.render(content), options);

    return (
        <div className={cn(
            "prose prose-lg dark:prose-invert max-w-none",
            "prose-headings:font-bold prose-headings:tracking-tight",
            "prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl",
            "prose-p:leading-relaxed prose-p:text-muted-foreground",
            "prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:transition-colors",
            "prose-blockquote:border-l-primary prose-blockquote:bg-muted/30 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic",
            "prose-li:text-muted-foreground",
            "prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-border",
            className
        )}>
            {parsedContent}
        </div>
    );
}
