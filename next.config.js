/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      ...(process.env.NEXT_PUBLIC_IMAGE_URL_BASE_PATH
        ? [
            {
              protocol: "https",
              hostname: process.env.NEXT_PUBLIC_IMAGE_URL_BASE_PATH,
              pathname: "/**", // allow all paths
            },
          ]
        : []),
    ],
  },
};

module.exports = nextConfig;
