import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Page } from '../App';

const slides = [
  {
    image: '/images/hero-tank-1.jpg',
    title: 'MADE IN SMA',
    subtitle: 'Serbatoi metallici di alta qualità dal 1963',
  },
  {
    image: '/images/hero-tank-2.jpg',
    title: 'TECNOLOGIA AVANZATA',
    subtitle: 'Produzione automatizzata e certificata',
  },
  {
    image: '/images/hero-tank-3.jpg',
    title: 'SOLUZIONI CUSTOM',
    subtitle: 'Serbatoi su misura per ogni esigenza',
  },
];

interface HeroProps {
  setPage: (page: Page) => void;
}

const Hero = ({ setPage }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden mt-[104px]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                {slide.subtitle}
              </p>
              <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <button
                  onClick={() => setPage('aria-compressa')}
                  className="px-8 py-3.5 bg-[#b91c1c] text-white font-semibold rounded-lg hover:bg-[#991b1b] transition-all shadow-lg hover:shadow-xl"
                >
                  Scopri i Prodotti
                </button>
                <button
                  onClick={() => setPage('contatti')}
                  className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/30"
                >
                  Contattaci
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
