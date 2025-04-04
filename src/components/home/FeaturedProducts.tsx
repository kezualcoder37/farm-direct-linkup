
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, ShoppingBag } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data for featured products - updated for India
const featuredProducts = [
  {
    id: 1,
    name: "Organic Basmati Rice",
    price: 120,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    farmer: "Kumar Organic Farm",
    location: "Punjab, India",
    featured: true,
    organic: true
  },
  {
    id: 2,
    name: "Fresh Onions",
    price: 35,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&w=800&q=80",
    farmer: "Sharma Farms",
    location: "Maharashtra, India",
    featured: true,
    organic: false
  },
  {
    id: 3,
    name: "Organic Turmeric",
    price: 210,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f6?auto=format&fit=crop&w=800&q=80",
    farmer: "Patel Spice Garden",
    location: "Karnataka, India",
    featured: true,
    organic: true
  },
  {
    id: 4,
    name: "Fresh Alphonso Mangoes",
    price: 450,
    unit: "per dozen",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
    farmer: "Singh Orchards",
    location: "Ratnagiri, India",
    featured: true,
    organic: false
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="agro-section bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover handpicked seasonal produce directly from local farms across India
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/product/${product.id}`}>
                <Card className="product-card h-full hover:shadow-lg transition-shadow duration-300 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    {product.organic && (
                      <Badge className="absolute top-2 right-2 bg-agro-primary">Organic</Badge>
                    )}
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-agro-primary transition-colors">{product.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold text-agro-primary">
                        ₹{product.price} <span className="text-sm text-gray-500 font-normal">{product.unit}</span>
                      </span>
                      <span className="text-sm text-gray-500">
                        by {product.farmer}
                      </span>
                    </div>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <MapPin size={14} className="inline mr-1" />
                      {product.location}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link to="/marketplace" className="inline-flex items-center agro-btn-primary group">
            View All Products
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
