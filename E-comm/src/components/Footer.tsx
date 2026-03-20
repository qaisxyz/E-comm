import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-xl tracking-widest uppercase mb-6">Aura</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Effortless wardrobe staples, made to last a decade. Designed with intention, crafted with care.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li><Link to="/collection" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/collection" className="hover:text-white transition-colors">All Clothing</Link></li>
              <li><Link to="/collection" className="hover:text-white transition-colors">Accessories</Link></li>
              <li><Link to="/collection" className="hover:text-white transition-colors">Sale</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Connect</h4>
            <p className="text-neutral-400 text-sm mb-4">
              Get first access to drops and 10% off your first order.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-b border-neutral-600 py-2 px-0 text-sm w-full focus:outline-none focus:border-white transition-colors"
              />
              <button type="submit" className="border-b border-neutral-600 py-2 px-4 text-sm font-medium hover:border-white transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Aura. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
