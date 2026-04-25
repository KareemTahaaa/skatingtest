/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Temporary PRANK rewrite: remove this block to restore the real homepage
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/hacked',
      },
    ]
  },
}

export default nextConfig
