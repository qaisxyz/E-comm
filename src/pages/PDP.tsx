import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ChevronDown, ChevronUp, Ruler, Heart, Share2, Star, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function PDP() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id) || products[0]; // Fallback to first for demo
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<string | null>('description');
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addItem(product, selectedSize, selectedColor.name);
  };

  const toggleAccordion = (section: string) => {
    setActiveAccordion(prev => prev === section ? null : section);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="text-xs text-secondary mb-8 flex items-center space-x-2">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <span>/</span>
        <Link to="/collection" className="hover:text-primary transition-colors">Clothing</Link>
        <span>/</span>
        <span className="text-primary font-medium">{product.title}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column - Media */}
        <div className="w-full lg:w-3/5 flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto hide-scrollbar md:w-24 flex-shrink-0">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-20 h-28 md:w-24 md:h-32 flex-shrink-0 border-2 transition-colors ${selectedImage === idx ? 'border-primary' : 'border-transparent hover:border-neutral-200'}`}
              >
                <img src={img} alt={`${product.title} view ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          
          {/* Main Image */}
          <div className="flex-1 bg-neutral-100 aspect-[3/4] relative overflow-hidden group cursor-zoom-in">
            <img 
              src={product.images[selectedImage]} 
              alt={product.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-primary hover:bg-white transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Column - Purchase Zone */}
        <div className="w-full lg:w-2/5 flex flex-col">
          <div className="mb-6">
            <h1 className="text-3xl font-serif mb-2">{product.title}</h1>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-lg font-medium">
                {product.originalPrice && (
                  <span className="text-neutral-400 line-through mr-3">${product.originalPrice}</span>
                )}
                <span>${product.price}</span>
              </div>
              <div className="flex items-center text-sm text-secondary">
                <div className="flex text-yellow-500 mr-2">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                </div>
                <span>(128 Reviews)</span>
              </div>
            </div>
          </div>

          {/* Color Selector */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium uppercase tracking-wider">Color: <span className="text-secondary ml-1">{selectedColor.name}</span></span>
            </div>
            <div className="flex gap-3">
              {product.colors.map(color => (
                <button 
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor.name === color.name ? 'border-primary p-0.5' : 'border-transparent hover:border-neutral-300'}`}
                >
                  <div className="w-full h-full rounded-full border border-neutral-200" style={{ backgroundColor: color.hex }} />
                </button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium uppercase tracking-wider">Size: <span className="text-secondary ml-1">{selectedSize || 'Select'}</span></span>
              <button 
                onClick={() => setIsSizeGuideOpen(true)}
                className="text-xs text-secondary flex items-center hover:text-primary transition-colors underline underline-offset-4"
              >
                <Ruler className="w-3 h-3 mr-1" /> Size Guide
              </button>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {product.sizes.map(size => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 text-sm font-medium border transition-colors ${selectedSize === size ? 'border-primary bg-primary text-white' : 'border-neutral-200 hover:border-primary text-primary'}`}
                >
                  {size}
                </button>
              ))}
            </div>
            {product.isLowStock && (
              <p className="text-xs text-red-600 mt-3 font-medium flex items-center">
                <span className="w-2 h-2 rounded-full bg-red-600 mr-2 animate-pulse" />
                Low stock - order soon
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 mb-10">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-primary text-white py-4 font-medium hover:bg-primary/90 transition-colors text-lg"
            >
              Add to Cart
            </button>
            <button className="w-full bg-white text-primary border border-primary py-4 font-medium hover:bg-neutral-50 transition-colors flex items-center justify-center">
              Buy with <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" className="h-5 ml-2" />
            </button>
          </div>

          {/* Delivery Info */}
          <div className="bg-neutral-50 p-4 border border-neutral-200 mb-8 text-sm">
            <p className="font-medium mb-1">Free standard shipping on orders over $150</p>
            <p className="text-secondary mb-3">Order by 3pm for delivery by Thursday, Mar 27</p>
            <p className="font-medium mb-1">Free 30-day returns</p>
            <p className="text-secondary">Return via mail or in-store</p>
          </div>

          {/* Accordions */}
          <div className="border-t border-neutral-200 divide-y divide-neutral-200">
            {[
              { id: 'description', title: 'Description', content: product.description },
              { id: 'fabric', title: 'Fabric & Care', content: `${product.fabric}\n\n${product.care}` },
              { id: 'fit', title: 'Fit & Sizing', content: product.fit },
              { id: 'sustainability', title: 'Sustainability', content: product.sustainability }
            ].map((section) => (
              <div key={section.id} className="py-4">
                <button 
                  onClick={() => toggleAccordion(section.id)}
                  className="flex justify-between items-center w-full text-left font-medium uppercase tracking-wider text-sm"
                >
                  {section.title}
                  {activeAccordion === section.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <AnimatePresence>
                  {activeAccordion === section.id && (
                    <motion.div 
                      key={`accordion-${section.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-sm text-secondary leading-relaxed whitespace-pre-line">
                        {section.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex items-center justify-center text-sm text-secondary hover:text-primary transition-colors cursor-pointer">
            <Share2 className="w-4 h-4 mr-2" /> Share this product
          </div>
        </div>
      </div>

      {/* Size Guide Modal */}
      <AnimatePresence>
        {isSizeGuideOpen && (
          <>
            <motion.div
              key="size-guide-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSizeGuideOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                key="size-guide-modal"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-serif text-2xl">Size Guide</h2>
                  <button onClick={() => setIsSizeGuideOpen(false)} className="text-secondary hover:text-primary">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left mb-8">
                    <thead className="bg-neutral-50 text-xs uppercase tracking-wider">
                      <tr>
                        <th className="px-4 py-3 font-medium">Size</th>
                        <th className="px-4 py-3 font-medium">US</th>
                        <th className="px-4 py-3 font-medium">UK</th>
                        <th className="px-4 py-3 font-medium">EU</th>
                        <th className="px-4 py-3 font-medium">Bust (in)</th>
                        <th className="px-4 py-3 font-medium">Waist (in)</th>
                        <th className="px-4 py-3 font-medium">Hip (in)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      {[
                        { size: 'XS', us: '0-2', uk: '4-6', eu: '32-34', bust: '32-33', waist: '24-25', hip: '34-35' },
                        { size: 'S', us: '4-6', uk: '8-10', eu: '36-38', bust: '34-35', waist: '26-27', hip: '36-37' },
                        { size: 'M', us: '8-10', uk: '12-14', eu: '40-42', bust: '36-37', waist: '28-29', hip: '38-39' },
                        { size: 'L', us: '12-14', uk: '16-18', eu: '44-46', bust: '38-40', waist: '30-32', hip: '40-42' },
                        { size: 'XL', us: '16', uk: '20', eu: '48', bust: '41-43', waist: '33-35', hip: '43-45' },
                      ].map(row => (
                        <tr key={row.size} className="hover:bg-neutral-50">
                          <td className="px-4 py-3 font-medium">{row.size}</td>
                          <td className="px-4 py-3 text-secondary">{row.us}</td>
                          <td className="px-4 py-3 text-secondary">{row.uk}</td>
                          <td className="px-4 py-3 text-secondary">{row.eu}</td>
                          <td className="px-4 py-3 text-secondary">{row.bust}</td>
                          <td className="px-4 py-3 text-secondary">{row.waist}</td>
                          <td className="px-4 py-3 text-secondary">{row.hip}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-neutral-50 p-4 text-sm">
                  <h3 className="font-medium mb-2">How to measure</h3>
                  <ul className="list-disc pl-5 space-y-2 text-secondary">
                    <li><strong>Bust:</strong> Measure under your arms at the fullest part of your bust.</li>
                    <li><strong>Waist:</strong> Measure around your natural waistline, keeping the tape comfortably loose.</li>
                    <li><strong>Hips:</strong> Stand with your feet together and measure around the fullest part of your hips.</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
