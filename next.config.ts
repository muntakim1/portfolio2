import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/portfolio2",
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
