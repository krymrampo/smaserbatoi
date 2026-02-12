import { Check, ArrowRight, FileText } from 'lucide-react';
import { useI18n } from '../i18n';

const AriaCompressa = () => {
  const { language } = useI18n();
  const t = {
    it: { title: 'Aria Compressa', sub: 'Serbatoi in lega leggera per impianti pneumatici', heading: 'Documentazione Aria Compressa', q: 'Richiedi Informazioni' },
    en: { title: 'Compressed Air', sub: 'Light alloy tanks for pneumatic systems', heading: 'Compressed Air Documents', q: 'Request Information' },
    de: { title: 'Druckluft', sub: 'Leichtmetallbehaelter fuer pneumatische Anlagen', heading: 'Druckluft Dokumente', q: 'Information anfordern' },
  }[language];

  const docs = [
    { label: 'Gamma Standard', href: '/original-site/popup/standard-aria-scheda.htm' },
    { label: 'Gamma Accessori', href: '/original-site/popup/standard-aria-accessori.htm' },
    { label: 'Tecnologia', href: '/original-site/pdf/aria/tecnologia.pdf' },
    { label: 'Area di specializzazione SMA', href: '/original-site/popup/standard-aria-grafico.htm' },
    { label: 'Magazzino Pallet', href: '/original-site/pdf/aria/magazzino-pallet.pdf' },
    { label: 'Depliant Aria Compressa', href: '/original-site/download/allegati/fn000083.pdf' },
  ];

  return (
    <main className="pt-[104px]">
      <section className="relative h-[360px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/original-site/download/immagini/fn000231.jpg)' }}>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.heading}</h2>
          <div className="grid md:grid-cols-2 gap-3 mb-10">
            {docs.map((d) => (
              <a key={d.href} href={d.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <FileText className="w-4 h-4 text-[#b91c1c]" />
                {d.label}
              </a>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Vantaggi</h3>
              <div className="space-y-2 text-gray-700">
                <p className="flex gap-2"><Check className="w-4 h-4 mt-1 text-[#b91c1c]" />Riduzione peso oltre 60%</p>
                <p className="flex gap-2"><Check className="w-4 h-4 mt-1 text-[#b91c1c]" />Maggiore affidabilita del circuito pneumatico</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Omologazioni</h3>
              <p className="text-gray-700">Direttive 2014/29/UE e 2014/68/UE (PED), norme EN286/1 EN286/2 EN286/4 EN13445.</p>
            </div>
          </div>

          <div className="text-center">
            <a href="/contatti.aspx" className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white rounded-lg">
              <ArrowRight className="w-5 h-5" />
              {t.q}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AriaCompressa;
