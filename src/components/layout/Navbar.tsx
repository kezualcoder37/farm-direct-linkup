
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import CartIcon from '@/components/cart/CartIcon';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openLoginModal, openSignUpModal } = useAuth();
  
  // Mock authentication for demo purposes - in a real app this would come from AuthContext
  const isLoggedIn = true; // Just for demonstration

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-agro-primary font-bold text-2xl">Agro<span className="text-agro-accent">Bridge</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-agro-primary font-medium">Home</Link>
            <Link to="/marketplace" className="text-gray-700 hover:text-agro-primary font-medium">Marketplace</Link>
            <Link to="/farmers" className="text-gray-700 hover:text-agro-primary font-medium">Farmers</Link>
            <Link to="/vendors" className="text-gray-700 hover:text-agro-primary font-medium">Vendors</Link>
            <Link to="/about" className="text-gray-700 hover:text-agro-primary font-medium">About</Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart">
              <CartIcon />
            </Link>
            
            {isLoggedIn ? (
              <Link to="/profile">
                <Button variant="outline" className="flex items-center gap-2">
                  <User size={18} />
                  <span>My Profile</span>
                </Button>
              </Link>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={openLoginModal}
                >
                  <User size={18} />
                  <span>Login</span>
                </Button>
                <Button 
                  className="bg-agro-primary hover:bg-agro-dark"
                  onClick={openSignUpModal}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart">
              <CartIcon />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-agro-primary hover:bg-gray-50">Home</Link>
            <Link to="/marketplace" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-agro-primary hover:bg-gray-50">Marketplace</Link>
            <Link to="/farmers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-agro-primary hover:bg-gray-50">Farmers</Link>
            <Link to="/vendors" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-agro-primary hover:bg-gray-50">Vendors</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-agro-primary hover:bg-gray-50">About</Link>
            
            <div className="pt-2 pb-3 border-t border-gray-200 flex flex-col space-y-2">
              {isLoggedIn ? (
                <Link to="/profile">
                  <Button variant="outline" className="w-full justify-center">My Profile</Button>
                </Link>
              ) : (
                <>
                  <Button variant="outline" className="w-full justify-center" onClick={openLoginModal}>Login</Button>
                  <Button className="w-full justify-center bg-agro-primary hover:bg-agro-dark" onClick={openSignUpModal}>Sign Up</Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
