import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dummyimage.com", "exportstate.com", "shtab-landing.vercel.app"],
  },
};

export default nextConfig;
