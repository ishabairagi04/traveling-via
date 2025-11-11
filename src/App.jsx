import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';

import Home from './components/Home/Home';
import About from './components/About Us/About';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';
import Destination from './components/Destinations/Destinations';
import ManaliBookingPage from './components/places/manali/ManaliBookingPage';
import GoaBookingPage from './components/places/goa/GoaBookingPage';
import KashmirBookingPage from './components/places/kashmir/KashmirBookingPage';
import AssamBookingPage from './components/places/assam/AssamBookingPage';
import KeralaBookingPage from './components/places/kerala/KeralaBookingPage';
import DarjeelingBookingPage from './components/places/darjeeling/DarjeelingBookingPage';
import UjjainBookingPage from './components/places/ujjain/UjjainBookingPage';
import MaldivesBookingPage from './components/places/maldives/MaldivesBookingPage';

import TourBookingPage from './components/places/manali/tourmanali';
import ItineraryKashmir from './components/places/kashmir/tourKashmir';
import ItineraryKerala from './components/places/kerala/tourKerala';
import ItineraryDarjeeling from './components/places/darjeeling/tourDarjeeling';
import ItineraryUjjain from './components/places/ujjain/tourUjjain';
import ItineraryMaldives from './components/places/maldives/tourMaldives';
import ItineraryAssam from './components/places/assam/tourAssam';
import ItineraryGoa from './components/places/goa/tourGoa';
import TourPackages from './components/tour-packeges/tourPackeges';
import ScrollToTop from './components/ReUse-Component/scrollTop';
import ItineraryEducational from './components/places/Educational/Rajasthan/Raj';

// ✅ Educational Tours
import SclHyderabad from './components/places/Educational/Hyderabad/SclHyderabad';
import SclAhemdabad from './components/places/Educational/Ahemdabad/SclAhemdabad';
import SclManali from './components/places/Educational/Manali/SclManali';
import Dashboard from './components/Dashboard/Dashboard';


export default function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/places/manali" element={<ManaliBookingPage />} />
          <Route path="/places/goa" element={<GoaBookingPage />} />
          <Route path="/places/kashmir" element={<KashmirBookingPage />} />
          <Route path="/tour-packages" element={<TourPackages />} />
          <Route path="/places/assam" element={<AssamBookingPage />} />
          <Route path="/places/kerala" element={<KeralaBookingPage />} />
          <Route path="/places/darjeeling" element={<DarjeelingBookingPage />} />
          <Route path="/places/ujjain" element={<UjjainBookingPage />} />
          <Route path="/places/maldives" element={<MaldivesBookingPage />} />

          {/* Itinerary Routes */}
          <Route path="/places/manali/tour" element={<TourBookingPage />} />
          <Route path="/places/kashmir/tour" element={<ItineraryKashmir />} />
          <Route path="/places/kerala/tour" element={<ItineraryKerala />} />
          <Route path="/places/darjeeling/tour" element={<ItineraryDarjeeling />} />
          <Route path="/places/ujjain/tour" element={<ItineraryUjjain />} />
          <Route path="/places/maldives/tour" element={<ItineraryMaldives />} />
          <Route path="/places/assam/tour" element={<ItineraryAssam />} />
          <Route path="/places/goa/tour" element={<ItineraryGoa />} />

          {/* ✅ Educational Itineraries */}
          <Route path="/places/Educational/IndoreRajasthan/IndRaj" element={<ItineraryEducational />} />
          <Route path="/places/Educational/Hyderabad/SclHyderabad" element={<SclHyderabad />} />
          <Route path="/places/Educational/Ahemdabad/SclAhemdabad" element={<SclAhemdabad />} />
          <Route path="/places/Educational/Manali/SclManali" element={<SclManali />} />
        </Routes>
      </div>
    </Router>
  );
}
