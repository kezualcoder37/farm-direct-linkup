
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-agro-light">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-agro-light sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
          <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl">
                    <span className="block">Direct Farm to Market</span>
                    <span className="block text-agro-primary">Connecting Without Barriers</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg">
                    AgroBridge connects farmers directly with daily vendors, cutting out middlemen and ensuring fresher produce at fairer prices. Join our community to transform the agricultural supply chain.
                  </p>
                  <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Button className="w-full flex items-center justify-center px-8 py-3 bg-agro-primary hover:bg-agro-dark">
                        Join as Farmer
                      </Button>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 border-2 border-agro-primary text-agro-primary hover:bg-agro-light">
                        Join as Vendor
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=1200&q=80"
          alt="Farmer in field"
        />
      </div>
    </div>
  );
};

export default Hero;
