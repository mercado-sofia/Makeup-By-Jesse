'use client';

import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function Footer() {
  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true, margin: '-100px' });

  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
    <section
      className="text-black py-20 px-6"
      style={{
        background: 'linear-gradient(90deg, #FFF 0%, #D6EDF0 100%)',
      }}
    >
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Message Text */}
        <h2 className="text-xl text-[#6CA8AE] opacity-60 md:text-[24px] font-semibold text-center md:text-left">
          Ready to book your appointment? <br className="hidden md:block" />
          Send me a message on Facebook, and let&apos;s create the perfect look for you!
        </h2>

        {/* Button */}
        <a
          href="https://www.facebook.com/jessecamillemua"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#6DC0C8] text-white px-8 py-3 text-sm font-medium hover:bg-[#56aab2] hover:scale-104 transition whitespace-nowrap border-2 border-black"
        >
          Let&apos;s Talk
        </a>
      </div>
    </section>

    <footer className="bg-black text-white pt-20 pb-3 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + About */}
        <div>
          <div className="text-2xl italic font-semibold tracking-[.5px] mb-3">
            <span className="text-white">Makeup by </span>
            <span className="text-[#6DC0C8]">Jesse</span>
          </div>
          <p className="text-[14px] text-[#8C9799] leading-relaxed mb-4 max-w-[340px]">
            Hi, I&apos;m Jesse, a professional makeup artist passionate about
            enhancing natural beauty and making clients feel confident and radiant.
          </p>
          <div className="flex gap-4 text-[#6DC0C8] text-lg">
            <a
              href="https://www.facebook.com/jessecamillemua"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="cursor-pointer hover:text-white" />
            </a>

            <a
              href="https://www.instagram.com/jessecamille.mua?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer hover:text-white" />
            </a>

            <a
              href="https://www.tiktok.com/@jessecamille.mua?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTiktok className="cursor-pointer hover:text-white" />
            </a>
          </div>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-[#6DC0C8] text-sm uppercase tracking-widest mb-3">Get In Touch</h3>
          <ul className="text-sm space-y-2 text-white">
            <li className="flex items-center gap-2">
              <FiPhone className="text-[#6DC0C8]" />
              0998 531 7912
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-[#6DC0C8]" />
              jessecamillesantos@yahoo.com
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-[#6DC0C8]" />
              Roosevelt Avenue, 1105, Quezon City, Philippines
            </li>
          </ul>
        </div>

        {/* Our Links */}
        <div>
          <h3 className="text-[#6DC0C8] text-sm uppercase tracking-widest mb-3">Our Links</h3>

        {/* Animated Line with Circle */}
        <div className="flex items-center mb-5" ref={lineRef}>
          <div className="w-[6px] h-[6px] bg-[#6DC0C8] rounded-full mr-2"></div>
          <motion.div
            className="h-[1.5px] bg-[#6DC0C8]"
            initial={{ width: 0 }}
            animate={isInView ? { width: '70px' } : { width: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          />
        </div>

        {/* Two-column grid, tightly packed */}
        <div className="grid grid-cols-2 gap-y-2 gap-x-2 text-sm text-white max-w-[220px]">
        <ul className="space-y-2">
          <li>
            <a href="#home" className="hover:text-[#6DC0C8] cursor-pointer">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#6DC0C8] cursor-pointer">About</a>
          </li>
          <li>
            <a href="#services" className="hover:text-[#6DC0C8] cursor-pointer">Services</a>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <a href="#pricing" className="hover:text-[#6DC0C8] cursor-pointer">Pricing</a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-[#6DC0C8] cursor-pointer">Gallery</a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-[#6DC0C8] cursor-pointer">Testimonials</a>
          </li>
        </ul>
        </div>
      </div>
      </div>
    
      {/* Bottom */}
      <div className="text-center mt-10 text-xs text-gray-400 border-t border-[#071B1D] pt-4 flex items-center justify-center h-16">
      {year && (
        <span>© {year} Makeup by Jesse. All rights reserved. Website developed by D3M Unit.</span>
      )}
      </div>
    </footer>
    </>
  );
}