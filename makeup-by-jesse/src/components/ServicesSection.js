'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../app/globals.css';
import { oswald } from '../fonts';

const services = [
  {
    title: 'Face Makeup',
    image: '/services/1.jpg',
    description:
      'Author of Die Vertretung beim Rechtsgeschäft. Agency, in law, the relationship that exists.',
  },
  {
    title: 'Eye Makeup',
    image: '/services/2.jpg',
    description:
      'Author of Die Vertretung beim Rechtsgeschäft. Agency, in law, the relationship that exists.',
  },
  {
    title: 'Hair Makeup',
    image: '/services/3.jpg',
    description:
      'Author of Die Vertretung beim Rechtsgeschäft. Agency, in law, the relationship that exists.',
  },
  {
    title: 'Bridal Makeup',
    image: '/services/4.jpg',
    description:
      'Author of Die Vertretung beim Rechtsgeschäft. Agency, in law, the relationship that exists.',
  },
  {
    title: 'Event Glam',
    image: '/services/5.jpg',
    description:
      'Author of Die Vertretung beim Rechtsgeschäft. Agency, in law, the relationship that exists.',
  },
  {
    title: 'Editorial Look',
    image: '/services/6.jpg',
    description:
      'Author of Die Vertretung beim Rechtsgeschäft. Agency, in law, the relationship that exists.',
  },
];

export default function ServicesSection() {
  return (
    <section
    id="services"
    className="relative bg-[#0E0E0E]"
    style={{ paddingTop: '120px', paddingBottom: '100px' }}
    >
      <div className="max-w-[1280px] mx-auto px-4 text-center">
        <p className="text-[#6DC0C8] uppercase tracking-widest text-sm mb-1">What We Do</p>
        <h2 className={`text-[42px] font-light text-white mb-10 ${oswald.className}`}>MAKEUP SERVICES</h2>

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
        <div className="w-full h-[340px] bg-[#1B1D1D] overflow-hidden shadow-md flex flex-col">
            {/* Image - 50% */}
            <div className="relative w-full h-1/2">
            <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority={index < 3}
            />
            </div>

            {/* Text - 50% */}
            <div className="h-1/2 p-4 text-white text-center flex flex-col justify-center">
            <h3 className={`text-lg font-normal tracking-[.5px] mb-3 ${oswald.className}`}>{service.title.toUpperCase()}</h3>
            <p className="text-[#B8BEBF] text-[13px] font-light leading-normal">{service.description}</p>
            </div>
        </div>
        </SwiperSlide>
    ))}
    </Swiper>
      </div>
    <div className="absolute left-1/2 bottom-[-35px] transform -translate-x-1/2 z-10">
      <div className="w-px h-18 bg-[#6DC0C8]"></div>
    </div>
    </section>
    
  );
}