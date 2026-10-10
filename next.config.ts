import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Photos and artwork are compressed in the repository. Serve them directly.
  images: { unoptimized: true },
};

export default nextConfig;
