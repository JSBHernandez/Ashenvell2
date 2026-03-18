"use client";

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import { getLocaleFromPathname } from '@/lib/i18n';

export function DynamicNavbar() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname || '/');

  return <Navbar locale={locale} />;
}

export function DynamicFooter() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname || '/');

  return <Footer locale={locale} />;
}
