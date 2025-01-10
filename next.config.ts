import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimage.com",
        pathname: "/**",
      },
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
