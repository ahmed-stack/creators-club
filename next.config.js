/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/mods',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
