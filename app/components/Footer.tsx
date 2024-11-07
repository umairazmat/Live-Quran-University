import { FaInstagram, FaTiktok, FaSkype, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaViber } from 'react-icons/fa';

const Footer = () => (
    <footer className="bg-blue-800 text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        Live Quran University
                    </h3>
                    <p className="text-sm">
                        Empowering minds through Quranic education since 2024. Our mission
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
                    <div className="my-4 flex space-x-4">
                        <a href="https://www.instagram.com/universitylivequran?igsh=djFnMWN1ODV1aWgw" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://www.tiktok.com/@livequranuniversity?_t=8qtDX1zrNaq&_r=1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                            <FaTiktok size={24} />
                        </a>
                        <a href="https://join.skype.com/invite/vEL2NeF2JoYa" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                            <FaSkype size={24} />
                        </a>
                    </div>
                    <ul className="space-y-2 text-sm mt-4">
                        <li className="flex items-center space-x-2">
                            <FaEnvelope />
                            <span>livequranuniversity@gmail.com</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaPhoneAlt />
                            <span>+923025297207</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaViber/>
                            <span>+923025297207</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaMapMarkerAlt />
                            <span>Iqbal Town, Lahore, Pakistan</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-700 text-center text-sm">
                © 2024 Live Quran University. All rights reserved.
            </div>
        </div>
    </footer>
);

export default Footer;
