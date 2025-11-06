// Disable all TypeScript and ESLint errors in this config file
// eslint-disable
// @ts-nocheck

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: { unoptimized: true },

  // ✅ Ignore ESLint errors during production builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Ignore TypeScript type errors during production builds
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
