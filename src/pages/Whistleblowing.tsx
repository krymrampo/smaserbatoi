import { ShieldAlert, FileText, Mail, LockKeyhole } from 'lucide-react';
import { useI18n } from '../i18n';

const Whistleblowing = () => {
  const { language } = useI18n();

  const t = {
    it: {
      title: 'Whistleblowing',
      sub: 'Canale interno per segnalazioni riservate.',
      h: 'Segnalazioni protette',
      p1: 'Il nuovo sito mantiene una gestione indipendente delle segnalazioni, senza dipendere dal vecchio dominio.',
      p2: 'In assenza di backend dedicato, le segnalazioni vengono instradate tramite canali riservati aziendali.',
      i1: 'Confidenzialita del segnalante',
      i2: 'Tracciamento interno della presa in carico',
      i3: 'Gestione separata dalle richieste commerciali',
      b1: 'Invia segnalazione riservata',
      b2: 'Apri area riservata',
      note: 'Nota: canale web dedicato in corso di attivazione su infrastruttura autonoma.',
    },
    en: {
      title: 'Whistleblowing',
      sub: 'Internal channel for confidential reports.',
      h: 'Protected reporting',
      p1: 'The new website keeps independent reporting management, without relying on the legacy domain.',
      p2: 'Until a dedicated backend is available, reports are routed through internal company channels.',
      i1: 'Reporter confidentiality',
      i2: 'Internal intake tracking',
      i3: 'Separated flow from commercial requests',
      b1: 'Send confidential report',
      b2: 'Open restricted area',
      note: 'Note: dedicated web channel is being activated on independent infrastructure.',
    },
    de: {
      title: 'Whistleblowing',
      sub: 'Interner Kanal fuer vertrauliche Meldungen.',
      h: 'Geschuetzte Meldungen',
      p1: 'Die neue Website verwaltet Meldungen unabhaengig ohne Abhaengigkeit von der alten Domain.',
      p2: 'Bis ein eigenes Backend verfuegbar ist, werden Meldungen ueber interne Kanaele bearbeitet.',
      i1: 'Vertraulichkeit fuer Hinweisgeber',
      i2: 'Interne Nachverfolgung der Bearbeitung',
      i3: 'Getrennter Ablauf von Vertriebsanfragen',
      b1: 'Vertrauliche Meldung senden',
      b2: 'Reservierten Bereich oeffnen',
      note: 'Hinweis: dedizierter Web-Kanal auf eigener Infrastruktur wird eingerichtet.',
    },
  }[language];

  const subjectByLanguage = {
    it: 'Segnalazione riservata - Whistleblowing',
    en: 'Confidential report - Whistleblowing',
    de: 'Vertrauliche Meldung - Whistleblowing',
  }[language];

  const bodyByLanguage = {
    it: 'Descrizione segnalazione:%0D%0A%0D%0ADocumenti allegati (se presenti):',
    en: 'Report description:%0D%0A%0D%0AAttachments (if any):',
    de: 'Beschreibung der Meldung:%0D%0A%0D%0AAnhaenge (falls vorhanden):',
  }[language];

  return (
    <main className="pt-[104px]">
      <section className="relative h-[320px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-[#b91c1c]" />
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-gray-200">{t.sub}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="w-7 h-7 text-[#b91c1c]" />
                <h2 className="text-2xl font-bold text-gray-900">{t.h}</h2>
              </div>
              <p className="text-gray-700 mb-3">{t.p1}</p>
              <p className="text-gray-700 mb-6">{t.p2}</p>

              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-center gap-2"><LockKeyhole className="w-5 h-5 text-[#b91c1c]" /> {t.i1}</li>
                <li className="flex items-center gap-2"><FileText className="w-5 h-5 text-[#b91c1c]" /> {t.i2}</li>
                <li className="flex items-center gap-2"><Mail className="w-5 h-5 text-[#b91c1c]" /> {t.i3}</li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:smaserbatoi@smaserbatoi.it?subject=${encodeURIComponent(subjectByLanguage)}&body=${bodyByLanguage}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#b91c1c] text-white rounded-lg font-medium hover:bg-[#991b1b] transition-all"
                >
                  {t.b1}
                </a>
                <a
                  href="/area-riservata.aspx"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-all"
                >
                  {t.b2}
                </a>
              </div>
            </div>

            <aside className="bg-amber-50 border border-amber-200 rounded-2xl p-6 h-fit">
              <p className="text-amber-900 text-sm font-medium">{t.note}</p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Whistleblowing;
