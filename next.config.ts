import type { NextConfig } from "next";

const repoBasePath = "/3dayweekendlab";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
