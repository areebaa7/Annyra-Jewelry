import React from 'react';
import { motion } from 'framer-motion';
import './OurCollection.css';

// Automatically import local category images using Vite's glob loader
const collectionModules = {
  Necklaces: import.meta.glob('../../assets/Categories/necklace/*.{png,jpg,jpeg,webp}', { eager: true }),
  Earrings: import.meta.glob('../../assets/Categories/Earrings/*.{png,jpg,jpeg,webp}', { eager: true }),
  Bangles: import.meta.glob('../../assets/Categories/Bangles/*.{png,jpg,jpeg,webp}', { eager: true }),
  Bracelets: import.meta.glob('../../assets/Categories/Bracelets/*.{png,jpg,jpeg,webp}', { eager: true }),
  Rings: import.meta.glob('../../assets/Categories/Rings/*.{png,jpg,jpeg,webp}', { eager: true }),
  Pendants: import.meta.glob('../../assets/Categories/Pendants/*.{png,jpg,jpeg,webp}', { eager: true }),
  Sets: import.meta.glob('../../assets/Categories/Sets/*.{png,jpg,jpeg,webp}', { eager: true }),
  Brooches: import.meta.glob('../../assets/Categories/Brooches/*.{png,jpg,jpeg,webp}', { eager: true }),
};

// Helper to pull the first image from each folder, falling back to Unsplash if a folder is empty
const getFolderImg = (categoryName, fallbackUrl) => {
  const modules = collectionModules[categoryName] || {};
  const keys = Object.keys(modules);
  if (keys.length > 0) {
    return modules[keys[0]].default;
  }
  return fallbackUrl;
};

// 8 Fine Jewelry Categories utilizing your local folder assets for Necklaces, Earrings, Bangles, Bracelets, and Brooches
const collectionItems = [
  { id: 1, title: 'Necklaces', image: getFolderImg('Necklaces', 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600') },
  { id: 2, title: 'Earrings', image: getFolderImg('Earrings', 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=600') },
  { id: 3, title: 'Bangles', image: getFolderImg('Bangles', 'https://images.unsplash.com/photo-1611591470712-304b419ac83b?auto=format&fit=crop&q=80&w=600') },
  { id: 4, title: 'Bracelets', image: getFolderImg('Bracelets', 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600') },
  { id: 5, title: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600' },
  { id: 6, title: 'Pendants', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600' },
  { id: 7, title: 'Jewelry Sets', image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=600' },
  { id: 8, title: 'Brooches', image: getFolderImg('Brooches', 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600') },
];

const OurCollection = () => {
  return (
    <motion.section 
      className="shop-section collection-stack-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="shop-stack-frame">
        <div className="shop-container">
          
          {/* Section Heading Bar */}
          <div className="collection-header-bar">
            <h2 className="shop-heading collection-header-title">Our Collection</h2>
          </div>

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
                    We adorn you with top notch Jewelry that speaks class and style.
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
      </div>
    </motion.section>
  );
};

export default OurCollection;