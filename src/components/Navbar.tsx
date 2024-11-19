import { Menu, X, Flower2 } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnrollingClick = () => {
    // Replace with the desired WhatsApp number and message
    const phoneNumber = "918138865559"; // Country code + phone number
    const message = encodeURIComponent(
      "Hello! I would like to enroll in your dance class."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Redirect to WhatsApp chat
    window.open(whatsappUrl, "_blank");
  };

  return (
    <nav className="fixed w-full bg-grey/95 backdrop-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* <Flower2 className="h-8 w-8 text-orange-600" /> */}
            {/* <span className="ml-2 text-xl font-semibold text-gray-900">Saffron Events</span> */}
            <img src="../images/logo1.png" alt="" className='w-32 h-32'/>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-orange-600 transition-colors">Home</a>
              <a href="#about" className="text-white  hover:text-orange-600 transition-colors">About</a>
              <a href="#services" className="text-white hover:text-orange-600 transition-colors">Services</a>
              <a href="#gallery" className="text-white hover:text-orange-600 transition-colors">Gallery</a>
              <a href="#contact" className="text-white hover:text-orange-600 transition-colors">Contact</a>
              <button onClick={handleEnrollingClick} className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-orange-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-900 hover:text-orange-600 transition-colors">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-900 hover:text-orange-600 transition-colors">About</a>
            <a href="#services" className="block px-3 py-2 text-gray-900 hover:text-orange-600 transition-colors">Services</a>
            <a href="#gallery" className="block px-3 py-2 text-gray-900 hover:text-orange-600 transition-colors">Gallery</a>
            <a href="#contact" className="block px-3 py-2 text-gray-900 hover:text-orange-600 transition-colors">Contact</a>
            <button className="w-full mt-2 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}