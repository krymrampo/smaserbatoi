import { Building2, Globe } from 'lucide-react';

const Referenze = () => {
  const clients = [
    { name: 'Volvo', website: 'http://www.volvo.com' },
    { name: 'Iveco', website: 'http://www.iveco.com' },
    { name: 'Hyva', website: 'http://www.hyva.com' },
    { name: 'Schwarzmüller', website: 'http://www.schwarzmueller.com' },
    { name: 'Azimut Yachts', website: 'http://www.azimutyachts.com/' },
    { name: 'Van Hool', website: 'http://www.vanhool.com/' },
    { name: 'Pirelli', website: 'http://www.pirelli.com' },
    { name: 'Manitou', website: 'http://www.manitou.com' },
    { name: 'Alstom', website: 'http://www.alstom.com' },
    { name: 'PM Group', website: 'http://www.pm-group.eu/web/pmgroup/home' },
    { name: 'Terex', website: 'http://www.terex.com/' },
    { name: 'Haldex', website: 'http://www.haldex.com/' },
  ];

  return (
    <main className="pt-[104px]">
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-tank-2.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">Referenze</h1>
            <p className="text-xl text-gray-200">
              I nostri clienti in tutto il mondo
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-[#b91c1c]" />
              <h2 className="text-3xl font-bold text-gray-900">
                Collaborazioni Internazionali
              </h2>
            </div>
            <p className="text-gray-600 text-lg">
              <strong>SMA Serbatoi S.p.A.</strong> collabora con le principali aziende 
              industriali in tutto il mondo, nei più diversi settori.
            </p>
            <p className="text-gray-600 mt-4">
              I clienti considerano <strong>SMA</strong> partner affidabile nella 
              progettazione e fornitura di serbatoi di metallo.
            </p>
          </div>

          {/* Clients Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {clients.map((client, index) => (
              <a
                key={index}
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-red-50 transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <Building2 className="w-6 h-6 text-[#b91c1c]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-[#b91c1c] transition-colors">
                    {client.name}
                  </h3>
                  <span className="text-sm text-gray-500">Visita sito →</span>
                </div>
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="text-4xl font-bold text-[#b91c1c] mb-2">12+</div>
              <div className="text-gray-600">Clienti principali</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="text-4xl font-bold text-[#b91c1c] mb-2">50%</div>
              <div className="text-gray-600">Export produzione</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="text-4xl font-bold text-[#b91c1c] mb-2">60+</div>
              <div className="text-gray-600">Anni di esperienza</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Referenze;
