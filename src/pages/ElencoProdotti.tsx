import { Fuel, Droplets, Wind, Wrench, ArrowRight } from 'lucide-react';
import { useI18n } from '../i18n';

const ElencoProdotti = () => {
  const { language } = useI18n();
  const prefix = language === 'en' ? '/english' : language === 'de' ? '/deutsch' : '';

  const t = {
    it: {
      title: 'Elenco Prodotti',
      sub: 'Accesso rapido ai principali serbatoi standard SMA',
      cta: 'Apri sezione',
      items: [
        { name: 'Aria Compressa', href: `${prefix}/prd-4-aria_compressa`, icon: Wind },
        { name: 'Gasolio', href: `${prefix}/prd-1-gasolio`, icon: Fuel },
        { name: 'Olio Idraulico', href: `${prefix}/prd-2-olio`, icon: Fuel },
        { name: 'Misti Olio-Gasolio', href: `${prefix}/prd-3-misti`, icon: Fuel },
        { name: 'Acqua', href: `${prefix}/prd-5-acqua`, icon: Droplets },
        { name: 'Carpenteria', href: `${prefix}/prd-6-carpenteria`, icon: Wrench },
      ],
    },
    en: {
      title: 'Product List',
      sub: 'Quick access to main SMA standard tanks',
      cta: 'Open section',
      items: [
        { name: 'Compressed Air', href: `${prefix}/prd-4-aria_compressa`, icon: Wind },
        { name: 'Diesel', href: `${prefix}/prd-1-gasolio`, icon: Fuel },
        { name: 'Hydraulic Oil', href: `${prefix}/prd-2-olio`, icon: Fuel },
        { name: 'Mixed Oil-Diesel', href: `${prefix}/prd-3-misti`, icon: Fuel },
        { name: 'Water', href: `${prefix}/prd-5-acqua`, icon: Droplets },
        { name: 'Carpentry', href: `${prefix}/prd-6-carpenteria`, icon: Wrench },
      ],
    },
    de: {
      title: 'Produktliste',
      sub: 'Schneller Zugriff auf die wichtigsten SMA-Standardbehaelter',
      cta: 'Bereich oeffnen',
      items: [
        { name: 'Druckluft', href: `${prefix}/prd-4-aria_compressa`, icon: Wind },
        { name: 'Diesel', href: `${prefix}/prd-1-gasolio`, icon: Fuel },
        { name: 'Hydraulikoel', href: `${prefix}/prd-2-olio`, icon: Fuel },
        { name: 'Misch Oel-Diesel', href: `${prefix}/prd-3-misti`, icon: Fuel },
        { name: 'Wasser', href: `${prefix}/prd-5-acqua`, icon: Droplets },
        { name: 'Sonderbau', href: `${prefix}/prd-6-carpenteria`, icon: Wrench },
      ],
    },
  }[language];

  return (
    <main className="pt-[104px]">
      <section className="relative h-[280px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/original-site/images/elenco-prodotti.jpg)' }}>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-gray-200">{t.sub}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {t.items.map((item) => (
              <a key={item.href} href={item.href} className="group border border-gray-200 rounded-xl p-6 hover:border-[#b91c1c] hover:bg-red-50 transition-all">
                <item.icon className="w-7 h-7 text-[#b91c1c] mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                <span className="inline-flex items-center gap-2 text-sm text-[#b91c1c]">
                  {t.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ElencoProdotti;
