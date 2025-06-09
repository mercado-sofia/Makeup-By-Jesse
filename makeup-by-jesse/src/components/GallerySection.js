'use client';

import Image from 'next/image';
import { useState } from 'react';
import { oswald } from '../fonts';

const images = [
  { src: '/gallery/1.jpg', label: 'Fashion Makeup' },
  { src: '/gallery/2.jpg', label: 'Hair Styling' },
  { src: '/gallery/3.jpg', label: 'Editorial Look' },
  { src: '/gallery/4.jpg', label: 'Bridal Glam' },
  { src: '/gallery/5.jpg', label: 'Creative Art' },
  { src: '/gallery/6.jpg', label: 'Natural Beauty' },
  { src: '/gallery/7.jpg', label: 'Bridal Glam' },
  { src: '/gallery/8.jpg', label: 'Creative Art' },
  { src: '/gallery/9.jpeg', label: 'Natural Beauty' },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="gallery"
      className="bg-white py-20"
      style={{ paddingTop: '100px', paddingBottom: '150px' }}
    >
      <div
        className="mx-auto px-6 text-left"
        style={{ maxWidth: '1070px' }}
      >
        <p className="text-[#6DC0C8] uppercase tracking-widest text-sm mb-1">Gallery</p>
        <h2 className={`text-5xl font-medium text-gray-900 mb-10 ${oswald.className}`}>PORTFOLIO</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(img.src)}
            >
              <Image
                src={img.src}
                alt={img.label}
                width={500}
                height={240}
                className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-45 transition duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-3xl font-thin mb-2">+</div>
                  <span className="text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
                    {img.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
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
                e.stopPropagation(); // Prevent closing when clicking the button
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
              className="max-w-full max-h-[90vh] object-contain rounded shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}