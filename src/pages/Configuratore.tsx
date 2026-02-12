import { Truck, Wrench, ExternalLink } from 'lucide-react';

const Configuratore = () => {
  return (
    <main className="pt-[104px]">
      <section className="relative h-[320px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/original-site/images/img-configuratore-autocarri.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">Configuratori</h1>
            <p className="text-xl text-gray-200">Progetta il tuo serbatoio e trova la soluzione per il tuo autocarro.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <article className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src="/original-site/images/img-configuratore-serbatoi.jpg"
                alt="Configuratore serbatoi"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Wrench className="w-6 h-6 text-[#b91c1c]" />
                  <h2 className="text-2xl font-bold text-gray-900">Configuratore Serbatoi</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Disegna e configura il serbatoio su specifica, con accessori e geometrie personalizzate.
                </p>
                <a
                  href="https://design.smaserbatoi.it/index-IT.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#b91c1c] text-white rounded-lg font-medium hover:bg-[#991b1b] transition-all"
                >
                  Apri configuratore serbatoi
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>

            <article className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src="/original-site/images/img-configuratore-autocarri.jpg"
                alt="Configuratore autocarri"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Truck className="w-6 h-6 text-[#b91c1c]" />
                  <h2 className="text-2xl font-bold text-gray-900">Configuratore Autocarri</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Ricerca la soluzione più adatta al tuo veicolo e alla configurazione operativa.
                </p>
                <a
                  href="https://www.smaserbatoi.it/configuratore.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#b91c1c] text-white rounded-lg font-medium hover:bg-[#991b1b] transition-all"
                >
                  Apri configuratore autocarri
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Configuratore;
