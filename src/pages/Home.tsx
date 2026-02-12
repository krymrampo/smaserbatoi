import Hero from '../components/Hero';
import Configurators from '../components/Configurators';
import { ArrowRight, Award, Users, Globe, Factory } from 'lucide-react';
import type { Page } from '../App';

interface HomeProps {
  setPage: (page: Page) => void;
}

const Home = ({ setPage }: HomeProps) => {
  const features = [
    {
      icon: Award,
      title: 'Qualità Certificata',
      description: 'ISO 9001:2015 e omologazioni internazionali',
    },
    {
      icon: Users,
      title: '170 Dipendenti',
      description: 'Staff qualificato e in continua formazione',
    },
    {
      icon: Globe,
      title: 'Export 50%',
      description: 'Presenza in tutto il mondo',
    },
    {
      icon: Factory,
      title: '16.000 mq',
      description: 'Stabilimenti produttivi in Italia e Serbia',
    },
  ];

  const products = [
    { name: 'Aria Compressa', page: 'aria-compressa' as Page, image: '/images/hero-tank-1.jpg' },
    { name: 'Olio Idraulico', page: 'olio-idraulico' as Page, image: '/images/hero-tank-3.jpg' },
    { name: 'Acqua', page: 'acqua' as Page, image: '/images/hero-tank-2.jpg' },
    { name: 'Carpenteria', page: 'carpenteria' as Page, image: '/images/carpentry-tank.jpg' },
    { name: 'Gasolio', page: 'gasolio' as Page, image: '/images/configurator-truck.jpg' },
    { name: 'Misti Olio-Gasolio', page: 'misti' as Page, image: '/images/hero-tank-1.jpg' },
  ];

  return (
    <main>
      <Hero setPage={setPage} />
      <Configurators setPage={setPage} />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-red-50 transition-all group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#b91c1c] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Leader nella produzione di{' '}
                <span className="text-[#b91c1c]">serbatoi metallici</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                SMA Serbatoi S.p.A. è un'azienda specializzata nella progettazione e nella 
                fabbricazione di serbatoi metallici per autocarri, imbarcazioni, veicoli 
                rotabili e mezzi di trasporto vari, leader in Italia e tra i maggiori 
                costruttori a livello europeo.
              </p>
              <p className="text-gray-300 mb-8">
                Dal 1963, grazie ai fratelli Rampini, l'azienda è cresciuta da piccola 
                officina a realtà europea che esporta circa la metà della propria produzione.
              </p>
              <button
                onClick={() => setPage('azienda')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white font-semibold rounded-lg hover:bg-[#991b1b] transition-all"
              >
                Scopri la nostra storia
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="/images/hero-tank-2.jpg"
                alt="SMA Serbatoi Production"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#b91c1c] text-white p-6 rounded-xl">
                <div className="text-4xl font-bold">60+</div>
                <div className="text-sm">Anni di esperienza</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              I Nostri Prodotti
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Una gamma completa di serbatoi per ogni applicazione industriale, 
              dalla carpenteria personalizzata ai serbatoi standard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <button
                key={index}
                onClick={() => setPage(product.page)}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] text-left"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-amber-400 text-sm font-medium">
                    Scopri di più
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#b91c1c]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
    Hai bisogno di un serbatoio su misura?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Contattaci per una consulenza personalizzata. I nostri tecnici sono a tua 
            disposizione per trovare la soluzione migliore per le tue esigenze.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setPage('contatti')}
              className="px-8 py-4 bg-white text-[#b91c1c] font-semibold rounded-lg hover:bg-gray-100 transition-all"
            >
              Richiedi informazioni
            </button>
            <a
              href="tel:+390521645523"
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/30"
            >
              Chiama ora: +39 0521 645523
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
