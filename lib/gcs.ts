import { Storage } from "@google-cloud/storage";

const bucketName = process.env.NEXT_PUBLIC_GCS_BUCKET_NAME;

// Initialize storage with Application Default Credentials (ADC).
// This works automatically on Cloud Run (using the service account)
// and locally (using 'gcloud auth application-default login').
// It also supports GOOGLE_APPLICATION_CREDENTIALS env var pointing to a key file.
const storage = new Storage({
    projectId: process.env.GCP_PROJECT_ID,
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
