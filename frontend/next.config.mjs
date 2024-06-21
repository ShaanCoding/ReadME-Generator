/** @type {import('next').NextConfig} */
import { withPlausibleProxy } from "next-plausible"

const nextConfig = withPlausibleProxy()({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "source.unsplash.com",
      },
      {
        hostname: "github.com",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  // output: "standalone"
})

export default nextConfig
