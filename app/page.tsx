"use client";

import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import BenefitsSection from "./components/BenefitsSection";
import Testimonials from "./components/Testimonials";
import OfferSection from "./components/OfferSection";
import ProcessSection from "./components/ProcessSection";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";
import LeadCaptureModal from "./components/LeadCaptureModal";
import WhatsAppStrip from "./components/WhatsAppStrip";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <WhatsAppStrip
          title="Not sure which course is right for you?"
          subtitle="Message us on WhatsApp. We reply fast and help you pick the best plan."
          buttonText="Ask on WhatsApp"
        />
        <SolutionSection />
        <BenefitsSection />
        <WhatsAppStrip
          title="Ready to try a free class?"
          subtitle="No signup fee. No commitment. Just one free 1-on-1 lesson."
          buttonText="Book via WhatsApp"
          message="Hi, I want to book my free Quran trial class. Please help me get started."
        />
        <Testimonials />
        <OfferSection />
        <WhatsAppStrip
          title="Questions before you enroll?"
          subtitle="Our team is on WhatsApp to answer pricing, schedule, and teacher questions."
          buttonText="Chat Now"
        />
        <ProcessSection />
        <WhyChooseUs />
        <WhatsAppStrip
          title="Still thinking about it?"
          subtitle="Send us a quick WhatsApp message. We will guide you in minutes."
          buttonText="WhatsApp Us"
        />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
      <LeadCaptureModal />
      <ToastContainer position="bottom-center" className="!bottom-20 sm:!bottom-6" />
    </>
  );
}
