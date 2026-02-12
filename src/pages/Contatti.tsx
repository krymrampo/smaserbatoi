import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const Contatti = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Grazie per il tuo messaggio! Ti contatteremo presto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const locations = [
    {
      title: 'Sede e Stabilimento',
      address: 'Via E. Lepido, 182',
      city: '43122 S. Prospero (PR)',
      phone: '+39 0521 645523',
      fax: '+39 0521 645255',
    },
    {
      title: 'Stabilimento S. Secondo Parmense',
      address: "Via Dall'Aglio, 18/20",
      city: '43017 S. Secondo P.se (PR)',
      phone: '',
      fax: '',
    },
    {
      title: 'Stabilimento Serbia',
      address: 'SMA D.o.o.',
      city: 'Vršac, Serbia',
      phone: '',
      fax: '',
    },
  ];

  return (
    <main className="pt-[104px]">
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-tank-1.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">Contatti</h1>
            <p className="text-xl text-gray-200">
              Siamo a tua disposizione per qualsiasi informazione
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                SMA SERBATOI S.p.A.
              </h2>

              {/* Main Contact */}
              <div className="bg-gray-50 p-6 rounded-2xl mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#b91c1c] rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Telefono</p>
                      <a href="tel:+390521645523" className="text-lg font-medium text-gray-900 hover:text-[#b91c1c]">
                        +39 0521 645523
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#b91c1c] rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Fax</p>
                      <p className="text-lg font-medium text-gray-900">+39 0521 645255</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#b91c1c] rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href="mailto:smaserbatoi@smaserbatoi.it" className="text-lg font-medium text-gray-900 hover:text-[#b91c1c]">
                        smaserbatoi@smaserbatoi.it
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#b91c1c]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{location.title}</h3>
                      <p className="text-gray-600">{location.address}</p>
                      <p className="text-gray-600">{location.city}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="mt-8 flex items-start gap-4 p-4 bg-amber-50 rounded-xl">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-bold text-amber-900">Orario Ufficio</h3>
                  <p className="text-amber-800">Lunedì - Venerdì: 8:30 - 12:30 | 14:00 - 18:00</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Richiedi Informazioni
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b91c1c] focus:border-transparent outline-none transition-all"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b91c1c] focus:border-transparent outline-none transition-all"
                      placeholder="La tua email"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b91c1c] focus:border-transparent outline-none transition-all"
                      placeholder="Il tuo telefono"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Azienda
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b91c1c] focus:border-transparent outline-none transition-all"
                      placeholder="Nome azienda"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b91c1c] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Scrivi il tuo messaggio..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#b91c1c] text-white font-semibold rounded-lg hover:bg-[#991b1b] transition-all"
                >
                  <Send className="w-5 h-5" />
                  Invia Messaggio
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contatti;
