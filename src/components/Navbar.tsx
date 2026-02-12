import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import type { Page } from '../App';

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageClick = (page: Page) => {
    setPage(page);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const simpleNavItems: NavItem[] = [
    { label: 'Home', page: 'home' },
    { label: 'Referenze', page: 'referenze' },
    { label: 'Distributori', page: 'distributori' },
    { label: 'News', page: 'news' },
    { label: 'Contatti', page: 'contatti' },
  ];

  const profileItems: NavItem[] = [
    { label: 'Azienda', page: 'azienda' },
    { label: 'Tecnologia', page: 'tecnologia' },
    { label: 'Qualità e Omologazioni', page: 'qualita' },
    { label: 'Imballaggi', page: 'imballaggi' },
  ];

  const productItems: NavItem[] = [
    { label: 'Aria Compressa', page: 'aria-compressa' },
    { label: 'Gasolio', page: 'gasolio' },
    { label: 'Olio Idraulico', page: 'olio-idraulico' },
    { label: 'Misti Olio-Gasolio', page: 'misti' },
    { label: 'Acqua', page: 'acqua' },
    { label: 'Carpenteria', page: 'carpenteria' },
    { label: 'Configuratore', page: 'configuratore' },
  ];

  const isActive = (page: Page) => currentPage === page;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Top bar */}
      <div className="bg-[#b91c1c] text-white py-1.5">
        <div className="container mx-auto px-4 flex justify-end items-center gap-4 text-sm">
          <button className="hover:underline transition-all">English</button>
          <span>|</span>
          <button className="hover:underline transition-all">Deutsch</button>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => handlePageClick('home')} className="flex items-center gap-3">
            <div className="relative">
              <div className="text-4xl font-black text-[#b91c1c] tracking-tighter">
                SMA
              </div>
              <div className="text-xs font-semibold text-gray-700 tracking-widest uppercase">
                Serbatoi Spa
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Home */}
            <button
              onClick={() => handlePageClick('home')}
              className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all rounded-md ${
                isActive('home')
                  ? 'text-[#b91c1c] bg-red-50'
                  : 'text-gray-700 hover:text-[#b91c1c] hover:bg-gray-50'
              }`}
            >
              Home
            </button>

            {/* Profilo Dropdown */}
            <div
              className="relative nav-item"
              onMouseEnter={() => setOpenDropdown('profilo')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#b91c1c] hover:bg-gray-50 transition-all rounded-md">
                Profilo
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 nav-dropdown ${
                  openDropdown === 'profilo' ? 'opacity-100 visible translate-y-0' : ''
                }`}
              >
                <div className="py-2">
                  {profileItems.map((child) => (
                    <button
                      key={child.label}
                      onClick={() => handlePageClick(child.page)}
                      className={`block w-full text-left px-4 py-2.5 text-sm transition-all ${
                        isActive(child.page)
                          ? 'text-[#b91c1c] bg-red-50 font-medium'
                          : 'text-gray-600 hover:text-[#b91c1c] hover:bg-gray-50'
                      }`}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Prodotti Dropdown */}
            <div
              className="relative nav-item"
              onMouseEnter={() => setOpenDropdown('prodotti')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#b91c1c] hover:bg-gray-50 transition-all rounded-md">
                Prodotti
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 nav-dropdown ${
                  openDropdown === 'prodotti' ? 'opacity-100 visible translate-y-0' : ''
                }`}
              >
                <div className="py-2">
                  {productItems.map((child) => (
                    <button
                      key={child.label}
                      onClick={() => handlePageClick(child.page)}
                      className={`block w-full text-left px-4 py-2.5 text-sm transition-all ${
                        isActive(child.page)
                          ? 'text-[#b91c1c] bg-red-50 font-medium'
                          : 'text-gray-600 hover:text-[#b91c1c] hover:bg-gray-50'
                      }`}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Other nav items */}
            {simpleNavItems.slice(1).map((item) => (
              <button
                key={item.label}
                onClick={() => handlePageClick(item.page)}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all rounded-md ${
                  isActive(item.page)
                    ? 'text-[#b91c1c] bg-red-50'
                    : 'text-gray-700 hover:text-[#b91c1c] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Area Riservata Button */}
          <button
            onClick={() => handlePageClick('area-riservata')}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-[#b91c1c] text-white text-sm font-medium rounded-lg hover:bg-[#991b1b] transition-all shadow-md hover:shadow-lg"
          >
            Area Riservata
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#b91c1c] transition-all"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="container mx-auto px-4 py-4">
            <button
              onClick={() => handlePageClick('home')}
              className={`block w-full text-left py-3 text-sm font-medium ${
                isActive('home') ? 'text-[#b91c1c]' : 'text-gray-700'
              }`}
            >
              Home
            </button>

            {/* Profilo */}
            <div className="border-b border-gray-100">
              <span className="block py-3 text-sm font-medium text-gray-700">Profilo</span>
              <div className="pl-4 pb-3">
                {profileItems.map((child) => (
                  <button
                    key={child.label}
                    onClick={() => handlePageClick(child.page)}
                    className="block w-full text-left py-2 text-sm text-gray-600 hover:text-[#b91c1c]"
                  >
                    {child.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Prodotti */}
            <div className="border-b border-gray-100">
              <span className="block py-3 text-sm font-medium text-gray-700">Prodotti</span>
              <div className="pl-4 pb-3">
                {productItems.map((child) => (
                  <button
                    key={child.label}
                    onClick={() => handlePageClick(child.page)}
                    className="block w-full text-left py-2 text-sm text-gray-600 hover:text-[#b91c1c]"
                  >
                    {child.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Other items */}
            {simpleNavItems.slice(1).map((item) => (
              <button
                key={item.label}
                onClick={() => handlePageClick(item.page)}
                className={`block w-full text-left py-3 text-sm font-medium border-b border-gray-100 ${
                  isActive(item.page) ? 'text-[#b91c1c]' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => handlePageClick('area-riservata')}
              className="block w-full mt-4 px-5 py-3 bg-[#b91c1c] text-white text-center text-sm font-medium rounded-lg"
            >
              Area Riservata
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
