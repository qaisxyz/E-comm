import { ShoppingBag, Search, User, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const { itemCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-white text-xs text-center py-2 tracking-wide">
        Free shipping on orders over $150 | Easy 30-day returns
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -ml-2 text-primary"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/collection" className="text-sm font-medium hover:text-secondary transition-colors">New Arrivals</Link>
              <Link to="/collection" className="text-sm font-medium hover:text-secondary transition-colors">Clothing</Link>
              <Link to="/collection" className="text-sm font-medium hover:text-secondary transition-colors">Accessories</Link>
              <Link to="/collection" className="text-sm font-medium text-red-700 hover:text-red-800 transition-colors">Sale</Link>
            </nav>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
              <Link to="/" className="font-serif text-2xl tracking-widest uppercase">
                Aura
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              <button className="hidden sm:block p-2 -mr-2 text-primary hover:text-secondary transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="hidden sm:block p-2 -mr-2 text-primary hover:text-secondary transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button className="hidden sm:block p-2 -mr-2 text-primary hover:text-secondary transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button 
                className="p-2 -mr-2 text-primary hover:text-secondary transition-colors relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute top-1 right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              key="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              key="mobile-drawer"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[300px] bg-background z-50 shadow-xl flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-neutral-200">
                <span className="font-serif text-xl tracking-widest uppercase">Aura</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-primary">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-4">
                <nav className="flex flex-col space-y-1 px-2">
                  <Link to="/collection" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-base font-medium hover:bg-neutral-100 rounded-md">New Arrivals</Link>
                  <Link to="/collection" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-base font-medium hover:bg-neutral-100 rounded-md">Clothing</Link>
                  <Link to="/collection" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-base font-medium hover:bg-neutral-100 rounded-md">Accessories</Link>
                  <Link to="/collection" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-base font-medium text-red-700 hover:bg-neutral-100 rounded-md">Sale</Link>
                </nav>
              </div>
              <div className="p-4 border-t border-neutral-200">
                <div className="flex justify-around">
                  <button className="p-2 flex flex-col items-center text-xs text-secondary">
                    <User className="w-5 h-5 mb-1" /> Account
                  </button>
                  <button className="p-2 flex flex-col items-center text-xs text-secondary">
                    <Search className="w-5 h-5 mb-1" /> Search
                  </button>
                  <button className="p-2 flex flex-col items-center text-xs text-secondary">
                    <Heart className="w-5 h-5 mb-1" /> Wishlist
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
