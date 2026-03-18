import Link from 'next/link';
import type { SocialLink } from '@/types';
import type { Locale } from '@/lib/i18n';

const GithubIconMini = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIconMini = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const footerSocialLinks: SocialLink[] = [
  { name: 'GitHub', icon: <GithubIconMini />, url: 'https://github.com/JSBHernandez' },
  { name: 'LinkedIn', icon: <LinkedinIconMini />, url: 'https://www.linkedin.com/in/juan-sebastian-becerra-hernandez-116752250/' },
];

type FooterProps = {
  locale?: Locale;
};

const Footer: React.FC<FooterProps> = ({ locale = 'es' }) => {
  const currentYear = new Date().getFullYear();
  const isEnglish = locale === 'en';
  const homeHref = isEnglish ? '/en' : '/';
  // Use absolute reference to homepage anchors
  const sectionHrefPrefix = isEnglish ? '/en' : '/';

  return (
    <footer className="bg-[#000412] border-t border-[#1e293b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Link href={homeHref} className="inline-block">
                <img
                  src="/alogo.png"
                  alt="Ashenvell Logo"
                  className="h-12 w-auto"
                />
              </Link>
              <h3 className="text-xl font-bold text-[#60A5FA] border-b border-[#00E5FF]/30 pb-2 flex-1">Ashenvell</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              {isEnglish
                ? 'We transform ideas into digital reality. Web, mobile development and innovative technological solutions with AI.'
                : 'Desde la idea mas sin sentido hasta aplicaciones web empresariales, traemos todas tus ideas al mundo real.'}
            </p>
            <p className="text-gray-500 text-sm italic">
              {isEnglish
                ? 'Over 2 years solving people issues.'
                : 'Mas de 2 años solucionandole la vida a las personas.'}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#60A5FA] mb-6 border-b border-[#00E5FF]/30 pb-2">
              {isEnglish ? 'Contact Information' : 'Informacion de Contacto'}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="text-[#00E5FF] mt-1">
                  <LocationIcon />
                </div>
                <div>
                  <p className="text-gray-300 text-base font-medium">{isEnglish ? 'Location' : 'Ubicacion'}</p>
                  <p className="text-gray-400 text-base">Colombia</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-[#00E5FF] mt-1">
                  <EmailIcon />
                </div>
                <div>
                  <p className="text-gray-300 text-base font-medium">Email</p>
                  <a href="mailto:sebastianbhforjobs@gmail.com" className="text-gray-400 text-base hover:text-[#00E5FF] transition-colors">
                    sebastianbhforjobs@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-[#00E5FF] mt-1">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-gray-300 text-base font-medium">{isEnglish ? 'Phone' : 'Telefono'}</p>
                  <a href="https://wa.me/573239007932" className="text-gray-400 text-base hover:text-[#00E5FF] transition-colors">
                    +57 323 900 7932
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#60A5FA] mb-6 border-b border-[#00E5FF]/30 pb-2">
              {isEnglish ? 'Business Hours' : 'Horarios de Atencion'}
            </h3>
            <ul className="space-y-3">
              <li>
                <p className="text-gray-300 text-base font-medium">
                  {isEnglish ? 'Monday to Friday:' : 'Lunes a Viernes:'}
                </p>
                <p className="text-gray-400 text-base">{isEnglish ? '10:00 - 22:00' : '10:00 am - 10:00 pm'}</p>
              </li>
              <li>
                <p className="text-gray-300 text-base font-medium">{isEnglish ? 'Saturdays:' : 'Sabados:'}</p>
                <p className="text-gray-400 text-base">{isEnglish ? '10:00 - 22:00' : '10:00 am - 10:00 pm'}</p>
              </li>
              <li>
                <p className="text-gray-300 text-base font-medium">{isEnglish ? 'Sundays:' : 'Domingos:'}</p>
                <p className="text-gray-400 text-base">{isEnglish ? 'Closed' : 'Cerrado'}</p>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-[#0f1423] rounded-lg border border-[#1e293b]">
              <p className="text-sm text-gray-400">
                {isEnglish
                  ? 'Guaranteed response in less than 24 hours'
                  : 'Respuesta garantizada en menos de 24 horas'}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#60A5FA] mb-6 border-b border-[#00E5FF]/30 pb-2">
              {isEnglish ? 'Navigation' : 'Navegacion'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href={`${sectionHrefPrefix}#hero`} className="text-gray-400 hover:text-[#00E5FF] transition-colors text-base flex items-center gap-2">
                  <span className="text-[#00E5FF]">▸</span> {isEnglish ? 'Home' : 'Inicio'}
                </Link>
              </li>
              <li>
                <Link href={`${sectionHrefPrefix}#services`} className="text-gray-400 hover:text-[#00E5FF] transition-colors text-base flex items-center gap-2">
                  <span className="text-[#00E5FF]">▸</span> {isEnglish ? 'Services' : 'Servicios'}
                </Link>
              </li>
              <li>
                <Link href={`${sectionHrefPrefix}#portfolio`} className="text-gray-400 hover:text-[#00E5FF] transition-colors text-base flex items-center gap-2">
                  <span className="text-[#00E5FF]">▸</span> {isEnglish ? 'Portfolio' : 'Portafolio'}
                </Link>
              </li>
              <li>
                <Link href={`${sectionHrefPrefix}#contact`} className="text-gray-400 hover:text-[#00E5FF] transition-colors text-base flex items-center gap-2">
                  <span className="text-[#00E5FF]">▸</span> {isEnglish ? 'Contact' : 'Contacto'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1e293b] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © {currentYear} <span className="text-[#00E5FF] font-semibold">Ashenvell</span>. {isEnglish ? 'All rights reserved.' : 'Todos los derechos reservados.'}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {isEnglish
                  ? 'Obviously Ashenvell made this website'
                  : 'Obviamente Ashenvell hizo esta página'}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <p className="text-sm text-gray-400 font-medium">{isEnglish ? 'Follow us:' : 'Siguenos:'}</p>
              <div className="flex gap-4">
                {footerSocialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={isEnglish ? `Ashenvell on ${link.name}` : `Ashenvell en ${link.name}`}
                    className="text-gray-400 hover:text-[#00E5FF] transition-all duration-300 hover:scale-110"
                  >
                    <span className="sr-only">{link.name}</span>
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;