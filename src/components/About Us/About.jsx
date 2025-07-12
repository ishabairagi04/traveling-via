
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PhoneCall, Star, MapPin } from "lucide-react";
import { FaMapMarkedAlt, FaUserTie, FaSpa, FaTags } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaPhoneAlt, FaGlobeAsia, FaMoneyCheckAlt } from "react-icons/fa";


const whyChooseData = [
    {
        icon: <FaMapMarkedAlt className="text-yellow-500 text-3xl mb-4" />,
        title: "Best Travel Agents",
        desc: "Choose us, and you'll enjoy exclusive offers and 24/7 dedicated customer service",
    },
    {
        icon: <FaUserTie className="text-yellow-500 text-3xl mb-4" />,
        title: "Professional team",
        desc: "With a professional team, we are committed to bringing you perfect vacations.",
    },
    {
        icon: <FaSpa className="text-yellow-500 text-3xl mb-4" />,
        title: "New experience",
        desc: "We turn your travel dreams into reality with unforgettable and safe experiences",
    },
    {
        icon: <FaTags className="text-yellow-500 text-3xl mb-4" />,
        title: "Price and quality",
        desc: "Explore the world with us on unique journeys, competitive prices, and 5-star service",
    },
];


const testimonials = [
    {
        name: "Annette Black",
        title: "CEO, Wanderly Tours",
        image: "/avatar1.jpg",
        rating: 5,
        text: "This travel agency made my dream trip a reality! The attention to detail and custom itinerary were amazing. Highly recommended!",
    },
    {
        name: "James Peterson",
        title: "Blogger & Nomad",
        image: "/avatar2.jpg",
        rating: 5,
        text: "From the moment I booked till I returned, everything was smooth. Exceptional customer service and very affordable packages.",
    },
    {
        name: "Sophia Lee",
        title: "Photographer",
        image: "/avatar3.jpg",
        rating: 4,
        text: "Loved the destination suggestions and local guides. Slight delay in pickup, but the rest was perfect.",
    },
    {
        name: "Rahul Sharma",
        title: "YouTube Travel Vlogger",
        image: "/avatar4.jpg",
        rating: 5,
        text: "I use their service for every international trip now. It's reliable, and I always get great deals and recommendations.",
    },
    {
        name: "Emily Johnson",
        title: "Freelance Writer",
        image: "/avatar5.jpg",
        rating: 5,
        text: "This platform helped me find hidden gems I'd never have discovered on my own. Beautiful experiences every time!",
    },
];



const steps = [
    {
        icon: <FaMapMarkedAlt className="text-yellow-500 text-3xl" />,
        title: "Find Destination",
        desc: "Do you want to relax on the beach, explore a new city, or go on an adventure?",
    },
    {
        icon: <FaGlobeAsia className="text-yellow-500 text-3xl" />,
        title: "Book You Ticket",
        desc: "Find your travel destination, because we have covered all regions in the world.",
    },
    {
        icon: <FaMoneyCheckAlt className="text-yellow-500 text-3xl" />,
        title: "Pay and go tour",
        desc: "This type of tour usually includes all the necessary expenses such as accommodation.",
    },
];



const About = () => {
    return (
        <section className="mt-16 sm:mt-20">
            <div
                className="w-full min-h-[60vh] sm:min-h-[60vh] lg:min-h-[70vh] px-4 sm:px-8 md:px-16 py-12 sm:py-16  bg-cover bg-center bg-no-repeat text-center bg-[#fdf0e0] flex justify-center items-center"
            // style={{ backgroundImage: "url('/About_1.avif')" }}
            >
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                        About Us
                    </h1>

                    <nav className="text-sm sm:text-base text-gray-600 flex justify-center space-x-2 mt-2">
                        <Link to="/" className="hover:underline hover:text-yellow-600">
                            Home
                        </Link>
                        <span>›</span>
                        <span className="text-gray-800">About Us</span>
                    </nav>
                </motion.div>
            </div>


            {/* ====== 2 Section ====== */}

            <section className="px-4 md:px-16 py-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Left Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
                            Dear customers, we are proud to have been your partner for over 29
                            years. We continuously strive to optimize all of our customers'
                            experiences.
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque,
                            donec eget nulla turpis. Nullam commodo dignissim egestas. Sed a nisi
                            quis dui malesuada.
                        </p>
                    </motion.div>

                    {/* Right Image & Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="relative rounded-xl shadow-md">
                            <img
                                src="/about_2.webp"
                                alt="Travel"
                                className="w-full h-64 object-cover rounded-xl"
                            />

                            {/* Circle */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            >
                                <div className="w-36 h-36 rounded-full bg-white shadow-lg flex items-center justify-center text-center spin-slow">
                                    <div className="rotate-[20deg] text-[14px] font-semibold text-gray-600 leading-tight">
                                        <span className="block">Explore new lands</span>
                                        <span className="text-yellow-600 text-2xl">↑</span>
                                        <span className="block text-yellow-600 font-bold">GlobeTrek</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Features */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.3,
                                    },
                                },
                            }}
                            className="flex flex-col sm:flex-row justify-between gap-6"
                        >
                            {[...Array(2)].map((_, i) => {
                                const icons = [<Star className="text-yellow-600 w-6 h-6" />, <MapPin className="text-yellow-600 w-6 h-6" />];
                                const titles = ["Best Travel Agents", "Travel Guidelines"];
                                const texts = [
                                    "Pellentesque habitant morbi tristique senectus netus et malesuada fames ac.",
                                    "Pellentesque habitant morbi tristique senectus netus et malesuada fames ac.",
                                ];

                                return (
                                    <motion.div
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, y: 30 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className="flex flex-col items-start gap-3"
                                    >
                                        {icons[i]}
                                        <div>
                                            <h4 className="font-semibold text-2xl text-gray-800">
                                                {titles[i]}
                                            </h4>
                                            <p className="text-sm text-gray-500">{texts[i]}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Booking CTA */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4"
                        >
                            <div className="flex items-center gap-2 text-sm text-gray-700">
                                <PhoneCall className="text-yellow-600 w-8 h-8" />
                                <span className="flex flex-col text-l">
                                    Booking Number{" "}
                                    <span className="text-yellow-600 text-2xl font-semibold">
                                        (229) 555–0109
                                    </span>
                                </span>
                            </div>
                            <button className="bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-yellow-700 transition">
                                Booking Now
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>


            {/*  ======== Why Chose Us ====== */}

            <section className="bg-[#d8a34d] w-full bg-opacity-30 py-16 px-4 ">
                <motion.div
                    className="max-w-7xl mx-auto text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl font-bold text-white mb-2"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Why choose Via Brahman
                    </motion.h2>
                    <motion.p
                        className="text-white mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet quam et diam bibendum
                    </motion.p>

                    {/* Cards Section with stagger animation */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.2,
                                },
                            },
                        }}
                    >
                        {whyChooseData.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all"
                            >
                                <div className="flex justify-center">{item.icon}</div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>


            {/*  ======== Testimonial ====== */}


            <section className="bg-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
                    >
                        Clients testimonials
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-500 mb-10"
                    >
                        Thousands of happy travelers share their amazing stories with us.
                    </motion.p>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={30}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {testimonials.map((t, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-[#fff8f0] rounded-xl shadow-md p-6 text-center h-full flex flex-col items-center justify-between"
                                >
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-20 h-20 rounded-full object-cover mb-4"
                                    />
                                    <p className="text-gray-600 text-sm mb-4">“{t.text}”</p>
                                    <div className="flex justify-center space-x-1 mb-2">
                                        {Array.from({ length: t.rating }, (_, i) => (
                                            <span key={i} className="text-yellow-500 text-lg">★</span>
                                        ))}
                                    </div>
                                    <h4 className="font-bold text-gray-800">{t.name}</h4>
                                    <p className="text-sm text-gray-500">{t.title}</p>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>


            {/*  ======== Booking Steps ====== */}

            <section className="bg-[#fff8f0] py-20 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                    {/* Left Side */}
                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                            3 easy steps <br /> to book tickets
                        </h2>
                        <p className="text-gray-600 mb-6">
                            The solution for those of you who don’t want the hassle of ordering
                            travel tickets, with just 3 steps you can travel anywhere you want.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                                <FaPhoneAlt className="text-yellow-500" />
                                <div className="text-sm">
                                    <div className="text-gray-500">Booking Number</div>
                                    <div className="text-yellow-600 font-bold text-base">
                                        (229) 555–0109
                                    </div>
                                </div>
                            </div>
                            <button className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300">
                                Booking Now
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Side Cards */}
                    <motion.div
                        className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.2,
                                },
                            },
                        }}
                        viewport={{ once: true }}
                    >
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
                            >
                                <div className="mb-4">{step.icon}</div>
                                <h4 className="font-bold text-lg text-gray-800 mb-1">{step.title}</h4>
                                <p className="text-sm text-gray-600">{step.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


        </section>

    );
};

export default About;