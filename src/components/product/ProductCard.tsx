
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from 'lucide-react';

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
      <Card className="product-card h-full hover:translate-y-[-5px]">
        <div className="relative">
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover"
          />
          {organic && (
            <Badge className="absolute top-2 right-2 bg-agro-primary">Organic</Badge>
          )}
        </div>
        <CardContent className="pt-4">
          <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
          <div className="flex items-center justify-between mt-2">
            <span className="font-bold text-agro-primary">
              ${price} <span className="text-sm text-gray-500 font-normal">{unit}</span>
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
    </Link>
  );
};

export default ProductCard;
