import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/az/xeberler',
        destination: '/az/xeberler/1'
      },
      {
        source: '/en/xeberler',
        destination: '/en/xeberler/1'
      },
      {
        source: '/ru/xeberler',
        destination: '/ru/xeberler/1'
      },
    ]
  },
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
