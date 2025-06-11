'use client';

import Image from 'next/image';
import { useState } from 'react';
import { oswald, arapey } from '../fonts';
import { TfiArrowRight } from "react-icons/tfi";

const images = [
  { src: '/gallery/g1.jpg', label: 'Fashion Makeup' },
  { src: '/gallery/g2.jpg', label: 'Hair Styling' },
  { src: '/gallery/g3.jpg', label: 'Editorial Look' },
  { src: '/gallery/g4.jpg', label: 'Bridal Glam' },
  { src: '/gallery/g5.jpg', label: 'Creative Art' },
  { src: '/gallery/g6.jpg', label: 'Natural Beauty' },
  { src: '/gallery/g7.jpg', label: 'Bridal Glam' },
  { src: '/gallery/g8.jpg', label: 'Creative Art' },
  { src: '/gallery/g9.jpg', label: 'Natural Beauty' },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="gallery"
      className="scroll-mt-14 bg-white py-20"
      style={{ paddingTop: '100px', paddingBottom: '150px' }}
    >
      <div className="mx-auto px-6 text-left" style={{ maxWidth: '1070px' }}>
        <p className={`text-[#6DC0C8] uppercase tracking-widest text-[15px] mb-1 ${oswald.className}`}>Gallery</p>
        <h2 className={`text-5xl font-medium italic text-gray-900 mb-10 ${arapey.className}`}>Portfolio</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative group cursor-pointer overflow-hidden aspect-[4/3]"
              onClick={() => setSelectedImage(img.src)}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-35 transition duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-3xl font-thin mb-2">+</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEE MORE Link */}
        <div className="flex justify-end mt-10">
          <a
            href="https://www.instagram.com/jessecamille.mua?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-[#6DC0C8] text-[15px] font-medium tracking-[4px] hover:text-[#79D3DB] transition duration-100 ${oswald.className}`}
          >
            SEE MORE <TfiArrowRight className="text-[16px]" />
          </a>
        </div>

        {/* Fullscreen popup */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close (×) Button */}
            <button
              className="absolute top-6 right-6 text-white text-3xl hover:scale-110 z-50 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              &times;
            </button>

            {/* Selected Image */}
            <Image
              src={selectedImage}
              alt="Selected"
              width={900}
              height={600}
              sizes="(max-width: 900px) 90vw, 900px"
              className="max-w-full max-h-[90vh] object-contain rounded shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}