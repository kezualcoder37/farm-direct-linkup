
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, User, Edit, Check, X } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

// Mock user data - would come from authentication in a real app
const mockUser = {
  id: 1,
  name: "Rajesh Kumar",
  email: "rajesh@example.com",
  phone: "+91 98765 43210",
  role: "farmer", // or "vendor"
  address: "123, Farming Street, Nagpur, Maharashtra, India",
  description: "I'm an organic farmer specializing in rice and wheat cultivation using traditional methods passed down through generations.",
  profileImage: "https://images.unsplash.com/photo-1553267751-1c148a7280a1?auto=format&fit=crop&q=80&w=150&h=150",
  coverImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200",
  joined: "June 2023"
};

// Mock orders for farmers/vendors
const mockOrders = [
  {
    id: "ORD-001",
    date: "2023-11-15",
    items: [
      { name: "Organic Basmati Rice", quantity: 50, price: 120 },
      { name: "Wheat", quantity: 25, price: 35 }
    ],
    total: 6875,
    status: "delivered"
  },
  {
    id: "ORD-002",
    date: "2023-11-02",
    items: [
      { name: "Red Onions", quantity: 100, price: 35 }
    ],
    total: 3500,
    status: "processing"
  }
];

// Mock listings for farmers
const mockListings = [
  {
    id: 1,
    name: "Organic Basmati Rice",
    price: 120,
    unit: "per kg",
    available: 500,
    added: "2023-10-10",
    status: "active"
  },
  {
    id: 2,
    name: "Premium Wheat",
    price: 35,
    unit: "per kg",
    available: 300,
    added: "2023-10-05",
    status: "active"
  }
];

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: mockUser.name,
    email: mockUser.email,
    phone: mockUser.phone,
    address: mockUser.address,
    description: mockUser.description
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    // Here we would save changes to the backend
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
      duration: 2000,
    });
  };

  const handleCancelEdit = () => {
    setFormData({
      name: mockUser.name,
      email: mockUser.email,
      phone: mockUser.phone,
      address: mockUser.address,
      description: mockUser.description
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Cover Image */}
        <div className="relative h-48 md:h-64 bg-gray-200">
          <img 
            src={mockUser.coverImage} 
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 -mt-16 relative z-10">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <img 
                  src={mockUser.profileImage} 
                  alt={mockUser.name}
                  className="w-24 h-24 rounded-full border-4 border-white object-cover"
                />
              </div>
              <div className="md:ml-6 flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h1 className="text-2xl font-bold">{mockUser.name}</h1>
                    <p className="text-agro-primary capitalize">{mockUser.role}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    {isEditing ? (
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={handleCancelEdit}
                          className="flex items-center"
                        >
                          <X size={16} className="mr-1" /> Cancel
                        </Button>
                        <Button 
                          size="sm"
                          onClick={handleSaveChanges}
                          className="bg-agro-primary hover:bg-agro-dark flex items-center"
                        >
                          <Check size={16} className="mr-1" /> Save Changes
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setIsEditing(true)}
                        className="flex items-center"
                      >
                        <Edit size={16} className="mr-1" /> Edit Profile
                      </Button>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-gray-600 mt-2">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    {mockUser.address}
                  </div>
                  <div className="flex items-center">
                    <Phone size={16} className="mr-1" />
                    {mockUser.phone}
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mt-1">
                  <Mail size={16} className="mr-1" />
                  {mockUser.email}
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  Member since {mockUser.joined}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs for different sections */}
          <Tabs defaultValue="profile">
            <TabsList className="mb-6 bg-white">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              {mockUser.role === "farmer" ? (
                <TabsTrigger value="listings">My Listings</TabsTrigger>
              ) : (
                <TabsTrigger value="orders">My Orders</TabsTrigger>
              )}
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile" className="mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">About Me</h2>
                
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <Textarea
                        id="description"
                        name="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-gray-700 whitespace-pre-line">{mockUser.description}</p>
                    
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="text-gray-700">{mockUser.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="text-gray-700">{mockUser.phone}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm text-gray-500">Address</p>
                          <p className="text-gray-700">{mockUser.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Listings Tab (for farmers) */}
            {mockUser.role === "farmer" && (
              <TabsContent value="listings" className="mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">My Crop Listings</h2>
                    <Button className="bg-agro-primary hover:bg-agro-dark">Add New Listing</Button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px] text-sm text-left">
                      <thead className="text-gray-700 bg-gray-50">
                        <tr>
                          <th className="py-3 px-4">Crop Name</th>
                          <th className="py-3 px-4">Price</th>
                          <th className="py-3 px-4">Available Quantity</th>
                          <th className="py-3 px-4">Added On</th>
                          <th className="py-3 px-4">Status</th>
                          <th className="py-3 px-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockListings.map(listing => (
                          <tr key={listing.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium">{listing.name}</td>
                            <td className="py-3 px-4">₹{listing.price} {listing.unit}</td>
                            <td className="py-3 px-4">{listing.available} kg</td>
                            <td className="py-3 px-4">{listing.added}</td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 capitalize">
                                {listing.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">Edit</Button>
                                <Button variant="destructive" size="sm">Delete</Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
            )}

            {/* Orders Tab (for vendors) */}
            {mockUser.role !== "farmer" && (
              <TabsContent value="orders" className="mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-6">My Orders</h2>
                  
                  <div className="space-y-6">
                    {mockOrders.map(order => (
                      <Card key={order.id} className="overflow-hidden">
                        <div className="bg-gray-50 px-6 py-4 border-b flex justify-between items-center">
                          <div>
                            <span className="text-sm text-gray-500">Order ID: </span>
                            <span className="font-semibold">{order.id}</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div>
                              <span className="text-sm text-gray-500">Date: </span>
                              <span>{order.date}</span>
                            </div>
                            <span 
                              className={`px-2 py-1 text-xs rounded-full ${
                                order.status === 'delivered' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              } capitalize`}
                            >
                              {order.status}
                            </span>
                          </div>
                        </div>
                        <CardContent className="p-0">
                          <div className="px-6 py-4 space-y-4">
                            {/* Items */}
                            <div>
                              <h4 className="text-sm font-medium text-gray-500 mb-2">Items:</h4>
                              <div className="space-y-2">
                                {order.items.map((item, idx) => (
                                  <div key={idx} className="flex justify-between">
                                    <span>
                                      {item.name} × {item.quantity}
                                    </span>
                                    <span className="font-medium">
                                      ₹{item.price * item.quantity}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            {/* Total */}
                            <div className="border-t pt-4 flex justify-between">
                              <span className="font-semibold">Total:</span>
                              <span className="font-bold text-agro-primary">₹{order.total}</span>
                            </div>
                          </div>
                          
                          <div className="px-6 py-3 bg-gray-50 border-t flex justify-end space-x-2">
                            <Button variant="outline" size="sm">View Details</Button>
                            <Button variant="outline" size="sm">Track Order</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            )}

            {/* Order History Tab */}
            <TabsContent value="history" className="mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Transaction History</h2>
                
                {mockUser.role === "farmer" ? (
                  <div className="py-8 text-center text-gray-500">
                    <p>Your sales history will appear here.</p>
                  </div>
                ) : (
                  <div className="py-8 text-center text-gray-500">
                    <p>Your purchase history will appear here.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
