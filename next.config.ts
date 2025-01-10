import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimage.com",
        pathname: "/**",
      },
    ],
    domains: ["localhost", "https://exportstate.com/", "https://shtab-landing.vercel.app/"],
  },
};

export default nextConfig;
