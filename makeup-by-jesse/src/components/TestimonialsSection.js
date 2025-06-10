'use client';

import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { oswald, arapey } from '../fonts';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Ninya',
    quote: 'Can\’t get over how good my makeup turned out, huge thanks to this talented MUA! She really did her magic on my face and made me feel so pretty. Plus, she took a photo of the final look, which I enjoyed because I get to upload my solo looks. If you’ve got an event or just want to feel glam, definitely book her for your next glow-up!',
    link: 'https://www.facebook.com/share/p/16N273BStz/',
  },
  {
    name: 'Kirsten',
    quote: 'I booked Ms. Jesse on a short notice, but she accommodated me. And among all my choices, it was really meant to be her. And she did not disappoint, and has exceeded my expectations! She was prepared for that day, despite her hairstylist cancelling the last minute! She has the tools, and she is really good at what she does. Ang ganda ganda ko nong birthday ko, nakakaiyak! Thank you so much, Ms. Jesse. Until next booking! Highly recommend her for any occasion! 5/5',
    link: 'https://www.facebook.com/share/p/1AnuwFZQyM/?mibextid=wwXIfr',
  },
  {
    name: 'Maria',
    quote: 'It was 2019 when I first inquired to Makeup by Jesse pero hindi natuloy. And it\'s now 2024 at last nkpagpabook na din. Thank you for making me pretty, enhancing my beauty (charrrr) Makeup by Jesse. If you are looking for h&mua na sulit and hindi lugi ang bayad, visit, like and inquire on her page. A highly recommended h&mua. Sa uulitin 😊',
    link: 'https://www.facebook.com/share/p/1Yo1QL2EYe/',
  },
  {
    name: 'Karen',
    quote: 'I had the best experience with Jesse! They were so warm and easy to talk to. The makeup turned out amazing—even better than I imagined—and it lasted all day without needing any touch-ups. I felt so confident and beautiful! If you\'re looking for someone super talented, kind, and who makes you feel totally comfortable, Jesse is your person. ❤️',
    link: 'https://www.facebook.com/share/p/1KJxDBtMMJ/',
  },
  {
    name: 'Aiyezha',
    quote: '10000/10 yes!! Super ganda ng pag makeup niyo po sa akin like who u malala po HAHAHAHAHAHAHHAHA  highly recommended po talaga! Proven and tested😁🤍 sa susunod po ulit🤍 Grabe po talaga walang retouch happenings throughout the event, and dami rin po nag sasabi na mas lalo raw po ako gumanda, thanks to ms. jesse\'s magical hands🤍',
    link: 'https://www.facebook.com/share/p/1J1DjxH5kf/',
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-30 relative min-h-[80vh] flex items-center justify-center text-white text-center bg-fixed bg-start bg-cover"
      style={{ backgroundImage: "url('/b&w-bg.jpeg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/85 z-10" />

      {/* Swiper content */}
      <div className="relative z-20 max-w-3xl px-6">
        <p className={`text-[#6DC0C8] uppercase tracking-widest text-[15px] mb-1 ${oswald.className}`}>Testimonials</p>
        <h2 className={`text-[42px] font-medium mb-10 ${arapey.className}`}>Some Clients Feedback</h2>

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

            <p className="text-[16px] font-normal tracking-[.5px] leading-relaxed mb-8 px-2">
              “{item.quote}”
            </p>

            <div>
              <p className="font-semibold text-white mb-1">{item.name}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6DC0C8] underline text-sm"
                >
                  See full review on Facebook
                </a>
              )}
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper bullet styles */}
      <style jsx global>{`
        .swiper-pagination-bullets {
          margin-top: 26px;
          text-align: center;
        }
        .swiper-pagination-bullet {
          display: inline-block;
          width: 25px;
          height: 3px;
          background-color: white;
          border-radius: 2px;
          opacity: 0.3;
          margin: 0 2px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background-color: #6DC0C8;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}