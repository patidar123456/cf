/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // basePath: '/out',
  // assetPrefix: './out/',
  async rewrites() {
    return [
      {
        source: '/:user_id',
        destination: '/user_details/:user_id',
      }
    ]
  },
}

module.exports = nextConfig
