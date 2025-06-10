'use client';

import Image from 'next/image';
import { HiChevronDoubleDown } from 'react-icons/hi2';
import { oswald, arapey } from '../fonts';

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full bg-black text-white flex flex-col justify-start items-center pt-34"
      style={{
        backgroundImage: 'url("/makeup-by-jesse.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-85 z-0"></div>

      {/* Heading & Button */}
      <div className="text-center z-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/mbj_logo.png"
            alt="MBJ Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        {/* Tagline */}
        <p className="text-[#6DC0C8] uppercase tracking-widest text-sm cursor-default">
          HAIR & MAKEUP ARTIST
        </p>

        {/* Heading */}
        <div className="max-w-2xl mx-auto">
          <h1
            className={`font-bold mt-4 italic text-center cursor-default ${arapey.className}`}
            style={{ lineHeight: '74px', fontSize: '72px' }}
          >
            Welcome To Makeup<br />by Jesse
          </h1>
        </div>

        <div className="w-12 border-b border-gray-300 mx-auto mt-4"></div>

        {/* Let's Talk Button */}
        <a
          href="https://www.facebook.com/jessecamillemua"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-8 py-3 rounded-full text-sm font-medium bg-[#6DC0C8] text-black hover:bg-white hover:text-black transition-all duration-300"
        >
          Let&apos;s Talk
        </a>
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