import { X, ArrowRight, Smartphone, Monitor } from 'lucide-react';
import { useState } from 'react';

export default function DemoViewer({ projectUrl, onClose }: { projectUrl: string, onClose: () => void }) {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="fixed inset-0 z-[100] bg-gray-950 flex flex-col h-screen w-screen">
      
      {/* 1. TOP BAR */}
      <div className="h-16 bg-brand-navy border-b border-gray-700 flex items-center justify-between px-4 md:px-8 shadow-xl relative z-10 flex-shrink-0">
        
        {/* Lewa: Powrót */}
        <button 
          onClick={onClose}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
        >
          <X className="w-5 h-5" />
          <span className="hidden md:inline">Zamknij podgląd</span>
        </button>

        {/* Środek: Przełącznik (Ukrywamy go na małych telefonach, bo tam zawsze jest mobile) */}
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

        {/* Prawa: CTA */}
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-gray-300 text-sm">Podoba Ci się ten projekt?</span>
          <button 
            onClick={() => {
              onClose();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-brand-neon to-brand-blue text-black font-bold text-sm px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-brand-neon/50 transition-all flex items-center gap-2"
          >
            Chcę taką stronę
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. OBSZAR PODGLĄDU */}
      {/* Na mobile usuwamy padding (p-0), na desktopie zostawiamy (md:p-8) */}
      <div className="flex-1 bg-gray-900 w-full flex items-center justify-center overflow-hidden p-0 md:p-8 relative">
        
        {/* KONTENER URZĄDZENIA */}
        {/* ZMIANY: 
            Dodałem prefix 'md:' do wszystkich stylów "iPhone'owych".
            Bez prefixu (czyli na mobile) ustawiamy w-full h-full i border-0.
        */}
        <div className={`transition-all duration-500 ease-in-out relative shadow-2xl mx-auto flex flex-col bg-white ${
            device === 'mobile' 
                ? 'w-full h-full border-0 rounded-none md:w-[430px] md:h-[932px] md:max-h-[90vh] md:rounded-[3rem] md:border-[12px] md:border-gray-800 md:ring-4 md:ring-black/50'
                : 'w-full h-full rounded-none md:rounded-lg border-0 md:border border-gray-700'
        }`}>
            
            {/* Notch - tylko na mobile-VIEW w trybie DESKTOP (ukryty na prawdziwym telefonie) */}
            {device === 'mobile' && (
                 <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-[30px] w-[120px] bg-gray-800 rounded-b-2xl z-20 pointer-events-none border-b border-x border-gray-900/50"></div>
            )}

            {/* MASKOWNICA */}
            <div className={`w-full h-full overflow-hidden bg-white ${device === 'mobile' ? 'rounded-none md:rounded-[2.2rem]' : 'rounded-none md:rounded-lg'}`}>
              
              <iframe 
                src={projectUrl} 
                title="Podgląd strony"
                /* ZMIANA: Trik z +20px (ukrywanie scrolla) stosujemy tylko na Desktopie (md:).
                   Na prawdziwym telefonie chcemy natywny scroll (w-full).
                */
                className={`bg-white border-0 ${
                    device === 'mobile' 
                    ? 'w-full h-full md:w-[calc(100%+20px)] md:h-[calc(100%+20px)]' 
                    : 'w-full h-full'
                }`}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />

            </div>
            
            {/* Odbicie światła - tylko na desktopie */}
            {device === 'mobile' && (
                <div className="hidden md:block absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10 rounded-[2.5rem]"></div>
            )}
        </div>
      </div>
    </div>
  );
}
