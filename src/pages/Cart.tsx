
import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    toast({
      title: "Checkout functionality",
      description: "Checkout feature will be implemented soon.",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/marketplace" className="text-agro-primary hover:underline flex items-center">
              <ArrowLeft size={16} className="mr-1" /> Continue Shopping
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Cart</h1>

          {items.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row bg-white p-4 rounded-lg shadow border border-gray-100"
                  >
                    <div className="sm:w-24 sm:h-24 w-full h-32 mb-4 sm:mb-0 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-grow sm:ml-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-500">Sold by: {item.farmer}</p>
                          <p className="font-bold text-agro-primary mt-1">
                            ₹{item.price} <span className="text-sm text-gray-500 font-normal">{item.unit}</span>
                          </p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 flex items-center"
                          >
                            <Trash size={16} className="mr-1" /> Remove
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-4 py-1 border-x border-gray-300">{item.quantity}</span>
                          <button
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="ml-4 text-gray-700">
                          Total: ₹{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
                  <div className="space-y-3 border-b border-gray-200 pb-4 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                      <span className="font-medium">₹{totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">Calculated at checkout</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">Calculated at checkout</span>
                    </div>
                  </div>
                  <div className="flex justify-between font-bold text-lg mb-6">
                    <span>Total</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <Button 
                    className="w-full bg-agro-primary hover:bg-agro-dark flex items-center justify-center"
                    onClick={handleCheckout}
                  >
                    <ShoppingBag size={18} className="mr-2" />
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="bg-gray-100 p-6 rounded-full mb-4">
                <ShoppingBag size={48} className="text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Link to="/marketplace">
                <Button className="bg-agro-primary hover:bg-agro-dark">
                  Browse Marketplace
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
