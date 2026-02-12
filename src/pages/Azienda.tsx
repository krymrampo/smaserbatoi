import { CheckCircle, TrendingUp, Users, Building2 } from 'lucide-react';

const Azienda = () => {
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
            <h1 className="text-5xl font-bold mb-4">Azienda</h1>
            <p className="text-xl text-gray-200">
              Tradizione, innovazione e qualità dal 1963
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                SMA Serbatoi S.p.A.
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  SMA Serbatoi S.p.A. è un'azienda specializzata nella progettazione e nella 
                  fabbricazione di <strong>serbatoi metallici per autocarri, imbarcazioni, 
                  veicoli rotabili e mezzi di trasporto vari</strong>, leader in Italia e tra 
                  i maggiori costruttori a livello europeo.
                </p>
                <p className="mb-4">
                  L'azienda ha iniziato la propria attività nel <strong>1963</strong>, grazie 
                  ai fratelli Rampini, partendo dalla via Emilia, epica arteria di traffici 
                  e commerci a San Prospero di Parma, dove tuttora ha la sede.
                </p>
                <p className="mb-4">
                  Da piccola officina si è trasformata negli anni in <strong>azienda europea</strong> che 
                  esporta circa la metà della propria produzione.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Dati Aziendali
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#b91c1c] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">170</div>
                    <div className="text-gray-600">Dipendenti</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#b91c1c] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">16.000 mq</div>
                    <div className="text-gray-600">Stabilimenti coperti</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#b91c1c] rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">50%</div>
                    <div className="text-gray-600">Export su produzione totale</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stabilimenti */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Gli Stabilimenti SMA
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Il gruppo SMA opera con diversi stabilimenti produttivi per un totale di 
            16.000 mq coperti dislocati su una superficie di oltre 75.000 mq.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-16 h-16 bg-[#b91c1c] rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sede Principale</h3>
              <p className="text-gray-600 mb-4">
                Via E. Lepido, 182<br />
                43122 S. Prospero (PR)
              </p>
              <p className="text-sm text-gray-500">
                Area totale: 45.000 mq
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-16 h-16 bg-[#b91c1c] rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Stabilimento S. Secondo</h3>
              <p className="text-gray-600 mb-4">
                Via Dall'Aglio, 18/20<br />
                43017 S. Secondo P.se (PR)
              </p>
              <p className="text-sm text-gray-500">
                Produzione specializzata
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-16 h-16 bg-[#b91c1c] rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Stabilimento Serbia</h3>
              <p className="text-gray-600 mb-4">
                SMA D.o.o.<br />
                Vršac, Serbia
              </p>
              <p className="text-sm text-gray-500">
                Area totale: 30.000 mq
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gamma Produttiva */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Gamma Produttiva
            </h2>
            <p className="text-gray-600 text-center mb-12">
              La gamma produttiva è composta da serbatoi per diverse applicazioni, 
              tutti certificati secondo le normative internazionali.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Olio idraulico',
                'Carburante',
                'Aria compressa',
                'Serbatoi misti per olio e gasolio',
                'Acqua',
                'Serbatoi su disegno personalizzati',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-[#b91c1c] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-red-50 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Certificazioni
              </h3>
              <p className="text-gray-600 mb-4">
                I serbatoi hanno ottenuto le certificazioni da:
              </p>
              <div className="flex flex-wrap gap-3">
                {['TÜV Bayern', 'Ministero dei Trasporti Italia', 'ASME USA', 'Bureau Veritas ICEPI', 'RINA'].map((cert, index) => (
                  <span key={index} className="px-4 py-2 bg-white text-[#b91c1c] font-medium rounded-full text-sm">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            La Nostra Missione
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            SMA Serbatoi S.p.A. è in costante ricerca di nuove applicazioni e soluzioni. 
            Propone una vasta gamma di serbatoi standard disponibili a magazzino e di tutti 
            i componenti necessari per il completamento del serbatoio.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Costruisce e personalizza serbatoi in base alle richieste del cliente 
            utilizzando materiali di primissima qualità.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Azienda;
