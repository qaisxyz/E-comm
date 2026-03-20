import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { useState } from 'react';

export function ProductCard({ product }: { product: Product; key?: string | number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/product/${product.id}`} 
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-4">
        <img 
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]} 
          alt={product.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-white px-2 py-1 text-[10px] uppercase tracking-wider font-medium">New In</span>
          )}
          {product.originalPrice && (
            <span className="bg-red-600 text-white px-2 py-1 text-[10px] uppercase tracking-wider font-medium">Sale</span>
          )}
        </div>

        {/* Quick Add (Desktop only) */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden md:block bg-gradient-to-t from-black/50 to-transparent">
          <div className="flex justify-center gap-2">
            {product.sizes.slice(0, 4).map(size => (
              <button 
                key={size}
                className="w-8 h-8 bg-white text-primary text-xs font-medium hover:bg-primary hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  // In a real app, this would add to cart directly
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-primary group-hover:text-secondary transition-colors">{product.title}</h3>
          <div className="flex gap-2 mt-2">
            {product.colors.map(color => (
              <div 
                key={color.name}
                className="w-3 h-3 rounded-full border border-neutral-200"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">
            {product.originalPrice && (
              <span className="text-neutral-400 line-through mr-2">${product.originalPrice}</span>
            )}
            ${product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}
