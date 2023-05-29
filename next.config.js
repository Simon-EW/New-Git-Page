/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'chart.googleapis.com',
            port: '',
            pathname: '/chart/**',
          },
        ],
      },
      redirects: async () => {
        return [
          {
            source: '/docs',
            destination: '/docs/overview',
            permanent: true,
          },
        ]
      }
};

module.exports = nextConfig;
