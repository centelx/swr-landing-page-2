import TopBar from '../components/TopBar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Comparison from '../components/Comparison';
import Process from '../components/Process'; // <--- DODANY IMPORT
import Pricing from '../components/Pricing';
import Maintenance from '../components/Maintenance';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import StickyCTA from '../components/StickyCTA';

export default function Home() {
  return (
    <>
      <TopBar />
      <Hero />
      <Portfolio />
      <Comparison />
      
      {/* Tu jest idealne miejsce. Tłumaczymy "JAK" to robimy, zanim powiemy "ZA ILE" */}
      <Process />
      
      <Pricing />
      <Maintenance />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      
      <StickyCTA />
    </>
  );
}
