/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com'], // mock image로 테스트 하기 위한 config입니다. 추후에 제거 예정
  },
  experimental: {
    typedRoutes: true,
  },
  // 웹팩을 통해 svg 파일을 리액트 컴포넌트로 변환하는 설정
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.NEXT_PUBLIC_REMOTE_HOST}`,
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/depromeet/amazing3-fe/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/a/**',
      },
    ],
  },
};

module.exports = nextConfig;
