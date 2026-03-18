import type { Metadata } from "next";

export const SITE_NAME = "Ashenvell";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://ashenvell.com").replace(/\/$/, "");
export const DEFAULT_OG_IMAGE = "/alogo.png";

function asAbsoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type LocalizedMetadataInput = {
  title: string;
  description: string;
  keywords: string;
  locale: "es" | "en";
  pathEs: string;
  pathEn: string;
};

export function createLocalizedMetadata({
  title,
  description,
  keywords,
  locale,
  pathEs,
  pathEn,
}: LocalizedMetadataInput): Metadata {
  const canonicalPath = locale === "en" ? pathEn : pathEs;
  const ogLocale = locale === "en" ? "en_US" : "es_ES";
  const alternateLocale = locale === "en" ? "es_ES" : "en_US";

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
      languages: {
        es: pathEs,
        en: pathEn,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      siteName: SITE_NAME,
      url: asAbsoluteUrl(canonicalPath),
      locale: ogLocale,
      alternateLocale: [alternateLocale],
      images: [
        {
          url: asAbsoluteUrl(DEFAULT_OG_IMAGE),
          width: 512,
          height: 512,
          alt: `${SITE_NAME} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [asAbsoluteUrl(DEFAULT_OG_IMAGE)],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
