import { ArrowRight, FileText } from 'lucide-react';

const OlioIdraulico = () => {
  const smallTanks = [
    { liters: 20, dimensions: '160x410x420', codeIron: '7.731', codeAlum: '-' },
    { liters: 30, dimensions: '280x310x370', codeIron: '7.732', codeAlum: '-' },
    { liters: 40, dimensions: '300x410x420', codeIron: '7.733', codeAlum: '-' },
    { liters: 60, dimensions: '310x380x570', codeIron: '7.736', codeAlum: '-' },
    { liters: 60, dimensions: '310x380x575', codeIron: '7.737', codeAlum: '-' },
    { liters: 100, dimensions: '290x470x780', codeIron: '7.741', codeAlum: '-' },
    { liters: 100, dimensions: '580x320x600', codeIron: '7.742', codeAlum: '-' },
    { liters: 100, dimensions: '520x280x730', codeIron: '7.743', codeAlum: '-' },
    { liters: 130, dimensions: '570x350x730', codeIron: '7.745', codeAlum: '-' },
  ];

  const largeTanks = [
    { liters: 120, dimensions: '636x706x300', codeIron: '7.747 45', codeAlum: '7.847 CK' },
    { liters: 135, dimensions: '636x706x350', codeIron: '7.748 CX', codeAlum: '7.848 CX' },
    { liters: 135, dimensions: '720x610x350', codeIron: '7.749 Z5', codeAlum: '7.849 S5' },
    { liters: 140, dimensions: '720x720x300', codeIron: '7.777 47 *', codeAlum: '7.877 CZ *' },
    { liters: 150, dimensions: '636x706x400', codeIron: '7.756 CX', codeAlum: '7.856 CX' },
    { liters: 150, dimensions: '720x610x400', codeIron: '7.757 BE', codeAlum: '7.850 PE' },
    { liters: 160, dimensions: '610x610x500', codeIron: '7.758 KW', codeAlum: '7.851 ZW' },
    { liters: 175, dimensions: '636x706x450', codeIron: '7.761 CX', codeAlum: '7.861 CX' },
    { liters: 175, dimensions: '720x610x450', codeIron: '7.762 BE', codeAlum: '7.862 PE' },
    { liters: 200, dimensions: '720x610x500', codeIron: '7.753 BC', codeAlum: '7.853 WC' },
    { liters: 200, dimensions: '636x706x500', codeIron: '7.765 CX', codeAlum: '7.865 CX' },
    { liters: 250, dimensions: '636x706x630', codeIron: '7.759 CX', codeAlum: '7.859 CX' },
  ];

  return (
    <main className="pt-[104px]">
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-tank-3.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">Olio Idraulico</h1>
            <p className="text-xl text-gray-200">
              Serbatoi standard e custom per sistemi idraulici
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Serbatoi per Olio Idraulico
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                I serbatoi Standard <strong>SMA</strong> sono la garanzia di un prodotto 
                specificatamente studiato per utilizzo in campo idraulico, collaudato e 
                prodotto in grande serie, generalmente disponibile a magazzino.
              </p>
              <p>
                Qualora la gamma non rispondesse alle vostre esigenze, <strong>SMA</strong> è 
                in grado di costruire i serbatoi per olio idraulico su vostro disegno, 
                secondo standard costruttivi e di qualità superiori.
              </p>
            </div>
          </div>

          {/* Small Tanks Table */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Lamiera Lucida Verniciata e Alluminio - da 20 a 130 litri
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-200">Litri</th>
                    <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-200">HxPxL mm</th>
                    <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-200">Cod. Ferro</th>
                    <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-200">Cod. Allum.</th>
                  </tr>
                </thead>
                <tbody>
                  {smallTanks.map((tank, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4 text-gray-700">{tank.liters}</td>
                      <td className="p-4 text-gray-600">{tank.dimensions}</td>
                      <td className="p-4">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-mono rounded">
                          {tank.codeIron}
                        </span>
                      </td>
                      <td className="p-4">
                        {tank.codeAlum !== '-' ? (
                          <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-mono rounded">
                            {tank.codeAlum}
                          </span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Large Tanks Table */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Lamiera Lucida Verniciata e Alluminio - da 120 a 250 litri
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-200">Litri</th>
                    <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-200">HxPxL mm</th>
                    <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-200">Cod. Ferro</th>
                    <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-200">Cod. Allum.</th>
                  </tr>
                </thead>
                <tbody>
                  {largeTanks.map((tank, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4 text-gray-700">{tank.liters}</td>
                      <td className="p-4 text-gray-600">{tank.dimensions}</td>
                      <td className="p-4">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-mono rounded">
                          {tank.codeIron}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-mono rounded">
                          {tank.codeAlum}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              * Serbatoio monostaffa senza flangia per filtro ritorno
            </p>
          </div>

          {/* Note */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-12">
            <p className="text-amber-900">
              <strong>Nota:</strong> Ogni serbatoio ha la flangia per il filtro ritorno.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contatti.aspx"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white font-medium rounded-lg hover:bg-[#991b1b] transition-all"
            >
              <ArrowRight className="w-5 h-5" />
              Richiedi Preventivo
            </a>
            <a
              href="/original-site/elenco-prodotti.htm"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all"
            >
              <FileText className="w-5 h-5" />
              Catalogo Completo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OlioIdraulico;
