import React from 'react';
import img1 from '../Images/img2.jpg';

function HeroSection() {
    const scrollToContact = () => {
        const contactSection = document.getElementById("register");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            id="home"
            className="relative w-full min-h-screen py-24 md:py-32 lg:py-48 overflow-hidden flex justify-center items-center" // Center flex styles applied
            style={{
                backgroundImage: `url(${img1.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed', // Parallax effect
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            {/* Content */}
            <div className=" mx-auto px-4 text-center relative z-10 flex flex-col justify-center items-center h-full"> {/* Added flex and height styles */}
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-white">
                    Learn Quran Online
                </h1>
                <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-blue-100 mb-8">
                    Join our expert-led classes and deepen your understanding of the Quran
                </p>
                <button
                    type="button"
                    onClick={scrollToContact}
                    className="bg-blue-600 bg-opacity-30 hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
                >
                    Start Learning Today
                </button>
            </div>
        </div>
    );
}

export default HeroSection;
