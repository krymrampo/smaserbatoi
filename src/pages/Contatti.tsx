import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { useI18n } from '../i18n';

const Contatti = () => {
  const { language } = useI18n();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  const t = {
    it: { title: 'Contatti', sub: 'Siamo a tua disposizione per qualsiasi informazione', info: 'Richiedi Informazioni', name: 'Nome e Cognome', phone: 'Telefono', company: 'Azienda', message: 'Messaggio', send: 'Invia Messaggio', office: 'Orario Ufficio', thanks: 'Grazie per il tuo messaggio! Ti contatteremo presto.' },
    en: { title: 'Contacts', sub: 'We are available for any information', info: 'Request Information', name: 'Full Name', phone: 'Phone', company: 'Company', message: 'Message', send: 'Send Message', office: 'Office Hours', thanks: 'Thank you for your message! We will contact you soon.' },
    de: { title: 'Kontakte', sub: 'Wir stehen fuer alle Informationen zur Verfuegung', info: 'Information anfordern', name: 'Name und Nachname', phone: 'Telefon', company: 'Unternehmen', message: 'Nachricht', send: 'Nachricht senden', office: 'Buerozeiten', thanks: 'Vielen Dank fuer Ihre Nachricht! Wir melden uns bald.' },
  }[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.thanks);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const locations = [
    { title: language === 'it' ? 'Sede e Stabilimento' : language === 'en' ? 'Head office and Plant' : 'Hauptsitz und Werk', address: 'Via E. Lepido, 182', city: '43122 S. Prospero (PR)' },
    { title: language === 'it' ? 'Stabilimento S. Secondo Parmense' : language === 'en' ? 'S. Secondo Plant' : 'Werk S. Secondo', address: "Via Dall'Aglio, 18/20", city: '43017 S. Secondo P.se (PR)' },
    { title: language === 'it' ? 'Stabilimento Serbia' : language === 'en' ? 'Serbia Plant' : 'Werk Serbien', address: 'SMA D.o.o.', city: 'Vrsac, Serbia' },
  ];

  return (
    <main className="pt-[104px]"><section className="relative h-[400px] overflow-hidden"><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-tank-1.jpg)' }}><div className="absolute inset-0 bg-black/60" /></div><div className="relative h-full container mx-auto px-4 flex items-center"><div className="max-w-2xl text-white"><h1 className="text-5xl font-bold mb-4">{t.title}</h1><p className="text-xl text-gray-200">{t.sub}</p></div></div></section><section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12"><div><h2 className="text-3xl font-bold text-gray-900 mb-8">SMA SERBATOI S.p.A.</h2><div className="bg-gray-50 p-6 rounded-2xl mb-8 space-y-4"><div className="flex items-center gap-4"><div className="w-12 h-12 bg-[#b91c1c] rounded-lg flex items-center justify-center"><Phone className="w-6 h-6 text-white" /></div><div><p className="text-sm text-gray-500">{t.phone}</p><a href="tel:+390521645523" className="text-lg font-medium text-gray-900 hover:text-[#b91c1c]">+39 0521 645523</a></div></div><div className="flex items-center gap-4"><div className="w-12 h-12 bg-[#b91c1c] rounded-lg flex items-center justify-center"><Mail className="w-6 h-6 text-white" /></div><div><p className="text-sm text-gray-500">Email</p><a href="mailto:smaserbatoi@smaserbatoi.it" className="text-lg font-medium text-gray-900 hover:text-[#b91c1c]">smaserbatoi@smaserbatoi.it</a></div></div></div><div className="space-y-4">{locations.map((location, index) => (<div key={index} className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl"><div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0"><MapPin className="w-5 h-5 text-[#b91c1c]" /></div><div><h3 className="font-bold text-gray-900">{location.title}</h3><p className="text-gray-600">{location.address}</p><p className="text-gray-600">{location.city}</p></div></div>))}</div><div className="mt-8 flex items-start gap-4 p-4 bg-amber-50 rounded-xl"><div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0"><Clock className="w-5 h-5 text-amber-700" /></div><div><h3 className="font-bold text-amber-900">{t.office}</h3><p className="text-amber-800">Mon - Fri: 8:30 - 12:30 | 14:00 - 18:00</p></div></div></div><div><h2 className="text-3xl font-bold text-gray-900 mb-8">{t.info}</h2><form onSubmit={handleSubmit} className="space-y-6"><div className="grid md:grid-cols-2 gap-6"><div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t.name} *</label><input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div><div><label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label><input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div></div><div className="grid md:grid-cols-2 gap-6"><div><label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">{t.phone}</label><input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div><div><label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">{t.company}</label><input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div></div><div><label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t.message} *</label><textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div><button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#b91c1c] text-white font-semibold rounded-lg hover:bg-[#991b1b] transition-all"><Send className="w-5 h-5" />{t.send}</button></form></div></div></div></section></main>
  );
};

export default Contatti;
