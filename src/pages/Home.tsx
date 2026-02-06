import TopBar from '../components/TopBar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio'; // <--- IMPORT
import Comparison from '../components/Comparison';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import Maintenance from '../components/Maintenance';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <TopBar />
      <Hero />
      <Portfolio /> {/* <--- DODAJ TUTAJ */}
      <Comparison />
      <Process />
      <Pricing />
      <Maintenance />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
