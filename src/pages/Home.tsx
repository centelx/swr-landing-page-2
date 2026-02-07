// ... inne importy
import StickyCTA from '../components/StickyCTA'; // <--- IMPORT

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
      
      <StickyCTA /> {/* <--- DODAJ TUTAJ */}
    </>
  );
}
