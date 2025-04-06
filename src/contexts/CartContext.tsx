
import React, { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  unit: string;
  image: string;
  farmer: string;
  quantity: number;
};

interface CartContextType {
  items: CartItem[];
  addItem: (product: any, quantity: number) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addItem = (product: any, quantity: number) => {
    setItems((prevItems) => {
      // Check if item already exists in cart
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        // Update quantity if item already exists
        const updatedItems = prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        
        toast({
          title: "Updated cart",
          description: `${product.name} quantity updated to ${existingItem.quantity + quantity}`,
          duration: 2000,
        });
        
        return updatedItems;
      } else {
        // Add new item to cart
        const newItem: CartItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          unit: product.unit,
          image: product.image,
          farmer: product.farmer,
          quantity: quantity,
        };
        
        toast({
          title: "Added to cart",
          description: `${quantity} ${quantity > 1 ? "items" : "item"} of ${product.name} added to your cart.`,
          duration: 2000,
        });
        
        return [...prevItems, newItem];
      }
    });
  };

  const removeItem = (id: number) => {
    setItems((prevItems) => {
      const itemToRemove = prevItems.find(item => item.id === id);
      if (itemToRemove) {
        toast({
          title: "Removed from cart",
          description: `${itemToRemove.name} has been removed from your cart.`,
          duration: 2000,
        });
      }
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
      duration: 2000,
    });
  };

  // Calculate total items and price
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
