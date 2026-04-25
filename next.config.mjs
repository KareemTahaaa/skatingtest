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

  // INTENTIONAL CRASH: Redirects everything to nowhere, causing the site to be inaccessible.
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: '/offline-error-500',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
