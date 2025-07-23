import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const destinations = [
  { title: 'MANALI', description: 'Nestled in the mountains of Himachal Pradesh with snow-capped peaks.', image: '/manali2.jpg', tours: '3 Tours', link: '/places/manali' },
  { title: 'goa', description: 'Sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu.', image: '/goa.jpg', tours: '2 Tours', link: '/places/goa' },
  { title: 'kerala', description: 'Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.', image: '/kerala1.jpg', tours: '3 Tours', link: '/places/kerala' },
  { title: 'darjeeling', description: 'Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.', image: '/kerala1.jpg', tours: '3 Tours', link: '/places/darjeeling' },
  { title: 'assam', description: 'Convallis a cras semper auctor neque vitae tempus quam pellentesque.', image: '/assam1.jpg', tours: '4 Tours', link: '/places/assam' },
  { title: 'kashmir', description: 'Faucibus turpis in eu mi bibendum neque egestas congue quisque.', image: '/manali1.jpg', tours: '2 Tours', link: '/places/kashmir' },
  { title: 'ujjain', description: 'Faucibus turpis in eu mi bibendum neque egestas congue quisque.', image: 'slide-02.webp', tours: '2 Tours', link: '/places/ujjain' },
  { title: 'maldives', description: 'Faucibus turpis in eu mi bibendum neque egestas congue quisque.', image: '/maldives1.jpg', tours: '2 Tours', link: '/places/maldives' },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
  const next = () => setActiveIndex((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));

  const calculateCardPosition = (index) => {
    let offset = index - activeIndex;
    if (offset < -Math.floor(destinations.length / 2)) offset += destinations.length;
    if (offset > Math.floor(destinations.length / 2)) offset -= destinations.length;
    if (Math.abs(offset) > 2) return null;

    let scale = 1;
    if (Math.abs(offset) === 1) scale = 0.85;
    if (Math.abs(offset) === 2) scale = 0.7;

    const baseTranslate = window.innerWidth < 640 ? 130 : 180;

    return {
      offset,
      style: {
        transform: `translateX(${offset * baseTranslate}px) scale(${scale})`,
        zIndex: 10 - Math.abs(offset),
        opacity: 1,
        pointerEvents: offset === 0 ? 'auto' : 'none',
      }
    };
  };

  return (
  <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={10}
  loop={true}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  className="mySwiper"
  breakpoints={{
    0: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
  {destinations.map((d, i) => (
    <SwiperSlide key={i}>
      <Link to={d.link}>
        <div className="relative w-[90%] h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-black mx-auto">
          <img
            src={d.image}
            alt={d.title}
            className="w-full h-full object-cover brightness-75 hover:brightness-100 transition-all duration-500"
          />
          <div className="absolute bottom-4 left-4 right-4 text-white text-center z-10">
            <h3 className="text-base sm:text-lg font-semibold mb-2">{d.title}</h3>
            <p className="text-xs sm:text-sm mb-4 opacity-85 leading-snug">{d.description}</p>
            <span className="inline-block bg-[#f5c06b] text-white font-semibold text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-xl">
              {d.tours}
            </span>
          </div>
        </div>
      </Link>
    </SwiperSlide>
  ))}
</Swiper>

  );
}
