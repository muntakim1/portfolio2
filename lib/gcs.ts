import { Storage } from "@google-cloud/storage";

const projectId = process.env.GCP_PROJECT_ID;
const clientEmail = process.env.GCP_CLIENT_EMAIL;
const privateKey = process.env.GCP_PRIVATE_KEY?.replace(/\\n/g, "\n");
const bucketName = process.env.NEXT_PUBLIC_GCS_BUCKET_NAME;

let storage: Storage | null = null;

if (projectId && clientEmail && privateKey) {
    storage = new Storage({
        projectId,
        credentials: {
            client_email: clientEmail,
            private_key: privateKey,
        },
    });
} else {
    console.warn("Missing GCP credentials. GCS fetching will fail.");
}

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
