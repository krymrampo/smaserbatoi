import { Fuel, ArrowRight, FileText } from 'lucide-react';
import { useI18n } from '../i18n';

const Gasolio = () => {
  const { language } = useI18n();
  const t = {
    it: { title: 'Gasolio', sub: 'Serbatoi per carburante diesel e gasolio', heading: 'Documentazione Gasolio', p: 'Serbatoi conformi al regolamento ONU/ECE/34 con kit componenti dedicati.', quote: 'Richiedi Informazioni', brochure: 'Depliant serbatoi carburante', catalog: 'Catalogo Prodotti Standard' },
    en: { title: 'Diesel', sub: 'Diesel fuel tanks', heading: 'Diesel Documents', p: 'Tanks compliant with ONU/ECE/34 with dedicated installation kits.', quote: 'Request Information', brochure: 'Fuel tank brochure', catalog: 'Standard product catalog' },
    de: { title: 'Diesel', sub: 'Kraftstoffbehaelter Diesel', heading: 'Diesel Dokumente', p: 'Behaelter nach ONU/ECE/34 mit spezifischen Montagesaetzen.', quote: 'Information anfordern', brochure: 'Kraftstoffbehaelter Broschuere', catalog: 'Standard Produktkatalog' },
  }[language];

  return (
    <main className="pt-[104px]">
      <section className="relative h-[360px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/original-site/download/immagini/fn000155.jpg)' }}>
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
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-[#b91c1c] rounded-full flex items-center justify-center mx-auto mb-4">
              <Fuel className="w-10 h-10 text-white" />
            </div>
            <p className="text-gray-600">{t.p}</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.heading}</h2>
          <div className="grid md:grid-cols-2 gap-3 mb-10">
            <a href="/original-site/download/allegati/fn000088.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <FileText className="w-4 h-4 text-[#b91c1c]" />
              {t.brochure}
            </a>
            <a href="/original-site/download/allegati/fn000102.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <FileText className="w-4 h-4 text-[#b91c1c]" />
              {t.catalog}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contatti.aspx" className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white rounded-lg">
              <ArrowRight className="w-5 h-5" />
              {t.quote}
            </a>
            <a href="/original-site/elenco-prodotti.htm" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg">
              <FileText className="w-5 h-5" />
              Elenco prodotti
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gasolio;
