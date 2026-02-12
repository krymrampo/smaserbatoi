import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import type { Page } from '../App';
import { useI18n } from '../i18n';

interface NavItem {
  label: string;
  page: Page;
}

interface NavbarProps {
  setPage: (page: Page) => void;
  currentPage: Page;
}

const Navbar = ({ setPage, currentPage }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { language, setLanguage } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tr = {
    it: {
      profile: 'Profilo',
      products: 'Prodotti',
      home: 'Home',
      references: 'Referenze',
      distributors: 'Distributori',
      news: 'News',
      contacts: 'Contatti',
      reserved: 'Area Riservata',
      company: 'Azienda',
      technology: 'Tecnologia',
      quality: 'Qualita e Omologazioni',
      packaging: 'Imballaggi',
      whistleblowing: 'Whistleblowing',
      air: 'Aria Compressa',
      diesel: 'Gasolio',
      hydraulic: 'Olio Idraulico',
      mixed: 'Misti Olio-Gasolio',
      water: 'Acqua',
      carpentry: 'Carpenteria',
      configurator: 'Configuratore',
    },
    en: {
      profile: 'Profile',
      products: 'Products',
      home: 'Home',
      references: 'References',
      distributors: 'Distributors',
      news: 'News',
      contacts: 'Contacts',
      reserved: 'Restricted Area',
      company: 'Company',
      technology: 'Technology',
      quality: 'Quality and Approvals',
      packaging: 'Packaging',
      whistleblowing: 'Whistleblowing',
      air: 'Compressed Air',
      diesel: 'Diesel',
      hydraulic: 'Hydraulic Oil',
      mixed: 'Mixed Oil-Diesel',
      water: 'Water',
      carpentry: 'Carpentry',
      configurator: 'Configurator',
    },
    de: {
      profile: 'Profil',
      products: 'Produkte',
      home: 'Startseite',
      references: 'Referenzen',
      distributors: 'Vertriebspartner',
      news: 'News',
      contacts: 'Kontakte',
      reserved: 'Reservierter Bereich',
      company: 'Unternehmen',
      technology: 'Technologie',
      quality: 'Qualitaet und Zulassungen',
      packaging: 'Verpackung',
      whistleblowing: 'Whistleblowing',
      air: 'Druckluft',
      diesel: 'Diesel',
      hydraulic: 'Hydraulikoel',
      mixed: 'Misch Oel-Diesel',
      water: 'Wasser',
      carpentry: 'Sonderbau',
      configurator: 'Konfigurator',
    },
  }[language];

  const handlePageClick = (page: Page) => {
    setPage(page);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const simpleNavItems: NavItem[] = [
    { label: tr.home, page: 'home' },
    { label: tr.references, page: 'referenze' },
    { label: tr.distributors, page: 'distributori' },
    { label: tr.news, page: 'news' },
    { label: tr.contacts, page: 'contatti' },
  ];

  const profileItems: NavItem[] = [
    { label: tr.company, page: 'azienda' },
    { label: tr.technology, page: 'tecnologia' },
    { label: tr.quality, page: 'qualita' },
    { label: tr.packaging, page: 'imballaggi' },
  ];

  const productItems: NavItem[] = [
    { label: tr.air, page: 'aria-compressa' },
    { label: tr.diesel, page: 'gasolio' },
    { label: tr.hydraulic, page: 'olio-idraulico' },
    { label: tr.mixed, page: 'misti' },
    { label: tr.water, page: 'acqua' },
    { label: tr.carpentry, page: 'carpenteria' },
    { label: tr.configurator, page: 'configuratore' },
  ];

  const isActive = (page: Page) => currentPage === page;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="bg-[#b91c1c] text-white py-1.5">
        <div className="container mx-auto px-4 flex justify-end items-center gap-3 text-sm">
          <button onClick={() => setLanguage('en')} className={`hover:underline transition-all ${language === 'en' ? 'font-semibold' : ''}`}>English</button>
          <span>|</span>
          <button onClick={() => setLanguage('de')} className={`hover:underline transition-all ${language === 'de' ? 'font-semibold' : ''}`}>Deutsch</button>
          <span>|</span>
          <button onClick={() => setLanguage('it')} className={`hover:underline transition-all ${language === 'it' ? 'font-semibold' : ''}`}>Italiano</button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => handlePageClick('home')} className="flex items-center gap-3">
            <div className="relative">
              <div className="text-4xl font-black text-[#b91c1c] tracking-tighter">SMA</div>
              <div className="text-xs font-semibold text-gray-700 tracking-widest uppercase">Serbatoi Spa</div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => handlePageClick('home')}
              className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all rounded-md ${
                isActive('home') ? 'text-[#b91c1c] bg-red-50' : 'text-gray-700 hover:text-[#b91c1c] hover:bg-gray-50'
              }`}
            >
              {tr.home}
            </button>

            <div className="relative nav-item" onMouseEnter={() => setOpenDropdown('profilo')} onMouseLeave={() => setOpenDropdown(null)}>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#b91c1c] hover:bg-gray-50 transition-all rounded-md">
                {tr.profile}
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 nav-dropdown ${openDropdown === 'profilo' ? 'opacity-100 visible translate-y-0' : ''}`}>
                <div className="py-2">
                  {profileItems.map((child) => (
                    <button
                      key={child.label}
                      onClick={() => handlePageClick(child.page)}
                      className={`block w-full text-left px-4 py-2.5 text-sm transition-all ${
                        isActive(child.page) ? 'text-[#b91c1c] bg-red-50 font-medium' : 'text-gray-600 hover:text-[#b91c1c] hover:bg-gray-50'
                      }`}
                    >
                      {child.label}
                    </button>
                  ))}
                  <a
                    href="https://whistleblowing.smaserbatoi.it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left px-4 py-2.5 text-sm transition-all text-gray-600 hover:text-[#b91c1c] hover:bg-gray-50"
                  >
                    {tr.whistleblowing}
                  </a>
                </div>
              </div>
            </div>

            <div className="relative nav-item" onMouseEnter={() => setOpenDropdown('prodotti')} onMouseLeave={() => setOpenDropdown(null)}>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#b91c1c] hover:bg-gray-50 transition-all rounded-md">
                {tr.products}
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 nav-dropdown ${openDropdown === 'prodotti' ? 'opacity-100 visible translate-y-0' : ''}`}>
                <div className="py-2">
                  {productItems.map((child) => (
                    <button
                      key={child.label}
                      onClick={() => handlePageClick(child.page)}
                      className={`block w-full text-left px-4 py-2.5 text-sm transition-all ${
                        isActive(child.page) ? 'text-[#b91c1c] bg-red-50 font-medium' : 'text-gray-600 hover:text-[#b91c1c] hover:bg-gray-50'
                      }`}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {simpleNavItems.slice(1).map((item) => (
              <button
                key={item.label}
                onClick={() => handlePageClick(item.page)}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all rounded-md ${
                  isActive(item.page) ? 'text-[#b91c1c] bg-red-50' : 'text-gray-700 hover:text-[#b91c1c] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => handlePageClick('area-riservata')}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-[#b91c1c] text-white text-sm font-medium rounded-lg hover:bg-[#991b1b] transition-all shadow-md hover:shadow-lg"
          >
            {tr.reserved}
          </button>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-gray-700 hover:text-[#b91c1c] transition-all">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="container mx-auto px-4 py-4">
            <button onClick={() => handlePageClick('home')} className={`block w-full text-left py-3 text-sm font-medium ${isActive('home') ? 'text-[#b91c1c]' : 'text-gray-700'}`}>
              {tr.home}
            </button>

            <div className="border-b border-gray-100">
              <span className="block py-3 text-sm font-medium text-gray-700">{tr.profile}</span>
              <div className="pl-4 pb-3">
                {profileItems.map((child) => (
                  <button key={child.label} onClick={() => handlePageClick(child.page)} className="block w-full text-left py-2 text-sm text-gray-600 hover:text-[#b91c1c]">
                    {child.label}
                  </button>
                ))}
                <a
                  href="https://whistleblowing.smaserbatoi.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left py-2 text-sm text-gray-600 hover:text-[#b91c1c]"
                >
                  {tr.whistleblowing}
                </a>
              </div>
            </div>

            <div className="border-b border-gray-100">
              <span className="block py-3 text-sm font-medium text-gray-700">{tr.products}</span>
              <div className="pl-4 pb-3">
                {productItems.map((child) => (
                  <button key={child.label} onClick={() => handlePageClick(child.page)} className="block w-full text-left py-2 text-sm text-gray-600 hover:text-[#b91c1c]">
                    {child.label}
                  </button>
                ))}
              </div>
            </div>

            {simpleNavItems.slice(1).map((item) => (
              <button
                key={item.label}
                onClick={() => handlePageClick(item.page)}
                className={`block w-full text-left py-3 text-sm font-medium border-b border-gray-100 ${isActive(item.page) ? 'text-[#b91c1c]' : 'text-gray-700'}`}
              >
                {item.label}
              </button>
            ))}

            <button onClick={() => handlePageClick('area-riservata')} className="block w-full mt-4 px-5 py-3 bg-[#b91c1c] text-white text-center text-sm font-medium rounded-lg">
              {tr.reserved}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
