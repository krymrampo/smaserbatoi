import { Award, FileCheck, Download } from 'lucide-react';

const Qualita = () => {
  const certifications = [
    {
      product: 'Serbatoi semplici in pressione per veicoli stradali',
      directive: 'Direttiva 2014/29/UE',
      norm: 'EN286/2',
      issuer: 'TÜV SÜD',
    },
    {
      product: 'Serbatoi semplici in pressione per veicoli ferroviari',
      directive: 'Direttiva 2014/29/UE',
      norm: 'EN286/4',
      issuer: 'I.C.E.P.I.',
    },
    {
      product: 'Serbatoi semplici in pressione generici',
      directive: 'Direttiva 2014/29/UE',
      norm: 'EN286/1',
      issuer: 'I.C.E.P.I.',
    },
    {
      product: 'Serbatoi contenenti aria e acqua in pressione',
      directive: 'Direttiva 2014/68/UE',
      norm: 'EN 13445',
      issuer: 'I.C.E.P.I.',
    },
    {
      product: 'Serbatoi per carburante per imbarcazioni da diporto',
      directive: 'Direttiva 2013/53/UE',
      norm: 'UNI EN ISO 10088:2013 e UNI EN ISO 21487:2016',
      issuer: 'RINA',
    },
    {
      product: 'Serbatoi per carburante per veicoli stradali',
      directive: 'Regolamento ONUECE 34',
      norm: '-',
      issuer: 'Ministero dei Trasporti',
    },
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
            <h1 className="text-5xl font-bold mb-4">Qualità e Omologazioni</h1>
            <p className="text-xl text-gray-200">
              The quality of made in Italy
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - ISO Certificate */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-2xl sticky top-32">
                <div className="w-16 h-16 bg-[#b91c1c] rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Sistema di Gestione Qualità
                </h3>
                <p className="text-gray-600 mb-6">
                  SMA Serbatoi S.p.A. si è dotata di un Sistema di Gestione Qualità 
                  certificato <strong>ISO 9001:2015</strong>.
                </p>
                <a
                  href="/original-site/iso9001.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white font-medium rounded-lg hover:bg-[#991b1b] transition-all"
                >
                  <Download className="w-5 h-5" />
                  Scarica Certificato
                </a>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg text-gray-600 mb-12">
                <p>
                  L'elevata specializzazione e gli investimenti in innovazione dei processi 
                  garantiscono un prodotto di alta qualità. L'attenzione alle esigenze del 
                  cliente si esprime anche attraverso l'attuazione di un programma di 
                  <strong> Controllo Qualità</strong> su ogni fase della progettazione e della produzione.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FileCheck className="w-7 h-7 text-[#b91c1c]" />
                Conformità e Omologazioni
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-200">
                        Tipologia di Prodotto
                      </th>
                      <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-200">
                        Legislazione di Riferimento
                      </th>
                      <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-200">
                        Norme Tecniche
                      </th>
                      <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-200">
                        Omologazione
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {certifications.map((cert, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 text-gray-700">{cert.product}</td>
                        <td className="p-4 text-gray-600 text-sm">{cert.directive}</td>
                        <td className="p-4 text-gray-600 text-sm font-medium">{cert.norm}</td>
                        <td className="p-4">
                          <span className="inline-flex items-center px-3 py-1 bg-[#b91c1c]/10 text-[#b91c1c] text-sm font-medium rounded-full">
                            {cert.issuer}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
                <h3 className="text-lg font-bold text-amber-900 mb-2">
                  Tutti i prodotti SMA sono marcati CE
                </h3>
                <p className="text-amber-800">
                  In accordo alle direttive europee applicabili e conformi alle norme armonizzate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Qualita;
