import { ArrowRight, FileText } from 'lucide-react';

const Misti = () => {
  return (
    <main className="pt-[104px]">
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-tank-1.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">Misti Olio-Gasolio</h1>
            <p className="text-xl text-gray-200">
              Serbatoi combinati per diverse applicazioni
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Serbatoi Misti Olio-Gasolio
            </h2>

            <div className="bg-gray-50 p-8 rounded-2xl mb-8">
              <p className="text-gray-600 mb-4">
                SMA Serbatoi produce serbatoi misti progettati per contenere simultaneamente 
                olio idraulico e gasolio, offrendo una soluzione compatta e funzionale per 
                veicoli e macchinari che richiedono entrambi i fluidi.
              </p>
              <p className="text-gray-600">
                I serbatoi misti sono costruiti con materiali di alta qualità e progettati 
                per garantire la completa separazione dei due fluidi, prevenendo qualsiasi 
                rischio di contaminazione.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
              <p className="text-amber-900">
                Per maggiori informazioni sui serbatoi misti olio-gasolio e per richiedere 
                un preventivo personalizzato, contatta il nostro ufficio tecnico.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contatti.aspx"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white font-medium rounded-lg hover:bg-[#991b1b] transition-all"
              >
                <ArrowRight className="w-5 h-5" />
                Richiedi Preventivo
              </a>
              <a
                href="https://design.smaserbatoi.it/index-IT.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all"
              >
                <FileText className="w-5 h-5" />
                Configuratore Serbatoi
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Misti;
