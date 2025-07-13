import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'leaflet/dist/leaflet.css';


import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About Us/About';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';
import Destination from './components/Destinations/Destinations';
import ManaliBookingPage from './components/places/manali/ManaliBookingPage'; // Import the Manali booking page
import TourBookingPage from './components/places/manali/tourmanali';

export default function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/places/manali" element={<ManaliBookingPage />} />
              <Route path="/places/manali/tour" element={<TourBookingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
