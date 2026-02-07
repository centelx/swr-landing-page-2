import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, MousePointerClick } from 'lucide-react';
import { useState } from 'react';
// Upewnij się, że ścieżka importu jest poprawna (zależy gdzie zapisałeś plik)
import DemoViewer from './DemoViewer'; 

export default function Portfolio() {
  // Stan przechowujący URL aktualnie otwartego projektu (lub null jeśli żaden)
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const projects = [
    {
      title: 'Auto-Serwis "Błysk"',
      category: 'Motoryzacja',
      image: '/screen1.png', 
      description: 'Strona wizytówka z szybkim umawianiem wizyt. Czas realizacji: 16h.',
      link: 'https://iglen.pl/', 
    },
    {
      title: 'Salon Urody "Elegance"',
      category: 'Beauty & Wellness',
      image: '/screen2.png',
      description: 'Elegancki design z cennikiem i galerią prac. Czas realizacji: 20h.',
      link: '#', // Tu docelowo inny link
    },
    {
      title: 'Remonty Kowalski',
      category: 'Budownictwo',
      image: '/screen3.png',
      description: 'Prosta strona ofertowa nastawiona na pozyskiwanie telefonów.',
      link: '#', // Tu docelowo inny link
    }
  ];

  return (
    <>
      <section id="portfolio" className="py-20 px-4 bg-brand-dark relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nasze Realizacje
            </h2>
            <p className="text-xl text-gray-400">
              Najedź na projekt, aby zobaczyć całość
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group bg-brand-navy/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-brand-neon/50 transition-all duration-300"
              >
                {/* OKNO PRZEGLĄDARKI (SCROLL CONTAINER) */}
                <div className="relative h-72 w-full overflow-hidden bg-gray-900 border-b border-gray-800">
                  
                  {/* Obrazek - Scrollujący się */}
                  <div className="w-full h-auto transition-transform duration-[4000ms] ease-linear group-hover:-translate-y-[calc(100%-18rem)]">
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

                  {/* Przycisk Linku - TERAZ OTWIERA IFRAME */}
                  <div className="absolute bottom-4 right-4 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button 
                      onClick={() => setActiveDemo(project.link)}
                      className="flex items-center gap-2 bg-brand-neon text-black font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-white transition-colors text-sm cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                  </div>
                </div>

                {/* Opis pod spodem */}
                <div className="p-6">
                  <div className="text-xs font-bold text-brand-neon mb-2 uppercase tracking-wider">
                    {project.category}
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
      </section>

      {/* MODAL Z IFRAME - Wyświetla się tylko gdy activeDemo ma wartość */}
      <AnimatePresence>
        {activeDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100]"
          >
            <DemoViewer 
              projectUrl={activeDemo} 
              onClose={() => setActiveDemo(null)} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
