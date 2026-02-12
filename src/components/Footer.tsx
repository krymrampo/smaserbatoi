import { Phone, Mail, MapPin } from 'lucide-react';
import type { Page } from '../App';

interface FooterProps {
  setPage?: (page: Page) => void;
}

const Footer = ({ setPage }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', page: 'home' as Page },
    { label: 'Profilo', page: 'azienda' as Page },
    { label: 'Prodotti', page: 'aria-compressa' as Page },
    { label: 'Referenze', page: 'referenze' as Page },
    { label: 'Distributori', page: 'distributori' as Page },
    { label: 'News', page: 'news' as Page },
    { label: 'Contatti', page: 'contatti' as Page },
    { label: 'Configuratore', page: 'configuratore' as Page },
    { label: 'Area Riservata', page: 'area-riservata' as Page },
  ];

  const handleClick = (page: Page) => {
    if (setPage) {
      setPage(page);
    }
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Navigazione</h4>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleClick(link.page)}
                  className="text-left text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
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
                <a
                  href="mailto:smaserbatoi@smaserbatoi.it"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  smaserbatoi@smaserbatoi.it
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b91c1c] mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Sede e stabilimento:</p>
                  <p className="text-gray-400 text-sm">Via E. Lepido, 182 - 43122 S. Prospero (PR)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b91c1c] mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Stabilimento:</p>
                  <p className="text-gray-400 text-sm">Via Dall'Aglio, 18/20 - 43017 S. Secondo P.se (PR)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logo & Copyright */}
          <div className="flex flex-col items-start lg:items-end">
            <button onClick={() => handleClick('home')} className="mb-6 text-left">
              <div className="text-5xl font-black text-[#b91c1c] tracking-tighter">
                SMA
              </div>
              <div className="text-sm font-semibold text-gray-400 tracking-widest uppercase">
                Serbatoi Spa
              </div>
            </button>
            <div className="text-right">
              <p className="text-gray-500 text-sm">
                Copyright © {currentYear} SMA Serbatoi S.p.A.
              </p>
              <p className="text-gray-500 text-sm">
                Tutti i diritti sono riservati - P.IVA 00165560343
              </p>
              <p className="text-gray-600 text-xs mt-2">
                by <a href="https://www.immagica.it" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Immagica & Partner</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs text-center md:text-left">
              Questo sito utilizza cookies tecnici anche di terze parti per gestire autenticazione, navigazione e statistiche anonime.
            </p>
            <div className="flex gap-4">
              <button className="text-gray-500 hover:text-white text-xs transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-500 hover:text-white text-xs transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
