import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, User, Heart, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

// Mock data for products (we'll replace this with API calls later)
const allProducts = [
  {
    id: 1,
    name: "Organic Basmati Rice",
    price: 120,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    farmer: "Kumar Organic Farm",
    location: "Punjab, India",
    category: "grains",
    organic: true,
    description: "Premium quality organic basmati rice grown without chemicals. Long grain, aromatic rice perfect for biryanis and pulaos.",
    minOrder: 5,
    available: 500,
    harvestedOn: "2023-10-15",
    images: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601700577771-20324bc8ed2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594554905337-e8730f9b111d?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    name: "Fresh Onions",
    price: 35,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&w=800&q=80",
    farmer: "Sharma Farms",
    location: "Maharashtra, India",
    category: "vegetables",
    organic: false,
    description: "Fresh, medium-sized onions cultivated using traditional farming methods. Perfect for everyday cooking.",
    minOrder: 2,
    available: 300,
    harvestedOn: "2023-11-20",
    images: [
      "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80"
    ]
  },
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toast } = useToast();
  const { addItem } = useCart();

  useEffect(() => {
    // Simulate API call to fetch product details
    const fetchProduct = () => {
      setLoading(true);
      setTimeout(() => {
        const foundProduct = allProducts.find(p => p.id === Number(id));
        if (foundProduct) {
          setProduct(foundProduct);
        }
        setLoading(false);
      }, 500);
    };

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (value: number) => {
    if (product && value >= 1 && value <= product.available) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
    }
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(prev => !prev);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
      duration: 2000,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-8">
          <div className="container mx-auto px-4">
            <div className="animate-pulse">
              <div className="h-8 w-1/3 bg-gray-200 rounded mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="h-96 bg-gray-200 rounded"></div>
                <div className="space-y-4">
                  <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                  <div className="h-6 w-1/2 bg-gray-200 rounded"></div>
                  <div className="h-32 w-full bg-gray-200 rounded"></div>
                  <div className="h-10 w-1/3 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
            <Link to="/marketplace" className="text-agro-primary hover:underline flex items-center justify-center mt-4">
              <ArrowLeft size={16} className="mr-1" /> Back to Marketplace
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/marketplace" className="text-agro-primary hover:underline flex items-center">
              <ArrowLeft size={16} className="mr-1" /> Back to Marketplace
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="mb-4 relative">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
                {product.organic && (
                  <Badge className="absolute top-4 right-4 bg-agro-primary">Organic</Badge>
                )}
              </div>
              
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {product.images.map((image: string, index: number) => (
                  <div 
                    key={index} 
                    className={`cursor-pointer rounded-md overflow-hidden h-20 w-20 flex-shrink-0 border-2 ${selectedImage === index ? 'border-agro-primary' : 'border-gray-200'}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-agro-primary">
                  ₹{product.price}
                </span>
                <span className="text-gray-500 ml-1">
                  {product.unit}
                </span>
              </div>

              {product.organic && (
                <Badge className="mb-4 bg-agro-primary/10 text-agro-primary border-agro-primary">
                  Organic Certified
                </Badge>
              )}

              <p className="text-gray-700 mb-6">
                {product.description}
              </p>

              <div className="bg-gray-50 p-4 rounded-md mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Available Quantity</p>
                    <p className="font-medium">{product.available} kg</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Minimum Order</p>
                    <p className="font-medium">{product.minOrder} kg</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Harvested On</p>
                    <p className="font-medium">{new Date(product.harvestedOn).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-medium capitalize">{product.category}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="flex items-center text-gray-700 mr-6">
                  <MapPin size={16} className="mr-1" />
                  {product.location}
                </div>
                <div className="flex items-center text-gray-700">
                  <User size={16} className="mr-1" />
                  {product.farmer}
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button 
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={product && quantity >= product.available}
                  >
                    +
                  </button>
                </div>
                <span className="ml-3 text-gray-500">
                  Total: ₹{product ? (product.price * quantity).toFixed(2) : 0}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-agro-primary hover:bg-agro-dark flex-1 flex items-center justify-center"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag size={18} className="mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  className={`flex-none flex items-center justify-center ${isWishlisted ? 'bg-agro-primary hover:bg-agro-dark text-white border-agro-primary' : ''}`}
                  onClick={handleWishlistToggle}
                >
                  <Heart size={18} className={`mr-2 ${isWishlisted ? 'fill-white' : ''}`} />
                  {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
