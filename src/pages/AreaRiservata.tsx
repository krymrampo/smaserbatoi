import { Lock, ShieldCheck, ExternalLink } from 'lucide-react';
import { useI18n } from '../i18n';

const AreaRiservata = () => {
  const { language } = useI18n();
  const t = {
    it: { title: 'Area Riservata', sub: 'Accesso dedicato a clienti, partner e rete distributiva.', h: 'Accesso Portale', p: 'Per entrare nell area privata utilizza il portale originale SMA Serbatoi.', i1: 'Documentazione dedicata', i2: 'Materiale tecnico riservato', i3: 'Contenuti per rete vendita', b: "Vai all'area riservata" },
    en: { title: 'Restricted Area', sub: 'Dedicated access for customers, partners and distributors.', h: 'Portal Access', p: 'Use the original SMA Serbatoi portal to enter the private area.', i1: 'Dedicated documentation', i2: 'Restricted technical material', i3: 'Sales network contents', b: 'Go to restricted area' },
    de: { title: 'Reservierter Bereich', sub: 'Zugang fuer Kunden, Partner und Vertriebsnetz.', h: 'Portalzugang', p: 'Fuer den Zugang zum privaten Bereich das originale SMA-Portal verwenden.', i1: 'Spezielle Dokumentation', i2: 'Vertrauliches technisches Material', i3: 'Inhalte fuer Vertriebsnetz', b: 'Zum reservierten Bereich' },
  }[language];

  return (
    <main className="pt-[104px]"><section className="relative h-[300px] overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-[#b91c1c]" /><div className="relative h-full container mx-auto px-4 flex items-center"><div className="max-w-2xl text-white"><h1 className="text-5xl font-bold mb-4">{t.title}</h1><p className="text-xl text-gray-200">{t.sub}</p></div></div></section><section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-200"><div className="flex items-start gap-4 mb-6"><div className="w-12 h-12 rounded-xl bg-[#b91c1c] flex items-center justify-center"><Lock className="w-6 h-6 text-white" /></div><div><h2 className="text-2xl font-bold text-gray-900">{t.h}</h2><p className="text-gray-600">{t.p}</p></div></div><ul className="space-y-3 text-gray-700 mb-8"><li className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#b91c1c]" /> {t.i1}</li><li className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#b91c1c]" /> {t.i2}</li><li className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#b91c1c]" /> {t.i3}</li></ul><a href="https://www.smaserbatoi.it/area-riservata.aspx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white rounded-lg font-medium hover:bg-[#991b1b] transition-all">{t.b}<ExternalLink className="w-4 h-4" /></a></div></div></section></main>
  );
};

export default AreaRiservata;
