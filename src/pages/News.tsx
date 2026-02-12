import { Calendar, ArrowRight, Newspaper, ExternalLink } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 7,
      title: 'SERBATOI CARPENTERIA',
      excerpt:
        'I serbatoi di Carpenteria SMA sono la sintesi di un\'esperienza che unisce progettazione, produzione e know-how in costante evoluzione.',
      date: '2023',
      image: '/original-site/download/immagini/fn000255.jpg',
      link: 'https://www.smaserbatoi.it/nws-7-serbatoi_carpenteria',
    },
    {
      id: 6,
      title: 'SMA SERBATOI a IAA TRANSPORTATION',
      excerpt:
        'Dal 20 al 25 settembre 2022, Hannover: la presenza SMA al principale evento internazionale del trasporto commerciale.',
      date: '20-25 settembre 2022',
      image: '/original-site/download/immagini/fn000254.jpg',
      link:
        'https://www.smaserbatoi.it/nws-6-sma_serbatoi_sar_presente_ad_iaa_transportation__dal_20_al_25_settembre_2022_hannover',
    },
    {
      id: 5,
      title: 'ALUMINIUM WATER TANK',
      excerpt:
        'Nuove soluzioni per serbatoi acqua in alluminio, costruite in accordo alla direttiva PED 2014/68/UE.',
      date: '2022',
      image: '/original-site/download/immagini/fn000252.jpg',
      link: 'https://www.smaserbatoi.it/nws-5-aluminium_water_tank',
    },
    {
      id: 4,
      title: 'SOLUTRANS 2019 LYON',
      excerpt:
        'Dal 19 al 23 novembre 2019 SMA a Solutrans, evento internazionale dedicato al trasporto e ai veicoli industriali.',
      date: '19-23 novembre 2019',
      image: '/original-site/download/immagini/fn000251.jpg',
      link: 'https://www.smaserbatoi.it/nws-4-solutrans_2019_lyon_19__23_novembre',
    },
    {
      id: 3,
      title: 'FLUSSAGGIO INTERNO SERBATOI',
      excerpt:
        'Nuovo processo di flussaggio interno per il mantenimento degli standard di pulizia tecnica ISO 4406.',
      date: '2019',
      image: '/original-site/download/immagini/fn000249.jpg',
      link: 'https://www.smaserbatoi.it/nws-3-flussaggio_interno_serbatoi',
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
            <h1 className="text-5xl font-bold mb-4">News</h1>
            <p className="text-xl text-gray-200">Archivio notizie e aggiornamenti SMA Serbatoi</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <Newspaper className="w-8 h-8 text-[#b91c1c]" />
            <h2 className="text-3xl font-bold text-gray-900">Notizie Censite</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
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
                  <p className="text-gray-600 text-sm mb-5 line-clamp-3">{item.excerpt}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#b91c1c] font-medium hover:underline"
                  >
                    Apri dettaglio originale
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-6 text-sm text-gray-600 flex items-start gap-3">
            <ExternalLink className="w-5 h-5 text-[#b91c1c] mt-0.5" />
            <p>
              Le singole news puntano alle pagine originali con URL `nws-*`, così risultano censite e consultabili con il contenuto completo.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default News;
