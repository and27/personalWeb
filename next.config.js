/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['images.ctfassets.net', 'picsum.photos', 'undefined']
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
        destination: '/abstudio',
        permanent: true,
        has: [
          {
            type: 'host',
            value: 'abstudio.com.co'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
