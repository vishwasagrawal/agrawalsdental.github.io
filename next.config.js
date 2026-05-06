/** @type {import('next').NextConfig} */

// NEXT_PUBLIC_BASE_PATH is injected by the GitHub Actions workflow.
// It is set to "" when the repo IS the root GitHub Pages site (owner.github.io),
// and to "/<repo-name>" when it is a project page (e.g. /agrawalsdental.github.io).
// Leave it unset for local development so that `npm run dev` works without a prefix.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
