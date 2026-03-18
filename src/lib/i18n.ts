export type Locale = "es" | "en";

export const ES_TO_EN_ROUTE_MAP: Record<string, string> = {
  "/": "/en",
  "/desarrollo-web": "/en/web-development",
  "/aplicaciones-moviles": "/en/mobile-apps",
  "/diseno-ui-ux": "/en/ui-ux-design",
  "/soluciones-ia": "/en/ai-solutions",
};

export const EN_TO_ES_ROUTE_MAP: Record<string, string> = Object.entries(
  ES_TO_EN_ROUTE_MAP
).reduce<Record<string, string>>((acc, [esPath, enPath]) => {
  acc[enPath] = esPath;
  return acc;
}, {});

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname.startsWith("/en") ? "en" : "es";
}

export function toEnglishPathname(pathname: string): string {
  return ES_TO_EN_ROUTE_MAP[pathname] ?? (pathname === "/" ? "/en" : `/en${pathname}`);
}

export function toSpanishPathname(pathname: string): string {
  const normalizedPath = pathname.replace(/\/$/, "") || "/";

  if (!normalizedPath.startsWith("/en")) {
    return normalizedPath;
  }

  const mapped = EN_TO_ES_ROUTE_MAP[normalizedPath];
  if (mapped) {
    return mapped;
  }

  const withoutPrefix = normalizedPath.replace(/^\/en/, "") || "/";
  return withoutPrefix;
}

export function toAlternatePathname(pathname: string): string {
  return getLocaleFromPathname(pathname) === "en"
    ? toSpanishPathname(pathname)
    : toEnglishPathname(pathname);
}
