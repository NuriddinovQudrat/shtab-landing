import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "exportstate.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "shtab-landing.vercel.app",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
