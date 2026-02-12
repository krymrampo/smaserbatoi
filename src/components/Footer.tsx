import { Phone, Mail, MapPin } from 'lucide-react';
import type { Page } from '../App';
import { useI18n } from '../i18n';

interface FooterProps {
  setPage?: (page: Page) => void;
}

const Footer = ({ setPage }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const { language } = useI18n();

  const tr = {
    it: {
      nav: 'Navigazione',
      home: 'Home',
      profile: 'Profilo',
      products: 'Prodotti',
      references: 'Referenze',
      distributors: 'Distributori',
      news: 'News',
      contacts: 'Contatti',
      configurator: 'Configuratore',
      reserved: 'Area Riservata',
      whistleblowing: 'Whistleblowing',
      office1: 'Sede e stabilimento:',
      office2: 'Stabilimento:',
      rights: 'Tutti i diritti sono riservati',
      cookie: 'Questo sito utilizza cookies tecnici anche di terze parti per gestire autenticazione, navigazione e statistiche anonime.',
      privacy: 'Privacy Policy',
      cookiePolicy: 'Cookie Policy',
    },
    en: {
      nav: 'Navigation',
      home: 'Home',
      profile: 'Profile',
      products: 'Products',
      references: 'References',
      distributors: 'Distributors',
      news: 'News',
      contacts: 'Contacts',
      configurator: 'Configurator',
      reserved: 'Restricted Area',
      whistleblowing: 'Whistleblowing',
      office1: 'Head office and plant:',
      office2: 'Plant:',
      rights: 'All rights reserved',
      cookie: 'This site uses technical and third-party cookies to manage authentication, navigation and anonymous statistics.',
      privacy: 'Privacy Policy',
      cookiePolicy: 'Cookie Policy',
    },
    de: {
      nav: 'Navigation',
      home: 'Startseite',
      profile: 'Profil',
      products: 'Produkte',
      references: 'Referenzen',
      distributors: 'Vertriebspartner',
      news: 'News',
      contacts: 'Kontakte',
      configurator: 'Konfigurator',
      reserved: 'Reservierter Bereich',
      whistleblowing: 'Whistleblowing',
      office1: 'Hauptsitz und Werk:',
      office2: 'Werk:',
      rights: 'Alle Rechte vorbehalten',
      cookie: 'Diese Website verwendet technische und Drittanbieter-Cookies fuer Authentifizierung, Navigation und anonyme Statistik.',
      privacy: 'Datenschutz',
      cookiePolicy: 'Cookie-Richtlinie',
    },
  }[language];

  const footerLinks = [
    { label: tr.home, page: 'home' as Page },
    { label: tr.profile, page: 'azienda' as Page },
    { label: tr.products, page: 'aria-compressa' as Page },
    { label: tr.references, page: 'referenze' as Page },
    { label: tr.distributors, page: 'distributori' as Page },
    { label: tr.news, page: 'news' as Page },
    { label: tr.contacts, page: 'contatti' as Page },
    { label: tr.configurator, page: 'configuratore' as Page },
    { label: tr.reserved, page: 'area-riservata' as Page },
    { label: tr.whistleblowing, page: 'whistleblowing' as Page },
  ];

  const handleClick = (page: Page) => {
    if (setPage) setPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{tr.nav}</h4>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <button key={link.label} onClick={() => handleClick(link.page)} className="text-left text-gray-400 hover:text-white transition-colors text-sm">
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">SMA SERBATOI S.p.A.</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#b91c1c] mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Tel. +39 0521 645523</p>
                  <p className="text-gray-400 text-sm">Fax +39 0521 645255</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#b91c1c]" />
                <a href="mailto:smaserbatoi@smaserbatoi.it" className="text-gray-400 hover:text-white transition-colors text-sm">
                  smaserbatoi@smaserbatoi.it
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b91c1c] mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">{tr.office1}</p>
                  <p className="text-gray-400 text-sm">Via E. Lepido, 182 - 43122 S. Prospero (PR)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b91c1c] mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">{tr.office2}</p>
                  <p className="text-gray-400 text-sm">Via Dall'Aglio, 18/20 - 43017 S. Secondo P.se (PR)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end">
            <button onClick={() => handleClick('home')} className="mb-6 text-left">
              <div className="text-5xl font-black text-[#b91c1c] tracking-tighter">SMA</div>
              <div className="text-sm font-semibold text-gray-400 tracking-widest uppercase">Serbatoi Spa</div>
            </button>
            <div className="text-right">
              <p className="text-gray-500 text-sm">Copyright © {currentYear} SMA Serbatoi S.p.A.</p>
              <p className="text-gray-500 text-sm">{tr.rights} - P.IVA 00165560343</p>
              <p className="text-gray-600 text-xs mt-2">
                by <a href="https://www.immagica.it" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Immagica & Partner</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs text-center md:text-left">{tr.cookie}</p>
            <div className="flex gap-4">
              <button className="text-gray-500 hover:text-white text-xs transition-colors">{tr.privacy}</button>
              <button className="text-gray-500 hover:text-white text-xs transition-colors">{tr.cookiePolicy}</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
