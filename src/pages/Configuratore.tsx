import { Truck, Wrench, ExternalLink } from 'lucide-react';
import { useI18n } from '../i18n';

const Configuratore = () => {
  const { language } = useI18n();
  const t = {
    it: { title: 'Configuratori', sub: 'Progetta il tuo serbatoio e trova la soluzione per il tuo autocarro.', c1: 'Configuratore Serbatoi', c1d: 'Disegna e configura il serbatoio su specifica.', c1b: 'Apri configuratore serbatoi', c2: 'Configuratore Autocarri', c2d: 'Ricerca la soluzione piu adatta al tuo veicolo.', c2b: 'Apri configuratore autocarri' },
    en: { title: 'Configurators', sub: 'Design your tank and find the right solution for your truck.', c1: 'Tank Configurator', c1d: 'Design and configure custom tanks.', c1b: 'Open tank configurator', c2: 'Truck Configurator', c2d: 'Find the best solution for your vehicle.', c2b: 'Open truck configurator' },
    de: { title: 'Konfiguratoren', sub: 'Entwerfen Sie Ihren Tank und finden Sie die richtige Loesung fuer Ihren LKW.', c1: 'Tank-Konfigurator', c1d: 'Sonderbehaelter planen und konfigurieren.', c1b: 'Tank-Konfigurator oeffnen', c2: 'LKW-Konfigurator', c2d: 'Passende Loesung fuer Ihr Fahrzeug finden.', c2b: 'LKW-Konfigurator oeffnen' },
  }[language];

  return (
    <main className="pt-[104px]"><section className="relative h-[320px] overflow-hidden"><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/original-site/images/img-configuratore-autocarri.jpg)' }}><div className="absolute inset-0 bg-black/65" /></div><div className="relative h-full container mx-auto px-4 flex items-center"><div className="max-w-2xl text-white"><h1 className="text-5xl font-bold mb-4">{t.title}</h1><p className="text-xl text-gray-200">{t.sub}</p></div></div></section><section className="py-16 bg-gray-50"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto"><article className="bg-white rounded-2xl shadow-md overflow-hidden"><img src="/original-site/images/img-configuratore-serbatoi.jpg" alt={t.c1} className="w-full h-56 object-cover" /><div className="p-6"><div className="flex items-center gap-3 mb-3"><Wrench className="w-6 h-6 text-[#b91c1c]" /><h2 className="text-2xl font-bold text-gray-900">{t.c1}</h2></div><p className="text-gray-600 mb-6">{t.c1d}</p><a href="https://design.smaserbatoi.it/index-IT.php" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-[#b91c1c] text-white rounded-lg font-medium hover:bg-[#991b1b] transition-all">{t.c1b}<ExternalLink className="w-4 h-4" /></a></div></article><article className="bg-white rounded-2xl shadow-md overflow-hidden"><img src="/original-site/images/img-configuratore-autocarri.jpg" alt={t.c2} className="w-full h-56 object-cover" /><div className="p-6"><div className="flex items-center gap-3 mb-3"><Truck className="w-6 h-6 text-[#b91c1c]" /><h2 className="text-2xl font-bold text-gray-900">{t.c2}</h2></div><p className="text-gray-600 mb-6">{t.c2d}</p><a href="https://www.smaserbatoi.it/configuratore.aspx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-[#b91c1c] text-white rounded-lg font-medium hover:bg-[#991b1b] transition-all">{t.c2b}<ExternalLink className="w-4 h-4" /></a></div></article></div></div></section></main>
  );
};

export default Configuratore;
