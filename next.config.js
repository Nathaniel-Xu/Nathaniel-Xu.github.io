/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/Nathaniel-Xu.github.io',
  assetPrefix: '/Nathaniel-Xu.github.io/',
  outDir: 'docs',
  exportTrailingSlash: true,
}

module.exports = nextConfig