import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Star, MessageCircle, Clock, ArrowLeft } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';

// Mock data for vendors
const allVendors = [
  {
    id: 1,
    name: "Sharma Organic Store",
    image: "https://images.unsplash.com/photo-1607720546822-90688c365e93?auto=format&fit=crop&q=80&w=150&h=150",
    coverImage: "https://images.unsplash.com/photo-1621459555843-81aebfcaf364?auto=format&fit=crop&q=80&w=1200&h=400",
    location: "Mumbai, Maharashtra",
    address: "123 Market Road, Andheri East, Mumbai, Maharashtra 400069",
    phone: "+91 98765 43210",
    email: "contact@sharmaorganic.com",
    rating: 4.8,
    reviewCount: 127,
    specialties: ["Organic", "Vegetables", "Fruits"],
    description: "Sharma Organic Store has been providing the highest quality organic vegetables and fruits direct from farms across Maharashtra since 2018. We focus on sustainable farming practices and supporting local farmers.",
    operatingHours: "Mon-Sat: 8:00 AM - 7:00 PM",
    since: 2018
  },
  {
    id: 2,
    name: "Punjab Grain Traders",
    image: "https://images.unsplash.com/photo-1568386453619-84c3ff4b43c5?auto=format&fit=crop&q=80&w=150&h=150",
    coverImage: "https://images.unsplash.com/photo-1559548339-e7771427acdf?auto=format&fit=crop&q=80&w=1200&h=400",
    location: "Amritsar, Punjab",
    address: "45 Grain Market, GT Road, Amritsar, Punjab 143001",
    phone: "+91 99887 76655",
    email: "info@punjabgrain.com",
    rating: 4.5,
    reviewCount: 84,
    specialties: ["Wheat", "Rice", "Pulses"],
    description: "We are a leading trader of high-quality grains and pulses from Punjab. Our products are sourced directly from local farmers and processed with care to ensure freshness and nutritional value.",
    operatingHours: "Mon-Sat: 9:00 AM - 6:00 PM",
    since: 2015
  },
  {
    id: 3,
    name: "South Indian Spices",
    image: "https://images.unsplash.com/photo-1596040033922-12abde9d2c4a?auto=format&fit=crop&q=80&w=150&h=150",
    coverImage: "https://images.unsplash.com/photo-1560012659-b65754a76c4f?auto=format&fit=crop&q=80&w=1200&h=400",
    location: "Kochi, Kerala",
    address: "78 Spice Garden, MG Road, Kochi, Kerala 682011",
    phone: "+91 88776 65544",
    email: "sales@southindianspices.com",
    rating: 4.9,
    reviewCount: 156,
    specialties: ["Spices", "Coffee", "Tea"],
    description: "We offer a wide range of authentic South Indian spices, coffee, and tea. Our products are sourced from the best plantations in Kerala and are known for their rich aroma and flavor.",
    operatingHours: "Mon-Sat: 10:00 AM - 8:00 PM",
    since: 2010
  },
  {
    id: 4,
    name: "Patel Brothers",
    image: "https://images.unsplash.com/photo-1593604340846-4fbe9655f1d2?auto=format&fit=crop&q=80&w=150&h=150",
    coverImage: "https://images.unsplash.com/photo-1624424774345-ca63a19e4694?auto=format&fit=crop&q=80&w=1200&h=400",
    location: "Ahmedabad, Gujarat",
    address: "22 Oilseed Market, Ashram Road, Ahmedabad, Gujarat 380009",
    phone: "+91 77665 54433",
    email: "info@patelbrothers.com",
    rating: 4.3,
    reviewCount: 98,
    specialties: ["Groundnuts", "Cotton", "Oilseeds"],
    description: "We are a leading supplier of groundnuts, cotton, and oilseeds from Gujarat. Our products are of the highest quality and are available at competitive prices.",
    operatingHours: "Mon-Sat: 9:30 AM - 6:30 PM",
    since: 2017
  },
  {
    id: 5,
    name: "Desai Farm Fresh",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=150&h=150",
    coverImage: "https://images.unsplash.com/photo-1564513335353-9fb39c44a96a?auto=format&fit=crop&q=80&w=1200&h=400",
    location: "Nashik, Maharashtra",
    address: "56 Farm Road, Deolali Gaon, Nashik, Maharashtra 422401",
    phone: "+91 66554 43322",
    email: "sales@desaifarm.com",
    rating: 4.7,
    reviewCount: 112,
    specialties: ["Organic", "Vegetables", "Fruits"],
    description: "We offer a wide range of farm-fresh organic vegetables and fruits. Our products are grown using sustainable farming practices and are free from pesticides and chemicals.",
    operatingHours: "Mon-Sat: 8:30 AM - 7:30 PM",
    since: 2019
  },
  {
    id: 6,
    name: "Bengal Rice Traders",
    image: "https://images.unsplash.com/photo-1588883171454-e9ff5cc8e3d8?auto=format&fit=crop&q=80&w=150&h=150",
    coverImage: "https://images.unsplash.com/photo-1605493084348-15ca9959524a?auto=format&fit=crop&q=80&w=1200&h=400",
    location: "Kolkata, West Bengal",
    address: "11 Rice Market, BBD Bagh, Kolkata, West Bengal 700001",
    phone: "+91 55443 32211",
    email: "info@bengalrice.com",
    rating: 4.6,
    reviewCount: 78,
    specialties: ["Rice", "Jute", "Fish"],
    description: "We are a leading trader of rice, jute, and fish from West Bengal. Our products are sourced from local farmers and fishermen and are of the highest quality.",
    operatingHours: "Mon-Sat: 10:30 AM - 5:30 PM",
    since: 2016
  }
];

// Mock products for this vendor
const vendorProducts = [
  {
    id: 101,
    name: "Organic Tomatoes",
    price: 40,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1606588260160-0c2707590337?auto=format&fit=crop&w=800&q=80",
    farmer: "Kumar Farms",
    location: "Nashik, Maharashtra",
    organic: true
  },
  {
    id: 102,
    name: "Fresh Spinach",
    price: 30,
    unit: "per bundle",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
    farmer: "Green Acres",
    location: "Pune, Maharashtra",
    organic: true
  },
  {
    id: 103,
    name: "Red Onions",
    price: 35,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=800&q=80",
    farmer: "Patel Brothers",
    location: "Nashik, Maharashtra",
    organic: false
  },
  {
    id: 104,
    name: "Organic Apples",
    price: 150,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=800&q=80",
    farmer: "Himalayan Orchards",
    location: "Shimla, Himachal Pradesh",
    organic: true
  }
];

// Mock reviews
const vendorReviews = [
  {
    id: 1,
    user: "Priya Sharma",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    date: "2023-11-10",
    comment: "Excellent quality produce, always fresh and delivery is prompt. Highly recommended!",
    reply: "Thank you for your kind words, Priya! We're glad you're enjoying our products."
  },
  {
    id: 2,
    user: "Rajesh Kumar",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 4,
    date: "2023-11-05",
    comment: "Good selection of organic vegetables. Would be great if they could add more variety of fruits."
  },
  {
    id: 3,
    user: "Anita Desai",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    date: "2023-10-28",
    comment: "The freshness of their produce is unmatched. I've been buying from them for months and never been disappointed."
  }
];

const VendorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [vendor, setVendor] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch vendor details
    setLoading(true);
    setTimeout(() => {
      const foundVendor = allVendors.find(v => v.id === Number(id));
      if (foundVendor) {
        setVendor(foundVendor);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-8">
          <div className="container mx-auto px-4">
            <div className="animate-pulse">
              <div className="h-48 bg-gray-200 rounded mb-6"></div>
              <div className="h-8 w-1/3 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-2 h-64 bg-gray-200 rounded"></div>
                <div className="h-64 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!vendor) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-gray-900">Vendor not found</h1>
            <Link to="/vendors" className="text-agro-primary hover:underline flex items-center justify-center mt-4">
              <ArrowLeft size={16} className="mr-1" /> Back to Vendors
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
      <main className="flex-grow">
        {/* Cover Image */}
        <div className="relative h-48 md:h-64 bg-gray-200">
          <img 
            src={vendor.coverImage} 
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 -mt-16 relative z-10">
          <div className="mb-6 mt-20">
            <Link to="/vendors" className="text-agro-primary hover:underline flex items-center">
              <ArrowLeft size={16} className="mr-1" /> Back to Vendors
            </Link>
          </div>

          {/* Vendor Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <img 
                  src={vendor.image} 
                  alt={vendor.name}
                  className="w-24 h-24 rounded-full border-4 border-white object-cover"
                />
              </div>
              <div className="md:ml-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h1 className="text-2xl font-bold">{vendor.name}</h1>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center text-amber-500 mr-1">
                        <Star size={18} className="fill-current" />
                        <span className="ml-1 font-semibold">{vendor.rating}</span>
                      </div>
                      <span className="text-gray-500">({vendor.reviewCount} reviews)</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Button 
                      className="bg-agro-primary hover:bg-agro-dark flex items-center"
                      onClick={() => alert('Chat feature coming soon!')}
                    >
                      <MessageCircle size={18} className="mr-2" /> Contact Vendor
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {vendor.specialties.map((specialty: string, index: number) => (
                    <Badge key={index} variant="outline">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-start">
                    <MapPin size={18} className="mr-2 text-gray-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{vendor.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={18} className="mr-2 text-gray-500" />
                    <span className="text-gray-700">{vendor.operatingHours}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={18} className="mr-2 text-gray-500" />
                    <span className="text-gray-700">{vendor.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="mr-2 text-gray-500" />
                    <span className="text-gray-700">{vendor.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs for different sections */}
          <Tabs defaultValue="about">
            <TabsList className="mb-6 bg-white">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            {/* About Tab */}
            <TabsContent value="about" className="mb-8">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">About {vendor.name}</h2>
                  <p className="text-gray-700">{vendor.description}</p>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Address</p>
                          <div className="flex items-start">
                            <MapPin size={16} className="mr-1 text-gray-400 flex-shrink-0 mt-1" />
                            <p className="text-gray-700">{vendor.address}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <div className="flex items-center">
                            <Phone size={16} className="mr-1 text-gray-400" />
                            <p className="text-gray-700">{vendor.phone}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <div className="flex items-center">
                            <Mail size={16} className="mr-1 text-gray-400" />
                            <p className="text-gray-700">{vendor.email}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Operating Hours</p>
                          <div className="flex items-center">
                            <Clock size={16} className="mr-1 text-gray-400" />
                            <p className="text-gray-700">{vendor.operatingHours}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Products Tab */}
            <TabsContent value="products" className="mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Available Products</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {vendorProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      unit={product.unit}
                      image={product.image}
                      farmer={product.farmer}
                      location={product.location}
                      organic={product.organic}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Customer Reviews</h2>
                  <Button className="bg-agro-primary hover:bg-agro-dark">
                    Write a Review
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {vendorReviews.map(review => (
                    <div key={review.id} className="border-b pb-6 last:border-0">
                      <div className="flex items-start">
                        <img 
                          src={review.avatar} 
                          alt={review.user}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div className="flex-grow">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <h4 className="font-semibold text-gray-900">{review.user}</h4>
                            <div className="text-sm text-gray-500 mt-1 sm:mt-0">
                              {review.date}
                            </div>
                          </div>
                          
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={`${
                                  i < review.rating ? 'fill-amber-500 text-amber-500' : 'text-gray-300'
                                } mr-0.5`}
                              />
                            ))}
                          </div>
                          
                          <p className="mt-2 text-gray-700">{review.comment}</p>
                          
                          {review.reply && (
                            <div className="mt-3 ml-6 p-3 bg-gray-50 rounded-md">
                              <p className="text-sm font-semibold text-gray-900">Response from {vendor.name}</p>
                              <p className="mt-1 text-sm text-gray-700">{review.reply}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VendorDetail;
