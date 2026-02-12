import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Distributori = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions = [
    {
      name: 'Calabria',
      slug: '',
      distributors: [
        {
          name: 'MAURELLI DISTRIBUZIONE S.p.A. - Filiale di Cosenza',
          address: 'C.da Coda di Volpe Rende (CS)',
          phone: '0984 839394',
          fax: '0984 839504',
          email: 'infocosenza@maurelli.it',
        },
      ],
    },
    { name: 'Campania', slug: 'dsi-9-campania', distributors: [] },
    { name: 'Emilia Romagna', slug: 'dsi-4-emilia_romagna', distributors: [] },
    { name: 'Lazio', slug: 'dsi-8-lazio', distributors: [] },
    { name: 'Liguria', slug: 'dsi-5-liguria', distributors: [] },
    { name: 'Lombardia', slug: 'dsi-1-lombardia', distributors: [] },
    { name: 'Marche', slug: 'dsi-16-marche', distributors: [] },
    { name: 'Piemonte', slug: 'dsi-2-piemonte', distributors: [] },
    { name: 'Puglia', slug: 'dsi-10-puglia', distributors: [] },
    { name: 'Sardegna', slug: 'dsi-11-sardegna', distributors: [] },
    { name: 'Sicilia', slug: 'dsi-12-sicilia', distributors: [] },
    { name: 'Toscana', slug: 'dsi-6-toscana', distributors: [] },
    { name: 'Trentino Alto Adige', slug: 'dsi-15-trentino_alto_adige', distributors: [] },
    { name: 'Veneto', slug: 'dsi-3-veneto', distributors: [] },
  ];

  return (
    <main className="pt-[104px]">
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/original-site/images/distributori.jpg)' }}>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">Distributori Italia</h1>
            <p className="text-xl text-gray-200">Elenco regioni censite e accesso alle schede distributori.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-gray-600 text-lg">Puoi trovare i serbatoi per gasolio <strong>SMA</strong> in tutta Italia.</p>
            <p className="text-gray-600 mt-4">Per ogni regione è disponibile il collegamento diretto alla relativa scheda originale `dsi-*`.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {regions.map((region, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all ${
                  selectedRegion === region.name ? 'bg-[#b91c1c] text-white' : 'bg-gray-50 hover:bg-red-50'
                }`}
                onClick={() => setSelectedRegion(region.name === selectedRegion ? null : region.name)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className={`w-5 h-5 ${selectedRegion === region.name ? 'text-white' : 'text-[#b91c1c]'}`} />
                    <span className="font-medium">{region.name}</span>
                  </div>
                  {region.distributors.length > 0 && (
                    <span className={`text-xs px-2 py-1 rounded-full ${selectedRegion === region.name ? 'bg-white/20' : 'bg-[#b91c1c]/10 text-[#b91c1c]'}`}>
                      {region.distributors.length} distributore
                    </span>
                  )}
                </div>

                {selectedRegion === region.name && (
                  <div className="mt-4 pt-4 border-t border-white/20 space-y-3">
                    {region.distributors.length > 0 ? (
                      region.distributors.map((dist, idx) => (
                        <div key={idx} className="space-y-2">
                          <p className="font-semibold">{dist.name}</p>
                          <p className="text-sm opacity-90">{dist.address}</p>
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="w-4 h-4" />
                            <span>T: {dist.phone}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="w-4 h-4" />
                            <span>F: {dist.fax}</span>
                          </div>
                          <a href={`mailto:${dist.email}`} className="flex items-center gap-2 text-sm hover:underline">
                            <Mail className="w-4 h-4" />
                            <span>{dist.email}</span>
                          </a>
                        </div>
                      ))
                    ) : (
                      <p className={`text-sm ${selectedRegion === region.name ? 'text-white/90' : 'text-gray-600'}`}>
                        Apri la scheda regione per i dettagli distributori aggiornati.
                      </p>
                    )}

                    {region.slug && (
                      <a
                        href={`https://www.smaserbatoi.it/${region.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 text-sm font-medium ${
                          selectedRegion === region.name ? 'text-white underline' : 'text-[#b91c1c] hover:underline'
                        }`}
                      >
                        Vai alla scheda regione
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">Non trovi un distributore nella tua zona?</p>
            <a
              href="/contatti.aspx"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white font-medium rounded-lg hover:bg-[#991b1b] transition-all"
            >
              Contattaci
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Distributori;
