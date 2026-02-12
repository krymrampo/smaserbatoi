import { Lock, ShieldCheck, ExternalLink } from 'lucide-react';

const AreaRiservata = () => {
  return (
    <main className="pt-[104px]">
      <section className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-[#b91c1c]" />
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">Area Riservata</h1>
            <p className="text-xl text-gray-200">Accesso dedicato a clienti, partner e rete distributiva.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#b91c1c] flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Accesso Portale</h2>
                <p className="text-gray-600">Per entrare nell'area privata utilizza il portale originale SMA Serbatoi.</p>
              </div>
            </div>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#b91c1c]" /> Documentazione dedicata</li>
              <li className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#b91c1c]" /> Materiale tecnico riservato</li>
              <li className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#b91c1c]" /> Contenuti per rete vendita</li>
            </ul>

            <a
              href="https://www.smaserbatoi.it/area-riservata.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white rounded-lg font-medium hover:bg-[#991b1b] transition-all"
            >
              Vai all'area riservata
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AreaRiservata;
