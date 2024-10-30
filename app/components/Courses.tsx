"use client"; // Ensure the component runs on the client side
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'; // Import the Image component
import img1 from '../Images/img1.jpg';
import 'swiper/swiper-bundle.css';

function Courses() {
  const courses = [
    {
      title: "Hifz (Memorization)",
      description: "Memorize the entire Quran with expert guidance and proven techniques for long-term retention.",
      image: img1,
    },
    {
      title: "Tajweed",
      description: "Master the rules of Quranic recitation to read with proper pronunciation and intonation.",
      image: img1,
    },
    {
      title: "Nazrah (Reading)",
      description: "Learn to read the Quran fluently with understanding, starting from the basics of Arabic script.",
      image: img1,
    },
    {
      title: "Hifz (Memorization)",
      description: "Memorize the entire Quran with expert guidance and proven techniques for long-term retention.",
      image: img1,
    },
    {
      title: "Tajweed",
      description: "Master the rules of Quranic recitation to read with proper pronunciation and intonation.",
      image: img1,
    },
    {
      title: "Nazrah (Reading)",
      description: "Learn to read the Quran fluently with understanding, starting from the basics of Arabic script.",
      image: img1,
    },
  ];

  return (
    <section id="courses" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
        <Swiper
          spaceBetween={30}
          autoplay={{ delay: 3000 }}
          loop
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },    // 1 slide for small screens
            768: { slidesPerView: 2 },    // 2 slides for medium screens
            1024: { slidesPerView: 3 },   // 3 slides for large screens
          }}
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <Image
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
                width={300} // Set a width
                height={200} // Set a height
                layout="responsive" // Use responsive layout
              />
              <div className=" text-black p-4">
                <h3 className="text-lg font-bold">{course.title}</h3>
              </div>
              <div className="p-4 flex-grow min-h-[120px]"> {/* Ensure a minimum height */}
                <p>{course.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Courses;
