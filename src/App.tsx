import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Azienda from './pages/Azienda';
import Tecnologia from './pages/Tecnologia';
import Qualita from './pages/Qualita';
import Imballaggi from './pages/Imballaggi';
import AriaCompressa from './pages/AriaCompressa';
import Gasolio from './pages/Gasolio';
import OlioIdraulico from './pages/OlioIdraulico';
import Misti from './pages/Misti';
import Acqua from './pages/Acqua';
import Carpenteria from './pages/Carpenteria';
import Referenze from './pages/Referenze';
import Distributori from './pages/Distributori';
import News from './pages/News';
import Contatti from './pages/Contatti';
import Configuratore from './pages/Configuratore';
import AreaRiservata from './pages/AreaRiservata';
import { I18nContext, type Language } from './i18n';

export type Page =
  | 'home'
  | 'azienda'
  | 'tecnologia'
  | 'qualita'
  | 'imballaggi'
  | 'aria-compressa'
  | 'gasolio'
  | 'olio-idraulico'
  | 'misti'
  | 'acqua'
  | 'carpenteria'
  | 'configuratore'
  | 'referenze'
  | 'distributori'
  | 'news'
  | 'contatti'
  | 'area-riservata';

const pathToPage: Record<string, Page> = {
  '/': 'home',
  '/default.aspx': 'home',
  '/azienda.aspx': 'azienda',
  '/tecnologia.aspx': 'tecnologia',
  '/qualita.aspx': 'qualita',
  '/imballaggi.aspx': 'imballaggi',
  '/prd-4-aria_compressa': 'aria-compressa',
  '/prd-1-gasolio': 'gasolio',
  '/prd-2-olio': 'olio-idraulico',
  '/prd-3-misti': 'misti',
  '/prd-5-acqua': 'acqua',
  '/prd-6-carpenteria': 'carpenteria',
  '/configuratore.aspx': 'configuratore',
  '/referenze.aspx': 'referenze',
  '/distributori-italia.aspx': 'distributori',
  '/news.aspx': 'news',
  '/contatti.aspx': 'contatti',
  '/contatti': 'contatti',
  '/news': 'news',
  '/prodotti': 'aria-compressa',
  '/area-riservata.aspx': 'area-riservata',
};

const pageToPath: Record<Page, string> = {
  home: '/',
  azienda: '/azienda.aspx',
  tecnologia: '/tecnologia.aspx',
  qualita: '/qualita.aspx',
  imballaggi: '/imballaggi.aspx',
  'aria-compressa': '/prd-4-aria_compressa',
  gasolio: '/prd-1-gasolio',
  'olio-idraulico': '/prd-2-olio',
  misti: '/prd-3-misti',
  acqua: '/prd-5-acqua',
  carpenteria: '/prd-6-carpenteria',
  configuratore: '/configuratore.aspx',
  referenze: '/referenze.aspx',
  distributori: '/distributori-italia.aspx',
  news: '/news.aspx',
  contatti: '/contatti.aspx',
  'area-riservata': '/area-riservata.aspx',
};

const aliasStarts: Array<{ prefix: string; page: Page }> = [
  { prefix: '/nws-', page: 'news' },
  { prefix: '/dsi-', page: 'distributori' },
];

const resolvePageFromPath = (path: string): Page => {
  if (pathToPage[path]) return pathToPage[path];
  const alias = aliasStarts.find((item) => path.startsWith(item.prefix));
  return alias ? alias.page : 'home';
};

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => resolvePageFromPath(window.location.pathname));
  const [language, setLanguage] = useState<Language>(() => {
    const stored = window.localStorage.getItem('sma-language');
    if (stored === 'it' || stored === 'en' || stored === 'de') return stored;
    return 'it';
  });

  const navigateToPage = (page: Page) => {
    const nextPath = pageToPath[page] ?? '/';
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
    setCurrentPage(page);
  };

  useEffect(() => {
    const onPopState = () => {
      setCurrentPage(resolvePageFromPath(window.location.pathname));
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    window.localStorage.setItem('sma-language', language);
  }, [language]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setPage={navigateToPage} />;
      case 'azienda':
        return <Azienda />;
      case 'tecnologia':
        return <Tecnologia />;
      case 'qualita':
        return <Qualita />;
      case 'imballaggi':
        return <Imballaggi />;
      case 'aria-compressa':
        return <AriaCompressa />;
      case 'gasolio':
        return <Gasolio />;
      case 'olio-idraulico':
        return <OlioIdraulico />;
      case 'misti':
        return <Misti />;
      case 'acqua':
        return <Acqua />;
      case 'carpenteria':
        return <Carpenteria />;
      case 'configuratore':
        return <Configuratore />;
      case 'referenze':
        return <Referenze />;
      case 'distributori':
        return <Distributori />;
      case 'news':
        return <News />;
      case 'contatti':
        return <Contatti />;
      case 'area-riservata':
        return <AreaRiservata />;
      default:
        return <Home setPage={navigateToPage} />;
    }
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage }}>
      <div className="min-h-screen flex flex-col">
        <Navbar setPage={navigateToPage} currentPage={currentPage} />
        <div className="flex-grow">{renderPage()}</div>
        <Footer setPage={navigateToPage} />
      </div>
    </I18nContext.Provider>
  );
}

export default App;
