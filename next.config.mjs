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
  async rewrites() {
    return [
      { source: '/agentes-que-no-mienten', destination: '/agentes-que-no-mienten/index.html' },
    ]
  },
}

export default nextConfig
