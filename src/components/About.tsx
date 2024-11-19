import { Award, Clock, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
              alt="About Saffron Events"
              className="rounded-lg shadow-xl w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-orange-600 text-white p-8 rounded-lg hidden lg:block">
              <h3 className="text-4xl font-bold">15+</h3>
              <p className="text-lg">Years of Excellence</p>
            </div>
          </div>

          <div className="lg:pl-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Kerala's Premier Event Management Company
            </h2>
            <p className="text-gray-600 mb-8">
              At Saffron Events, we believe in creating magical moments that last a lifetime. With over 15 years of experience in the industry, we've mastered the art of transforming your vision into reality. Our dedicated team of event professionals ensures every detail is perfect, from concept to execution.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Award className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Award-Winning Service</h3>
                  <p className="text-gray-600">Recognized for excellence in event management across Kerala</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Timely Execution</h3>
                  <p className="text-gray-600">Punctual and efficient delivery of every event</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Customized Solutions</h3>
                  <p className="text-gray-600">Tailored event planning to match your unique requirements</p>
                </div>
              </div>
            </div>

            <button className="mt-8 bg-orange-600 text-white px-8 py-3 rounded-md hover:bg-orange-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}