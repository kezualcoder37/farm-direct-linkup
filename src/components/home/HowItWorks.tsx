
import React from 'react';
import { Users, ShoppingBag, MessageSquare, Truck } from 'lucide-react';

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={feature.name} className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 left-6">
                <div className={`${feature.color} rounded-full p-3 inline-flex`}>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
