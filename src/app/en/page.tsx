import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection locale="en" />
      <ServicesSection locale="en" />
      <PortfolioSection locale="en" />
      <ContactSection locale="en" />
    </main>
  );
}
