
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, MessageSquare, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for farmers
const farmers = [
  {
    id: 1,
    name: "Green Valley Farm",
    owner: "Maria Rodriguez",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80",
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80",
    location: "Riverside, CA",
    rating: 4.9,
    reviews: 24,
    products: ["Tomatoes", "Peppers", "Cucumbers"],
    description: "Family-owned organic farm specializing in heirloom vegetables. We've been farming sustainably for over 20 years.",
    verified: true,
    organic: true
  },
  {
    id: 2,
    name: "Sunshine Acres",
    owner: "Robert Johnson",
    image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=800&q=80",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    location: "Portland, OR",
    rating: 4.7,
    reviews: 18,
    products: ["Carrots", "Radishes", "Beets"],
    description: "Specializing in root vegetables grown using regenerative farming practices. Our mission is to heal the soil while producing nutrient-dense food.",
    verified: true,
    organic: false
  },
  {
    id: 3,
    name: "Harvest Fields",
    owner: "Emily Chen",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
    profileImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80",
    location: "Boulder, CO",
    rating: 4.8,
    reviews: 31,
    products: ["Potatoes", "Onions", "Garlic"],
    description: "Certified organic farm focusing on soil health and biodiversity. We grow vegetables that are nutrient-dense and full of flavor.",
    verified: true,
    organic: true
  },
  {
    id: 4,
    name: "Orchard Valley",
    owner: "James Wilson",
    image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=800&q=80",
    profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80",
    location: "Wenatchee, WA",
    rating: 4.6,
    reviews: 15,
    products: ["Apples", "Pears", "Cherries"],
    description: "Fourth-generation family orchard producing tree fruits with minimal intervention. Our apples are known for their exceptional flavor.",
    verified: false,
    organic: false
  },
];

const Farmers: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Farmers</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the passionate farmers behind your food and connect directly with them
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {farmers.map((farmer) => (
              <Card key={farmer.id} className="overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={farmer.image} 
                    alt={farmer.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-white text-gray-800 mb-2">
                        {farmer.products.length} Products
                      </Badge>
                      {farmer.organic && (
                        <Badge className="bg-agro-primary ml-2">
                          Organic
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                
                <CardContent className="pt-6 px-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <img 
                        src={farmer.profileImage} 
                        alt={farmer.owner} 
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                      <div className="ml-3">
                        <h3 className="font-semibold text-lg text-gray-900 flex items-center">
                          {farmer.name}
                          {farmer.verified && (
                            <Award size={16} className="ml-1 text-agro-accent" />
                          )}
                        </h3>
                        <p className="text-gray-600">
                          Owner: {farmer.owner}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-gray-700 font-medium">{farmer.rating}</span>
                      <span className="text-gray-500 text-sm">
                        ({farmer.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center mt-4 text-gray-500">
                    <MapPin size={16} className="inline mr-1" />
                    {farmer.location}
                  </div>

                  <p className="mt-4 text-gray-600">
                    {farmer.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {farmer.products.map((product, index) => (
                      <Badge key={index} variant="outline" className="bg-agro-light text-agro-dark">
                        {product}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-4">
                    <Link to={`/farmer/${farmer.id}`} className="flex-1">
                      <Button className="w-full bg-agro-primary hover:bg-agro-dark">
                        View Profile
                      </Button>
                    </Link>
                    <Button variant="outline" className="flex items-center gap-2">
                      <MessageSquare size={16} />
                      Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Farmers;
