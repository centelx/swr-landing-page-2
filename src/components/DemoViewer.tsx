import { ArrowRight, Smartphone, Monitor, Clock, Banknote, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface DemoViewerProps {
  projectUrl: string;
  onClose: () => void;
  price?: string;       
  deliveryTime?: string; 
}

export default function DemoViewer({ 
  projectUrl, 
  onClose, 
  price = "Wycena",      
  deliveryTime = "7 Dni" 
}: DemoViewerProps) {
    
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  const handleCtaClick = () => {
    onClose();
    setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-gray-950 flex flex-col h-screen w-screen">
      
      {/* 1. TOP BAR */}
      <div className="h-16 bg-brand-navy border-b border-gray-700 flex items-center justify-between px-4 md:px-8 shadow-xl relative z-10 flex-shrink-0">
        
        {/* LEWA STRONA: Powrót */}
        <button 
          onClick={onClose}
          className="group flex items-center gap-2 text-white hover:text-brand-neon transition-colors font-medium"
        >
          <div className="p-2 bg-white/10 rounded-full group-hover:bg-brand-neon/20 transition-all">
             <ChevronLeft className="w-5 h-5" />
          </div>
          
          <span className="hidden md:inline text-sm font-bold tracking-wide">
            Wróć
          </span>
        </button>

        {/* ŚRODEK: Przełącznik (Ukryty na małych telefonach) */}
        <div className="hidden md:flex bg-gray-800 rounded-lg p-1 border border-gray-700">
          <button 
            onClick={() => setDevice('desktop')}
            className={`p-2 rounded-md transition-all flex items-center gap-2 ${device === 'desktop' ? 'bg-brand-neon text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
          >
            <Monitor className="w-4 h-4" />
            <span className="text-xs font-bold">Desktop</span>
          </button>
          <button 
            onClick={() => setDevice('mobile')}
            className={`p-2 rounded-md transition-all flex items-center gap-2 ${device === 'mobile' ? 'bg-brand-neon text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
          >
            <Smartphone className="w-4 h-4" />
            <span className="text-xs font-bold">Mobile</span>
          </button>
        </div>

        {/* PRAWA STRONA */}
        <div className="flex items-center">
            
            {/* A) WERSJA MOBILE: POKAZUJEMY CENĘ I CZAS */}
            <div className="md:hidden flex items-center gap-4">
                <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 text-gray-400 text-[10px] uppercase tracking-wider font-bold">
                        <Banknote className="w-3 h-3" />
                        <span>Koszt</span>
                    </div>
                    <span className="text-brand-neon font-bold text-sm leading-none">{price}</span>
                </div>
                <div className="w-px h-6 bg-gray-700"></div>
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1 text-gray-400 text-[10px] uppercase tracking-wider font-bold">
                        <Clock className="w-3 h-3" />
                        <span>Czas</span>
                    </div>
                    <span className="text-white font-bold text-sm leading-none">{deliveryTime}</span>
                </div>
            </div>

            {/* B) WERSJA DESKTOP: NEONOWY PRZYCISK */}
            <div className="hidden md:flex items-center gap-4">
                <span className="text-gray-300 text-sm">Podoba Ci się ten projekt?</span>
                <button 
                    onClick={handleCtaClick}
                    className="bg-brand-neon text-black font-bold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-brand-neon/30 border-2 border-brand-neon hover:bg-white hover:border-white hover:shadow-white/50 transition-all flex items-center gap-2"
                >
                    Chcę taką stronę
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>

        </div>
      </div>

      {/* 2. OBSZAR PODGLĄDU */}
      <div className="flex-1 bg-gray-900 w-full flex items-center justify-center overflow-hidden p-0 md:p-8 relative">
        <div className={`transition-all duration-500 ease-in-out relative shadow-2xl mx-auto flex flex-col bg-white ${
            device === 'mobile' 
                ? 'w-full h-full border-0 rounded-none md:w-[430px] md:h-[932px] md:max-h-[90vh] md:rounded-[3rem] md:border-[12px] md:border-gray-800 md:ring-4 md:ring-black/50'
                : 'w-full h-full rounded-none md:rounded-lg border-0 md:border border-gray-700'
        }`}>
            {device === 'mobile' && (
                 <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-[30px] w-[120px] bg-gray-800 rounded-b-2xl z-20 pointer-events-none border-b border-x border-gray-900/50"></div>
            )}
            <div className={`w-full h-full overflow-hidden bg-white ${device === 'mobile' ? 'rounded-none md:rounded-[2.2rem]' : 'rounded-none md:rounded-lg'}`}>
              <iframe 
                src={projectUrl} 
                title="Podgląd strony"
                className={`bg-white border-0 ${
                    device === 'mobile' 
                    ? 'w-full h-full md:w-[calc(100%+20px)] md:h-[calc(100%+20px)]' 
                    : 'w-full h-full'
                }`}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            {device === 'mobile' && (
                <div className="hidden md:block absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10 rounded-[2.5rem]"></div>
            )}
        </div>
      </div>

      {/* 3. MOBILE CTA */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] w-full px-4">
        <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            onClick={handleCtaClick}
            className="w-full bg-brand-neon text-black font-bold text-lg py-4 rounded-full shadow-2xl shadow-brand-neon/30 flex items-center justify-center gap-2 border-2 border-brand-neon"
        >
            <ArrowRight className="w-5 h-5" />
            <span>Chcę taką stronę</span>
        </motion.button>
      </div>

    </div>
  );
}
