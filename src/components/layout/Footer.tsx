
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <span className="text-agro-primary font-bold text-2xl">Agro<span className="text-agro-accent">Bridge</span></span>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Connecting farmers and vendors directly, eliminating middlemen and creating sustainable food systems.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-agro-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-agro-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-agro-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-agro-primary">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-agro-primary text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-gray-600 hover:text-agro-primary text-sm">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/farmers" className="text-gray-600 hover:text-agro-primary text-sm">
                  Farmers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-agro-primary text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* User Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              User Support
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/help" className="text-gray-600 hover:text-agro-primary text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-agro-primary text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-agro-primary text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-agro-primary text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Contact Information
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600 text-sm">
                1234 Rural Road
              </li>
              <li className="text-gray-600 text-sm">
                Farmville, FR 56789
              </li>
              <li className="text-gray-600 text-sm">
                +1 (555) 123-4567
              </li>
              <li className="text-gray-600 text-sm">
                info@agrobridge.com
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} AgroBridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
