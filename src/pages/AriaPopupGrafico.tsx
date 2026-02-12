import { useI18n } from '../i18n';

const AriaPopupGrafico = () => {
  const { language } = useI18n();
  const title = language === 'en' ? 'SMA Specialization Area' : language === 'de' ? 'SMA Spezialisierungsbereich' : 'Area di Specializzazione SMA';
  const image = language === 'en' || language === 'de' ? '/original-site/images/popup/grafico-eng.jpg' : '/original-site/images/popup/grafico.jpg';

  return (
    <main className="pt-[104px] bg-gray-100 min-h-screen">
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{title}</h1>
        <img src={image} alt={title} className="w-full rounded-xl border border-gray-200 bg-white" />
      </section>
    </main>
  );
};

export default AriaPopupGrafico;
