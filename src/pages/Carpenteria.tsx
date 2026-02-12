import { Check, ArrowRight, FileText, Wrench } from 'lucide-react';
import { useI18n } from '../i18n';

const Carpenteria = () => {
  const { language } = useI18n();
  const t = {
    it: { title: 'Carpenteria', sub: 'Serbatoi custom su disegno e specifiche cliente', h: 'Serbatoi di Carpenteria', p1: 'Sintesi di esperienza, progettazione e know-how.', p2: 'Spessori 2,0-5,0 mm, collaudo 100%.', flush: 'Sistema di Flussaggio Interno', comp: 'Componenti Disponibili', pre: 'Reparto di Premontaggio', c1: 'Richiedi Preventivo', c2: 'Scarica Depliant' },
    en: { title: 'Carpentry', sub: 'Custom tanks based on customer drawings', h: 'Carpentry Tanks', p1: 'Combination of experience, design and know-how.', p2: 'Thickness 2.0-5.0 mm, 100% tested.', flush: 'Internal Flushing System', comp: 'Available Components', pre: 'Pre-assembly Department', c1: 'Request Quote', c2: 'Download Brochure' },
    de: { title: 'Sonderbau', sub: 'Sonderbehaelter nach Kundenspezifikation', h: 'Sonderbau-Behaelter', p1: 'Erfahrung, Konstruktion und Know-how in einem Produkt.', p2: 'Staerken 2,0-5,0 mm, 100% geprueft.', flush: 'Internes Spuelsystem', comp: 'Verfuegbare Komponenten', pre: 'Vormontageabteilung', c1: 'Angebot anfordern', c2: 'Broschuere herunterladen' },
  }[language];

  const features = [
    language === 'it' ? 'Spessori da 2,0 a 5,0 mm' : language === 'en' ? 'Thickness 2.0 to 5.0 mm' : 'Staerken 2,0 bis 5,0 mm',
    language === 'it' ? 'Collaudo al 100%' : language === 'en' ? '100% tested' : '100% geprueft',
    language === 'it' ? 'Pulizia interna' : language === 'en' ? 'Internal cleaning' : 'Innenreinigung',
    language === 'it' ? 'Standard ISO 4406' : language === 'en' ? 'ISO 4406 standard' : 'ISO 4406 Standard',
  ];

  return (
    <main className="pt-[104px]"><section className="relative h-[400px] overflow-hidden"><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/carpentry-tank.jpg)' }}><div className="absolute inset-0 bg-black/60" /></div><div className="relative h-full container mx-auto px-4 flex items-center"><div className="max-w-2xl text-white"><h1 className="text-5xl font-bold mb-4">{t.title}</h1><p className="text-xl text-gray-200">{t.sub}</p></div></div></section><section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12"><div><h2 className="text-3xl font-bold text-gray-900 mb-6">{t.h}</h2><p className="text-gray-600 mb-4">{t.p1}</p><p className="text-gray-600 mb-8">{t.p2}</p><div className="space-y-4 mb-8">{features.map((f, i) => (<div key={i} className="flex items-start gap-4"><div className="w-8 h-8 bg-[#b91c1c] rounded-full flex items-center justify-center flex-shrink-0"><Check className="w-5 h-5 text-white" /></div><p className="text-gray-700">{f}</p></div>))}</div></div><div><div className="bg-gray-50 p-6 rounded-2xl mb-6"><h3 className="text-xl font-bold text-gray-900 mb-4">{t.flush}</h3><p className="text-gray-600">ISO 4406 e laboratorio interno analisi.</p></div><div className="bg-amber-50 p-6 rounded-2xl mb-6"><h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Wrench className="w-6 h-6 text-[#b91c1c]" />{t.comp}</h3><p className="text-gray-600">Tappi, curve, flange, raccordi, piastre, accessori.</p></div><div className="bg-gray-900 text-white p-6 rounded-2xl"><h3 className="text-xl font-bold mb-4">{t.pre}</h3><p className="text-gray-300">Prodotti finiti pronti per montaggio in linea cliente.</p></div></div></div><div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"><a href="/contatti.aspx" className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white font-medium rounded-lg hover:bg-[#991b1b] transition-all"><ArrowRight className="w-5 h-5" />{t.c1}</a><a href="/download/allegati/fn000106.pdf" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all"><FileText className="w-5 h-5" />{t.c2}</a></div></div></section></main>
  );
};

export default Carpenteria;
