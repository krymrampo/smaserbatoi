import { useI18n } from '../i18n';

const AriaPopupScheda = () => {
  const { language } = useI18n();
  const title = language === 'en' ? 'Standard Range' : language === 'de' ? 'Standardsortiment' : 'Gamma Standard';

  return (
    <main className="pt-[104px] bg-gray-100 min-h-screen">
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{title}</h1>
        <div className="grid gap-6">
          <img src="/original-site/images/popup/scheda1.jpg" alt="Scheda 1" className="w-full rounded-xl border border-gray-200 bg-white" />
          <img src="/original-site/images/popup/scheda2.jpg" alt="Scheda 2" className="w-full rounded-xl border border-gray-200 bg-white" />
        </div>
      </section>
    </main>
  );
};

export default AriaPopupScheda;
