import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable dynamic routing for bilingual support
  trailingSlash: true,
  images: {
    unoptimized: false, // Enable image optimization for better performance
  },
  // Optimize for website performance
  compress: true,
  poweredByHeader: false,
  // Configure for website deployment
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
};

export default nextConfig;
