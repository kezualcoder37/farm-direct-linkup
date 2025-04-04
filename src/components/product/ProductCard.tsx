
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  unit: string;
  image: string;
  farmer: string;
  location: string;
  organic?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  unit,
  image,
  farmer,
  location,
  organic = false
}) => {
  return (
    <Link to={`/product/${id}`}>
      <motion.div 
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Card className="product-card h-full overflow-hidden group">
          <div className="relative overflow-hidden">
            <img 
              src={image} 
              alt={name}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            {organic && (
              <Badge className="absolute top-2 right-2 bg-agro-primary">Organic</Badge>
            )}
            <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white/80 hover:bg-white p-1.5 rounded-full" onClick={(e) => e.preventDefault()}>
                <Heart size={16} className="text-agro-primary" />
              </button>
            </div>
          </div>
          <CardContent className="pt-4">
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-agro-primary transition-colors">{name}</h3>
            <div className="flex items-center justify-between mt-2">
              <span className="font-bold text-agro-primary">
                ₹{price} <span className="text-sm text-gray-500 font-normal">{unit}</span>
              </span>
              <span className="text-sm text-gray-500">
                by {farmer}
              </span>
            </div>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <MapPin size={14} className="inline mr-1" />
              {location}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
