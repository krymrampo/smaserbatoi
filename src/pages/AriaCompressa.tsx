import { Check, ArrowRight, FileText } from 'lucide-react';

const AriaCompressa = () => {
  const advantages = [
    {
      title: 'Aumento del carico utile',
      description: 'La riduzione della tara del veicolo è garantita da un risparmio di peso superiore al 60%.',
    },
    {
      title: 'Impianto pneumatico più affidabile',
      description: 'L\'assenza di ruggine e di particelle ferrose garantisce maggior pulizia dell\'aria nel circuito pneumatico.',
    },
  ];

  const applications = [
    'Autocarri',
    'Rimorchi',
    'Autobus',
    'Macchine agricole',
    'Rotabili ferroviari',
    'Costruzioni navali',
    'Compressori',
    'Usi industriali vari',
  ];

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
            <h1 className="text-5xl font-bold mb-4">Aria Compressa</h1>
            <p className="text-xl text-gray-200">
              Serbatoi in lega leggera per impianti pneumatici
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Serbatoi per Aria Compressa
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  I serbatoi <strong>SMA</strong> per aria compressa di lega leggera, sono 
                  costruiti con procedimenti di saldatura qualificati su linee ad alta 
                  automazione e sono garantiti e collaudati singolarmente.
                </p>
              </div>

              {/* Advantages */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">Vantaggi</h3>
              <div className="space-y-6 mb-8">
                {advantages.map((adv, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#b91c1c] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{adv.title}</h4>
                      <p className="text-gray-600 text-sm">{adv.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Applications */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">Applicazioni</h3>
              <div className="grid grid-cols-2 gap-3">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#b91c1c] rounded-full" />
                    <span className="text-gray-700">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* CE Marking */}
              <div className="bg-red-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Omologati CE
                </h3>
                <p className="text-gray-600 mb-4">
                  Tutti i serbatoi SMA sono marcati CE in accordo alla direttiva 
                  <strong> 2014/29/UE</strong> e sono conformi alla norma <strong>EN286/2</strong>.
                </p>
              </div>

              {/* Wide Selection */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Vasta Scelta
                </h3>
                <p className="text-gray-600 mb-4">
                  SMA propone la più vasta gamma di serbatoi standard in lega leggera, 
                  nonché diverse possibilità di sistemi di fissaggio e accessori.
                </p>
                <p className="text-gray-600">
                  I serbatoi vengono forniti imballati per una sicura movimentazione 
                  e un pratico stoccaggio.
                </p>
              </div>

              {/* Custom Design */}
              <div className="bg-amber-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Serbatoi su Disegno
                </h3>
                <p className="text-gray-600 mb-4">
                  Qualora la gamma standard non risponda alle vostre esigenze, 
                  <strong> SMA</strong> è in grado di costruire i serbatoi per aria 
                  compressa su vostre specifiche.
                </p>
                <a
                  href="/contatti.aspx"
                  className="inline-flex items-center gap-2 text-[#b91c1c] font-medium hover:underline"
                >
                  Contattaci per maggiori informazioni
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Railway & Others */}
              <div className="bg-gray-900 text-white p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3">
                  Serbatoi Ferroviari e Altri Usi
                </h3>
                <p className="text-gray-300 mb-4">
                  I serbatoi SMA per aria compressa possono essere forniti con 
                  omologazione secondo la direttiva <strong>2014/29/UE</strong> o 
                  <strong> 2014/68/UE (PED)</strong> e conformi alle norme armonizzate 
                  <strong> EN286/1, EN286/4 e EN13445</strong>.
                </p>
                <p className="text-gray-400 text-sm">
                  SMA progetta e produce serbatoi di lega leggera secondo specifiche 
                  del cliente, sia dimensionali che di finitura superficiale e fissaggio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
    Scarica la documentazione
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Consulta la gamma standard, i cataloghi accessori e la documentazione tecnica 
            completa per i serbatoi ad aria compressa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/original-site/popup/standard-aria-scheda.htm"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white font-medium rounded-lg hover:bg-[#991b1b] transition-all"
            >
              <FileText className="w-5 h-5" />
              Gamma Standard
            </a>
            <a
              href="/original-site/popup/standard-aria-accessori.htm"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all"
            >
              <FileText className="w-5 h-5" />
              Gamma Accessori
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AriaCompressa;
