'use client';
import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

export default function ScrollToTopButton() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll and update progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollY(progress);
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Stroke circle config
  const size = 42;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollY / 100) * circumference;

  return (
    isVisible && (
        <button
        onClick={scrollToTop}
        className="fixed bottom-7 right-7 z-50 w-[42px] h-[42px] flex items-center justify-center bg-transparent rounded-full hover:scale-104 transition cursor-pointer"
        >
        <svg
            className="absolute top-0 left-0 rotate-[-90deg]"
            width={size}
            height={size}
        >
            <circle
            cx={center}
            cy={center}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            fill="none"
            />
            <circle
            cx={center}
            cy={center}
            r={radius}
            stroke="#6DC0C8"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            />
        </svg>
        <IoIosArrowUp className="text-[#6DC0C8] text-2xl relative z-10" />
    </button>
    )
  );
}