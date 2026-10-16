import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  async redirects() {
    return [
      // The Long-Haul Lob page moved to a Barcelona URL; keep old links and rankings.
      { source: "/pickleball-vacation-spain", destination: "/pickleball-vacation-barcelona", permanent: true },
    ];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
