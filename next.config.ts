import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lya-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
