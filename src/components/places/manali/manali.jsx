'use client'; // ✅ Add this if using Next.js App Router

import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const images = [
  '/slide-03.webp',
  '/slide-03.webp',
  '/slide-03.webp',
  '/slide-03.webp',
  '/slide-03.webp',
];

const BreadcrumbHeader = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 300;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* 👇 Embedded custom CSS for hiding scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="space-y-8">
        {/* Header Section */}
        <div className="bg-[#FCF8F2] bg-[url('/patterns/contour-lines.svg')] bg-center bg-no-repeat bg-cover rounded-3xl py-12 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900">New York, USA</h1>
          <div className="flex justify-center items-center gap-2 text-sm text-gray-600 mt-2">
            <a href="/" className="hover:underline text-blue-600">Home</a>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <a href="/booking-objects" className="hover:underline text-blue-600">Booking Objects</a>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-700">New York, USA</span>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="relative w-full overflow-hidden">
          {/* Scroll Left */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white/90 p-2 rounded-full shadow"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          {/* Image Slider */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 no-scrollbar px-4 scroll-smooth"
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="relative min-w-[280px] h-[400px] rounded-2xl overflow-hidden shrink-0"
              >
                <img
                  src={img}
                  alt={`Location ${i + 1}`}
                  className="w-full h-full object-cover"
                />
                {i === 1 && (
                  <button className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 text-sm rounded-lg backdrop-blur">
                    Show all 7 photos
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Scroll Right */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white/90 p-2 rounded-full shadow"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbHeader;
