import { Lock, ShieldCheck, Mail, UserRoundPlus } from 'lucide-react';
import { useI18n } from '../i18n';

const AreaRiservata = () => {
  const { language } = useI18n();
  const t = {
    it: {
      title: 'Area Riservata',
      sub: 'Accesso dedicato a clienti, partner e rete distributiva.',
      h: 'Accesso Portale',
      p: 'L area riservata e gestita sul nuovo sito: puoi richiedere credenziali o supporto direttamente dal team SMA.',
      i1: 'Documentazione dedicata',
      i2: 'Materiale tecnico riservato',
      i3: 'Contenuti per rete vendita',
      b1: 'Richiedi credenziali',
      b2: 'Contatta supporto',
    },
    en: {
      title: 'Restricted Area',
      sub: 'Dedicated access for customers, partners and distributors.',
      h: 'Portal Access',
      p: 'The restricted area is managed on the new site: request credentials or support directly from the SMA team.',
      i1: 'Dedicated documentation',
      i2: 'Restricted technical material',
      i3: 'Sales network contents',
      b1: 'Request credentials',
      b2: 'Contact support',
    },
    de: {
      title: 'Reservierter Bereich',
      sub: 'Zugang fuer Kunden, Partner und Vertriebsnetz.',
      h: 'Portalzugang',
      p: 'Der reservierte Bereich wird auf der neuen Website verwaltet: Zugangsdaten und Support direkt beim SMA-Team anfordern.',
      i1: 'Spezielle Dokumentation',
      i2: 'Vertrauliches technisches Material',
      i3: 'Inhalte fuer Vertriebsnetz',
      b1: 'Zugangsdaten anfordern',
      b2: 'Support kontaktieren',
    },
  }[language];

  const credentialSubject = {
    it: 'Richiesta credenziali area riservata',
    en: 'Restricted area credential request',
    de: 'Anfrage Zugangsdaten reservierter Bereich',
  }[language];

  return (
    <main className="pt-[104px]">
      <section className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-[#b91c1c]" />
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-gray-200">{t.sub}</p>
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
                <h2 className="text-2xl font-bold text-gray-900">{t.h}</h2>
                <p className="text-gray-600">{t.p}</p>
              </div>
            </div>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#b91c1c]" /> {t.i1}</li>
              <li className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#b91c1c]" /> {t.i2}</li>
              <li className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#b91c1c]" /> {t.i3}</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:smaserbatoi@smaserbatoi.it?subject=${encodeURIComponent(credentialSubject)}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#b91c1c] text-white rounded-lg font-medium hover:bg-[#991b1b] transition-all"
              >
                <UserRoundPlus className="w-4 h-4" />
                {t.b1}
              </a>

              <a
                href="/contatti.aspx"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-all"
              >
                <Mail className="w-4 h-4" />
                {t.b2}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AreaRiservata;
