
import React, { useState } from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from 'lucide-react';

interface ProductFiltersProps {
  onFilterChange: (filters: any) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [isOrganic, setIsOrganic] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterSubmit = () => {
    onFilterChange({
      searchTerm,
      category,
      isOrganic,
      priceRange
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      {/* Search and filter toggle */}
      <div className="flex flex-col sm:flex-row gap-4 items-center mb-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full"
          />
        </div>
        <Button
          variant="outline"
          className="sm:w-auto w-full flex items-center gap-2"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={18} />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </Button>
        <Button 
          className="bg-agro-primary hover:bg-agro-dark sm:w-auto w-full"
          onClick={handleFilterSubmit}
        >
          Apply Filters
        </Button>
      </div>

      {/* Expanded filters */}
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div>
            <Label htmlFor="category">Product Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="vegetables">Vegetables</SelectItem>
                <SelectItem value="fruits">Fruits</SelectItem>
                <SelectItem value="dairy">Dairy</SelectItem>
                <SelectItem value="meat">Meat</SelectItem>
                <SelectItem value="grains">Grains</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label>Price Range</Label>
            <div className="flex items-center gap-4 mt-1">
              <Input
                type="number"
                min={0}
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-1/2"
              />
              <span className="text-gray-500">to</span>
              <Input
                type="number"
                min={0}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-1/2"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="organic"
                checked={isOrganic}
                onCheckedChange={() => setIsOrganic(!isOrganic)}
              />
              <Label htmlFor="organic" className="cursor-pointer">Organic Products Only</Label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilters;
