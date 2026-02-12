import { Pencil, Truck, Wrench } from 'lucide-react';
import type { Page } from '../App';

const configurators = [
  {
    icon: Pencil,
    title: 'CONFIGURATORE SERBATOI',
    subtitle: 'Disegna, visualizza e scarica il serbatoio che hai creato',
    description: 'Utilizza il nostro configuratore online per progettare il serbatoio su misura per le tue esigenze.',
    buttonText: 'DESIGN YOUR TANK',
    buttonLink: 'https://design.smaserbatoi.it/index-IT.php',
    page: 'home' as Page,
    image: '/images/hero-tank-1.jpg',
    external: true,
  },
  {
    icon: Truck,
    title: 'CONFIGURATORE per AUTOCARRI',
    subtitle: 'Trova il serbatoio per il tuo veicolo',
    description: 'Seleziona il modello del tuo veicolo e trova il serbatoio compatibile.',
    buttonText: 'FIND YOUR TANK',
    buttonLink: '',
    page: 'configuratore' as Page,
    image: '/images/configurator-truck.jpg',
    external: false,
  },
  {
    icon: Wrench,
    title: 'SERBATOI CARPENTERIA',
    subtitle: 'Soluzioni custom per ogni applicazione',
    description: 'I serbatoi di Carpenteria SMA sono la sintesi di un\'esperienza nel settore che unisce progettazione e Know How.',
    buttonText: 'Scopri di più',
    buttonLink: '',
    page: 'carpenteria' as Page,
    image: '/images/carpentry-tank.jpg',
    external: false,
  },
];

interface ConfiguratorsProps {
  setPage: (page: Page) => void;
}

const Configurators = ({ setPage }: ConfiguratorsProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {configurators.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white mb-1">
                    <item.icon className="w-5 h-5" />
                    <span className="text-xs font-medium uppercase tracking-wider">Benvenuto nel</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {item.subtitle}
                </p>
                <p className="text-gray-600 text-sm mb-6">
                  {item.description}
                </p>
                
                {item.external ? (
                  <a
                    href={item.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all"
                  >
                    {item.buttonText}
                  </a>
                ) : (
                  <button
                    onClick={() => setPage(item.page ?? 'home')}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all"
                  >
                    {item.buttonText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Configurators;
