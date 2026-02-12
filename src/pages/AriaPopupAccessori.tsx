import { useI18n } from '../i18n';

const AriaPopupAccessori = () => {
  const { language } = useI18n();
  const title = language === 'en' ? 'Accessory Range' : language === 'de' ? 'Zubehoersortiment' : 'Gamma Accessori';

  return (
    <main className="pt-[104px] bg-gray-100 min-h-screen">
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{title}</h1>
        <div className="grid gap-6">
          <img src="/original-site/images/popup/accessori1.jpg" alt="Accessori 1" className="w-full rounded-xl border border-gray-200 bg-white" />
          <img src="/original-site/images/popup/accessori2.jpg" alt="Accessori 2" className="w-full rounded-xl border border-gray-200 bg-white" />
          <img src="/original-site/images/popup/accessori3.jpg" alt="Accessori 3" className="w-full rounded-xl border border-gray-200 bg-white" />
        </div>
      </section>
    </main>
  );
};

export default AriaPopupAccessori;
