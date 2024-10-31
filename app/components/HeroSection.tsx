import React from 'react';
import img1 from '../Images/img1.jpg';

function HeroSection() {
    return (
        <div
            id="home"
            className="relative w-full py-24 md:py-32 lg:py-48 bg-slate-700 text-white overflow-hidden h-auto"
            style={{
                backgroundImage: `url(${img1.src})`,
                backgroundSize: 'cover',
                
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed', // Parallax effect
            }}
        >
            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                    Learn Quran Online
                </h1>
                <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-blue-100 mb-8">
                    Join our expert-led classes and deepen your understanding of the Quran
                </p>
                <button
                    type="submit"
                    className=" bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md "
                >
                    Start Learning Today
                </button>
            </div>
        </div>
    );
}

export default HeroSection;
