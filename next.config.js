/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    // Explicit root prevents "multiple lockfiles" false-positive on dev machines
    root: __dirname,
  },
}

module.exports = nextConfig
