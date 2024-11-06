"use client";

const Pricing = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <section id="pricing" className="py-20 md:py-24 lg:py-40">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">Pricing Plans</h2>
                <p className="text-center mb-12 text-gray-600">
                    Choose the plan that best fits your learning needs and schedule
                </p>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 flex flex-col h-full">
                            <h3 className="text-xl font-bold mb-4">Basic Plan</h3>
                            <div className="text-2xl font-bold mb-4">$49/month</div>
                            <ul className="space-y-2 mb-6 flex-grow">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    2 classes per week
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    30-minute sessions
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Basic course materials
                                </li>
                            </ul>
                            <button
                                onClick={scrollToContact}
                                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 mt-auto">
                                Contact Us
                            </button>
                        </div>

                        <div className="bg-blue-500 text-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 flex flex-col h-full">
                            <h3 className="text-xl font-bold mb-4">Standard Plan</h3>
                            <div className="text-2xl font-bold mb-4">$79/month</div>
                            <ul className="space-y-2 mb-6 flex-grow">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    3 classes per week
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    45-minute sessions
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Advanced course materials
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Monthly progress reports
                                </li>
                            </ul>
                            <button
                                onClick={scrollToContact}
                                className="w-full py-2 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-200 transition duration-300 mt-auto">
                                Contact Us
                            </button>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 flex flex-col h-full">
                            <h3 className="text-xl font-bold mb-4">Premium Plan</h3>
                            <div className="text-2xl font-bold mb-4">$129/month</div>
                            <ul className="space-y-2 mb-6 flex-grow">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    5 classes per week
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    60-minute sessions
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Premium course materials
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Weekly progress reports
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    1-on-1 mentoring sessions
                                </li>
                            </ul>
                            <button
                                onClick={scrollToContact}
                                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 mt-auto">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
