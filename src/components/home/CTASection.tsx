
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-agro-primary py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to transform how you buy and sell farm produce?
          </h2>
          <p className="mt-4 text-lg text-white/90 leading-relaxed">
            Join thousands of farmers and vendors already using AgroBridge to build direct relationships
            and create a more sustainable food system.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-agro-primary hover:bg-gray-100">
              Register as Farmer
            </Button>
            <Button className="bg-agro-dark text-white hover:bg-agro-dark/90">
              Register as Vendor
            </Button>
          </div>
          <p className="mt-6 text-white/80">
            Already have an account?{' '}
            <Link to="/login" className="text-white font-medium underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
