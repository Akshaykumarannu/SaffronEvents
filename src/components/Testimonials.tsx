import { useState } from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const allTestimonials = [
    {
      name: "Sarah Johnson",
      role: "Bride",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      content: "Saffron Events made our wedding day absolutely perfect. Their attention to detail and professional service exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Corporate Client",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      content: "The team's expertise in corporate event management is unmatched. They delivered a flawless conference that our attendees are still talking about.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Birthday Celebration",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      content: "From planning to execution, everything was handled with utmost professionalism. They turned our vision into reality!",
      rating: 5,
    },
    {
      name: "Amit Das",
      role: "Gala Dinner Host",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80",
      content: "Saffron Events created a magical atmosphere that left everyone in awe. Highly recommend their services!",
      rating: 5,
    },
    {
      name: "Emma Wilson",
      role: "Nonprofit Organizer",
      image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&q=80",
      content: "They made our fundraiser a huge success with their creative ideas and seamless execution.",
      rating: 5,
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 3, allTestimonials.length));
  };

  const visibleTestimonials = allTestimonials.slice(0, visibleCount);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say about their experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-orange-200" />
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic">{testimonial.content}</p>
            </div>
          ))}
        </div>

        {visibleCount < allTestimonials.length && (
          <div className="mt-12 text-center">
            <button
              className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors"
              onClick={handleViewMore}
            >
              View More Reviews
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
