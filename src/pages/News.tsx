import { useState } from 'react';
import { Calendar, ArrowRight, Newspaper, FileText } from 'lucide-react';
import { useI18n } from '../i18n';

const News = () => {
  const { language } = useI18n();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const t = {
    it: {
      title: 'News',
      sub: 'Archivio notizie e aggiornamenti SMA Serbatoi',
      h: 'Notizie Censite',
      open: 'Apri dettaglio',
      close: 'Chiudi dettaglio',
      note: 'Archivio locale aggiornato: le news sono consultabili senza dipendenze dal vecchio sito.',
    },
    en: {
      title: 'News',
      sub: 'SMA Serbatoi news archive',
      h: 'Indexed News',
      open: 'Open details',
      close: 'Close details',
      note: 'Updated local archive: news can be viewed without legacy-site dependencies.',
    },
    de: {
      title: 'News',
      sub: 'Nachrichtenarchiv von SMA Serbatoi',
      h: 'Erfasste News',
      open: 'Details oeffnen',
      close: 'Details schliessen',
      note: 'Aktualisiertes lokales Archiv: News sind ohne Abhaengigkeit von der alten Website verfuegbar.',
    },
  }[language];

  const newsItems = [
    {
      id: 7,
      title: 'SERBATOI CARPENTERIA',
      excerpt: 'Carpentry tank solutions by SMA.',
      date: '2023',
      image: '/original-site/download/immagini/fn000255.jpg',
      details: {
        it: 'SMA amplia la gamma carpenteria con serbatoi speciali su specifica cliente, orientati a robustezza strutturale, integrazione in linea e finiture industriali evolute.',
        en: 'SMA extends its carpentry range with custom tanks focused on structural strength, assembly-line integration and advanced industrial finishing.',
        de: 'SMA erweitert das Sonderbau-Portfolio mit kundenspezifischen Behaeltern fuer hohe strukturelle Festigkeit, Linienintegration und moderne Industrieausfuehrung.',
      },
    },
    {
      id: 6,
      title: 'SMA SERBATOI a IAA TRANSPORTATION',
      excerpt: 'Hannover event participation.',
      date: '20-25 settembre 2022',
      image: '/original-site/download/immagini/fn000254.jpg',
      details: {
        it: 'Partecipazione SMA a IAA Transportation di Hannover con focus su innovazione prodotto, sostenibilita dei processi e networking internazionale con OEM e distributori.',
        en: 'SMA participated in IAA Transportation in Hannover, focusing on product innovation, process sustainability and international networking with OEMs and distributors.',
        de: 'SMA nahm an der IAA Transportation in Hannover teil, mit Fokus auf Produktinnovation, nachhaltige Prozesse und internationales Networking mit OEMs und Partnern.',
      },
    },
    {
      id: 5,
      title: 'ALUMINIUM WATER TANK',
      excerpt: 'New aluminum water tank solutions.',
      date: '2022',
      image: '/original-site/download/immagini/fn000252.jpg',
      details: {
        it: 'Nuove configurazioni per serbatoi acqua in alluminio con ottimizzazione peso, resistenza alla corrosione e maggiore facilita di installazione su veicoli industriali.',
        en: 'New aluminium water tank configurations with optimized weight, corrosion resistance and easier installation on industrial vehicles.',
        de: 'Neue Aluminium-Wassertank-Konfigurationen mit optimiertem Gewicht, Korrosionsbestaendigkeit und einfacher Montage auf Nutzfahrzeugen.',
      },
    },
    {
      id: 4,
      title: 'SOLUTRANS 2019 LYON',
      excerpt: 'International transportation event.',
      date: '19-23 novembre 2019',
      image: '/original-site/download/immagini/fn000251.jpg',
      details: {
        it: 'Presenza SMA a Solutrans 2019 a Lione con presentazione di soluzioni serbatoi per il trasporto professionale e approfondimenti con operatori del settore.',
        en: 'SMA attended Solutrans 2019 in Lyon, showcasing tank solutions for professional transport and engaging with industry operators.',
        de: 'SMA war auf der Solutrans 2019 in Lyon vertreten und praesentierte Behaelterloesungen fuer den professionellen Transport.',
      },
    },
    {
      id: 3,
      title: 'FLUSSAGGIO INTERNO SERBATOI',
      excerpt: 'Internal flushing process update.',
      date: '2019',
      image: '/original-site/download/immagini/fn000249.jpg',
      details: {
        it: 'Aggiornamento del processo di flussaggio interno per migliorare pulizia, affidabilita e conformita ai requisiti tecnici richiesti dal mercato OEM.',
        en: 'Updated internal flushing process to improve cleanliness, reliability and compliance with OEM technical requirements.',
        de: 'Aktualisierung des internen Spuelprozesses zur Verbesserung von Sauberkeit, Zuverlaessigkeit und OEM-Konformitaet.',
      },
    },
  ];

  return (
    <main className="pt-[104px]">
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/original-site/download/immagini/fn000254.jpg)' }}>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-gray-200">{t.sub}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <Newspaper className="w-8 h-8 text-[#b91c1c]" />
            <h2 className="text-3xl font-bold text-gray-900">{t.h}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => {
              const isOpen = expandedId === item.id;
              return (
                <article key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group">
                  <div className="relative h-48 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b91c1c] transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-5">{item.excerpt}</p>

                    <button
                      onClick={() => setExpandedId(isOpen ? null : item.id)}
                      className="inline-flex items-center gap-2 text-[#b91c1c] font-medium hover:underline"
                    >
                      {isOpen ? t.close : t.open}
                      <ArrowRight className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
                        <p className="text-sm text-gray-700">{item.details[language]}</p>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-6 text-sm text-gray-600 flex items-start gap-3">
            <FileText className="w-5 h-5 text-[#b91c1c] mt-0.5" />
            <p>{t.note}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default News;
