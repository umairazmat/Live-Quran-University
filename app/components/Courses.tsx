"use client"; // Ensure the component runs on the client side
import React, { useState } from 'react';
import Slider from "react-slick";
import Image from 'next/image'; // Import the Image component
import img1 from '../Images/img1.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Courses() {
    const [currentSlide, setCurrentSlide] = useState(0); // State to keep track of the current slide

    const courses = [
        {
            title: "Hifz (Memorization)",
            description: "Commit the entire Quran to memory with personalized guidance, focusing on accuracy, fluency, and retention techniques for lifelong recall.",
            image: img1,
        },
        {
            title: "Tajweed",
            description: "Master the rules of Quranic recitation to read with proper pronunciation and intonation, ensuring every word is recited as intended.",
            image: img1,
        },
        {
            title: "Nazrah (Reading)",
            description: "Learn to read the Quran fluently and accurately, starting from the basics of the Arabic script to developing reading confidence.",
            image: img1,
        },
        {
            title: "Norani Qaida",
            description: "Begin your Quranic journey with Norani Qaida, a foundational course that teaches basic Arabic sounds, letters, and pronunciation.",
            image: img1,
        },
    ];
    

    const settings = {
        dots: false, // Disable default dots
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current: any, next: any) => setCurrentSlide(next), // Update current slide index
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section id="courses" className="py-16 bg-blue-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
                <Slider {...settings}>
                    {courses.map((course, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full object-cover"
                                    width={300} // Fixed width
                                    height={200} // Fixed height
                                />
                                <div className="text-black p-4">
                                    <h3 className="text-lg font-bold">{course.title}</h3>
                                </div>
                                <div className="p-4 flex-grow min-h-[120px]">
                                    <p>{course.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                {/* Custom Indicator */}
                <div className="flex justify-center mt-4">
                    {courses.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                            onClick={() => setCurrentSlide(index)} // Optional: Click to navigate to the slide
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Courses;
