import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductFilters from '../components/marketplace/ProductFilters';
import ProductCard from '../components/product/ProductCard';

// Mock data for products - updated with Indian crops, names, and currency
const allProducts = [
  {
    id: 1,
    name: "Organic Basmati Rice",
    price: 120,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    farmer: "Kumar Organic Farm",
    location: "Punjab, India",
    category: "grains",
    organic: true
  },
  {
    id: 2,
    name: "Fresh Onions",
    price: 35,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&w=800&q=80",
    farmer: "Sharma Farms",
    location: "Maharashtra, India",
    category: "vegetables",
    organic: false
  },
  {
    id: 3,
    name: "Organic Turmeric",
    price: 210,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f6?auto=format&fit=crop&w=800&q=80",
    farmer: "Patel Spice Garden",
    location: "Karnataka, India",
    category: "spices",
    organic: true
  },
  {
    id: 4,
    name: "Fresh Alphonso Mangoes",
    price: 450,
    unit: "per dozen",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
    farmer: "Singh Orchards",
    location: "Ratnagiri, India",
    category: "fruits",
    organic: false
  },
  {
    id: 5,
    name: "Organic Cow Milk",
    price: 60,
    unit: "per liter",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80",
    farmer: "Gupta Dairy Farm",
    location: "Gujarat, India",
    category: "dairy",
    organic: true
  },
  {
    id: 6,
    name: "Country Eggs",
    price: 90,
    unit: "per dozen",
    image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=800&q=80",
    farmer: "Reddy Poultry",
    location: "Telangana, India",
    category: "dairy",
    organic: false
  },
  {
    id: 7,
    name: "Organic Wheat",
    price: 45,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1c5a6ec32?auto=format&fit=crop&w=800&q=80",
    farmer: "Mishra Farms",
    location: "Haryana, India",
    category: "grains",
    organic: true
  },
  {
    id: 8,
    name: "Fresh Sugarcane",
    price: 25,
    unit: "per piece",
    image: "https://images.unsplash.com/photo-1612207157596-8dbd81d983d3?auto=format&fit=crop&w=800&q=80",
    farmer: "Verma Fields",
    location: "Uttar Pradesh, India",
    category: "produce",
    organic: false
  }
];

const Marketplace: React.FC = () => {
  const [products, setProducts] = useState(allProducts);
  const [filters, setFilters] = useState({
    searchTerm: '',
    category: 'all',
    isOrganic: false,
    priceRange: [0, 500]
  });

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    // Apply filters to the products
    let filtered = allProducts;

    // Filter by search term
    if (newFilters.searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(newFilters.searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (newFilters.category && newFilters.category !== 'all') {
      filtered = filtered.filter(p => p.category === newFilters.category);
    }

    // Filter by organic
    if (newFilters.isOrganic) {
      filtered = filtered.filter(p => p.organic);
    }

    // Filter by price range
    filtered = filtered.filter(p => 
      p.price >= newFilters.priceRange[0] && p.price <= newFilters.priceRange[1]
    );

    setProducts(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Marketplace</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse fresh, local produce directly from farms across India
            </p>
          </div>

          <ProductFilters onFilterChange={handleFilterChange} />

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
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
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No products match your current filters.</p>
              <button 
                onClick={() => handleFilterChange({
                  searchTerm: '',
                  category: 'all',
                  isOrganic: false,
                  priceRange: [0, 500]
                })}
                className="mt-4 text-agro-primary hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
