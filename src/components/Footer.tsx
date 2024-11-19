import { Flower2, Facebook, Instagram, Twitter,Phone ,MessageCircle} from 'lucide-react';

export default function Footer() {
  const phoneNumber = "+91 8138865559";

  const handleEnrollingClick = () => {
    // Replace with the desired WhatsApp number and message
    const phoneNumber = "918138865559"; // Country code + phone number
    const message = encodeURIComponent(
      "Hello! I would like to Book an Event."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Redirect to WhatsApp chat
    window.open(whatsappUrl, "_blank");
  };
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              {/* <Flower2 className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-semibold">Saffron Events</span> */}
              <img src="/images/logo1.png" alt="" className='w-33 h-33'/>
            </div>
            <p className="text-gray-400">
              Creating unforgettable moments and exceptional experiences for every occasion.
            </p>
            <div className="mt-4 flex space-x-4">
              <a  onClick={handleEnrollingClick} className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/saffron_events_2k24/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href={`tel:${phoneNumber}`} className="text-gray-400 hover:text-white transition-colors">
            <Phone className="w-6 h-6" />
          </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Wedding Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Corporate Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Birthday Parties</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Social Gatherings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Destination Events</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Kalikkadavu , Pilicode</li>
              <li>Kasaragod, Kerala </li>
              <li>Phone: +91 81388 65559</li>
              <li>Email: saffronevents2k24@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Saffron Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}