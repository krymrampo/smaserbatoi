import { Check, ArrowRight, FileText, Wrench } from 'lucide-react';

const Carpenteria = () => {
  const features = [
    {
      title: 'Spessori da 2,0 a 5,0 mm',
      description: 'Costruiti in conformità alle normative vigenti',
    },
    {
      title: 'Collaudo al 100%',
      description: 'Prova di tenuta e garanzia singola su ogni serbatoio',
    },
    {
      title: 'Pulizia interna',
      description: 'Puliti ed oliati internamente al termine della produzione',
    },
    {
      title: 'Standard ISO 4406',
      description: 'Soddisfiamo gli standard di pulizia stabiliti dalle norme',
    },
  ];

  const components = [
    'Tappi',
    'Curve',
    'Flange',
    'Raccordi',
    'Piastre',
    'Accessori vari',
  ];

  return (
    <main className="pt-[104px]">
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/carpentry-tank.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">Carpenteria</h1>
            <p className="text-xl text-gray-200">
              Serbatoi custom su disegno e specifiche cliente
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
                Serbatoi di Carpenteria
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p className="mb-4">
                  I serbatoi di Carpenteria <strong>SMA</strong> sono la sintesi di un'esperienza 
                  nel settore che unisce progettazione e Know How in costante miglioramento nel tempo.
                </p>
                <p>
                  I serbatoi sono costruiti con spessori da <strong>2,0 a 5,0 mm</strong>, in 
                  conformità alle normative vigenti, collaudati al 100% con prova di tenuta e 
                  garantiti singolarmente.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#b91c1c] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Flussaggio */}
              <div className="bg-gray-50 p-6 rounded-2xl mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Sistema di Flussaggio Interno
                </h3>
                <p className="text-gray-600 mb-4">
                  Al termine del processo di produzione, tutti i serbatoi vengono puliti 
                  ed oliati internamente.
                </p>
                <p className="text-gray-600">
                  Grazie ad un efficace sistema di <strong>flussaggio interno</strong>, nonchè 
                  al supporto di un proprio laboratorio analisi, SMA è in grado di soddisfare 
                  gli standard di pulizia stabiliti dalle norme <strong>ISO 4406</strong>.
                </p>
              </div>

              {/* Components */}
              <div className="bg-amber-50 p-6 rounded-2xl mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-[#b91c1c]" />
                  Componenti Disponibili
                </h3>
                <p className="text-gray-600 mb-4">
                  Le varie tipologie di serbatoi possono essere completate con diversi 
                  componenti a seconda delle specifiche richieste del cliente:
                </p>
                <div className="flex flex-wrap gap-2">
                  {components.map((comp, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-full"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Premontaggio */}
              <div className="bg-gray-900 text-white p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">
                  Reparto di Premontaggio
                </h3>
                <p className="text-gray-300">
                  SMA dispone inoltre di un reparto di premontaggio capace di fornire 
                  direttamente alle linee di assemblaggio delle aziende clienti, un prodotto 
                  finito, pronto per essere montato e in grado di soddisfare gli standard 
                  qualitativi e le specifiche dei più importanti costruttori europei di 
                  macchine e attrezzature industriali.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contatti.aspx"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white font-medium rounded-lg hover:bg-[#991b1b] transition-all"
            >
              <ArrowRight className="w-5 h-5" />
              Richiedi Preventivo
            </a>
            <a
              href="/download/allegati/fn000106.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all"
            >
              <FileText className="w-5 h-5" />
              Scarica Depliant
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Carpenteria;
