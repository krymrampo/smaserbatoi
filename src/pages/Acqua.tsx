import { Check, ArrowRight, FileText, Droplets } from 'lucide-react';

const Acqua = () => {
  const applications = [
    'Betoniere',
    'Imbarcazioni',
    'Autocarri',
    'Vaschette acqua per raffreddamento',
    'Serbatoi abbeveraggio animali',
    'Serbatoi per additivi',
    'Liquidi vari',
  ];

  const tanks = [
    { liters: 30, dimensions: '395x170x500', code: '3.032' },
    { liters: 50, dimensions: '390x240x590', code: '3.054' },
  ];

  return (
    <main className="pt-[104px]">
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-tank-2.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">Acqua</h1>
            <p className="text-xl text-gray-200">
              Serbatoi per applicazioni industriali e civili
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
                Serbatoi Acqua
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p className="mb-4">
                  <strong>SMA</strong> produce serbatoi acqua per differenti settori industriali. 
                  I serbatoi possono contenere liquidi in pressione o meno.
                </p>
                <p className="mb-4">
                  Sono costruiti nei materiali di <strong>acciaio inossidabile</strong> e{' '}
                  <strong>lega di alluminio</strong> con spessori da 1,5mm a 6,0 mm, in 
                  conformità alle normative vigenti e collaudati al 100% con prova di 
                  tenuta e garantiti singolarmente.
                </p>
                <p>
                  I serbatoi possono essere completati con diversi componenti a seconda 
                  delle richieste del cliente.
                </p>
              </div>

              {/* Applications */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Droplets className="w-6 h-6 text-[#b91c1c]" />
                  Applicazioni
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {applications.map((app, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#b91c1c]" />
                      <span className="text-gray-700">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="bg-gray-50 p-6 rounded-2xl mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Qualità e Standard
                </h3>
                <p className="text-gray-600 mb-4">
                  SMA è in grado di soddisfare standard qualitativi e specifiche di 
                  importanti costruttori europei di macchine e attrezzature industriali 
                  grazie alla sua costante ricerca e miglioramento nella produzione.
                </p>
              </div>

              {/* Tanks Table */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <div className="bg-gray-100 p-4 border-b border-gray-200">
                  <h3 className="font-bold text-gray-900">Serbatoi Acqua - Gamma Standard</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-4 font-bold text-gray-900">Litri</th>
                        <th className="text-left p-4 font-bold text-gray-900">HxPxL mm</th>
                        <th className="text-left p-4 font-bold text-gray-900">Cod. INOX</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tanks.map((tank, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="p-4 text-gray-700">{tank.liters}</td>
                          <td className="p-4 text-gray-600">{tank.dimensions}</td>
                          <td className="p-4">
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-mono rounded">
                              {tank.code}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Per gamme complete e listini prezzi, contattaci direttamente.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contatti.aspx"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white font-medium rounded-lg hover:bg-[#991b1b] transition-all"
            >
              <ArrowRight className="w-5 h-5" />
              Richiedi Informazioni
            </a>
            <a
              href="/original-site/pdf/3032.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all"
            >
              <FileText className="w-5 h-5" />
              Catalogo e Listino
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Acqua;
