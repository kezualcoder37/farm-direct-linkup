
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    content:
      "AgroBridge has transformed how I sell my produce. I now have direct relationships with restaurants and stores, which means better prices and less waste.",
    author: "Maria Rodriguez",
    role: "Organic Farmer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5
  },
  {
    content:
      "As a small restaurant owner, finding reliable sources of fresh produce was always challenging. With AgroBridge, I've connected with local farmers and now get fresher ingredients at better prices.",
    author: "David Chen",
    role: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5
  },
  {
    content:
      "The platform is intuitive and has made it easy to expand my customer base. I especially appreciate being able to message vendors directly about my harvest schedule.",
    author: "James Wilson",
    role: "Family Farm Owner",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 4
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="agro-section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from farmers and vendors who are growing their businesses with AgroBridge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <Quote size={24} className="text-agro-primary opacity-40 mb-4" />
              <p className="text-gray-700 mb-6">{testimonial.content}</p>
              <div className="flex items-center mt-4">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
