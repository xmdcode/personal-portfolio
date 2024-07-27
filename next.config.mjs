import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  output: 'standalone',
  experimental: {
    reactCompiler: false
  },
  images: { remotePatterns: [{ hostname: "via.placeholder.com" }, { hostname: "localhost" }] }
}

export default withPayload(nextConfig)
