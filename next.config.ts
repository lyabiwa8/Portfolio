import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lya-portfolio",
  assetPrefix: "/lya-portfolio/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
