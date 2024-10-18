/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', '127.0.0.1:3000'],
    },
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
