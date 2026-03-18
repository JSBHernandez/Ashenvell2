import type { Metadata } from "next";
import { Space_Grotesk, Roboto_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";
import { DynamicNavbar, DynamicFooter } from "./components/LayoutComponents";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import LanguageSwitcher from "./components/LanguageSwitcher";
import CustomCursor from "./components/CustomCursor";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-space-grotesk",
  display: 'swap',
  preload: true,
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  variable: "--font-roboto-mono",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ashenvell | INTELIGENCIA ARTIFICIAL AQUI",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Ashenvell crea experiencias digitales de alto impacto: desarrollo web, apps moviles, diseno UI/UX y soluciones con inteligencia artificial.",
  keywords:
    "desarrollo web, desarrollo movil, diseno ui ux, inteligencia artificial, software a la medida, Ashenvell, Bucaramanga",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  icons: {
    icon: [
      { url: '/alogo.png' },
      { url: '/alogo.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/alogo.png',
    apple: '/alogo.png',
  },
  alternates: {
    canonical: '/',
    languages: {
      es: '/',
      en: '/en',
    },
  },
  openGraph: {
    title: "Ashenvell | Innovacion y Desarrollo Digital",
    description:
      "Desarrollo web, apps moviles, UI/UX e IA para marcas que quieren crecer con tecnologia.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
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
    title: 'Ashenvell | Innovacion y Desarrollo Digital',
    description:
      'Desarrollo web, apps moviles, UI/UX e IA para negocios que quieren acelerar su crecimiento.',
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ['es', 'en'],
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/alogo.png`,
    sameAs: [
      'https://github.com/JSBHernandez',
      'https://www.linkedin.com/in/juan-sebastian-becerra-hernandez-116752250/',
    ],
  };

  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${robotoMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-brand-dark text-brand-light-text antialiased selection:bg-brand-blue selection:text-white">
        {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', { anonymize_ip: true });
                `,
              }}
            />
          </>
        )}

        <Script
          id="website-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        
        <div className="flex flex-col min-h-screen">
          <DynamicNavbar />
          <main className="flex-grow">
            {children}
          </main>
          <DynamicFooter />
        </div>
        <LanguageSwitcher />
        <FloatingWhatsAppButton />
        <CustomCursor />
        <Analytics />
      </body>
    </html>
  );
}