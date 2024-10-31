const Register = () => (
    <section id="register" className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
                Register for Our Quran Classes
            </h2>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
                <div className="md:flex">
                    <div className="bg-blue-600 text-white p-8 md:w-1/2">
                        <h3 className="text-2xl font-bold mb-4">
                            Enroll Now and Begin Your Journey!
                        </h3>
                        <p className="mb-4">
                            Don&apos;t miss the opportunity to learn Quran online with our esteemed
                            teachers. Enjoy the flexibility of scheduling your classes according to your
                            convenience.
                        </p>

                    </div>
                    <form className="p-8 md:w-1/2">
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                required
                                className="w-full p-2 border rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="w-full p-2 border rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Phone
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                                required
                                className="w-full p-2 border rounded-md"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="course"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Select Course
                            </label>
                            <select
                                id="course"
                                className="w-full p-2 border rounded-md"
                                required
                            >
                                <option value="">Select a course</option>
                                <option value="hifz">Hifz (Memorization)</option>
                                <option value="tajweed">Tajweed</option>
                                <option value="nazrah">Nazrah (Reading)</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                        >
                            Register Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
);

export default Register;
