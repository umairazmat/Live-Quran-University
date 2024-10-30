const Footer = () => (
    <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        About Al Madina Quranic Academy
                    </h3>
                    <p className="text-sm">
                        Empowering minds through Quranic education since 2023. Our mission
                        is to make Quranic learning accessible to everyone worldwide.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#home" className="hover:text-blue-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#courses" className="hover:text-blue-300">
                                Courses
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-blue-300">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#register" className="hover:text-blue-300">
                                Register
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-blue-300">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Email: info@almadinaquran.com</li>
                        <li>Phone: +1 (555) 123-4567</li>
                        <li>Address: 123 Islamic Center St, City, Country</li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-700 text-center text-sm">
                © 2023 Al Madina Quranic Academy. All rights reserved.
            </div>
        </div>
    </footer>
);

export default Footer