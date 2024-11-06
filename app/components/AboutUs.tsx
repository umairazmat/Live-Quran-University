import React from 'react'
import img1 from '../Images/img1.jpg';
import Image from 'next/image';
function AboutUs() {
    return (
        <section id="about" className="py-20 md:py-24 lg:py-40">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <Image
                        src={img1}
                        alt="Quran with prayer beads"
                        className="w-full md:w-1/2 rounded-lg shadow-lg"
                    />
                    <div>
                        <p className="text-lg mb-4">
                            Live Quran University offers comprehensive online Quran courses
                            taught by qualified teachers. Our mission is to make Quranic
                            education accessible to everyone, anywhere in the world.
                        </p>
                        <p className="text-lg">
                            With flexible scheduling and personalized attention, we ensure that
                            each student receives the best possible learning experience. Our
                            dedicated team focuses on interactive learning, helping students
                            memorize, understand, and apply Quranic teachings in their daily
                            lives.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs