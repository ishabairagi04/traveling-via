import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowLeft } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import { FaCamera, FaVideo, FaHeart, FaUserTie, FaMapMarkedAlt, FaSpa, FaTags, FaClock } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { Parallax } from 'react-parallax';

import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const packages = [
  {
    id: 1,
    image: "/img-01.webp",
    title: "Golden Sands",
    description: "Relax by the golden desert dunes.",
  },
  {
    id: 2,
    image: "/img-02.webp",
    title: "Mountain Escape",
    description: "Breathe fresh air in the mountains.",
  },
  {
    id: 3,
    image: "/img-03.webp",
    title: "City Life",
    description: "Explore vibrant city streets.",
  },
  {
    id: 4,
    image: "/img-01.webp",
    title: "Beach Paradise",
    description: "Sun, sand, and sea await.",
  },
];



const destinations = [
  {
    id: 1,
    name: "New York, USA",
    tours: 1,
    image: "/slide-03.webp",
  },
  {
    id: 2,
    name: "Mount Fuji",
    tours: 1,
    image: "/slide-03.webp",
  },
  {
    id: 3,
    name: "Barcelona",
    tours: 5,
    image: "/slide-03.webp",
  },
  {
    id: 4,
    name: "Ha Noi",
    tours: 3,
    image: "/slide-03.webp",
  },
  {
    id: 5,
    name: "Gyeongju",
    tours: 5,
    image: "/slide-03.webp",
  },
];


const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [tourType, setTourType] = useState("Adventure");
  const [guests, setGuests] = useState(1);
  const [showSearch, setShowSearch] = useState(false);

const navigate = useNavigate();

  const cardContainerRef = useRef(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.05]);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const handleSlideLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <section
      className="w-full min-h-screen  mt-10 bg-gradient-to-b from-[#cde2f5] via-[#e5f3fd] to-[#3c8ed5]"
    > <Navbar theme="manali" />
      <div className="bg-cover bg-center bg-no-repeat " style={{ backgroundImage: "url('/goa.jpg')" ,marginTop: "100px", height: "800px" }}>
        <div className="text-center  pt-30" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Discover the world <br /> with our tours
          </h1>
          <p className="text-white text-lg md:text-xl">
            Escape the hustle and bustle, enjoy the perfect vacation.
          </p>
          <button className=" text-white font-semibold px-8 py-3 rounded-lg mt-6 hover:bg-blue-900 transition duration-200">
            Start Exploring
          </button>
        </div>
      </div>
<div className="mt-[-250px]">
      {/* Toggle Button for Mobile */}
      <div className="md:hidden mb-6 text-center mt-[-200px]">
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="text-blue-600 font-semibold underline focus:outline-none"
        >
          {showSearch ? "Hide Search Options ▲" : "Search Options ▼"}
        </button>
      </div>

      {/* Search Form */}
      <div
        className={`w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 bg-white/70 backdrop-blur-lg p-6 mt-[200px] md:p-8 rounded-2xl shadow-xl transition-all duration-300 ease-in-out
        ${showSearch ? "block" : "hidden"} md:grid`}
        data-aos="fade-up"
      >
        {/* Location */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-800 mb-1">Location</label>
          <select
            className="border border-gray-300 rounded-md p-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select Location</option>
            <option value="Paris">Goa</option>
            <option value="Dubai">Manali</option>
            <option value="Tokyo">Kerala</option>
          </select>
        </div>

        {/* Tour Type */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-800 mb-1">Tour Type</label>
          <select
            className="border border-gray-300 rounded-md p-2"
            value={tourType}
            onChange={(e) => setTourType(e.target.value)}
          >
            <option value="Adventure">Adventure</option>
            <option value="Relax">Relax</option>
            <option value="Cultural">Cultural</option>
          </select>
        </div>

        {/* Date */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-800 mb-1">Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        {/* Guests */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-800 mb-1">Guests</label>
          <input
            type="number"
            min="1"
            className="border border-gray-300 rounded-md p-2"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg w-full hover:bg-blue-900 transition duration-200">
            Search
          </button>
        </div>
      </div>
</div>
      {/* === Frame 3 Section: Why Travel With Us === */}
      <section className="py-20 mt-10 ">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12">
          {/* Left: Images */}
          <div className="relative flex-1 grid grid-cols-2 gap-4 items-center">
            <img src="/img-01.webp" alt="travel1" className="rounded-xl w-full h-full object-cover row-span-2" />
            <img src="/img-02.webp" alt="travel2" className="rounded-xl w-full h-full object-cover" />
            <img src="/img-03.webp" alt="travel3" className="rounded-xl w-full h-full object-cover" />
            {/* Circle */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-36 h-36 rounded-full bg-white shadow-lg flex items-center justify-center text-center spin-slow">

                <div className="rotate-[20deg] text-[14px] font-semibold text-gray-600 leading-tight">
                  <span className="block">Explore new lands</span>
                  <span className="text-blue-600 text-2xl">↑</span>
                  <span className="block text-blue-600 font-bold">Via Brahman</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4">
              Escape the hustle and bustle,<br />
              enjoy the perfect vacation.
            </h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar
              neque non pretium volutpat. Proin finibus dignissim egestas.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317..." />
                </svg>
                <div>
                  <h4 className="font-semibold text-lg">Best Travel Agents</h4>
                  <p className="text-gray-600 text-sm">Pellentesque habitant morbi tristique.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9..." />
                </svg>
                <div>
                  <h4 className="font-semibold text-lg">Travel Guidelines</h4>
                  <p className="text-gray-600 text-sm">Sed ut perspiciatis unde omnis.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-400 rounded-lg p-2">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l..." />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Booking Number</p>
                  <p className="text-xl font-bold text-blue-600">(229) 555-0109</p>
                </div>
              </div>

   <button
  onClick={() => navigate("/tour-packages")}
  className="bg-[#1976d2] hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-xl transition-all"
>
  Booking Now
</button>


            </div>
          </div>
        </div>
      </section>
      {/* === Frame 4 === */}
      <section className=" py-16">
        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-3xl font-bold mb-8">Our Popular Packages</h2>
          <button
            onClick={handleSlideLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#1976d2] text-white p-2 rounded-full z-10"
          >
            <FiArrowLeft size={24} />
          </button>
          <div
            ref={cardContainerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="group relative min-w-[250px] md:min-w-[300px] h-[380px] overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:w-[350px]"
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="h-48 w-full object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-blue-600">
                    {pkg.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Frame 5 === */}
      
      {/*frame 6*/}
      {/* === Why Choose Via Brahman === */}
      <section className="bg-[#1976d2] w-3000px bg-opacity-30 py-16 px-4 ml-[-45px] mr-[-40px] ">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Why choose Via Brahman
          </h2>
          <p className="text-white mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet quam et diam bibendum
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <FaMapMarkedAlt className="text-[#1976d2] text-4xl mx-auto mb-4" />,
                title: "Best Travel Agents",
                desc: "Choose us, and you'll enjoy exclusive offers and 24/7 dedicated customer service",
              },
              {
                icon: <FaUserTie className="text-[#1976d2] text-4xl mx-auto mb-4" />,
                title: "Professional team",
                desc: "With a professional team, we are committed to bringing you perfect vacations.",
              },
              {
                icon: <FaSpa className="text-[#1976d2] text-4xl mx-auto mb-4" />,
                title: "New experience",
                desc: "We turn your travel dreams into reality with unforgettable and safe experiences",
              },
              {
                icon: <FaTags className="text-[#1976d2] text-4xl mx-auto mb-4" />,
                title: "Price and quality",
                desc: "Explore the world with us on unique journeys, competitive prices, and 5-star service",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all"
              >
                {item.icon}
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Forest Parallax Section with Framer Motion Animation */}
      <motion.div style={{ opacity, scale, marginTop: 16 }}>
        <Parallax
          bgImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
          strength={400}
        >
          <div className="h-[90vh] flex items-center  justify-center">

            <div className="bg-black bg-opacity-50 text-white p-8 rounded-lg text-center max-w-2xl">
              {/* Play Button */}
              <button className="w-16 h-16 rounded-full bg-white/20  border-2 border-white hover:bg-white/30 transition flex items-center justify-center mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 4l12 6-12 6V4z" />
                </svg>
              </button>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Discover the Beauty of <br /> Nature
              </h1>
              <p className="text-lg md:text-xl">
                Explore breathtaking forests and mountains around the world.
              </p>
            </div>
          </div>
        </Parallax>
      </motion.div>

      {/* === Frame 7: Top Destinations === */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-2">Top choice for your trip</h2>
          <p className="text-center text-gray-500 mb-10">
            Discover the Most Popular Places to Visit
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {destinations.map((dest) => (
              <div
                key={dest.id}
                className={`relative overflow-hidden rounded-xl shadow-md ${dest.id === 1 ? "md:row-span-2" : ""
                  }`}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2  px-4 py-2 rounded-xl shadow">
                  <h3 className="font-bold text-sm">{dest.name}</h3>
                  <p className="text-xs text-gray-500">
                    {dest.tours} Tour{dest.tours > 1 ? "s" : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      
      <Footer theme="manali"/>
    </section>
  );
};

export default Home;
