/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Nathaniel-Xu.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Nathaniel-Xu.github.io/' : '',
}

module.exports = nextConfig