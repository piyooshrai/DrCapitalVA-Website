/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: false,
  },
  headers: async () => {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
