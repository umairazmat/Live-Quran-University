import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const TopBar = () => (
    <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly px-4">
            <div className="flex items-center space-x-2 text-sm">
                <FaMapMarkerAlt />
                <span>Iqbal Town, Lahore Pakistan</span>
            </div>
            <div className="flex items-center space-x-2 text-sm mt-2 md:mt-0">
                <FaPhoneAlt />
                <span>+923025297207</span>
            </div>
            <div className="flex items-center space-x-2 text-sm mt-2 md:mt-0">
                <FaEnvelope />
                <span>info@almadinaquran.com</span>
            </div>
        </div>
    </div>
);

export default TopBar;
