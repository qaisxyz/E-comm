import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, cartTotal } = useCart();

  const FREE_SHIPPING_THRESHOLD = 150;
  const progress = Math.min((cartTotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const amountLeft = Math.max(FREE_SHIPPING_THRESHOLD - cartTotal, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            key="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 z-50"
          />
          <motion.div
            key="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-background z-50 shadow-xl flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-neutral-200">
              <h2 className="font-serif text-xl">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 text-primary hover:text-secondary transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {items.length > 0 ? (
              <>
                <div className="p-4 bg-neutral-50 border-b border-neutral-200">
                  <p className="text-sm text-center mb-2">
                    {amountLeft > 0 
                      ? `You're $${amountLeft.toFixed(2)} away from free shipping` 
                      : 'You qualify for free shipping!'}
                  </p>
                  <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-500 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-4">
                      <div className="w-24 h-32 flex-shrink-0 overflow-hidden bg-neutral-100">
                        <img 
                          src={item.product.images[0]} 
                          alt={item.product.title} 
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between">
                          <h3 className="text-sm font-medium">{item.product.title}</h3>
                          <button 
                            onClick={() => removeItem(item.product.id, item.size, item.color)}
                            className="text-neutral-400 hover:text-primary transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm text-secondary mt-1">${item.product.price}</p>
                        <p className="text-xs text-secondary mt-1">
                          Color: {item.color} | Size: {item.size}
                        </p>
                        
                        <div className="mt-auto flex items-center border border-neutral-200 w-fit">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                            className="p-1 hover:bg-neutral-100 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                            className="p-1 hover:bg-neutral-100 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-neutral-200 bg-background">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Subtotal</span>
                    <span className="font-medium">${cartTotal.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-secondary mb-4">Shipping and taxes calculated at checkout.</p>
                  <button className="w-full bg-primary text-white py-4 font-medium hover:bg-primary/90 transition-colors">
                    Checkout
                  </button>
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <ShoppingBag className="w-12 h-12 text-neutral-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                <p className="text-secondary mb-6">Looks like you haven't added anything yet.</p>
                <Link 
                  to="/collection" 
                  onClick={() => setIsCartOpen(false)}
                  className="bg-primary text-white px-8 py-3 font-medium hover:bg-primary/90 transition-colors"
                >
                  Start Shopping
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
