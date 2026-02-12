import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Truck, Wrench, Send, CheckCircle2 } from 'lucide-react';
import { useI18n } from '../i18n';

const Configuratore = () => {
  const { language } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    vehicle: '',
    tankType: '',
    capacity: '',
    notes: '',
  });

  const t = {
    it: {
      title: 'Configuratori',
      sub: 'Progetta il tuo serbatoio e invia una richiesta tecnica dal nuovo sito.',
      c1: 'Configuratore Serbatoi',
      c1d: 'Definisci tipologia, capacita e vincoli di installazione.',
      c1b: 'Compila richiesta serbatoio',
      c2: 'Configuratore Autocarri',
      c2d: 'Inserisci i dati del veicolo per ricevere una proposta compatibile.',
      c2b: 'Compila richiesta autocarro',
      formTitle: 'Richiesta configurazione',
      name: 'Nome e cognome',
      email: 'Email',
      company: 'Azienda',
      vehicle: 'Modello veicolo',
      tankType: 'Tipologia serbatoio',
      capacity: 'Capacita desiderata (litri)',
      notes: 'Note tecniche',
      send: 'Invia richiesta',
      sent: 'Richiesta pronta: si aprira il tuo client email con i dati compilati.',
      opt1: 'Aria compressa',
      opt2: 'Gasolio',
      opt3: 'Olio idraulico',
      opt4: 'Misto olio-gasolio',
      opt5: 'Acqua',
      opt6: 'Carpenteria',
      mailSubject: 'Richiesta configuratore - nuovo sito',
    },
    en: {
      title: 'Configurators',
      sub: 'Design your tank and send a technical request from the new website.',
      c1: 'Tank Configurator',
      c1d: 'Define type, capacity and installation constraints.',
      c1b: 'Fill tank request',
      c2: 'Truck Configurator',
      c2d: 'Enter vehicle data to receive a compatible proposal.',
      c2b: 'Fill truck request',
      formTitle: 'Configuration request',
      name: 'Full name',
      email: 'Email',
      company: 'Company',
      vehicle: 'Vehicle model',
      tankType: 'Tank type',
      capacity: 'Requested capacity (liters)',
      notes: 'Technical notes',
      send: 'Send request',
      sent: 'Request ready: your mail client will open with pre-filled data.',
      opt1: 'Compressed air',
      opt2: 'Diesel',
      opt3: 'Hydraulic oil',
      opt4: 'Mixed oil-diesel',
      opt5: 'Water',
      opt6: 'Carpentry',
      mailSubject: 'Configurator request - new website',
    },
    de: {
      title: 'Konfiguratoren',
      sub: 'Planen Sie Ihren Tank und senden Sie eine technische Anfrage ueber die neue Website.',
      c1: 'Tank-Konfigurator',
      c1d: 'Typ, Kapazitaet und Einbaubedingungen festlegen.',
      c1b: 'Tankanfrage ausfuellen',
      c2: 'LKW-Konfigurator',
      c2d: 'Fahrzeugdaten eingeben und passende Loesung anfordern.',
      c2b: 'LKW-Anfrage ausfuellen',
      formTitle: 'Konfigurationsanfrage',
      name: 'Vor- und Nachname',
      email: 'E-Mail',
      company: 'Unternehmen',
      vehicle: 'Fahrzeugmodell',
      tankType: 'Tanktyp',
      capacity: 'Gewuenschte Kapazitaet (Liter)',
      notes: 'Technische Hinweise',
      send: 'Anfrage senden',
      sent: 'Anfrage bereit: Ihr E-Mail-Client wird mit vorausgefuellten Daten geoeffnet.',
      opt1: 'Druckluft',
      opt2: 'Diesel',
      opt3: 'Hydraulikoel',
      opt4: 'Misch Oel-Diesel',
      opt5: 'Wasser',
      opt6: 'Sonderbau',
      mailSubject: 'Konfiguratoranfrage - neue Website',
    },
  }[language];

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = [
      `${t.name}: ${formData.name}`,
      `${t.email}: ${formData.email}`,
      `${t.company}: ${formData.company}`,
      `${t.vehicle}: ${formData.vehicle}`,
      `${t.tankType}: ${formData.tankType}`,
      `${t.capacity}: ${formData.capacity}`,
      `${t.notes}:`,
      formData.notes,
    ].join('\n');

    const mailto = `mailto:smaserbatoi@smaserbatoi.it?subject=${encodeURIComponent(t.mailSubject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <main className="pt-[104px]">
      <section className="relative h-[320px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/original-site/images/img-configuratore-autocarri.jpg)' }}>
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-gray-200">{t.sub}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <article className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img src="/original-site/images/img-configuratore-serbatoi.jpg" alt={t.c1} className="w-full h-56 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Wrench className="w-6 h-6 text-[#b91c1c]" />
                  <h2 className="text-2xl font-bold text-gray-900">{t.c1}</h2>
                </div>
                <p className="text-gray-600 mb-6">{t.c1d}</p>
                <a href="#richiesta-configurazione" className="inline-flex items-center gap-2 px-5 py-3 bg-[#b91c1c] text-white rounded-lg font-medium hover:bg-[#991b1b] transition-all">
                  {t.c1b}
                </a>
              </div>
            </article>

            <article className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img src="/original-site/images/img-configuratore-autocarri.jpg" alt={t.c2} className="w-full h-56 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Truck className="w-6 h-6 text-[#b91c1c]" />
                  <h2 className="text-2xl font-bold text-gray-900">{t.c2}</h2>
                </div>
                <p className="text-gray-600 mb-6">{t.c2d}</p>
                <a href="#richiesta-configurazione" className="inline-flex items-center gap-2 px-5 py-3 bg-[#b91c1c] text-white rounded-lg font-medium hover:bg-[#991b1b] transition-all">
                  {t.c2b}
                </a>
              </div>
            </article>
          </div>

          <div id="richiesta-configurazione" className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.formTitle}</h3>

            {submitted && (
              <div className="mb-6 flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm font-medium">{t.sent}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.name}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.email}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t.company}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                />
                <input
                  type="text"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  placeholder={t.vehicle}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                />
                <input
                  type="text"
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleChange}
                  placeholder={t.capacity}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                />
              </div>

              <select
                name="tankType"
                value={formData.tankType}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
              >
                <option value="">{t.tankType}</option>
                <option value={t.opt1}>{t.opt1}</option>
                <option value={t.opt2}>{t.opt2}</option>
                <option value={t.opt3}>{t.opt3}</option>
                <option value={t.opt4}>{t.opt4}</option>
                <option value={t.opt5}>{t.opt5}</option>
                <option value={t.opt6}>{t.opt6}</option>
              </select>

              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={5}
                placeholder={t.notes}
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white rounded-lg font-semibold hover:bg-[#991b1b] transition-all"
              >
                <Send className="w-5 h-5" />
                {t.send}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Configuratore;
