import type { NextConfig } from "next";
import nrExternals from 'newrelic/load-externals';

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['newrelic']
  },
  webpack: (config) => {
    nrExternals(config);
    return config;
  },
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
      },
      {
        protocol: "https",
        hostname: "d26lpennugtm8s.cloudfront.net",
        pathname: "/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;