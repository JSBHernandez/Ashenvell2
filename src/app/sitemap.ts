import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const routes = [
  '/',
  '/en',
  '/desarrollo-web',
  '/aplicaciones-moviles',
  '/diseno-ui-ux',
  '/soluciones-ia',
  '/paginas-web-bucaramanga',
  '/en/web-development',
  '/en/mobile-apps',
  '/en/ui-ux-design',
  '/en/ai-solutions',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === '/' || route === '/en' ? 'weekly' : 'monthly',
    priority: route === '/' || route === '/en' ? 1 : route === '/paginas-web-bucaramanga' ? 0.9 : 0.8,
  }));
}
