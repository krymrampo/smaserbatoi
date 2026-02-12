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
import Distributori from './pages/Distributori';
import News from './pages/News';
import Contatti from './pages/Contatti';
import Configuratore from './pages/Configuratore';
import AreaRiservata from './pages/AreaRiservata';
import Whistleblowing from './pages/Whistleblowing';
import ElencoProdotti from './pages/ElencoProdotti';
import AriaPopupScheda from './pages/AriaPopupScheda';
import AriaPopupAccessori from './pages/AriaPopupAccessori';
import AriaPopupGrafico from './pages/AriaPopupGrafico';
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
  | 'elenco-prodotti'
  | 'aria-popup-scheda'
  | 'aria-popup-accessori'
  | 'aria-popup-grafico'
  | 'distributori'
  | 'news'
  | 'contatti'
  | 'area-riservata'
  | 'whistleblowing';

type RouteMatch = { page: Page; language?: Language };

const pageToPathByLanguage: Record<Language, Record<Page, string>> = {
  it: {
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
    'elenco-prodotti': '/elenco-prodotti.htm',
    'aria-popup-scheda': '/popup/standard-aria-scheda.htm',
    'aria-popup-accessori': '/popup/standard-aria-accessori.htm',
    'aria-popup-grafico': '/popup/standard-aria-grafico.htm',
    distributori: '/distributori-italia.aspx',
    news: '/news.aspx',
    contatti: '/contatti.aspx',
    'area-riservata': '/area-riservata.aspx',
    whistleblowing: '/whistleblowing.aspx',
  },
  en: {
    home: '/english/default.aspx',
    azienda: '/english/azienda.aspx',
    tecnologia: '/english/tecnologia.aspx',
    qualita: '/english/qualita.aspx',
    imballaggi: '/english/imballaggi.aspx',
    'aria-compressa': '/english/prd-4-aria_compressa',
    gasolio: '/english/prd-1-gasolio',
    'olio-idraulico': '/english/prd-2-olio',
    misti: '/english/prd-3-misti',
    acqua: '/english/prd-5-acqua',
    carpenteria: '/english/prd-6-carpenteria',
    configuratore: '/english/configuratore.aspx',
    'elenco-prodotti': '/english/elenco-prodotti.htm',
    'aria-popup-scheda': '/english/popup/standard-aria-scheda.htm',
    'aria-popup-accessori': '/english/popup/standard-aria-accessori.htm',
    'aria-popup-grafico': '/english/popup/standard-aria-grafico.htm',
    distributori: '/distributori-italia.aspx',
    news: '/english/news.aspx',
    contatti: '/english/contatti.aspx',
    'area-riservata': '/english/area-riservata.aspx',
    whistleblowing: '/english/whistleblowing.aspx',
  },
  de: {
    home: '/deutsch/default.aspx',
    azienda: '/deutsch/azienda.aspx',
    tecnologia: '/deutsch/tecnologia.aspx',
    qualita: '/deutsch/qualita.aspx',
    imballaggi: '/deutsch/imballaggi.aspx',
    'aria-compressa': '/deutsch/prd-4-aria_compressa',
    gasolio: '/deutsch/prd-1-gasolio',
    'olio-idraulico': '/deutsch/prd-2-olio',
    misti: '/deutsch/prd-3-misti',
    acqua: '/deutsch/prd-5-acqua',
    carpenteria: '/deutsch/prd-6-carpenteria',
    configuratore: '/deutsch/configuratore.aspx',
    'elenco-prodotti': '/deutsch/elenco-prodotti.htm',
    'aria-popup-scheda': '/deutsch/popup/standard-aria-scheda.htm',
    'aria-popup-accessori': '/deutsch/popup/standard-aria-accessori.htm',
    'aria-popup-grafico': '/deutsch/popup/standard-aria-grafico.htm',
    distributori: '/distributori-italia.aspx',
    news: '/deutsch/news.aspx',
    contatti: '/deutsch/contatti.aspx',
    'area-riservata': '/deutsch/area-riservata.aspx',
    whistleblowing: '/deutsch/whistleblowing.aspx',
  },
};

const extraPathToRoute: Record<string, RouteMatch> = {
  '/default.aspx': { page: 'home', language: 'it' },
  '/contatti': { page: 'contatti', language: 'it' },
  '/news': { page: 'news', language: 'it' },
  '/prodotti': { page: 'aria-compressa', language: 'it' },
  '/whistleblowing': { page: 'whistleblowing', language: 'it' },
  '/referenze.aspx': { page: 'home', language: 'it' },
  '/english/referenze.aspx': { page: 'home', language: 'en' },
  '/deutsch/referenze.aspx': { page: 'home', language: 'de' },
};

const buildPathToRouteMap = (): Record<string, RouteMatch> => {
  const map: Record<string, RouteMatch> = { ...extraPathToRoute };

  (Object.keys(pageToPathByLanguage) as Language[]).forEach((lang) => {
    (Object.entries(pageToPathByLanguage[lang]) as [Page, string][]).forEach(([page, path]) => {
      map[path] = { page, language: lang };
    });
  });

  return map;
};

const pathToRoute = buildPathToRouteMap();

const resolveRouteFromPath = (path: string): RouteMatch => {
  if (pathToRoute[path]) return pathToRoute[path];

  if (path.startsWith('/english/nws-')) return { page: 'news', language: 'en' };
  if (path.startsWith('/deutsch/nws-')) return { page: 'news', language: 'de' };
  if (path.startsWith('/nws-')) return { page: 'news', language: 'it' };

  if (path.startsWith('/dsi-')) return { page: 'distributori', language: 'it' };

  return { page: 'home', language: 'it' };
};

const pathLanguage = (path: string): Language | undefined => {
  if (path.startsWith('/english/')) return 'en';
  if (path.startsWith('/deutsch/')) return 'de';
  return undefined;
};

const getPathForPage = (page: Page, language: Language): string => {
  return pageToPathByLanguage[language][page] ?? pageToPathByLanguage.it[page] ?? '/';
};

function App() {
  const initialRoute = resolveRouteFromPath(window.location.pathname);
  const initialLangFromPath = pathLanguage(window.location.pathname);
  const storedLanguage = window.localStorage.getItem('sma-language');
  const safeStoredLanguage: Language | undefined = storedLanguage === 'it' || storedLanguage === 'en' || storedLanguage === 'de' ? storedLanguage : undefined;

  const [currentPage, setCurrentPage] = useState<Page>(initialRoute.page);
  const [language, setLanguage] = useState<Language>(initialLangFromPath ?? initialRoute.language ?? safeStoredLanguage ?? 'it');

  const navigateToPage = (page: Page) => {
    const nextPath = getPathForPage(page, language);
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
    setCurrentPage(page);
  };

  const setLanguageAndSync = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    const nextPath = getPathForPage(currentPage, nextLanguage);
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
  };

  useEffect(() => {
    const onPopState = () => {
      const route = resolveRouteFromPath(window.location.pathname);
      const langFromPath = pathLanguage(window.location.pathname);

      setCurrentPage(route.page);
      if (langFromPath) {
        setLanguage(langFromPath);
      } else if (route.language) {
        setLanguage(route.language);
      }
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
      case 'elenco-prodotti':
        return <ElencoProdotti />;
      case 'aria-popup-scheda':
        return <AriaPopupScheda />;
      case 'aria-popup-accessori':
        return <AriaPopupAccessori />;
      case 'aria-popup-grafico':
        return <AriaPopupGrafico />;
      case 'distributori':
        return <Distributori />;
      case 'news':
        return <News />;
      case 'contatti':
        return <Contatti />;
      case 'area-riservata':
        return <AreaRiservata />;
      case 'whistleblowing':
        return <Whistleblowing />;
      default:
        return <Home setPage={navigateToPage} />;
    }
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage: setLanguageAndSync }}>
      <div className="min-h-screen flex flex-col">
        <Navbar setPage={navigateToPage} currentPage={currentPage} />
        <div className="flex-grow">{renderPage()}</div>
        <Footer setPage={navigateToPage} />
      </div>
    </I18nContext.Provider>
  );
}

export default App;
