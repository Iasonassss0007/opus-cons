import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for static website generation
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  // Disable server-side features for static website
  experimental: {
    // Remove any experimental features that are webapp-specific
  },
  // Optimize for website performance
  compress: true,
  poweredByHeader: false,
  // Configure for website deployment
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
};

export default nextConfig;
