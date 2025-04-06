
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search, MessageCircle, Star, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Mock data for vendors
const allVendors = [
  {
    id: 1,
    name: "Sharma Organic Store",
    image: "https://images.unsplash.com/photo-1607720546822-90688c365e93?auto=format&fit=crop&q=80&w=150&h=150",
    location: "Mumbai, Maharashtra",
    distance: 2.3, // Distance in miles
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
    distance: 4.1, // Distance in miles
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
    distance: 3.7, // Distance in miles
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
    distance: 5.2, // Distance in miles
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
    distance: 1.8, // Distance in miles
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
    distance: 4.7, // Distance in miles
    rating: 4.6,
    reviewCount: 78,
    specialties: ["Rice", "Jute", "Fish"],
    since: 2016
  },
  // Adding new vendors with distances of 4 and 5 miles away
  {
    id: 7,
    name: "Krishna Vegetable Market",
    image: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?auto=format&fit=crop&q=80&w=150&h=150",
    location: "Jaipur, Rajasthan",
    distance: 4.0, // Distance in miles
    rating: 4.4,
    reviewCount: 92,
    specialties: ["Vegetables", "Spices", "Herbs"],
    since: 2017
  },
  {
    id: 8,
    name: "Verma Organic Farms",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=150&h=150",
    location: "Lucknow, Uttar Pradesh",
    distance: 5.0, // Distance in miles
    rating: 4.5,
    reviewCount: 63,
    specialties: ["Organic", "Grains", "Lentils"],
    since: 2019
  }
];

const Vendors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('all');
  const [distanceFilter, setDistanceFilter] = useState('all');
  
  // Get unique specialties for filter
  const allSpecialties = [...new Set(allVendors.flatMap(vendor => vendor.specialties))];
  
  // Filter vendors based on search term, specialty, and distance
  const filteredVendors = allVendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         vendor.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSpecialty = specialtyFilter === 'all' || 
                            vendor.specialties.some(s => s.toLowerCase() === specialtyFilter.toLowerCase());
    
    const matchesDistance = distanceFilter === 'all' || 
                           (distanceFilter === 'under3' && vendor.distance < 3) ||
                           (distanceFilter === '3to5' && vendor.distance >= 3 && vendor.distance <= 5) ||
                           (distanceFilter === 'over5' && vendor.distance > 5);
    
    return matchesSearch && matchesSpecialty && matchesDistance;
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
            <div className="w-full md:w-64">
              <select 
                value={distanceFilter}
                onChange={(e) => setDistanceFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agro-primary"
              >
                <option value="all">All Distances</option>
                <option value="under3">Under 3 miles</option>
                <option value="3to5">3-5 miles</option>
                <option value="over5">Over 5 miles</option>
              </select>
            </div>
          </div>

          {/* Distance Legend */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-semibold mb-2">Distance Guide:</h3>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                <span>Under 3 miles</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                <span>3-5 miles</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                <span>Over 5 miles</span>
              </div>
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
                      
                      {/* Distance indicator */}
                      <div className={`mt-3 flex items-center ${
                        vendor.distance < 3 ? 'text-green-600' : 
                        vendor.distance <= 5 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        <Navigation size={14} className="mr-1" />
                        <span className="text-sm font-medium">{vendor.distance} miles away</span>
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
                  setDistanceFilter('all');
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {filteredVendors.length > 0 && (
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Vendors;
