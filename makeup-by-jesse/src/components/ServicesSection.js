'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../app/globals.css';
import { oswald, arapey } from '../fonts';

const services = [
  {
    title: 'Bridal Makeup',
    image: '/services/bridal.jpg',
    description:
      'Elegant and long-lasting makeup for brides and bridal parties, ensuring a flawless look from the ceremony to the celebration.',
  },
  {
    title: 'Event & Glam Makeup',
    image: '/services/event and glam.jpg',
    description:
      'Perfect for parties, photoshoots, graduations, and special occasions—whether it\'s soft glam or bold and dramatic.',
  },
  {
    title: 'Editorial & Creative Looks',
    image: '/services/creative looks.jpg',
    description:
      'Creative makeup for fashion shoots, magazines, and bold concepts—crafted to stand out in every frame.',
  },
  {
    title: 'Makeup for Men',
    image: '/services/men.jpg',
    description:
      'Clean and natural makeup for photoshoots, events, or professional use.',
  },
  {
    title: '1-on-1 Makeup Tutorials',
    image: '/services/1-on-1.jpg',
    description:
      'Personalized lessons on application techniques, skincare prep, and building a makeup routine.',
  },
  {
    title: 'Corporate & Professional Headshots',
    image: '/services/corporate.jpg',
    description:
      'Polished, camera-ready looks ideal for business photos and video shoots.',
  },
];

export default function ServicesSection() {
  return (
    <section
    id="services"
    className="scroll-mt-18 bg-[#FFF]"
    style={{ paddingTop: '80px', paddingBottom: '100px' }}
    >
      <div className="max-w-[1280px] mx-auto px-30 text-left">
        <p className={`text-[#6DC0C8] uppercase tracking-widest text-[15px] mb-1 ${oswald.className}`}>What We Do</p>
        <h2 className={`text-[42px] font-light italic text-black mb-10 ${arapey.className}`}>Makeup Services</h2>

      <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={4}
      className="pb-10 max-w-[1040px] mx-auto"
      breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
      }}
      >
      {services.map((service, index) => (
          <SwiperSlide key={index}>
          <div className="w-full h-[340px] bg-[#FFF] overflow-hidden shadow-xl flex flex-col transition-all duration-300 transform hover:-translate-y-2 hover:bg-[#E0F4F6] group mb-8">
              {/* Image - 50% */}
              <div className="relative w-full h-1/2">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                priority={index < 3}
              />
              </div>

              {/* Text - 50% */}
              <div className="h-1/2 p-4 text-center flex flex-col justify-center transition-colors duration-300">
              <h3 className={`text-lg text-black font-normal tracking-[.5px] mb-3 group-hover:text-black transition-colors duration-300 ${oswald.className}`}>
                {service.title.toUpperCase()}
              </h3>
              <p className="text-[#5D6473] text-[13px] font-normal leading-normal group-hover:text-[#504F54] transition-colors duration-300">
                {service.description}
              </p>
              </div>
          </div>
          </SwiperSlide>
      ))}
      </Swiper>
      </div>
    </section>
  );
}