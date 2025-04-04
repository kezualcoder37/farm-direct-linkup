
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductFilters from '../components/marketplace/ProductFilters';
import ProductCard from '../components/product/ProductCard';

// Mock data for products
const allProducts = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: 4.99,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80",
    farmer: "Green Valley Farm",
    location: "Riverside, CA",
    category: "vegetables",
    organic: true
  },
  {
    id: 2,
    name: "Fresh Carrots",
    price: 2.49,
    unit: "per bunch",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80",
    farmer: "Sunshine Acres",
    location: "Portland, OR",
    category: "vegetables",
    organic: false
  },
  {
    id: 3,
    name: "Organic Potatoes",
    price: 3.99,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    farmer: "Harvest Fields",
    location: "Boulder, CO",
    category: "vegetables",
    organic: true
  },
  {
    id: 4,
    name: "Fresh Apples",
    price: 5.99,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&w=800&q=80",
    farmer: "Orchard Valley",
    location: "Wenatchee, WA",
    category: "fruits",
    organic: false
  },
  {
    id: 5,
    name: "Organic Milk",
    price: 3.49,
    unit: "per liter",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80",
    farmer: "Happy Cow Dairy",
    location: "Madison, WI",
    category: "dairy",
    organic: true
  },
  {
    id: 6,
    name: "Fresh Eggs",
    price: 4.99,
    unit: "per dozen",
    image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=800&q=80",
    farmer: "Free Range Ranch",
    location: "Austin, TX",
    category: "dairy",
    organic: false
  },
  {
    id: 7,
    name: "Organic Chicken",
    price: 9.99,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1587248720327-c22e8e960a0d?auto=format&fit=crop&w=800&q=80",
    farmer: "Green Pastures",
    location: "Burlington, VT",
    category: "meat",
    organic: true
  },
  {
    id: 8,
    name: "Brown Rice",
    price: 2.99,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80",
    farmer: "Golden Fields",
    location: "Sacramento, CA",
    category: "grains",
    organic: false
  }
];

const Marketplace: React.FC = () => {
  const [products, setProducts] = useState(allProducts);
  const [filters, setFilters] = useState({
    searchTerm: '',
    category: 'all',
    isOrganic: false,
    priceRange: [0, 100]
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
              Browse fresh, local produce directly from farms near you
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
                  priceRange: [0, 100]
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
