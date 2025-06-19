'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { oswald, arapey } from '../fonts';

export default function PricingSection() {
  const desktopSlides = [
    { src: '/pricing/desktop/1.png', alt: 'Pricing 1' },
    { src: '/pricing/desktop/2.png', alt: 'Pricing 2' },
    { src: '/pricing/desktop/3.png', alt: 'Pricing 3' },
    { src: '/pricing/desktop/4.png', alt: 'Pricing 4' },
    { src: '/pricing/desktop/5.png', alt: 'Pricing 5' },
    { src: '/pricing/desktop/6.png', alt: 'Pricing 6' },
  ];

  const mobileSlides = [
    { src: '/pricing/mobiles/1.png', alt: 'Pricing 1' },
    { src: '/pricing/mobiles/2.png', alt: 'Pricing 2' },
    { src: '/pricing/mobiles/3.png', alt: 'Pricing 3' },
    { src: '/pricing/mobiles/4.png', alt: 'Pricing 4' },
    { src: '/pricing/mobiles/5.png', alt: 'Pricing 5' },
    { src: '/pricing/mobiles/6.png', alt: 'Pricing 6' },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slideWidth = isMobile ? 240 : 1000;
  const slideHeight = isMobile ? 320 : 500;

  const slides = isMobile ? mobileSlides : desktopSlides;

  return (
    <section
      id="pricing"
      className="scroll-mt-20 relative bg-gray-50 pt-16 sm:pt-14 md:pt-20 pb-20 sm:pb-40 md:pb-[150px]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 text-center">
        <p className={`text-[#6DC0C8] uppercase tracking-widest text-sm mb-1 ${oswald.className}`}>
          Prices
        </p>
        <h2 className={`text-5xl font-medium text-gray-900 mb-10 ${arapey.className}`}>
          Pricing Plan
        </h2>

          {isMobile ? (
            // Show mobile images at their original size
            <div className="flex flex-col items-center gap-6">
              {mobileSlides.map((slide, index) => (
                <Image
                  key={index}
                  src={slide.src}
                  alt={slide.alt}
                  width={360}
                  height={440}
                  quality={100}
                  style={{ display: 'block' }}
                />
              ))}
            </div>
          ) : (
          // Desktop: show slider with nav
          <div className="relative overflow-hidden w-full flex justify-center">
            {/* Left Arrow */}
            <button
              onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
              disabled={currentSlide === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 cursor-pointer hover:scale-110 transition-transform duration-200"
            >
              <IoIosArrowBack
                size={36}
                color={currentSlide === 0 ? '#ccc' : '#6DC0C8'}
              />
            </button>

            {/* Slide Wrapper */}
            <div
              style={{
                width: `${slideWidth}px`,
                height: `${slideHeight}px`,
                backgroundColor: '#000',
              }}
              className="overflow-hidden rounded-md shadow-lg"
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * slideWidth}px)` }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{ width: `${slideWidth}px`, height: `${slideHeight}px` }}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      width={slideWidth}
                      height={slideHeight}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() =>
                setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))
              }
              disabled={currentSlide === slides.length - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 cursor-pointer hover:scale-110 transition-transform duration-200"
            >
              <IoIosArrowForward
                size={36}
                color={currentSlide === slides.length - 1 ? '#ccc' : '#6DC0C8'}
              />
            </button>
          </div>
        )}
      </div>

      <div className="absolute left-1/2 bottom-[-36px] -translate-x-1/2 z-10">
        <div className="w-px h-18 bg-[#6DC0C8]"></div>
      </div>
    </section>
  );
}