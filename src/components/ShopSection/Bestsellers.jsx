import React from 'react';
import { motion } from 'framer-motion';
import './Bestsellers.css';

const bestsellerItems = [
  { id: 1, title: 'Ball Hook Earrings', category: 'EARRINGS', price: '$1,800', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=600' },
  { id: 2, title: 'Ball Bypass Bracelet', category: 'BRACELETS', price: '$1,300', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: 'Bar Earrings', category: 'EARRINGS', price: '$450', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600' },
  { id: 4, title: 'Diamond Vine Ring', category: 'RINGS', price: '$1,800', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600' },
  { id: 5, title: 'T1 Circle Pendant', category: 'NECKLACES', price: '$2,000', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600' },
  { id: 6, title: 'Yard Emerald Pendant', category: 'NECKLACES', price: '$1,700', image: 'https://images.unsplash.com/photo-1611591470712-304b419ac83b?auto=format&fit=crop&q=80&w=600' },
  { id: 7, title: 'Layer Cake Set', category: 'SETS', price: '$1,400', image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=600' },
  { id: 8, title: 'Climber Earrings', category: 'EARRINGS', price: '$1,350', image: 'https://images.unsplash.com/photo-1598560917505-59a3955c96da?auto=format&fit=crop&q=80&w=600' },
];

const promoBanners = [
  { id: 'p1', title: 'ArDeco Pearl Rings Set', discount: '20% OFF' },
  { id: 'p2', title: 'Flowers Earring Back Large', discount: '15% OFF' },
  { id: 'p3', title: 'Lioness Pendant Hoop Earrings', discount: '10% OFF' },
];

const Bestsellers = () => {
  return (
    <section id="bestsellers" className="bestsellers-section">
      <div className="bestsellers-container">
        
        {/* Left Side: Unified Single White Card with Black Outline */}
        <motion.div 
          className="unified-bestsellers-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="bestsellers-heading">Top Bestsellers</h2>

          <div className="bestsellers-grid">
            {bestsellerItems.map((item) => (
              <div key={item.id} className="bs-product-item">
                <div className="bs-img-box">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="bs-details">
                  <span className="bs-category-tag">{item.category}</span>
                  <h4 className="bs-item-name">{item.title}</h4>
                  <span className="bs-price">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Perfectly proportioned solid rust overlapping column */}
        <motion.div 
          className="overlapping-promo-column"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {promoBanners.map((promo) => (
            <div key={promo.id} className="tall-promo-block">
              <div className="tall-promo-content">
                <h3 className="tall-promo-title">{promo.title}</h3>
                <span className="tall-promo-discount">{promo.discount}</span>
                <a href="#explore" className="tall-promo-btn">EXPLORE</a>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Bestsellers;