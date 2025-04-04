
import React from 'react';
import { Users, ShoppingBag, MessageSquare, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Create Your Profile',
    description:
      'Sign up as a farmer to list products or as a vendor to browse and purchase produce directly.',
    icon: Users,
    color: 'bg-agro-primary/20 text-agro-primary',
  },
  {
    name: 'Browse & Connect',
    description:
      'Discover local produce or reach daily vendors. Filter by product type, location, and farming practices.',
    icon: ShoppingBag,
    color: 'bg-agro-accent/20 text-agro-accent',
  },
  {
    name: 'Communicate Directly',
    description:
      'Chat with farmers or vendors to discuss products, pricing, and logistics without intermediaries.',
    icon: MessageSquare,
    color: 'bg-agro-secondary/20 text-agro-secondary',
  },
  {
    name: 'Complete Transactions',
    description:
      'Arrange pickup or delivery and make secure transactions through our platform.',
    icon: Truck,
    color: 'bg-agro-earth/20 text-agro-earth',
  },
];

// Animation variants for framer-motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const HowItWorks: React.FC = () => {
  return (
    <section className="agro-section bg-agro-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How AgroBridge Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform makes it easy to connect farmers and daily vendors, creating a transparent and efficient marketplace
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.name} 
              className="bg-white p-6 rounded-lg shadow-md relative hover:shadow-xl transition-shadow duration-300 group"
              variants={itemVariants}
            >
              <div className="absolute -top-4 left-6">
                <div className={`${feature.color} rounded-full p-3 inline-flex group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-8">
                <p className="text-xl font-semibold text-gray-900">{feature.name}</p>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
              <div className="mt-4 flex items-center">
                <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-agro-primary text-white text-lg font-bold">
                  {index + 1}
                </div>
                {index < features.length - 1 && (
                  <div className="hidden lg:block w-full h-0.5 bg-gray-200 relative left-2">
                    <div className="absolute h-2 w-2 rounded-full bg-agro-primary right-0 top-1/2 transform -translate-y-1/2"></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
