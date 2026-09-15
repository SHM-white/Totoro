import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  headers() {
    return [
      {
        source: '/giscus-theme.css',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://giscus.app',
          },
        ],
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
