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
    ],
  },
};

export default nextConfig;
