export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  description: string;
  fabric: string;
  care: string;
  fit: string;
  sustainability: string;
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  isNew?: boolean;
  isLowStock?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Oversized Linen Blazer',
    price: 185,
    description: 'An effortless wardrobe staple. Tailored for a relaxed, oversized fit, this blazer is crafted from breathable, mid-weight European linen. Features structured shoulders, a single-breasted front, and functional flap pockets.',
    fabric: '100% European Flax Linen. Lining: 100% Cupro.',
    care: 'Dry clean only. Cool iron if needed.',
    fit: 'Designed for an oversized fit. Take your normal size to achieve the look, or size down for a more tailored fit. Model is 5\'9" (175cm) and wears size S.',
    sustainability: 'Crafted from GOTS-certified organic linen, requiring significantly less water than conventional cotton.',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591047139268-356163353591?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591047139626-455243177728?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Oat', hex: '#e3dac9' },
      { name: 'Charcoal', hex: '#36454f' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: true,
  },
  {
    id: '2',
    title: 'Silk Slip Dress',
    price: 220,
    originalPrice: 275,
    description: 'The ultimate versatile piece. Cut on the bias to drape beautifully over the body, featuring a soft V-neckline and adjustable spaghetti straps. Wear it alone or layered under a chunky knit.',
    fabric: '100% Mulberry Silk (19 momme).',
    care: 'Hand wash cold with silk-friendly detergent. Lay flat to dry.',
    fit: 'True to size. Bias cut allows for natural stretch and contouring. Model is 5\'10" (178cm) and wears size S.',
    sustainability: 'Made in a WRAP-certified facility using OEKO-TEX certified non-toxic dyes.',
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Midnight', hex: '#191970' },
      { name: 'Champagne', hex: '#f7e7ce' },
      { name: 'Olive', hex: '#808000' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    isLowStock: true,
  },
  {
    id: '3',
    title: 'Wide Leg Tailored Trousers',
    price: 145,
    description: 'High-waisted, wide-leg trousers designed for fluid movement. Featuring front pleats, a zip fly with hook-and-bar closure, and side seam pockets. The perfect foundation for any outfit.',
    fabric: '65% TENCEL™ Lyocell, 35% Organic Cotton.',
    care: 'Machine wash cold on gentle cycle. Line dry.',
    fit: 'High-rise, relaxed wide leg. Inseam: 32". Model is 5\'9" (175cm) and wears size S.',
    sustainability: 'TENCEL™ Lyocell is derived from sustainably managed forests and produced in a closed-loop process.',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594633313593-cb40afaf35d2?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Camel', hex: '#c19a6b' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: '4',
    title: 'Ribbed Knit Tank',
    price: 55,
    description: 'A premium basic. This ribbed tank top is tightly knitted for a supportive, figure-hugging fit. Features a flattering scoop neckline and wide straps that conceal undergarments.',
    fabric: '95% Organic Cotton, 5% Elastane.',
    care: 'Machine wash cold with like colors. Tumble dry low.',
    fit: 'Fitted. True to size. Model is 5\'8" (173cm) and wears size S.',
    sustainability: 'GOTS-certified organic cotton, grown without synthetic pesticides or fertilizers.',
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: [
      { name: 'White', hex: '#ffffff' },
      { name: 'Black', hex: '#000000' },
      { name: 'Sage', hex: '#9dc183' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    isNew: true,
  }
];
