import { Download } from 'lucide-react';
import { useI18n } from '../i18n';

const Tecnologia = () => {
  const { language } = useI18n();
  const t = {
    it: { title: 'Tecnologia', sub: 'Innovazione e know-how per serbatoi di alta qualita', eu: 'Progetti cofinanziati dal Fondo Europeo di Sviluppo Regionale' },
    en: { title: 'Technology', sub: 'Innovation and know-how for high-quality tanks', eu: 'Projects co-financed by the European Regional Development Fund' },
    de: { title: 'Technologie', sub: 'Innovation und Know-how fuer hochwertige Behaelter', eu: 'Vom Europaeischen Fonds kofinanzierte Projekte' },
  }[language];

  const projects = [
    { title: 'Fondo Europeo', image: '/original-site/images/fondo-europeo.jpg', pdf: '/original-site/fondo-europeo.pdf' },
    { title: 'Risparmio Energetico', image: '/original-site/images/risparmio-energetico.jpg', pdf: '/original-site/risparmio-energetico.pdf' },
    { title: 'Isola Saldatura', image: '/original-site/images/isola_saldatura.jpg', pdf: '/original-site/isola_saldatura.pdf' },
  ];

  return (
    <main className="pt-[104px]">
      <section className="relative h-[360px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/original-site/download/immagini/fn000141.jpg)' }}>
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
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gray-50 rounded-xl p-6 mb-10">
            <p className="text-gray-700">SMA utilizza progettazione CAD 2D/3D, produzione automatizzata e processi di saldatura certificati con controlli continui.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.eu}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <img src={p.image} alt={p.title} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">{p.title}</h3>
                  <a href={p.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#b91c1c] hover:underline">
                    <Download className="w-4 h-4" />Download PDF
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Tecnologia;
