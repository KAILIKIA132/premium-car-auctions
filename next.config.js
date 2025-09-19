/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'images.unsplash.com'],
    unoptimized: true, // For static export compatibility
  },
  output: 'standalone', // For better Vercel deployment
  trailingSlash: true, // Better for static hosting
}

module.exports = nextConfig
