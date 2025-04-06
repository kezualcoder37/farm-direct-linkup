
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search, MessageCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for vendors
const allVendors = [
  {
    id: 1,
    name: "Sharma Organic Store",
    image: "https://images.unsplash.com/photo-1607720546822-90688c365e93?auto=format&fit=crop&q=80&w=150&h=150",
    location: "Mumbai, Maharashtra",
    rating: 4.8,
    reviewCount: 127,
    specialties: ["Organic", "Vegetables", "Fruits"],
    since: 2018
  },
  {
    id: 2,
    name: "Punjab Grain Traders",
    image: "https://images.unsplash.com/photo-1568386453619-84c3ff4b43c5?auto=format&fit=crop&q=80&w=150&h=150",
    location: "Amritsar, Punjab",
    rating: 4.5,
    reviewCount: 84,
    specialties: ["Wheat", "Rice", "Pulses"],
    since: 2015
  },
  {
    id: 3,
    name: "South Indian Spices",
    image: "https://images.unsplash.com/photo-1596040033922-12abde9d2c4a?auto=format&fit=crop&q=80&w=150&h=150",
    location: "Kochi, Kerala",
    rating: 4.9,
    reviewCount: 156,
    specialties: ["Spices", "Coffee", "Tea"],
    since: 2010
  },
  {
    id: 4,
    name: "Patel Brothers",
    image: "https://images.unsplash.com/photo-1593604340846-4fbe9655f1d2?auto=format&fit=crop&q=80&w=150&h=150",
    location: "Ahmedabad, Gujarat",
    rating: 4.3,
    reviewCount: 98,
    specialties: ["Groundnuts", "Cotton", "Oilseeds"],
    since: 2017
  },
  {
    id: 5,
    name: "Desai Farm Fresh",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=150&h=150",
    location: "Nashik, Maharashtra",
    rating: 4.7,
    reviewCount: 112,
    specialties: ["Organic", "Vegetables", "Fruits"],
    since: 2019
  },
  {
    id: 6,
    name: "Bengal Rice Traders",
    image: "https://images.unsplash.com/photo-1588883171454-e9ff5cc8e3d8?auto=format&fit=crop&q=80&w=150&h=150",
    location: "Kolkata, West Bengal",
    rating: 4.6,
    reviewCount: 78,
    specialties: ["Rice", "Jute", "Fish"],
    since: 2016
  }
];

const Vendors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('all');
  
  // Get unique specialties for filter
  const allSpecialties = [...new Set(allVendors.flatMap(vendor => vendor.specialties))];
  
  // Filter vendors based on search term and specialty
  const filteredVendors = allVendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         vendor.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSpecialty = specialtyFilter === 'all' || 
                            vendor.specialties.some(s => s.toLowerCase() === specialtyFilter.toLowerCase());
    
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Vendors</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with trusted agricultural vendors from across India for the best quality produce
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search by name or location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="w-full md:w-64">
              <select 
                value={specialtyFilter}
                onChange={(e) => setSpecialtyFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agro-primary"
              >
                <option value="all">All Specialties</option>
                {allSpecialties.map((specialty, index) => (
                  <option key={index} value={specialty}>{specialty}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Vendors Grid */}
          {filteredVendors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVendors.map((vendor) => (
                <Card key={vendor.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex items-start">
                        <img
                          src={vendor.image}
                          alt={vendor.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900">{vendor.name}</h3>
                          <div className="flex items-center text-sm text-gray-500 mb-1">
                            <MapPin size={14} className="mr-1" />
                            {vendor.location}
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center text-amber-500 mr-1">
                              <Star size={14} className="fill-current" />
                              <span className="ml-1 text-sm">{vendor.rating}</span>
                            </div>
                            <span className="text-xs text-gray-500">({vendor.reviewCount} reviews)</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="flex flex-wrap gap-1 mb-3">
                          {vendor.specialties.map((specialty, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500">
                          Member since {vendor.since}
                        </p>
                      </div>

                      <div className="mt-4 flex space-x-2">
                        <Link to={`/vendor/${vendor.id}`} className="flex-1">
                          <Button variant="outline" className="w-full">View Profile</Button>
                        </Link>
                        <Button 
                          className="bg-agro-primary hover:bg-agro-dark"
                          onClick={() => alert('Chat feature coming soon!')}
                        >
                          <MessageCircle size={18} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No vendors match your filters. Try different search terms.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm('');
                  setSpecialtyFilter('all');
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Vendors;
