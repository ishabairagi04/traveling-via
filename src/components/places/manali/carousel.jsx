import React, { useState, useRef, useEffect } from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const photos = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const slideWidth = 300; // adjust based on your image sizes and spacing

  const scrollToIndex = (index) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: index * (slideWidth + 16), // 16px gap between slides
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) scrollToIndex(currentIndex - 1);
  };

  const nextSlide = () => {
    if (currentIndex < photos.length - 1) scrollToIndex(currentIndex + 1);
  };

  // Sync currentIndex on manual scroll
  const onScroll = () => {
    if (!containerRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const index = Math.round(scrollLeft / (slideWidth + 16));
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-full mx-auto px-4">
      <div
        ref={containerRef}
        onScroll={onScroll}
        className="flex overflow-x-auto scroll-smooth scrollbar-hide space-x-4 rounded-lg"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {photos.map((photo, idx) => (
          <div
            key={photo}
            className="flex-shrink-0 rounded-lg overflow-hidden relative"
            style={{
              width: `${slideWidth}px`,
              height: '400px',
              scrollSnapAlign: 'center',
            }}
          >
            <img
              src={photo}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Show photo count button on 2nd photo (like the example) */}
            {idx === 1 && (
              <button
                className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white py-1 px-3 text-sm rounded flex items-center gap-1"
                onClick={() => alert(`Show all ${photos.length} photos`)}
              >
                Show all {photos.length} photo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10l4.553 4.553a2 2 0 01-2.829 2.829L12 12.828l-4.724 4.724a2 2 0 01-2.829-2.828L8.172 10 3.447 5.276a2 2 0 012.829-2.828L12 7.172l4.724-4.724a2 2 0 012.829 2.829L15 10z"
                  />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Left arrow */}
      <IconButton
        onClick={prevSlide}
        disabled={currentIndex === 0}
        size="small"
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-200 bg-opacity-70 hover:bg-opacity-100"
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      {/* Right arrow */}
      <IconButton
        onClick={nextSlide}
        disabled={currentIndex === photos.length - 1}
        size="small"
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-200 bg-opacity-70 hover:bg-opacity-100"
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </div>
  );
}
