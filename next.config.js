/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-US","pt-BR"],
    defaultLocale: "pt-BR",
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/app",
        destination: `${process.env.APP_URL}/app`,
      },
      {
        source: "/app/:path*",
        destination: `${process.env.APP_URL}/app/:path*`,
      },
    ];
  },
}

module.exports = nextConfig
