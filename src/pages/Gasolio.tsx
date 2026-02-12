import { Fuel, ArrowRight, FileText } from 'lucide-react';

const Gasolio = () => {
  return (
    <main className="pt-[104px]">
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/configurator-truck.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">Gasolio</h1>
            <p className="text-xl text-gray-200">
              Serbatoi per carburante diesel e gasolio
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-[#b91c1c] rounded-full flex items-center justify-center mx-auto mb-6">
                <Fuel className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Serbatoi per Gasolio
              </h2>
              <p className="text-gray-600 text-lg">
                Soluzioni complete per il settore automotive e industriale
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl mb-8">
              <p className="text-gray-600 mb-4">
                SMA Serbatoi produce una vasta gamma di serbatoi per gasolio destinati 
                a diversi settori applicativi, dal trasporto pesante all'agricoltura, 
                dalle costruzioni alle applicazioni industriali.
              </p>
              <p className="text-gray-600">
                Tutti i serbatoi sono progettati e costruiti in conformità alle normative 
                vigenti e possono essere omologati secondo le specifiche richieste.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white border border-gray-200 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Serbatoi Standard
                </h3>
                <p className="text-gray-600">
                  Ampia disponibilità a magazzino di serbatoi standard per le principali 
                  applicazioni veicolo.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Serbatoi su Disegno
                </h3>
                <p className="text-gray-600">
                  Progettazione e produzione di serbatoi custom secondo le specifiche 
                  del cliente.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
              <p className="text-amber-900">
                Per maggiori informazioni sulla gamma gasolio, consulta il configuratore 
                autocarri o contatta il nostro ufficio commerciale.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contatti.aspx"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white font-medium rounded-lg hover:bg-[#991b1b] transition-all"
              >
                <ArrowRight className="w-5 h-5" />
                Richiedi Informazioni
              </a>
              <a
                href="/original-site/elenco-prodotti.htm"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all"
              >
                <FileText className="w-5 h-5" />
                Catalogo
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gasolio;
