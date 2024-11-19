import { Calendar, Users, Trophy, Instagram, Facebook, Twitter, Phone ,MessageCircle} from 'lucide-react';
import { useState, useEffect } from 'react';

const backgrounds = [
  {
    url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    title: "Corporate Events"
  },
  {
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
    title: "Weddings"
  },
  {
    url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
    title: "Social Events"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
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
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Social Media Sidebar */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-r-lg shadow-lg z-50">
        <div className="flex flex-col gap-4">
          <a href="https://www.instagram.com/saffron_events_2k24?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-orange-600 hover:text-orange-700 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a><button onClick={handleEnrollingClick} className="text-orange-600 hover:text-orange-700 transition-colors">
            <MessageCircle className="w-6 h-6" />
          </button></a>
          
          <a href={`tel:${phoneNumber}`} className="text-orange-600 hover:text-orange-700 transition-colors">
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Background Slider */}
      <div className="absolute inset-0 overflow-hidden">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-105'
                : 'opacity-0 scale-100'
            }`}
          >
            <img
              src={bg.url}
              alt={bg.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Slider Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-orange-500 w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Creating Unforgettable
            <span className="text-orange-500"> Moments</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Transform your special occasions into extraordinary experiences with our premium event planning services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={handleEnrollingClick} className="bg-orange-600 text-white px-8 py-3 rounded-md hover:bg-orange-700 transition-colors text-lg">
              Book Consultation
            </button>
            <a href="https://www.instagram.com/saffron_events_2k24/"><button className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-lg">
              View Portfolio
            </button></a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
            <Calendar className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">500+</h3>
            <p className="text-gray-200">Events Organized</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
            <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">1000+</h3>
            <p className="text-gray-200">Happy Clients</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
            <Trophy className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">15+</h3>
            <p className="text-gray-200">Awards Won</p>
          </div>
        </div>
      </div>
    </section>
  );
}