import { useState } from 'react';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all');

  const images = [
    {
      url: "../images/image1.png",
      category: "wedding"
    },
    {
      url: "../images/image2.png",
      category: "wedding"
    },
    {
      url: "../images/image3.png",
      category: "wedding"
    },
    {
      url: "../images/image4.png",
      category: "wedding"
    },
    {
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
      category: "wedding"
    },
    {
      url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80",
      category: "corporate"
    },
    {
      url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
      category: "wedding"
    },
    {
      url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80",
      category: "social"
    },
    {
      url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
      category: "corporate"
    },
    {
      url: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80",
      category: "social"
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Events' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'social', label: 'Social Events' }
  ];

  const filteredImages = activeTab === 'all' 
    ? images 
    : images.filter(img => img.category === activeTab);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of successfully executed events
          </p>
      </div>

        <div className="flex justify-center space-x-4 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === tab.id
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-orange-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
            >
              <img
                src={image.url}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-gray-900 px-6 py-2 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}