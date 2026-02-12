import Hero from '../components/Hero';
import Configurators from '../components/Configurators';
import { ArrowRight, Award, Users, Globe, Factory } from 'lucide-react';
import type { Page } from '../App';
import { useI18n } from '../i18n';

interface HomeProps {
  setPage: (page: Page) => void;
}

const Home = ({ setPage }: HomeProps) => {
  const { language } = useI18n();

  const tr = {
    it: {
      features: [
        { icon: Award, title: 'Qualita Certificata', description: 'ISO 9001:2015 e omologazioni internazionali' },
        { icon: Users, title: '170 Dipendenti', description: 'Staff qualificato e in formazione continua' },
        { icon: Globe, title: 'Export 50%', description: 'Presenza globale' },
        { icon: Factory, title: '16.000 mq', description: 'Stabilimenti in Italia e Serbia' },
      ],
      leaderTitle: 'Leader nella produzione di serbatoi metallici',
      leaderText: 'SMA Serbatoi S.p.A. progetta e produce serbatoi metallici per autocarri, imbarcazioni, rotabili e applicazioni industriali.',
      historyText: 'Dal 1963 l azienda e cresciuta fino a diventare un riferimento europeo.',
      historyBtn: 'Scopri la nostra storia',
      productsTitle: 'I Nostri Prodotti',
      productsText: 'Gamma completa di serbatoi standard e custom.',
      ctaTitle: 'Hai bisogno di un serbatoio su misura?',
      ctaText: 'Contattaci per una consulenza tecnica dedicata.',
      infoBtn: 'Richiedi informazioni',
      callBtn: 'Chiama ora: +39 0521 645523',
      more: 'Scopri di piu',
    },
    en: {
      features: [
        { icon: Award, title: 'Certified Quality', description: 'ISO 9001:2015 and international approvals' },
        { icon: Users, title: '170 Employees', description: 'Skilled team with continuous training' },
        { icon: Globe, title: '50% Export', description: 'Global market presence' },
        { icon: Factory, title: '16,000 sqm', description: 'Plants in Italy and Serbia' },
      ],
      leaderTitle: 'Leader in metal tank manufacturing',
      leaderText: 'SMA Serbatoi S.p.A. designs and manufactures metal tanks for trucks, boats, rail and industrial applications.',
      historyText: 'Since 1963 the company has grown into a leading European manufacturer.',
      historyBtn: 'Discover our history',
      productsTitle: 'Our Products',
      productsText: 'Complete range of standard and custom tanks.',
      ctaTitle: 'Need a custom tank solution?',
      ctaText: 'Contact us for dedicated technical consulting.',
      infoBtn: 'Request information',
      callBtn: 'Call now: +39 0521 645523',
      more: 'Learn more',
    },
    de: {
      features: [
        { icon: Award, title: 'Zertifizierte Qualitaet', description: 'ISO 9001:2015 und internationale Zulassungen' },
        { icon: Users, title: '170 Mitarbeiter', description: 'Qualifiziertes Team mit laufender Schulung' },
        { icon: Globe, title: '50% Export', description: 'Globale Praesenz' },
        { icon: Factory, title: '16.000 qm', description: 'Werke in Italien und Serbien' },
      ],
      leaderTitle: 'Fuehrend in der Herstellung von Metallbehaeltern',
      leaderText: 'SMA Serbatoi S.p.A. entwickelt und fertigt Metallbehaelter fuer LKW, Boote, Schienenfahrzeuge und Industrieanwendungen.',
      historyText: 'Seit 1963 ist das Unternehmen zu einem europaweiten Referenzhersteller gewachsen.',
      historyBtn: 'Unsere Geschichte',
      productsTitle: 'Unsere Produkte',
      productsText: 'Komplettes Sortiment an Standard- und Sonderbehaeltern.',
      ctaTitle: 'Benoetigen Sie einen Sonderbehaelter?',
      ctaText: 'Kontaktieren Sie uns fuer eine technische Beratung.',
      infoBtn: 'Information anfordern',
      callBtn: 'Jetzt anrufen: +39 0521 645523',
      more: 'Mehr erfahren',
    },
  }[language];

  const products = [
    { name: language === 'it' ? 'Aria Compressa' : language === 'en' ? 'Compressed Air' : 'Druckluft', page: 'aria-compressa' as Page, image: '/images/hero-tank-1.jpg' },
    { name: language === 'it' ? 'Olio Idraulico' : language === 'en' ? 'Hydraulic Oil' : 'Hydraulikoel', page: 'olio-idraulico' as Page, image: '/images/hero-tank-3.jpg' },
    { name: language === 'it' ? 'Acqua' : language === 'en' ? 'Water' : 'Wasser', page: 'acqua' as Page, image: '/images/hero-tank-2.jpg' },
    { name: language === 'it' ? 'Carpenteria' : language === 'en' ? 'Carpentry' : 'Sonderbau', page: 'carpenteria' as Page, image: '/images/carpentry-tank.jpg' },
    { name: language === 'it' ? 'Gasolio' : language === 'en' ? 'Diesel' : 'Diesel', page: 'gasolio' as Page, image: '/images/configurator-truck.jpg' },
    { name: language === 'it' ? 'Misti Olio-Gasolio' : language === 'en' ? 'Mixed Oil-Diesel' : 'Misch Oel-Diesel', page: 'misti' as Page, image: '/images/hero-tank-1.jpg' },
  ];

  return (
    <main>
      <Hero setPage={setPage} />
      <Configurators setPage={setPage} />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tr.features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-red-50 transition-all group">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#b91c1c] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">{tr.leaderTitle}</h2>
              <p className="text-gray-300 text-lg mb-6">{tr.leaderText}</p>
              <p className="text-gray-300 mb-8">{tr.historyText}</p>
              <button onClick={() => setPage('azienda')} className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white font-semibold rounded-lg hover:bg-[#991b1b] transition-all">
                {tr.historyBtn}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <img src="/images/hero-tank-2.jpg" alt="SMA" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-[#b91c1c] text-white p-6 rounded-xl">
                <div className="text-4xl font-bold">60+</div>
                <div className="text-sm">{language === 'it' ? 'Anni di esperienza' : language === 'en' ? 'Years of experience' : 'Jahre Erfahrung'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{tr.productsTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{tr.productsText}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <button key={index} onClick={() => setPage(product.page)} className="group relative overflow-hidden rounded-xl aspect-[4/3] text-left">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <span className="inline-flex items-center gap-2 text-amber-400 text-sm font-medium">
                    {tr.more}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#b91c1c]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{tr.ctaTitle}</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{tr.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setPage('contatti')} className="px-8 py-4 bg-white text-[#b91c1c] font-semibold rounded-lg hover:bg-gray-100 transition-all">{tr.infoBtn}</button>
            <a href="tel:+390521645523" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/30">{tr.callBtn}</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
