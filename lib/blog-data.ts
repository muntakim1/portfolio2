import { getGCSFiles, getGCSFileContent } from "./gcs";
import matter from "gray-matter";

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    content: string;
    cover_image?: string;
}

const fallbackPosts: BlogPost[] = [
    {
        slug: "introduction-to-ai-agents",
        title: "Introduction to AI Agents",
        excerpt: "Learn the basics of AI agents and how they are revolutionizing automation.",
        date: "2023-10-01",
        category: "AI Agents",
        content: `
      AI agents are autonomous systems that can perceive their environment, reason about it, and take actions to achieve specific goals. Unlike traditional software, which follows a strict set of rules, AI agents can adapt to changing circumstances and learn from their experiences.

      ## Key Characteristics of AI Agents
      - **Autonomy**: They operate without continuous human intervention.
      - **Perception**: They gather information from their environment through sensors or data inputs.
      - **Reasoning**: They process information to make decisions.
      - **Action**: They execute tasks to achieve their objectives.

      ## Applications
      AI agents are used in various fields, including:
      - **Customer Service**: Chatbots and virtual assistants.
      - **Finance**: Algorithmic trading and fraud detection.
      - **Healthcare**: Diagnostic tools and personalized treatment plans.
    `,
    },
    {
        slug: "machine-learning-best-practices",
        title: "Machine Learning Best Practices",
        excerpt: "A guide to building robust and scalable machine learning models.",
        date: "2023-09-15",
        category: "Machine Learning",
        content: `
      Building machine learning models is an iterative process that requires careful planning and execution. Here are some best practices to ensure success:

      ## 1. Data Quality
      The quality of your data determines the quality of your model. Ensure your data is clean, consistent, and representative of the problem you're trying to solve.

      ## 2. Feature Engineering
      Transforming raw data into meaningful features is crucial. Use domain knowledge to create features that capture the underlying patterns in the data.

      ## 3. Model Evaluation
      Use appropriate metrics to evaluate your model's performance. Don't rely on a single metric; consider precision, recall, F1-score, and others depending on the use case.

      ## 4. Deployment and Monitoring
      Deploying a model is just the beginning. Continuously monitor its performance in production and retrain it as needed to handle data drift.
    `,
    },
];

export async function getBlogPosts(): Promise<BlogPost[]> {
    const files = await getGCSFiles("blogs/");

    if (files.length === 0) {
        console.warn("No files found in GCS or credentials missing, using fallback data.");
        return fallbackPosts;
    }

    const posts = await Promise.all(
        files.map(async (file) => {
            const content = await getGCSFileContent(file.name);
            if (!content) return null;

            const { data, content: markdownContent } = matter(content);
            const slug = file.name.replace("blogs/", "").replace(".md", "");

            return {
                slug,
                title: data.title || "Untitled",
                excerpt: data.excerpt || "",
                date: data.date ? new Date(data.date).toISOString().split("T")[0] : "",
                category: data.category || "Uncategorized",
                content: markdownContent,
                cover_image: data.cover_image,
            } as BlogPost;
        })
    );

    const validPosts = posts.filter((post): post is BlogPost => post !== null);

    // Sort by date descending
    return validPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
    const filename = `blogs/${slug}.md`;
    const content = await getGCSFileContent(filename);

    if (!content) {
        console.warn(`Failed to fetch post ${slug} from GCS, checking fallback.`);
        return fallbackPosts.find((p) => p.slug === slug) || null;
    }

    const { data, content: markdownContent } = matter(content);

    return {
        slug,
        title: data.title || "Untitled",
        excerpt: data.excerpt || "",
        date: data.date ? new Date(data.date).toISOString().split("T")[0] : "",
        category: data.category || "Uncategorized",
        content: markdownContent,
        cover_image: data.cover_image,
    } as BlogPost;
}
