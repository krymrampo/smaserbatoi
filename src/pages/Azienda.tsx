import { CheckCircle, TrendingUp, Users, Building2 } from 'lucide-react';
import { useI18n } from '../i18n';

const Azienda = () => {
  const { language } = useI18n();

  const t = {
    it: {
      title: 'Azienda',
      subtitle: 'Tradizione, innovazione e qualita dal 1963',
      introTitle: 'SMA Serbatoi S.p.A.',
      p1: 'Azienda specializzata nella progettazione e fabbricazione di serbatoi metallici per autocarri, imbarcazioni, rotabili e mezzi di trasporto.',
      p2: 'Fondata nel 1963 dai fratelli Rampini, con sede storica a San Prospero (Parma).',
      p3: 'Oggi e una realta europea con circa il 50% di export.',
      data: 'Dati Aziendali',
      empl: 'Dipendenti',
      area: 'Stabilimenti coperti',
      exp: 'Export su produzione totale',
      plants: 'Gli Stabilimenti SMA',
      plantText: 'Il gruppo SMA opera con diversi stabilimenti produttivi.',
      hq: 'Sede Principale',
      s2: 'Stabilimento S. Secondo',
      sr: 'Stabilimento Serbia',
      range: 'Gamma Produttiva',
      rangeText: 'Produzione di serbatoi certificati secondo normative internazionali.',
      mission: 'La Nostra Missione',
      missionText: 'Ricerca continua, ampia gamma standard, personalizzazione su specifica cliente con materiali di qualita.',
    },
    en: {
      title: 'Company',
      subtitle: 'Tradition, innovation and quality since 1963',
      introTitle: 'SMA Serbatoi S.p.A.',
      p1: 'Company specialized in the design and manufacturing of metal tanks for trucks, boats, rail vehicles and transport applications.',
      p2: 'Founded in 1963 by the Rampini brothers, with historical headquarters in San Prospero (Parma).',
      p3: 'Today it is a European industrial company with about 50% export share.',
      data: 'Company Data',
      empl: 'Employees',
      area: 'Covered production area',
      exp: 'Export on total production',
      plants: 'SMA Plants',
      plantText: 'The SMA group operates several production plants.',
      hq: 'Headquarters',
      s2: 'S. Secondo Plant',
      sr: 'Serbia Plant',
      range: 'Product Range',
      rangeText: 'Production of tanks certified according to international standards.',
      mission: 'Our Mission',
      missionText: 'Continuous research, wide standard range and customer-specific customization with high-quality materials.',
    },
    de: {
      title: 'Unternehmen',
      subtitle: 'Tradition, Innovation und Qualitaet seit 1963',
      introTitle: 'SMA Serbatoi S.p.A.',
      p1: 'Unternehmen spezialisiert auf Entwicklung und Herstellung von Metallbehaeltern fuer LKW, Boote, Schienenfahrzeuge und Transportanwendungen.',
      p2: 'Gegruendet 1963 von den Bruedern Rampini, historischer Sitz in San Prospero (Parma).',
      p3: 'Heute ist SMA ein europaeisches Industrieunternehmen mit rund 50% Exportanteil.',
      data: 'Unternehmensdaten',
      empl: 'Mitarbeiter',
      area: 'Ueberdachte Produktionsflaeche',
      exp: 'Exportanteil der Gesamtproduktion',
      plants: 'SMA Werke',
      plantText: 'Die SMA-Gruppe betreibt mehrere Produktionsstandorte.',
      hq: 'Hauptsitz',
      s2: 'Werk S. Secondo',
      sr: 'Werk Serbien',
      range: 'Produktprogramm',
      rangeText: 'Produktion zertifizierter Behaelter nach internationalen Normen.',
      mission: 'Unsere Mission',
      missionText: 'Kontinuierliche Forschung, breites Standardsortiment und kundenspezifische Anpassung mit hochwertigen Materialien.',
    },
  }[language];

  const productItems = [
    language === 'it' ? 'Olio idraulico' : language === 'en' ? 'Hydraulic oil' : 'Hydraulikoel',
    language === 'it' ? 'Carburante' : language === 'en' ? 'Fuel' : 'Kraftstoff',
    language === 'it' ? 'Aria compressa' : language === 'en' ? 'Compressed air' : 'Druckluft',
    language === 'it' ? 'Serbatoi misti olio-gasolio' : language === 'en' ? 'Mixed oil-diesel tanks' : 'Mischbehaelter Oel-Diesel',
    language === 'it' ? 'Acqua' : language === 'en' ? 'Water' : 'Wasser',
    language === 'it' ? 'Serbatoi su disegno personalizzati' : language === 'en' ? 'Custom tanks on drawing' : 'Sonderbehaelter nach Zeichnung',
  ];

  return (
    <main className="pt-[104px]">
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-tank-2.jpg)' }}>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-gray-200">{t.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.introTitle}</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">{t.p1}</p>
                <p className="mb-4">{t.p2}</p>
                <p className="mb-4">{t.p3}</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t.data}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4"><div className="w-12 h-12 bg-[#b91c1c] rounded-lg flex items-center justify-center"><Users className="w-6 h-6 text-white" /></div><div><div className="text-2xl font-bold text-gray-900">170</div><div className="text-gray-600">{t.empl}</div></div></div>
                <div className="flex items-start gap-4"><div className="w-12 h-12 bg-[#b91c1c] rounded-lg flex items-center justify-center"><Building2 className="w-6 h-6 text-white" /></div><div><div className="text-2xl font-bold text-gray-900">16.000 mq</div><div className="text-gray-600">{t.area}</div></div></div>
                <div className="flex items-start gap-4"><div className="w-12 h-12 bg-[#b91c1c] rounded-lg flex items-center justify-center"><TrendingUp className="w-6 h-6 text-white" /></div><div><div className="text-2xl font-bold text-gray-900">50%</div><div className="text-gray-600">{t.exp}</div></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t.plants}</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">{t.plantText}</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md"><h3 className="text-xl font-bold text-gray-900 mb-2">{t.hq}</h3><p className="text-gray-600">Via E. Lepido, 182<br />43122 S. Prospero (PR)</p></div>
            <div className="bg-white p-8 rounded-2xl shadow-md"><h3 className="text-xl font-bold text-gray-900 mb-2">{t.s2}</h3><p className="text-gray-600">Via Dall'Aglio, 18/20<br />43017 S. Secondo P.se (PR)</p></div>
            <div className="bg-white p-8 rounded-2xl shadow-md"><h3 className="text-xl font-bold text-gray-900 mb-2">{t.sr}</h3><p className="text-gray-600">SMA D.o.o.<br />Vrsac, Serbia</p></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t.range}</h2>
          <p className="text-gray-600 text-center mb-12">{t.rangeText}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {productItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-[#b91c1c] flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t.mission}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.missionText}</p>
        </div>
      </section>
    </main>
  );
};

export default Azienda;
