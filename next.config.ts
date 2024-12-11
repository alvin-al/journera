import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.s3.ap-southeast-2.amazonaws.com", // Ini buat ngizinin semua bucket S3
      },
    ],
  },
};

module.exports = nextConfig;
