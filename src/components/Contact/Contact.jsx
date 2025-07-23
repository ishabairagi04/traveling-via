import React, { useState } from "react";
import axios from "axios";
import {
TextField,
Button,
Typography,
Accordion,
AccordionSummary,
AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../Footer/Footer";

export default function Contact() {
const [form, setForm] = useState({ name: "", email: "", message: "" });
const [success, setSuccess] = useState(false);

const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
e.preventDefault();

if (!form.name || !form.email || !form.message) {
alert("Please fill all fields");
return;
}

try {
const res = await axios.post("https://via-bhraman-backend.onrender.com/api/contact", form);
if (res.status === 200 || res.status === 201) {
setSuccess(true);
setForm({ name: "", email: "", message: "" });
setTimeout(() => setSuccess(false), 4000);
} else {
alert("Message could not be sent. Try again later.");
}
} catch (error) {
console.error("API Error:", error.response?.data || error.message);
alert("There was an error sending your message. Please try again.");
}
};

const testimonials = [
{
name: "Ananya Sharma",
title: "Customer",
text: "Via-Bhraman gave us the best family trip ever. Very well organized and affordable.",
},
{
name: "Vikram Patel",
title: "Solo Traveler",
text: "Best solo trip arrangements! Smooth and professional team.",
},
{
name: "Aisha Khan",
title: "Student",
text: "Our college trip was awesome, safe, and budget-friendly. Loved it!",
},
];

return (
<main className="min-h-screen bg-white text-gray-800 py-12 px-4 md:px-8 mt-12 sm:mt-20 relative">
  {/* Floating WhatsApp Button */}
  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition">
    💬
  </a>

  <Typography variant="h4" align="center" className="text-yellow-500 font-bold mb-10">
    Contact Us
  </Typography>

  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
    {/* Contact Form */}
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>

      {success && (
      <div className="bg-green-100 text-green-700 p-3 mb-4 rounded">
        ✅ Message sent successfully!
      </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField fullWidth label="Your Name" name="name" variant="outlined" value={form.name}
          onChange={handleChange} />
        <TextField fullWidth label="Your Email" name="email" type="email" variant="outlined" value={form.email}
          onChange={handleChange} />
        <TextField fullWidth label="Your Message" name="message" multiline rows={4} variant="outlined"
          value={form.message} onChange={handleChange} />

        <Button type="submit" fullWidth variant="contained"
          className="!bg-yellow-500 hover:!bg-yellow-600 text-white font-semibold">
          Send Message
        </Button>
      </form>
    </div>

    {/* Contact Info + Map */}
    <div className="flex flex-col gap-6">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
        <p className="mb-2">📞 <strong>Phone:</strong> +91 98765 43210</p>
        <p className="mb-2">📧 <strong>Email:</strong> contact@travelnow.com</p>
        <p>📍 <strong>Address:</strong> 123 Dream Street, Indore, Madhya Pradesh</p>
      </div>

      <div className="rounded-lg overflow-hidden shadow-md">
        <iframe title="Map" className="w-full h-64" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.434933375726!2d75.85772677509836!3d22.71956867939085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad3323cb69%3A0x75a4a3b130b235e!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1688301111111!5m2!1sen!2sin"></iframe>
      </div>
    </div>
  </div>

  {/* Testimonials */}
  <section className="max-w-4xl mx-auto mt-16">
    <Typography variant="h5" className="text-yellow-500 font-semibold mb-6 text-center">
      What Our Customers Say
    </Typography>

    <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} autoplay={{ delay:
      5000 }} spaceBetween={20} breakpoints={{ 640: { slidesPerView: 1 }, 1024: { slidesPerView: 2 }, }}>
      {testimonials.map((t, i) => (
      <SwiperSlide key={i}>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
          <p className="text-gray-700 italic mb-4">"{t.text}"</p>
          <div>
            <p className="font-semibold text-gray-800">{t.name}</p>
            <p className="text-sm text-gray-500">{t.title}</p>
          </div>
        </div>
      </SwiperSlide>
      ))}
    </Swiper>

    {/* Google Review Button */}
    <div className="text-center mt-8">
      <a href="https://www.google.com/search?sca_esv=55b51c43d294a49c&cs=0&sxsrf=AE3TifN4Ib7z3xwzn31wBDd1aOrssx8CKw:1752410099991&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E7UlSUfXz4udM7Q6B8cmbyNMO3zFphwS-Oxbso5LpGHvmTjWsmF-hhH3XvyasYqdLUPfPytx4JMR4bYhYDlk3K-PQOgN&q=Viabhraman+Reviews&sa=X&ved=2ahUKEwjO5Yqs7LmOAxVYavUHHZzHMZgQ0bkNegQIHhAD&biw=1280&bih=567&dpr=1.5#lrd=0x3962fdc5f0badacd:0x915b45ef1c2070f6,3,,,,"
        target="_blank" rel="noopener noreferrer"
        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-5 rounded-lg transition">
        ⭐ Write a Review on Google
      </a>
    </div>
  </section>

  {/* FAQ Section */}
  <div className="max-w-4xl mx-auto mt-16">
    <Typography variant="h5" className="text-yellow-500 font-semibold mb-4 text-center">
      Frequently Asked Questions
    </Typography>

    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} className="font-medium">
      What is the best time to travel?
      </AccordionSummary>
      <AccordionDetails>
        It depends on your destination. For hill stations, summer is great. For beach locations, go during winter.
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} className="font-medium">
      Can I cancel or reschedule my trip?
      </AccordionSummary>
      <AccordionDetails>
        Yes, based on your package terms. Contact our team for assistance.
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} className="font-medium">
      How can I get discounts?
      </AccordionSummary>
      <AccordionDetails>
        We offer discounts during festivals and early bird bookings. Subscribe to our newsletter!
      </AccordionDetails>
    </Accordion>
  </div>

  {/* Helpful Travel Tips */}
  <div className="max-w-4xl mx-auto mt-12 text-center">
    <Typography variant="h5" className="text-yellow-500 font-semibold mb-4">
      Helpful Travel Tips
    </Typography>
    <ul className="list-disc list-inside text-gray-700 text-left space-y-2">
      <li>Always carry a copy of your ID and essential documents.</li>
      <li>Pack light but smart — think weather and activity.</li>
      <li>Use local SIM cards for better connectivity.</li>
      <li>Check visa and COVID rules before booking.</li>
      <li>Don’t forget travel insurance!</li>
    </ul>
  </div>
    <Footer theme="goa"/>
</main>
);
}