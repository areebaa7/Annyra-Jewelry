import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ShopSection.css';

const categories = [
  { name: 'RINGS', count: 12 },
  { name: 'NECKLACES', count: 9 },
  { name: 'BRACELETS', count: 6 },
  { name: 'EARRINGS', count: 8 },
  { name: 'BANGLES', count: 4 },
  { name: 'CHAINS', count: 5 },
  { name: 'PENDANTS', count: 7 },
  { name: 'JEWELRY SETS', count: 3 },
  { name: 'ANKLETS', count: 4 },
  { name: 'BROOCHES', count: 2 },
];

const productsData = {
  RINGS: [
    {
      id: 1,
      name: 'BLOOM NO. 01',
      material: '18K WHITE GOLD',
      price: '€1,480',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      name: 'BLOOM NO. 02',
      material: '18K WHITE GOLD',
      price: '€1,520',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      name: 'BLOOM NO. 03',
      material: '18K WHITE GOLD',
      price: '€1,340',
      image: 'https://images.unsplash.com/photo-1598560917505-59a3955c96da?auto=format&fit=crop&q=80&w=800',
    },
  ],
  DEFAULT: [
    {
      id: 101,
      name: 'CLASSIC ESSENCE 01',
      material: '18K YELLOW GOLD',
      price: '€1,290',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 102,
      name: 'CLASSIC ESSENCE 02',
      material: '18K YELLOW GOLD',
      price: '€1,850',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
    },
  ],
};

const ShopSection = () => {
  const [activeCategory, setActiveCategory] = useState('RINGS');
  const currentProducts = productsData[activeCategory] || productsData.DEFAULT;

  return (
    <motion.section 
      className="shop-stack-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="shop-stack-frame">
        
        {/* Sticky Header Bar with Categories */}
        <div className="sticky-categories-bar">
          <div className="categories-track">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`category-item ${isActive ? 'active' : ''}`}
                >
                  <span className="cat-name">{cat.name}</span>
                  <span className="cat-count">{cat.count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Container */}
        <div className="shop-content-area">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              className="product-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {currentProducts.map((product) => (
                <motion.div 
                  className="product-card"
                  key={product.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="product-image-box">
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>
                  <div className="product-info">
                    <div className="product-meta">
                      <h3 className="product-title">{product.name}</h3>
                      <span className="product-material">{product.material}</span>
                    </div>
                    <span className="product-price">{product.price}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </motion.section>
  );
};

export default ShopSection;