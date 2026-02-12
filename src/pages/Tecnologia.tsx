import { Cog, Ruler, Shield, GraduationCap } from 'lucide-react';

const Tecnologia = () => {
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
            <h1 className="text-5xl font-bold mb-4">Tecnologia</h1>
            <p className="text-xl text-gray-200">
              Innovazione e know-how per serbatoi di alta qualità
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-gray-600 mb-12">
              <p className="mb-4">
                <strong>SMA</strong> progetta e costruisce serbatoi metallici da oltre 30 anni. 
                La notevole esperienza tecnologica, il know-how di processo e la conoscenza del 
                prodotto garantiscono un serbatoio sicuro, secondo i più elevati standard.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="w-14 h-14 bg-[#b91c1c] rounded-lg flex items-center justify-center mb-6">
                  <Ruler className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Progettazione CAD
                </h3>
                <p className="text-gray-600">
                  La progettazione dei serbatoi avviene attingendo dal vasto know-how tecnico 
                  di cui l'azienda dispone, supportato dall'utilizzo di <strong>stazioni CAD 2D e 3D</strong>.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="w-14 h-14 bg-[#b91c1c] rounded-lg flex items-center justify-center mb-6">
                  <Cog className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Produzione Automatizzata
                </h3>
                <p className="text-gray-600">
                  I processi di produzione <strong>altamente automatizzati</strong> garantiscono 
                  un'elevata produttività e costi ridotti.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="w-14 h-14 bg-[#b91c1c] rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Saldatura Certificata
                </h3>
                <p className="text-gray-600">
                  I processi di saldatura sono <strong>certificati e supervisionati</strong> da operatori 
                  qualificati. Controlli radiografici, micro e macrografie, test ad ultrasuoni 
                  confermano il mantenimento ed il progressivo miglioramento degli stessi.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="w-14 h-14 bg-[#b91c1c] rounded-lg flex items-center justify-center mb-6">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Formazione Continua
                </h3>
                <p className="text-gray-600">
                  Lo staff tecnico e commerciale riceve un <strong>addestramento continuo</strong> 
                  assicurando una risposta professionale alle richieste del cliente.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-2xl">
              <p className="text-lg leading-relaxed">
                L'esperienza pluriennale di <strong>SMA Serbatoi S.p.A.</strong> nella progettazione e 
                costruzione, unite alla costante ricerca di nuove soluzioni all'avanguardia, 
                garantiscono un prodotto di alta qualità.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progetti Europei */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Progetti Cofinanziati dal Fondo Europeo di Sviluppo Regionale
            </h2>
            
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <p className="text-gray-600 mb-6">
                Il progetto della SMA Serbatoi SpA si è incentrato sull'acquisto di una nuova 
                soluzione impiantistica per la saldatura per la produzione di serbatoi per 
                aria-acqua in alluminio di grandi dimensioni.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                L'innovativo impianto è così costituito:
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#b91c1c] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-600">
                    Banco di bloccaggio a <strong>controllo numerico</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#b91c1c] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-600">
                    Tornio a due torce ad un asse sottoposto a <strong>controllo numerico</strong> per 
                    la saldatura circonferenziale di serbatoi
                  </span>
                </li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                <p className="text-amber-800 font-medium">
                  Interventi per il risparmio energetico
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Tecnologia;
