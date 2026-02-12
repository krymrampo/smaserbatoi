import { Package, Download, Recycle } from 'lucide-react';

const Imballaggi = () => {
  const packagingMaterials = [
    { code: 'FOR 50', description: 'Pallet' },
    { code: 'LDPE 4', description: 'Film plastico per palletizzazione' },
    { code: 'LDPE 4', description: 'Copertura pallet' },
    { code: 'LDPE 4', description: 'Polietilene' },
    { code: 'LDPE 4', description: 'Pluriball' },
    { code: 'PAP 20', description: 'Scatole e scatolini' },
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
            <h1 className="text-5xl font-bold mb-4">Imballaggi</h1>
            <p className="text-xl text-gray-200">
              Sostenibilità e qualità nei materiali di imballaggio
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#b91c1c] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Recycle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Imballaggio destinato al canale commerciale ed industriale
                  </h2>
                  <p className="text-gray-600">
                    Informazione per i clienti
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg text-gray-600 mb-12">
              <p className="mb-4">
                <strong>SMA Serbatoi</strong> si impegna nella ricerca delle migliori materie 
                prime per i propri imballi.
              </p>
              <p className="mb-6">
                Se ti è possibile cerca di <strong>riutilizzare gli imballaggi</strong> anziché smaltirli.
              </p>
            </div>

            {/* Legal Reference */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-12">
              <p className="text-amber-900">
                Sulla base delle <strong>"Linee Guida sull'etichettatura degli imballaggi 
                ai sensi dell'art. 219 comma 5 del D.lgs. 152/2006 e ss.mm"</strong> emesse 
                dal Ministero della Transizione Ecologica si riporta di seguito la codifica 
                alfa-numerica dei materiali di imballaggio utilizzati prevista della 
                decisione 97/129/CE.
              </p>
            </div>

            {/* Materials Table */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gray-100 p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <Package className="w-6 h-6 text-[#b91c1c]" />
                  <h3 className="text-xl font-bold text-gray-900">
                    I Materiali dei Nostri Imballaggi
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {packagingMaterials.map((material, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <span className="text-gray-700 font-medium">
                        {material.description}
                      </span>
                      <span className="px-3 py-1 bg-[#b91c1c]/10 text-[#b91c1c] text-sm font-mono rounded">
                        {material.code}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Download */}
            <div className="mt-12 text-center">
              <a
                href="/original-site/pdf/materiali-imballaggi.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#b91c1c] text-white font-semibold rounded-lg hover:bg-[#991b1b] transition-all"
              >
                <Download className="w-5 h-5" />
                Scarica Documentazione Completa
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Imballaggi;
