'use client';

import { useEffect, useState } from 'react';
import { oswald } from '../fonts';

const sectionIds = ['home', 'about', 'services', 'pricing', 'gallery', 'testimonials'];

export default function NavTop() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle navbar background change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Observe section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (visibleSections.length > 0) {
          const topMost = visibleSections.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0];
          const newSection = topMost.target.id;
          setActiveSection(newSection);
          console.log('Active:', newSection);
        }
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl italic font-bold tracking-[.5px]">
          <span className="text-white">Makeup by </span>
          <span className="text-[#6DC0C8]">Jesse</span>
        </div>

        {/* Nav Links */}
        <ul
          className={`flex space-x-6 uppercase text-[15px] tracking-[1px] font-medium ${oswald.className}`}
        >
          {sectionIds.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`transition-colors duration-300 ${
                  activeSection === id ? 'text-[#6DC0C8]' : 'text-white'
                } hover:text-[#6DC0C8]`}
              >
                {id === 'home' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}