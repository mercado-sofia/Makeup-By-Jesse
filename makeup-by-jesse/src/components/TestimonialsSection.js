'use client';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote: 'ETIAM SODALES CONGUE CONSEQUAT. AENEAN VITAE ULLAMCORPER LEO. PELLENTESQUE CONDIMENTUM EX UT ERAT POSUERE, QUIS TINCIDUNT AUGUE SEMPER. CRAS CONGUE NULLA SED QUAM HENDRERIT EUISMOD',
    link: 'https://facebook.com/review1',
  },
  {
    quote: 'SUSPENDISSE LOBORTIS, FELIS NEC MATTIS FERMENTUM, NUNC LOREM PORTTITOR LECTUS, VEL FEUGIAT TELLUS LACUS A METUS.',
    link: 'https://facebook.com/review2',
  },
  {
    quote: 'NULLA FACILISI. ALIQUAM PLACERAT LIBERO NON SEM CONSEQUAT, VITAE COMMODO LIGULA ELEIFEND.',
    link: 'https://facebook.com/review3',
  },
  {
    quote: 'MAURIS AUCTOR NUNC NON SEM VULPUTATE, NEC MALESUADA ODIO TEMPOR.',
    link: 'https://facebook.com/review4',
  },
  {
    quote: 'DONEC TINCIDUNT DOLOR A SAPIEN TINCIDUNT, EU LOBORTIS JUSTO CONSEQUAT.',
    link: 'https://facebook.com/review5',
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative min-h-[90vh] flex items-center justify-center text-white text-center"
    >
      {/* Background image */}
      <Image
        src="/testimonials-bg.jpg"
        alt="Testimonials Background"
        fill
        className="object-cover z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />

      {/* Swiper content */}
      <div className="relative z-20 max-w-3xl px-6">
        <p className="text-pink-500 uppercase tracking-widest text-sm mb-2">Testimonials</p>
        <h2 className="text-4xl font-bold mb-6">SOME USERS FEEDBACK</h2>

        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black text-xl">
                  <BiSolidQuoteAltLeft />
                </div>
              </div>

              <p className="text-lg font-medium leading-relaxed mb-8 px-2">
                “{item.quote}”
              </p>

              <div>
                <p className="font-semibold text-white mb-1">Client</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 underline text-sm"
                >
                  See full review on Facebook
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper bullet styles */}
      <style jsx global>{`
        .swiper-pagination-bullets {
          margin-top: 24px;
          text-align: center;
        }
        .swiper-pagination-bullet {
          display: inline-block;
          width: 30px;
          height: 4px;
          background-color: white;
          border-radius: 2px;
          opacity: 0.3;
          margin: 0 4px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background-color: #ec4899;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}