import { ArrowRight, FileText } from 'lucide-react';
import { useI18n } from '../i18n';

const Acqua = () => {
  const { language } = useI18n();
  const t = {
    it: { title: 'Acqua', sub: 'Serbatoi per applicazioni industriali e civili', heading: 'Tabella Serbatoi Acqua', p: 'Serbatoi in acciaio inox e alluminio, collaudati al 100%.', quote: 'Richiedi Informazioni', catalog: 'Catalogo e Listino Prezzi' },
    en: { title: 'Water', sub: 'Tanks for industrial and civil applications', heading: 'Water Tank Table', p: 'Stainless steel and aluminum tanks, 100% tested.', quote: 'Request Information', catalog: 'Catalog and Price List' },
    de: { title: 'Wasser', sub: 'Behaelter fuer Industrie- und zivile Anwendungen', heading: 'Wasserbehaelter Tabelle', p: 'Behaelter aus Edelstahl und Aluminium, 100% geprueft.', quote: 'Information anfordern', catalog: 'Katalog und Preisliste' },
  }[language];

  const rows = [
    { liters: 30, dim: '395x170x500', code: '3.032', pdf: '/original-site/pdf/3032.pdf' },
    { liters: 50, dim: '390x240x590', code: '3.054', pdf: '/original-site/pdf/3054.pdf' },
  ];

  return (
    <main className="pt-[104px]">
      <section className="relative h-[360px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/original-site/download/immagini/fn000186.jpg)' }}>
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
          <p className="text-gray-600 mb-8">{t.p}</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.heading}</h2>
          <div className="overflow-x-auto border border-gray-200 rounded-xl">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3">LITRI</th>
                  <th className="text-left p-3">HxPxL mm</th>
                  <th className="text-left p-3">cod. INOX</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.code} className="border-t border-gray-100">
                    <td className="p-3">{r.liters}</td>
                    <td className="p-3">{r.dim}</td>
                    <td className="p-3"><a href={r.pdf} target="_blank" rel="noopener noreferrer" className="text-[#b91c1c] underline">{r.code}</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href="/contatti.aspx" className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white rounded-lg">
              <ArrowRight className="w-5 h-5" />
              {t.quote}
            </a>
            <a href="/original-site/download/allegati/fn000104.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg">
              <FileText className="w-5 h-5" />
              {t.catalog}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Acqua;
