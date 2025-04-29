import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yhxagirrbrqtcqer.public.blob.vercel-storage.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "64.media.tumblr.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      }
    ],
  },
};

export default nextConfig;
