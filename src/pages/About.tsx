
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, TrendingUp, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-agro-light py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Mission</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              AgroBridge is on a mission to transform agricultural commerce by connecting
              farmers directly with daily vendors, creating a more sustainable and equitable food system for all.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  AgroBridge was born from a simple observation: too many layers separate farmers from those who
                  ultimately sell their products to consumers. These layers add cost, reduce quality, and disconnect
                  people from the source of their food.
                </p>
                <p className="text-gray-700 mb-4">
                  Founded in 2023, our platform aims to eliminate these unnecessary intermediaries by providing
                  a direct connection between farmers and daily vendors like restaurants, grocery stores, and markets.
                </p>
                <p className="text-gray-700 mb-4">
                  Today, we're proud to support hundreds of farmers and vendors across the country, fostering
                  relationships that benefit everyone in the food chain - especially consumers who get fresher,
                  more sustainably produced food.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80"
                  alt="Farmers in field"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                  <p className="font-bold text-agro-primary">1000+</p>
                  <p className="text-sm text-gray-600">Farmers & Vendors Connected</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-agro-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="p-3 bg-agro-primary/10 inline-flex rounded-full mb-4">
                  <Leaf className="h-6 w-6 text-agro-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We prioritize practices that protect the environment and promote long-term ecological balance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="p-3 bg-agro-accent/10 inline-flex rounded-full mb-4">
                  <TrendingUp className="h-6 w-6 text-agro-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fair Economics</h3>
                <p className="text-gray-600">
                  We believe in fair prices for farmers and reasonable costs for vendors, creating sustainable economics for all.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="p-3 bg-agro-secondary/10 inline-flex rounded-full mb-4">
                  <Users className="h-6 w-6 text-agro-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">
                  We foster meaningful connections between producers and vendors, strengthening local food systems.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="p-3 bg-agro-earth/10 inline-flex rounded-full mb-4">
                  <Globe className="h-6 w-6 text-agro-earth" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                <p className="text-gray-600">
                  We promote honest and open information about food sources, farming practices, and pricing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section (Placeholder) */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-12">
              Meet the passionate individuals working to revolutionize connections between farms and markets.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Team members would go here in a real implementation */}
              <div className="bg-gray-100 p-6 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500">Team member profiles coming soon</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500">Team member profiles coming soon</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500">Team member profiles coming soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-agro-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join the Food Revolution</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Whether you're a farmer looking to expand your market or a vendor seeking fresh, quality produce,
              AgroBridge can help you build direct, sustainable relationships.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-agro-primary hover:bg-gray-100">
                Register as Farmer
              </Button>
              <Button className="bg-agro-dark text-white hover:bg-agro-dark/90">
                Register as Vendor
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
