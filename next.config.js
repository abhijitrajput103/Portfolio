/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/Portfolio' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
