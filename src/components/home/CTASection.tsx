
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <section className="bg-agro-primary py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to transform how you buy and sell farm produce?
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-white/90 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join thousands of farmers and vendors already using AgroBridge to build direct relationships
            and create a more sustainable food system.
          </motion.p>
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button className="bg-white text-agro-primary hover:bg-gray-100 group">
              Register as Farmer
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button className="bg-agro-dark text-white hover:bg-agro-dark/90 group">
              Register as Vendor
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
          <motion.p 
            className="mt-6 text-white/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Already have an account?{' '}
            <Link to="/login" className="text-white font-medium underline hover:text-white/90 transition-colors">
              Log in
            </Link>
          </motion.p>
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-white/10"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        />
        <motion.div 
          className="absolute -bottom-32 -right-10 w-64 h-64 rounded-full bg-white/5"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};

export default CTASection;
