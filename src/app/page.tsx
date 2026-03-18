import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection locale="es" />
      <ServicesSection locale="es" />
      <PortfolioSection locale="es" />
      <ContactSection locale="es" />
    </>
  );
}