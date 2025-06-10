'use client';

import Image from 'next/image';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { oswald } from '../fonts';

export default function PricingSection() {
  const slides = [
    { src: '/pricing/1.png', alt: 'Pricing 1' },
    { src: '/pricing/2.png', alt: 'Pricing 2' },
    { src: '/pricing/3.png', alt: 'Pricing 3' },
    { src: '/pricing/4.png', alt: 'Pricing 4' },
    { src: '/pricing/5.png', alt: 'Pricing 5' },
    { src: '/pricing/6.png', alt: 'Pricing 6' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section
      id="pricing"
      className="scroll-mt-8 relative bg-gray-50 py-20"
      style={{ paddingTop: '100px', paddingBottom: '150px' }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[#6DC0C8] uppercase tracking-widest text-sm mb-1">Prices</p>
        <h2 className={`text-5xl font-medium text-gray-900 mb-10 ${oswald.className}`}>
          PRICING PLAN
        </h2>

        <div className="relative overflow-hidden w-full flex justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 cursor-pointer hover:scale-110 transition-transform duration-200"
          >
            <IoIosArrowBack size={36} color={currentSlide === 0 ? '#ccc' : '#6DC0C8'} />
          </button>

          {/* Slide Wrapper */}
          <div className="w-[1000px] h-[500px] overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 1000}px)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="flex-shrink-0 w-[1000px] h-[500px]">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={1000}
                    height={500}
                    quality={100}
                    className="object-cover rounded-md shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 cursor-pointer hover:scale-110 transition-transform duration-200"
          >
            <IoIosArrowForward size={36} color={currentSlide === slides.length - 1 ? '#ccc' : '#6DC0C8'} />
          </button>
        </div>
      </div>

      <div className="absolute left-1/2 bottom-[-36px] -translate-x-1/2 z-10">
        <div className="w-px h-18 bg-[#6DC0C8]"></div>
      </div>
    </section>
  );
}
