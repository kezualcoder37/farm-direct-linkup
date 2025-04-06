
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';

const CartIcon: React.FC = () => {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="relative">
      <ShoppingBag size={22} className="text-gray-700 hover:text-agro-primary transition-colors" />
      {totalItems > 0 && (
        <Badge className="absolute -top-2 -right-2 min-w-[1.25rem] min-h-[1.25rem] flex items-center justify-center p-0 bg-agro-primary">
          <span className="text-xs">{totalItems}</span>
        </Badge>
      )}
    </Link>
  );
};

export default CartIcon;
