'use client';

import { useEffect, useState } from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import { oswald, arapey } from '../fonts';

const sectionIds = ['home', 'about', 'services', 'pricing', 'gallery', 'reviews'];

export default function NavTop() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Intersection observer to detect current section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
          const newSection = topMost.target.id;
          setActiveSection(newSection);
        }
      },
      { root: null, threshold: 0.5 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close menu on link click (mobile)
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className={`text-xl italic font-bold tracking-[.5px] ${arapey.className}`}>
          <span className="text-white">Makeup by </span>
          <span className="text-[#6DC0C8]">Jesse</span>
        </div>

        {/* Desktop Nav */}
        <ul
          className={`hidden md:flex space-x-6 uppercase text-[15px] tracking-[1px] font-medium ${oswald.className}`}
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

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <CgMenuRightAlt />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-[500px] opacity-100 pt-4 pb-6 px-6' : 'max-h-0 opacity-0 px-6'
        } ${activeSection === 'home' ? 'bg-black/80' : 'bg-black'}`}
      >
        <div className="space-y-4 text-center uppercase text-sm tracking-wider font-medium">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={handleLinkClick}
              className={`block transition-colors duration-300 ${
                activeSection === id ? 'text-[#6DC0C8]' : 'text-white'
              } hover:text-[#6DC0C8]`}
            >
              {id === 'home' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}