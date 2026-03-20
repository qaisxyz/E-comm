import { useState } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';

export function Collection() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif mb-4">All Clothing</h1>
        <p className="text-secondary max-w-2xl mx-auto">
          Discover our complete collection of thoughtfully designed pieces. From tailored blazers to fluid silk dresses, build your foundational wardrobe here.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center border-y border-neutral-200 py-4 mb-8">
        <button 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center text-sm font-medium hover:text-secondary transition-colors"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filters (0)
        </button>
        
        <div className="flex items-center text-sm">
          <span className="text-secondary mr-4 hidden sm:inline">{products.length} Results</span>
          <button className="flex items-center font-medium hover:text-secondary transition-colors">
            Sort by: Featured <ChevronDown className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filter Sidebar (Desktop) */}
        <div className={`w-full md:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
          <div className="space-y-8 sticky top-24">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Category</h3>
              <ul className="space-y-3 text-sm text-secondary">
                <li><label className="flex items-center"><input type="checkbox" className="mr-3" /> Tops</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="mr-3" /> Bottoms</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="mr-3" /> Dresses</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="mr-3" /> Outerwear</label></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                  <button key={size} className="border border-neutral-200 py-2 text-xs hover:border-primary transition-colors">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Color</h3>
              <div className="flex flex-wrap gap-3">
                {['#000000', '#ffffff', '#e3dac9', '#36454f', '#191970', '#808000'].map(color => (
                  <button 
                    key={color} 
                    className="w-6 h-6 rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-sm text-secondary mb-4">Showing {products.length} of {products.length} results</p>
            <div className="w-64 h-1 bg-neutral-200 mx-auto rounded-full overflow-hidden">
              <div className="h-full bg-primary w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
