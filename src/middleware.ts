import { NextRequest, NextResponse } from 'next/server';
import { toEnglishPathname } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Evitar redirecciones infinitas y excluir rutas especiales
  if (
    pathname.startsWith('/en') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Obtener el idioma preferido del navegador
  const acceptLanguage = request.headers.get('accept-language');
  
  if (acceptLanguage) {
    // Parsear el Accept-Language header
    const languages = acceptLanguage
      .split(',')
      .map(lang => {
        const [code, qValue] = lang.trim().split(';q=');
        return {
          code: code.split('-')[0].toLowerCase(),
          quality: qValue ? parseFloat(qValue) : 1.0
        };
      })
      .sort((a, b) => b.quality - a.quality);

    // Verificar si el usuario prefiere inglés
    const prefersEnglish = languages[0]?.code === 'en';

    if (prefersEnglish) {
      // Redirigir a la versión en inglés
      const url = request.nextUrl.clone();
      url.pathname = toEnglishPathname(pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Coincide con todas las rutas de solicitud excepto las que comienzan con:
     * - api (rutas API)
     * - _next/static (archivos estáticos)
     * - _next/image (archivos de optimización de imágenes)
     * - favicon.ico (archivo de favicon)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
