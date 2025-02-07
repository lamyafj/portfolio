import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Example config option
  // images: {
  //   domains: ["example.com"], // Example config for external images
  // },
  basePath: "/portfolio", // If deploying on GitHub Pages
};

export default nextConfig;
