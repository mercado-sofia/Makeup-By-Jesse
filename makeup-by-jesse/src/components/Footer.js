'use client';

import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="bg-black text-white pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + About */}
        <div>
          <h2 className="text-pink-500 text-3xl font-semibold tracking-widest mb-3">OVON</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            Hi, I’m Olivia a Professional Makeup Artist. Quisque luctus tincidunt enim daibus miss
            neuenete ultrie ectus.
          </p>
          <div className="flex gap-4 text-pink-500 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
            <FaPinterestP className="cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-pink-500 text-sm uppercase tracking-widest mb-3">Get In Touch</h3>
          <ul className="text-sm space-y-2">
            <li>📞 +1 650-444-0000</li>
            <li>✉️ makeup@ovon.com</li>
            <li>📍 525 West Ave, CT 06850 Norwalk</li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-pink-500 text-sm uppercase tracking-widest mb-3">Opening Hours</h3>
          <ul className="text-sm space-y-2">
            <li className="flex justify-between">
              <span>Mon - Fri :</span> <span>10am – 7pm</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday :</span> <span>10am – 5pm</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday :</span> <span className="text-pink-500">By Call</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-10 text-xs text-gray-400">
        © Copyright 2025. All rights reserved.
      </div>
    </footer>
  );
}
