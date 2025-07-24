import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'lh3.googleusercontent.com',
        protocol: 'https',
        port: '',
      },
      {
        hostname: 'placeholderimage.eu',
        protocol: 'https',
        port: '',
      },
    ],
  },
};

export default nextConfig;
