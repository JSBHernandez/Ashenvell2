import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/inicio', destination: '/', permanent: true },
      { source: '/en/home', destination: '/en', permanent: true },
      { source: '/en/inicio', destination: '/en', permanent: true },

      { source: '/en/desarrollo-web', destination: '/en/web-development', permanent: true },
      { source: '/en/aplicaciones-moviles', destination: '/en/mobile-apps', permanent: true },
      { source: '/en/diseno-ui-ux', destination: '/en/ui-ux-design', permanent: true },
      { source: '/en/soluciones-ia', destination: '/en/ai-solutions', permanent: true },

      { source: '/web-development', destination: '/desarrollo-web', permanent: true },
      { source: '/mobile-apps', destination: '/aplicaciones-moviles', permanent: true },
      { source: '/ui-ux-design', destination: '/diseno-ui-ux', permanent: true },
      { source: '/ai-solutions', destination: '/soluciones-ia', permanent: true },
    ];
  },
};

export default nextConfig;
