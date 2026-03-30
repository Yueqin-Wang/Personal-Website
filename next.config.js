/** @type {import('next').NextConfig} */
const repoName = 'Personal-Website'
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  trailingSlash: true,
}

module.exports = nextConfig
