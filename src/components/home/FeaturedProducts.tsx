
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, ShoppingBag } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: 4.99,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80",
    farmer: "Green Valley Farm",
    location: "Riverside, CA",
    featured: true,
    organic: true
  },
  {
    id: 2,
    name: "Fresh Carrots",
    price: 2.49,
    unit: "per bunch",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80",
    farmer: "Sunshine Acres",
    location: "Portland, OR",
    featured: true,
    organic: false
  },
  {
    id: 3,
    name: "Organic Potatoes",
    price: 3.99,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    farmer: "Harvest Fields",
    location: "Boulder, CO",
    featured: true,
    organic: true
  },
  {
    id: 4,
    name: "Fresh Apples",
    price: 5.99,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&w=800&q=80",
    farmer: "Orchard Valley",
    location: "Wenatchee, WA",
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
            Discover handpicked seasonal produce directly from local farms
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
                        ${product.price} <span className="text-sm text-gray-500 font-normal">{product.unit}</span>
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
