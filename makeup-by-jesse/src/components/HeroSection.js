'use client';

import { HiChevronDoubleDown } from 'react-icons/hi2';

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full bg-black text-white flex flex-col justify-center items-center"
      style={{
        backgroundImage: 'url("/makeup-by-jesse.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-85 z-0"></div>

      {/* Heading */}
      <div className="text-center z-10">
        <p className="text-[#6DC0C8] uppercase tracking-widest text-sm cursor-default">
            HAIR & MAKEUP ARTIST
        </p>
        <div className="max-w-2xl mx-auto">
            <h1 className="font-bold mt-4 text-center cursor-default"
            style={{ lineHeight: '74px', fontSize: '68px'}}
            >
                WELCOME TO MAKEUP BY JESSE
            </h1>
        </div>
        <div className="w-10 border-b border-gray-300 mx-auto mt-2"></div>
      </div>

      {/* Scroll-down icon & line */}
      <div
        className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
        onClick={scrollToAbout}
      >
        <HiChevronDoubleDown className="text-white text-3xl animate-bounce mb-1" />
        <div className="w-px h-20 bg-[#6DC0C8]"></div>
      </div>
    </section>
  );
}