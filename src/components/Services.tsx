import { PartyPopper, Music, Utensils, Camera, Users2, Palette } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: PartyPopper,
      title: "Corporate Events",
      description: "Professional corporate event planning for conferences, seminars, and team building activities."
    },
    {
      icon: Music,
      title: "Weddings",
      description: "Complete wedding planning services from intimate ceremonies to grand celebrations."
    },
    {
      icon: Utensils,
      title: "Catering Services",
      description: "Exquisite culinary experiences with customized menus and professional service."
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography and videography to capture your special moments."
    },
    {
      icon: Users2,
      title: "Social Events",
      description: "Birthday parties, anniversaries, and social gatherings planned to perfection."
    },
    {
      icon: Palette,
      title: "Decor & Design",
      description: "Creative and elegant decoration services tailored to your event theme."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive event planning services to make your special occasions truly memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <service.icon className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}