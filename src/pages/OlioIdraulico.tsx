import { ArrowRight, FileText } from 'lucide-react';
import { useI18n } from '../i18n';

const OlioIdraulico = () => {
  const { language } = useI18n();

  const t = {
    it: { title: 'Olio Idraulico', sub: 'Serbatoi standard e custom per sistemi idraulici', heading: 'Tabella Serbatoi Standard', docs: 'Documentazione PDF', quote: 'Richiedi Preventivo', catalog: 'Catalogo Completo' },
    en: { title: 'Hydraulic Oil', sub: 'Standard and custom tanks for hydraulic systems', heading: 'Standard Tank Table', docs: 'PDF Documents', quote: 'Request Quote', catalog: 'Full Catalog' },
    de: { title: 'Hydraulikoel', sub: 'Standard- und Sonderbehaelter fuer Hydrauliksysteme', heading: 'Standardbehaelter Tabelle', docs: 'PDF Dokumente', quote: 'Angebot anfordern', catalog: 'Vollstaendiger Katalog' },
  }[language];

  const rows = [
    { liters: '20', dim: '160x410x420', iron: '7.731', ironPdf: '/original-site/pdf/olio/7731.pdf', alum: '-' },
    { liters: '30', dim: '280x310x370', iron: '7.732', ironPdf: '/original-site/pdf/olio/7732.pdf', alum: '-' },
    { liters: '40', dim: '300x410x420', iron: '7.733', ironPdf: '/original-site/pdf/olio/7733.pdf', alum: '-' },
    { liters: '60', dim: '310x380x570', iron: '7.736', ironPdf: '/original-site/pdf/olio/7736.pdf', alum: '-' },
    { liters: '60', dim: '310x380x575', iron: '7.737', ironPdf: '/original-site/pdf/olio/7737.pdf', alum: '-' },
    { liters: '100', dim: '290x470x780', iron: '7.741', ironPdf: '/original-site/pdf/olio/7741.pdf', alum: '-' },
    { liters: '100', dim: '580x320x600', iron: '7.742', ironPdf: '/original-site/pdf/olio/7742.pdf', alum: '-' },
    { liters: '100', dim: '520x280x730', iron: '7.743', ironPdf: '/original-site/pdf/olio/7743.pdf', alum: '-' },
    { liters: '130', dim: '570x350x730', iron: '7.745', ironPdf: '/original-site/pdf/olio/7745.pdf', alum: '-' },
    { liters: '135', dim: '636x706x350', iron: '7.748 CX', ironPdf: '/original-site/pdf/olio/7748CX.pdf', alum: '7.848 CX', alumPdf: '/original-site/pdf/olio/7848CX.pdf' },
    { liters: '135', dim: '720x610x350', iron: '7.749 Z5', ironPdf: '/original-site/pdf/olio/7749Z5.pdf', alum: '7.849 S5' },
    { liters: '150', dim: '636x706x400', iron: '7.756 CX', ironPdf: '/original-site/pdf/olio/7756CX.pdf', alum: '7.856 CX', alumPdf: '/original-site/pdf/olio/7856CX.pdf' },
    { liters: '160', dim: '610x610x500', iron: '7.758 KW', ironPdf: '/original-site/pdf/olio/7758KW.pdf', alum: '7.851 ZW', alumPdf: '/original-site/pdf/olio/7851ZW.pdf' },
    { liters: '175', dim: '636x706x450', iron: '7.761 CX', ironPdf: '/original-site/pdf/olio/7761CX.pdf', alum: '7.861 CX', alumPdf: '/original-site/pdf/olio/7861CX.pdf' },
    { liters: '200', dim: '720x610x500', iron: '7.753 BC', alum: '7.853 WC', alumPdf: '/original-site/pdf/olio/7853WC.pdf' },
    { liters: '200', dim: '636x706x500', iron: '7.765 CX', ironPdf: '/original-site/pdf/olio/7765CX.pdf', alum: '7.865 CX', alumPdf: '/original-site/pdf/olio/7865CX.pdf' },
    { liters: '250', dim: '636x706x630', iron: '7.759 CX', ironPdf: '/original-site/pdf/olio/7759CX.pdf', alum: '7.859 CX', alumPdf: '/original-site/pdf/olio/7859CX.pdf' },
  ];

  const docs = [
    { label: 'Clean Tank', href: '/original-site/download/allegati/fn000040.pdf' },
    { label: 'Olio Idraulico', href: '/original-site/download/allegati/fn000084.pdf' },
    { label: 'Easy Tank', href: '/original-site/download/allegati/fn000086.pdf' },
  ];

  return (
    <main className="pt-[104px]">
      <section className="relative h-[360px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/original-site/download/immagini/fn000167.jpg)' }}>
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
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.heading}</h2>
          <div className="overflow-x-auto border border-gray-200 rounded-xl">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3">LITRI</th>
                  <th className="text-left p-3">HxPxL mm</th>
                  <th className="text-left p-3">cod. FERRO</th>
                  <th className="text-left p-3">cod. ALLUM.</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className="border-t border-gray-100">
                    <td className="p-3">{r.liters}</td>
                    <td className="p-3">{r.dim}</td>
                    <td className="p-3">
                      {r.ironPdf ? <a className="text-[#b91c1c] underline" href={r.ironPdf} target="_blank" rel="noopener noreferrer">{r.iron}</a> : r.iron}
                    </td>
                    <td className="p-3">
                      {r.alumPdf ? <a className="text-[#b91c1c] underline" href={r.alumPdf} target="_blank" rel="noopener noreferrer">{r.alum}</a> : r.alum}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">{t.docs}</h3>
          <div className="grid md:grid-cols-3 gap-3 mb-10">
            {docs.map((d) => (
              <a key={d.href} href={d.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                <FileText className="w-4 h-4 text-[#b91c1c]" />
                {d.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contatti.aspx" className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white rounded-lg">
              <ArrowRight className="w-5 h-5" />
              {t.quote}
            </a>
            <a href="/original-site/elenco-prodotti.htm" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg">
              <FileText className="w-5 h-5" />
              {t.catalog}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OlioIdraulico;
