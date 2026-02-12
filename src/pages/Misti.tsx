import { ArrowRight, FileText } from 'lucide-react';
import { useI18n } from '../i18n';

const Misti = () => {
  const { language } = useI18n();
  const t = {
    it: { title: 'Misti Olio-Gasolio', sub: 'Serbatoi combinati', h: 'Serbatoi Misti Olio-Gasolio', p1: 'Soluzione compatta per contenere olio idraulico e gasolio.', p2: 'Separazione interna completa dei fluidi.', cta1: 'Richiedi Preventivo', cta2: 'Configuratore Serbatoi' },
    en: { title: 'Mixed Oil-Diesel', sub: 'Combined tanks', h: 'Mixed Oil-Diesel Tanks', p1: 'Compact solution for hydraulic oil and diesel.', p2: 'Complete internal fluid separation.', cta1: 'Request Quote', cta2: 'Tank Configurator' },
    de: { title: 'Misch Oel-Diesel', sub: 'Kombinierte Behaelter', h: 'Mischbehaelter Oel-Diesel', p1: 'Kompakte Loesung fuer Hydraulikoel und Diesel.', p2: 'Vollstaendige interne Trennung der Fluide.', cta1: 'Angebot anfordern', cta2: 'Tank-Konfigurator' },
  }[language];

  return (
    <main className="pt-[104px]">
      <section className="relative h-[400px] overflow-hidden"><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-tank-1.jpg)' }}><div className="absolute inset-0 bg-black/60" /></div><div className="relative h-full container mx-auto px-4 flex items-center"><div className="max-w-2xl text-white"><h1 className="text-5xl font-bold mb-4">{t.title}</h1><p className="text-xl text-gray-200">{t.sub}</p></div></div></section>
      <section className="py-16 bg-white"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{t.h}</h2><div className="bg-gray-50 p-8 rounded-2xl mb-8"><p className="text-gray-600 mb-4">{t.p1}</p><p className="text-gray-600">{t.p2}</p></div><div className="flex flex-col sm:flex-row gap-4 justify-center"><a href="/contatti.aspx" className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white font-medium rounded-lg hover:bg-[#991b1b] transition-all"><ArrowRight className="w-5 h-5" />{t.cta1}</a><a href="https://design.smaserbatoi.it/index-IT.php" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all"><FileText className="w-5 h-5" />{t.cta2}</a></div></div></section>
    </main>
  );
};

export default Misti;
