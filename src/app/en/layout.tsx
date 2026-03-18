import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Ashenvell | Web Development, Mobile Apps and AI Solutions',
  description:
    'Ashenvell builds high-impact digital products: web development, mobile apps, UI/UX design and artificial intelligence.',
  keywords:
    'web development, mobile apps, ui ux design, artificial intelligence, custom software, Ashenvell',
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  icons: {
    icon: '/alogo.png',
  },
  alternates: {
    canonical: '/en',
    languages: {
      es: '/',
      en: '/en',
    },
  },
  openGraph: {
    title: 'Ashenvell | Web Development, Mobile Apps and AI Solutions',
    description:
      'Web development, mobile apps, UI/UX and AI solutions for ambitious brands.',
    url: `${SITE_URL}/en`,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES'],
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 512,
        height: 512,
        alt: `${SITE_NAME} logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashenvell | Web Development, Mobile Apps and AI Solutions',
    description:
      'Web development, mobile apps, UI/UX and AI solutions for ambitious brands.',
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
