'use client';

import Image from 'next/image';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { oswald } from '../fonts';

export default function PricingSection() {
  const slides = [
    [{ src: '/pricing/1.png', alt: 'General Prices' }],
    [
      { src: '/pricing/2.png', alt: 'Hair & Makeup Rate' },
      { src: '/pricing/3.png', alt: 'Squad Goals Beauty Package' },
    ],
    [
      { src: '/pricing/4.png', alt: 'Bridal Makeup Package' },
      { src: '/pricing/5.png', alt: 'Bridal Makeup - Inclusions' },
    ],
    [
      { src: '/pricing/6.png', alt: 'Classic Wedding Packages' },
      { src: '/pricing/7.png', alt: 'Classic Wedding - Inclusions' },
    ],
    [{ src: '/pricing/8.png', alt: 'Prenup Photoshoot Package' }],
    [{ src: '/pricing/9.png', alt: 'Photoshoot - Inclusions' }],
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
    <section id="pricing"
    className="relative bg-gray-50 py-20"
    style={{ paddingTop: '100px', paddingBottom: '150px' }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[#6DC0C8] uppercase tracking-widest text-sm mb-1">Prices</p>
        <h2 className={`text-5xl font-medium text-gray-900 mb-10 ${oswald.className}`}>PRICING PLAN</h2>

        <div className="relative">
          {/* Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 cursor-pointer hover:scale-110 transition-transform duration-200"
          >
            <IoIosArrowBack size={36} color={currentSlide === 0 ? '#ccc' : '#6DC0C8'} />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((group, groupIndex) => (
                <div key={groupIndex} className="flex justify-center gap-6 flex-shrink-0 w-full">
                  {group.map((image, imageIndex) => (
                    <div key={imageIndex} className="rounded-md overflow-hidden shadow-lg cursor-pointer">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={500}
                        height={480}
                        className="w-[500px] h-[480px] object-cover"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
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