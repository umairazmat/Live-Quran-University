"use client";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Register from "./components/Register";
import Testimonials from "./components/Testimonials";
import { FaWhatsapp } from "react-icons/fa"; // Import the WhatsApp icon
import { useEffect } from "react";
import Topbar from "./components/Topbar";

export default function Home() {
  // Function to scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Topbar />
      <Navbar />
      <HeroSection />
      <Courses />
      <AboutUs />
      <Testimonials />
      <Register />
      <Contact />
      <Pricing />
      <Footer />

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/+923025297207" // Updated WhatsApp number
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={30} />
      </a>
    </>
  );
}
