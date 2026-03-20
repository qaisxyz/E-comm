import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight, ShieldCheck, Truck, Recycle } from 'lucide-react';

export function Home() {
  const newArrivals = products.filter(p => p.isNew).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
            alt="Spring Collection" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 drop-shadow-lg">The Linen Edit</h1>
          <p className="text-lg md:text-xl font-light mb-8 max-w-md mx-auto drop-shadow-md">
            Effortless silhouettes crafted from breathable European flax.
          </p>
          <Link 
            to="/collection" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-medium hover:bg-neutral-100 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-neutral-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
              <Truck className="w-5 h-5 mb-2 text-secondary" />
              <h3 className="text-sm font-medium uppercase tracking-wider">Free Shipping</h3>
              <p className="text-xs text-secondary mt-1">On all orders over $150</p>
            </div>
            <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
              <ShieldCheck className="w-5 h-5 mb-2 text-secondary" />
              <h3 className="text-sm font-medium uppercase tracking-wider">30-Day Returns</h3>
              <p className="text-xs text-secondary mt-1">Easy, hassle-free returns</p>
            </div>
            <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
              <Recycle className="w-5 h-5 mb-2 text-secondary" />
              <h3 className="text-sm font-medium uppercase tracking-wider">Sustainable</h3>
              <p className="text-xs text-secondary mt-1">Ethically sourced materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-serif mb-2">New Arrivals</h2>
              <p className="text-secondary">Explore our latest additions for the season.</p>
            </div>
            <Link to="/collection" className="hidden md:flex items-center text-sm font-medium hover:text-secondary transition-colors">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link to="/collection" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-sm font-medium hover:bg-primary hover:text-white transition-colors w-full">
              View All New Arrivals
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Strip */}
      <section className="py-24 bg-primary text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
            "We believe in creating fewer, better things. Wardrobe staples designed to outlast trends and seasons."
          </h2>
          <Link to="#" className="inline-block border-b border-white pb-1 text-sm font-medium hover:text-neutral-300 hover:border-neutral-300 transition-colors">
            Read Our Story
          </Link>
        </div>
      </section>
    </div>
  );
}
