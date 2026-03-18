"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname, toAlternatePathname } from '@/lib/i18n';

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const currentPath = pathname || '/';
  const isEnglish = getLocaleFromPathname(currentPath) === 'en';
  const alternatePath = toAlternatePathname(currentPath);

  return (
    <div className="fixed top-24 right-4 md:right-6 z-40">
      <Link
        href={alternatePath}
        className="flex items-center gap-2 bg-brand-dark-secondary/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#00E5FF]/30 hover:border-[#00E5FF] transition-all shadow-lg hover:shadow-glow-blue"
        aria-label={isEnglish ? 'Switch to Spanish' : 'Cambiar a Inglés'}
      >
        <span className="text-2xl">{isEnglish ? '🇺🇸' : '🇪🇸'}</span>
        <span className="text-sm font-medium text-gray-300">
          {isEnglish ? 'EN' : 'ES'}
        </span>
      </Link>
    </div>
  );
};

export default LanguageSwitcher;