import { MapPin, Phone, Mail, Info } from 'lucide-react';
import { useState } from 'react';
import { useI18n } from '../i18n';

const Distributori = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const { language } = useI18n();

  const t = {
    it: {
      title: 'Distributori Italia',
      sub: 'Elenco regioni censite e schede integrate nel nuovo sito.',
      p1: 'Puoi trovare i serbatoi SMA in tutta Italia.',
      p2: 'Le informazioni distributori sono progressivamente migrate e mantenute in autonomia.',
      contact: 'Contattaci',
      notFound: 'Non trovi un distributore nella tua zona?',
      regionHint: 'Scheda regione in aggiornamento: contatta il team SMA per i dettagli operativi.',
      sheetCode: 'Codice storico scheda',
    },
    en: {
      title: 'Italian Distributors',
      sub: 'Indexed regions and sheets integrated in the new website.',
      p1: 'You can find SMA tanks throughout Italy.',
      p2: 'Distributor information is being migrated and maintained independently.',
      contact: 'Contact us',
      notFound: 'Cannot find a distributor in your area?',
      regionHint: 'Regional sheet is being updated: contact the SMA team for operational details.',
      sheetCode: 'Legacy sheet code',
    },
    de: {
      title: 'Vertriebspartner Italien',
      sub: 'Erfasste Regionen mit in die neue Website integrierten Daten.',
      p1: 'SMA-Behaelter sind in ganz Italien verfuegbar.',
      p2: 'Vertriebspartnerdaten werden schrittweise migriert und unabhaengig gepflegt.',
      contact: 'Kontakt',
      notFound: 'Kein Vertriebspartner in Ihrer Region?',
      regionHint: 'Regionsdaten werden aktualisiert: Bitte kontaktieren Sie das SMA-Team fuer Details.',
      sheetCode: 'Historischer Blattcode',
    },
  }[language];

  const regions = [
    {
      name: 'Calabria',
      slug: '',
      distributors: [{ name: 'MAURELLI DISTRIBUZIONE S.p.A. - Filiale di Cosenza', address: 'C.da Coda di Volpe Rende (CS)', phone: '0984 839394', fax: '0984 839504', email: 'infocosenza@maurelli.it' }],
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
            <h1 className="text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-gray-200">{t.sub}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-gray-600 text-lg">{t.p1}</p>
            <p className="text-gray-600 mt-4">{t.p2}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {regions.map((region, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all ${selectedRegion === region.name ? 'bg-[#b91c1c] text-white' : 'bg-gray-50 hover:bg-red-50'}`}
                onClick={() => setSelectedRegion(region.name === selectedRegion ? null : region.name)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className={`w-5 h-5 ${selectedRegion === region.name ? 'text-white' : 'text-[#b91c1c]'}`} />
                    <span className="font-medium">{region.name}</span>
                  </div>
                  {region.distributors.length > 0 && (
                    <span className={`text-xs px-2 py-1 rounded-full ${selectedRegion === region.name ? 'bg-white/20' : 'bg-[#b91c1c]/10 text-[#b91c1c]'}`}>
                      {region.distributors.length}
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
                      <p className="text-sm text-white/90">{t.regionHint}</p>
                    )}

                    {region.slug && (
                      <div className="inline-flex items-center gap-2 text-sm text-white/90">
                        <Info className="w-4 h-4" />
                        <span>{t.sheetCode}: {region.slug}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">{t.notFound}</p>
            <a href="/contatti.aspx" className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white font-medium rounded-lg hover:bg-[#991b1b] transition-all">
              {t.contact}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Distributori;
