import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  experimental: {
    reactCompiler: false
  },
  images: { remotePatterns: [{ hostname: "via.placeholder.com" }] }
}

export default withPayload(nextConfig)
