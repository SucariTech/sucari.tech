import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://images.ctfassets.net/**')],
  },
  reactStrictMode: true,
  trailingSlash: true,
}

export default nextConfig
