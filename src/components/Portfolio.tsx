import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Eye, X } from 'lucide-react';
import DemoViewer from './DemoViewer';

export default function Portfolio() {
  // Stan przechowujący aktualnie wybrany projekt (lub null, jeśli żaden)
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    // 1. GABINET NADZIEJA (9 DNI)
    {
      title: 'Gabinet "Nadzieja"',
      category: 'Edukacja & Terapia',
      style: 'EMPATIA & SPOKÓJ',
      styleColor: 'text-teal-300 border-teal-300/30 bg-teal-300/10',
      image: '/screen-nadzieja.png',
      description: 'Spokojna, pastelowa kolorystyka i duża ilość przestrzeni budują zaufanie oraz poczucie bezpieczeństwa, nie przytłaczając rodzica szukającego pomocy.',
      link: 'https://gabinetnadzieja.pl/',
      // DANE DO PODGLĄDU:
      price: '2400 zł',
      deliveryTime: '9 Dni' 
    },
    // 2. KOMINIARZ (5 DNI)
    {
      title: 'Mistrz Kominiarski Nitak',
      category: 'Usługi & Budownictwo',
      style: 'AUTORYTET & BEZPIECZEŃSTWO',
      styleColor: 'text-orange-500 border-orange-500/30 bg-orange-500/10',
      image: '/screen-kominiarz.png',
      description: 'Kontrastowy, profesjonalny design łączący nowoczesność z tradycją rzemiosła. Projekt nastawiony na czytelną prezentację usług i szybki kontakt.',
      link: 'https://kominiarz-radom.pl/',
      // DANE DO PODGLĄDU:
      price: '2200 zł',
      deliveryTime: '5 Dni'
    },
    // 3. TRZECI PROJEKT (7 DNI) - Przykładowy (Tech/Startup)
    {
      title: 'FinTech Startup',
      category: 'Technologia & SaaS',
      style: 'FUTURYZM & NEON',
      styleColor: 'text-purple-400 border-purple-400/30 bg-purple-400/10',
      image: '/project3.jpg', // Pamiętaj o wgraniu jakiegoś zdjęcia pod tą nazwą lub zmianie
      description: 'Nowoczesny landing page dla aplikacji finansowej. Ciemny motyw, gradienty i animacje podkreślające innowacyjność produktu.',
      link: 'https://example.com',
      // DANE DO PODGLĄDU:
      price: '2800 zł',
      deliveryTime: '7 Dni'
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Wybrane Realizacje
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Każdy projekt to inna historia i inny cel biznesowy. Zobacz, jak dopasowujemy styl do branży.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-brand-neon/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-neon/10"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gray-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="bg-brand-neon text-black font-bold py-3 px-6 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-white"
                  >
                    <Eye className="w-5 h-5" />
                    Podgląd
                  </button>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border border-white text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-white/10"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Otwórz
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-brand-neon text-xs font-bold tracking-wider uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-neon transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                {/* Style Tag */}
                <div className={`inline-block px-3 py-1 rounded-md text-xs font-bold mb-4 ${project.styleColor}`}>
                  {project.style}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DEMO VIEWER MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
          >
            <DemoViewer 
              projectUrl={selectedProject.link} 
              onClose={() => setSelectedProject(null)}
              // TU PRZEKAZUJEMY DANE DO NAGŁÓWKA:
              price={selectedProject.price}
              deliveryTime={selectedProject.deliveryTime}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
