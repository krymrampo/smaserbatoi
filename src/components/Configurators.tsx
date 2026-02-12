import { Pencil, Truck, Wrench } from 'lucide-react';
import type { Page } from '../App';
import { useI18n } from '../i18n';

interface ConfiguratorsProps {
  setPage: (page: Page) => void;
}

const Configurators = ({ setPage }: ConfiguratorsProps) => {
  const { language } = useI18n();

  const items = {
    it: [
      {
        icon: Pencil,
        title: 'CONFIGURATORE SERBATOI',
        subtitle: 'Disegna e invia la tua richiesta',
        description: 'Flusso interno: configurazione e invio diretto al team tecnico.',
        buttonText: 'APRI CONFIGURATORE',
        image: '/images/hero-tank-1.jpg',
        page: 'configuratore' as Page,
      },
      {
        icon: Truck,
        title: 'CONFIGURATORE AUTOCARRI',
        subtitle: 'Trova il serbatoio per il tuo veicolo',
        description: 'Ricerca guidata con richiesta commerciale integrata.',
        buttonText: 'SCOPRI',
        image: '/images/configurator-truck.jpg',
        page: 'configuratore' as Page,
      },
      {
        icon: Wrench,
        title: 'SERBATOI CARPENTERIA',
        subtitle: 'Soluzioni custom',
        description: 'Produzione tecnica su specifica.',
        buttonText: 'VAI ALLA PAGINA',
        image: '/images/carpentry-tank.jpg',
        page: 'carpenteria' as Page,
      },
    ],
    en: [
      {
        icon: Pencil,
        title: 'TANK CONFIGURATOR',
        subtitle: 'Design and send your request',
        description: 'Internal flow: configuration and direct submission to the technical team.',
        buttonText: 'OPEN CONFIGURATOR',
        image: '/images/hero-tank-1.jpg',
        page: 'configuratore' as Page,
      },
      {
        icon: Truck,
        title: 'TRUCK CONFIGURATOR',
        subtitle: 'Find the right tank for your vehicle',
        description: 'Guided search with integrated sales request.',
        buttonText: 'DISCOVER',
        image: '/images/configurator-truck.jpg',
        page: 'configuratore' as Page,
      },
      {
        icon: Wrench,
        title: 'CARPENTRY TANKS',
        subtitle: 'Custom solutions',
        description: 'Technical production on specification.',
        buttonText: 'GO TO PAGE',
        image: '/images/carpentry-tank.jpg',
        page: 'carpenteria' as Page,
      },
    ],
    de: [
      {
        icon: Pencil,
        title: 'TANK-KONFIGURATOR',
        subtitle: 'Tank planen und Anfrage senden',
        description: 'Interner Ablauf: Konfiguration und direkte Uebermittlung an das Technikteam.',
        buttonText: 'KONFIGURATOR OEFFNEN',
        image: '/images/hero-tank-1.jpg',
        page: 'configuratore' as Page,
      },
      {
        icon: Truck,
        title: 'LKW-KONFIGURATOR',
        subtitle: 'Passenden Tank fuer Ihr Fahrzeug finden',
        description: 'Gefuehrte Suche mit integrierter Anfrage.',
        buttonText: 'ENTDECKEN',
        image: '/images/configurator-truck.jpg',
        page: 'configuratore' as Page,
      },
      {
        icon: Wrench,
        title: 'SONDERBAU-BEHAELTER',
        subtitle: 'Individuelle Loesungen',
        description: 'Technische Fertigung nach Vorgabe.',
        buttonText: 'ZUR SEITE',
        image: '/images/carpentry-tank.jpg',
        page: 'carpenteria' as Page,
      },
    ],
  }[language];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{item.subtitle}</p>
                <p className="text-gray-600 text-sm mb-6">{item.description}</p>
                <button onClick={() => setPage(item.page)} className="inline-flex items-center justify-center w-full px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all">
                  {item.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Configurators;
