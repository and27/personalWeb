/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  images: {
    unoptimized: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    return config;
  },

  async redirects() {
    return [
      {
        source: '/',
        has: [{ type: 'host', value: 'www.abstudio.com.co' }],
        destination: '/abstudio',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
