/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
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
