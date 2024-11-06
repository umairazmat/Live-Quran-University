"use client"; // Ensure the component runs on the client side
import React,{useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image, { StaticImageData } from 'next/image';
import img1 from '../Images/download.jpeg';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    interface Testimonial {
        name: string;
        image: StaticImageData; // Assuming you're using Next.js static images
        text: string;
        rating: number;
    }

    const testimonials: Testimonial[] = [
        {
            name: "Ali Khan",
            image: img1,
            text: "The Noorani Qaida course helped me build a strong foundation in Quranic reading. Highly recommended!",
            rating: 5,
        },
        {
            name: "Fatima Noor",
            image: img1,
            text: "The Quran Reading course transformed my recitation. The instructors are truly dedicated.",
            rating: 5,
        },
        {
            name: "Hassan Malik",
            image: img1,
            text: "Learning Tajweed made my recitation so much better. I feel more connected to the Quran now.",
            rating: 4,
        },
        {
            name: "Sana Javed",
            image: img1,
            text: "The Quran Memorization program is fantastic! The mentors are supportive and understanding.",
            rating: 5,
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section id="testimonials" className="py-20 md:py-24 lg:py-40 bg-blue-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    What Our Students Say
                </h2>
                <Slider {...settings}>
                    {testimonials.map((testimonial: Testimonial, index: number) => (
                        <div key={index} className="px-2">
                            <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105">
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-4">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md" // Fully rounded image
                                            width={96} // Set width
                                            height={96} // Set height
                                        />
                                    </div>
                                    <h3 className="font-semibold mt-8">{testimonial.name}</h3>
                                    <div className="flex justify-center mt-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-5 h-5 text-yellow-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-sm mt-4">{testimonial.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="flex justify-center mt-4">
                    {testimonials.map((_, index) => (
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
};

export default Testimonials;
