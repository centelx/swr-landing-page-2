import { motion, AnimatePresence } from 'framer-motion';
import { MousePointerClick, Layers, LayoutTemplate, Eye } from 'lucide-react';
import { useState } from 'react';
import DemoViewer from './DemoViewer'; 

export default function Portfolio() {
  // ZMIANA: Stan teraz przechowuje cały obiekt projektu, a nie tylko string linku
  const [activeProject, setActiveProject] = useState<any>(null);

  // Definicja sekcji i projektów
  const sections = [
    {
      id: 'one-page',
      title: 'Strony Wizytówki (One-Page)',
      description: 'Idealne na start. Szybkie, konkretne, wszystko na jednej stronie.',
      icon: LayoutTemplate,
      projects: [
        {
          title: 'Mechanik Samochodowy "Iglen"',
          category: 'Motoryzacja',
          style: 'FACHOWIEC & ENERGIA',
          styleColor: 'text-orange-400 border-orange-400/30 bg-orange-400/10',
          image: '/screen1.png', 
          description: 'Mocny, ciemny motyw budujący autorytet. Nastawiony na szybki telefon.',
          link: 'https://iglen.pl/',
          // NOWE DANE:
          price: '2400 zł',
          deliveryTime: '9 Dni'
        },
        {
          title: 'Gabinet Terapii Pedagogicznej "Nadzieja"',
          category: 'Edukacja & Terapia',
          style: 'EMPATIA & SPOKÓJ',
          styleColor: 'text-pink-300 border-pink-300/30 bg-pink-300/10',
          image: '/screen2.png',
          description: 'Łagodny, pastelowy motyw budujący zaufanie. Nastawiony na poczucie bezpieczeństwa.',
          link: 'https://gabinetnadzieja.pl/', 
          // NOWE DANE:
          price: '2200 zł',
          deliveryTime: '5 Dni'
        },
        {
          title: 'Mistrz Kominiarski Nitak',
          category: 'Usługi & Budownictwo',
          style: 'AUTORYTET & BEZPIECZEŃSTWO',
          styleColor: 'text-orange-500 border-orange-500/30 bg-orange-500/10',
          image: '/screen4.png',
          description: 'Kontrastowy, profesjonalny design łączący nowoczesność z tradycją rzemiosła.',
          link: 'https://kominiarznitak.pages.dev/', 
          // NOWE DANE:
          price: '2400 zł',
          deliveryTime: '7 Dni'
        }
      ]
    },
    {
      id: 'multi-page',
      title: 'Strony Firmowe (Multi-Page)',
      description: 'Rozbudowane serwisy z podstronami (O nas, Oferta, Kontakt).',
      icon: Layers,
      projects: [
        {
          title: 'Klinika "Lumina Estetica"',
          category: 'Beauty & Wellness',
          style: 'ELEGANCJA & HARMONIA',
          styleColor: 'text-yellow-200 border-yellow-200/30 bg-yellow-200/10',
          image: '/screen5.png', 
          description: 'Luksusowy design w odcieniach złota i beżu. Przejrzysta struktura podstron oferty i cennika.',
          link: 'https://lumina-estetica.pages.dev/offer', 
          price: '3100',
          deliveryTime: '11 Dni'
        },
        {
          title: 'Developer "Solid"',
          category: 'Budownictwo',
          style: 'FACHOWIEC & ENERGIA',
          styleColor: 'text-orange-400 border-orange-400/30 bg-orange-400/10',
          image: '/screen1.png', 
          description: 'Nowoczesna prezentacja inwestycji z ciemnym, technicznym tłem.',
          link: '#', 
          price: 'Wycena',
          deliveryTime: '21 Dni'
        },
        {
          title: 'Biuro "Bilans"',
          category: 'Finanse',
          style: 'ZAUFANIE & USŁUGI',
          styleColor: 'text-blue-300 border-blue-300/30 bg-blue-300/10',
          image: '/screen6.png', 
          description: 'Klasyczny, korporacyjny styl. Idealny dla kancelarii i księgowości.',
          link: '#', 
          price: 'Wycena',
          deliveryTime: '14 Dni'
        }
      ]
    }
  ];

  return (
    <>
      <section id="portfolio" className="py-20 px-4 bg-brand-dark relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Nagłówek Sekcji */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nasze Realizacje
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Zainspiruj się poniższymi stylami. Nie wiesz, który wybrać? <span className="text-brand-neon">Dobierzemy ten, który najlepiej sprzedaje w Twojej branży.</span>
            </p>
          </motion.div>

          {/* Pętla po sekcjach (One-Page / Multi-Page) */}
          {sections.map((section, sectionIndex) => (
            <div key={section.id} className="mb-24 last:mb-0">
              
              {/* Tytuł Podsekcji */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8 border-b border-gray-800 pb-4"
              >
                <div className="bg-brand-navy p-3 rounded-lg border border-brand-neon/20">
                  <section.icon className="w-6 h-6 text-brand-neon" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {section.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {section.description}
                  </p>
                </div>
              </motion.div>

              {/* Grid Projektów */}
              <div className="grid md:grid-cols-3 gap-8">
                {section.projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="group bg-brand-navy/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-brand-neon/50 transition-all duration-300 flex flex-col"
                  >
                    {/* OKNO PRZEGLĄDARKI (SCROLL CONTAINER) */}
                    <div className="relative h-64 w-full overflow-hidden bg-gray-900 border-b border-gray-800">
                      
                      {/* Obrazek - Scrollujący się */}
                      <div className="w-full h-auto transition-transform duration-[4000ms] ease-linear group-hover:-translate-y-[calc(100%-16rem)]">
                         <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-auto object-cover object-top"
                        />
                      </div>

                      {/* Instrukcja "Hover me" */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                        <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-white/80 text-sm">
                          <MousePointerClick className="w-4 h-4" />
                          Najedź, aby przewinąć
                        </div>
                      </div>

                      {/* Przycisk Linku */}
                      <div className="absolute bottom-4 right-4 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        {project.link !== '#' ? (
                          <button 
                            // ZMIANA: Przekazujemy cały obiekt projektu
                            onClick={() => setActiveProject(project)}
                            className="flex items-center gap-2 bg-brand-neon text-black font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-white transition-colors text-sm cursor-pointer"
                          >
                            <Eye className="w-4 h-4" />
                            Zobacz stronę na żywo
                          </button>
                        ) : (
                          <span className="flex items-center gap-2 bg-gray-700 text-gray-300 font-bold px-4 py-2 rounded-lg text-sm cursor-not-allowed">
                            Wkrótce
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Opis pod spodem */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-3">
                         <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">
                            {project.category}
                          </div>
                          {/* PLAKIETKA STYLU */}
                          <div className={`text-[10px] font-bold px-2 py-1 rounded border ${project.styleColor}`}>
                            STYL: {project.style}
                          </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* MODAL Z IFRAME */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100]"
          >
            <DemoViewer 
              projectUrl={activeProject.link} 
              onClose={() => setActiveProject(null)}
              // PRZEKAZANIE DANYCH DO NAGŁÓWKA MOBILE:
              price={activeProject.price}
              deliveryTime={activeProject.deliveryTime}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
