import { Package, Download, Recycle } from 'lucide-react';
import { useI18n } from '../i18n';

const Imballaggi = () => {
  const { language } = useI18n();
  const t = {
    it: { title: 'Imballaggi', sub: 'Sostenibilita e qualita nei materiali di imballaggio', h: 'Imballaggio destinato al canale commerciale e industriale', b: 'Scarica Documentazione Completa' },
    en: { title: 'Packaging', sub: 'Sustainability and quality in packaging materials', h: 'Packaging for commercial and industrial channel', b: 'Download Full Documentation' },
    de: { title: 'Verpackung', sub: 'Nachhaltigkeit und Qualitaet bei Verpackungsmaterialien', h: 'Verpackung fuer Handel und Industrie', b: 'Vollstaendige Dokumentation herunterladen' },
  }[language];

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
      <section className="relative h-[360px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/original-site/download/immagini/fn000257.jpg)' }}>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-gray-200">{t.sub}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-[#b91c1c] rounded-lg flex items-center justify-center"><Recycle className="w-7 h-7 text-white" /></div>
              <h2 className="text-2xl font-bold text-gray-900">{t.h}</h2>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="bg-gray-100 p-6 border-b border-gray-200 flex items-center gap-3">
              <Package className="w-6 h-6 text-[#b91c1c]" />
              <h3 className="text-xl font-bold text-gray-900">Materiali Imballaggio</h3>
            </div>
            <div className="p-6 grid md:grid-cols-2 gap-4">
              {packagingMaterials.map((m, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">{m.description}</span>
                  <span className="px-3 py-1 bg-[#b91c1c]/10 text-[#b91c1c] text-sm font-mono rounded">{m.code}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <a href="/original-site/pdf/materiali-imballaggi.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[#b91c1c] text-white font-semibold rounded-lg hover:bg-[#991b1b] transition-all">
              <Download className="w-5 h-5" />{t.b}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Imballaggi;
