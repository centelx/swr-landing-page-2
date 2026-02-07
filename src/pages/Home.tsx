import TopBar from '../components/TopBar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Comparison from '../components/Comparison';
import Pricing from '../components/Pricing';
import Maintenance from '../components/Maintenance';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// WAŻNE: Musisz zaimportować nowy komponent, żeby działał
import StickyCTA from '../components/StickyCTA';

export default function Home() {
  return (
    <>
      <TopBar />
      <Hero />
      <Portfolio />
      <Comparison />
      <Pricing />
      <Maintenance />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      
      {/* Tutaj wrzucamy nasz przyklejony przycisk (widoczny tylko na mobile) */}
      <StickyCTA />
    </>
  );
}
