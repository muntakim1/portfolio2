import { Storage } from "@google-cloud/storage";

const bucketName = process.env.NEXT_PUBLIC_GCS_BUCKET_NAME;

// Initialize storage with explicit credentials if available (for local/custom setups),
// otherwise fall back to Application Default Credentials (ADC) for Cloud Run.
const storage =
    process.env.NEXT_PUBLIC_GCP_CLIENT_EMAIL && process.env.NEXT_PUBLIC_GCP_PRIVATE_KEY
        ? new Storage({
            projectId: process.env.NEXT_PUBLIC_GCP_PROJECT_ID,
            credentials: {
                client_email: process.env.NEXT_PUBLIC_GCP_CLIENT_EMAIL,
                private_key: process.env.NEXT_PUBLIC_GCP_PRIVATE_KEY.replace(/\\n/g, "\n"),
            },
        })
        : new Storage({
            projectId: process.env.NEXT_PUBLIC_GCP_PROJECT_ID,
        });

export async function getGCSFiles(prefix: string = "blogs/") {
    if (!storage || !bucketName) {
        console.warn("GCS storage or bucket name not configured.");
        return [];
    }

    try {
        const [files] = await storage.bucket(bucketName).getFiles({ prefix });
        return files.filter((file) => file.name.endsWith(".md"));
    } catch (error) {
        console.error("Error fetching files from GCS:", error);
        return [];
    }
}

export async function getGCSFileContent(filename: string) {
    if (!storage || !bucketName) {
        return null;
    }

    try {
        const [content] = await storage.bucket(bucketName).file(filename).download();
        return content.toString("utf-8");
    } catch (error) {
        console.error(`Error fetching file content for ${filename}:`, error);
        return null;
    }
}
