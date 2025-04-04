
import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  return (
    <section className="agro-section bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from farmers and vendors who are growing their businesses with AgroBridge
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-4">
          {/* Mobile view - stacked cards */}
          <div className="md:hidden">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 p-6 rounded-lg shadow-md mb-6"
              >
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
              </motion.div>
            ))}
          </div>

          {/* Desktop view - carousel */}
          <div className="hidden md:block relative">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="bg-white border border-gray-100 p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < testimonials[activeIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <Quote size={36} className="text-agro-primary opacity-40 mb-4" />
                  <p className="text-gray-700 text-lg mb-6 italic">"{testimonials[activeIndex].content}"</p>
                  <div className="flex items-center mt-4">
                    <img
                      className="h-12 w-12 rounded-full object-cover border-2 border-agro-primary"
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].author}
                    />
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">{testimonials[activeIndex].author}</p>
                      <p className="text-md text-gray-500">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
              <button 
                onClick={prevTestimonial} 
                className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 focus:outline-none"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-agro-primary" />
              </button>
            </div>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
              <button 
                onClick={nextTestimonial} 
                className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 focus:outline-none"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-agro-primary" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-64 space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                  }}
                  className={`w-3 h-3 rounded-full ${idx === activeIndex ? 'bg-agro-primary' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
