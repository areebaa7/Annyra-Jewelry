import React from 'react';
import { motion } from 'framer-motion';
import './OurCollection.css';

// 8 Fine Jewelry Categories with accurately matched imagery
const collectionItems = [
  { id: 1, title: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600' },
  { id: 2, title: 'Earrings', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: 'Bangles', image: 'https://images.unsplash.com/photo-1611591470712-304b419ac83b?auto=format&fit=crop&q=80&w=600' }, // Gold Bangles
  { id: 4, title: 'Bracelets', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600' },
  { id: 5, title: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600' },
  { id: 6, title: 'Pendants', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600' },
  { id: 7, title: 'Jewelry Sets', image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=600' },
  { id: 8, title: 'Brooches', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600' }, // Detailed statement brooch piece
];

const OurCollection = () => {
  return (
    <>
      {/* SEO Metadata for Collection Page */}
      <div style={{ display: 'none' }}>
        <title>Fine Jewelry Collection | Necklaces, Rings & Sets | Anny Jewelry</title>
        <meta 
          name="description" 
          content="Explore Anny Jewelry's exclusive collections including luxury necklaces, diamond rings, elegant earrings, gold bangles, and bespoke jewelry sets crafted for timeless style." 
        />
        <meta name="keywords" content="luxury necklaces, fine rings, gold bangles, diamond earrings, luxury jewelry sets, bespoke pendants" />
      </div>

      <section id="shop" className="shop-section">
        <div className="shop-container">
          
          {/* Section Heading */}
          <motion.h2 
            className="shop-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Collection
          </motion.h2>

          <div className="shop-rows-wrapper">
            
            {/* Row 1: Necklaces, Earrings, Bangles */}
            <motion.div 
              className="shop-row-grid"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {collectionItems.slice(0, 3).map((item) => (
                <div key={item.id} className="shop-category-card">
                  <div className="shop-img-frame">
                    <img src={item.image} alt={`Luxury ${item.title} collection by Anny Jewelry`} className="shop-category-img" />
                  </div>
                  <span className="shop-category-label">{item.title}</span>
                </div>
              ))}
            </motion.div>

            {/* Row 2: Bracelets, Promo Card (Center), Rings */}
            <motion.div 
              className="shop-row-grid"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="shop-category-card">
                <div className="shop-img-frame">
                  <img src={collectionItems[3].image} alt={`Luxury ${collectionItems[3].title}`} className="shop-category-img" />
                </div>
                <span className="shop-category-label">{collectionItems[3].title}</span>
              </div>

              {/* Center Promotional Card */}
              <div className="shop-promo-card">
                <div className="promo-content">
                  <h3 className="promo-title">
                    We adorn you with Top notch Jewelry that speaks Class and Style.
                  </h3>
                  <p className="promo-subtitle">Order yours at the best price here</p>
                  <a href="#store" className="promo-store-btn">Explore</a>
                </div>
              </div>

              <div className="shop-category-card">
                <div className="shop-img-frame">
                  <img src={collectionItems[4].image} alt={`Luxury ${collectionItems[4].title}`} className="shop-category-img" />
                </div>
                <span className="shop-category-label">{collectionItems[4].title}</span>
              </div>
            </motion.div>

            {/* Row 3: Pendants, Jewelry Sets, Brooches */}
            <motion.div 
              className="shop-row-grid"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {collectionItems.slice(5, 8).map((item) => (
                <div key={item.id} className="shop-category-card">
                  <div className="shop-img-frame">
                    <img src={item.image} alt={`Luxury ${item.title}`} className="shop-category-img" />
                  </div>
                  <span className="shop-category-label">{item.title}</span>
                </div>
              ))}
            </motion.div>

          </div>

        </div>
      </section>
    </>
  );
};

export default OurCollection;