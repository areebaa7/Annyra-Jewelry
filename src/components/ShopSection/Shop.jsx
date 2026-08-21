import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import './Shop.css';

// Automatically import all images from your local folders using Vite's glob loader
const categoryModules = {
  Earrings: import.meta.glob('../../assets/Categories/Earrings/*.{png,jpg,jpeg,webp}', { eager: true }),
  Rings: import.meta.glob('../../assets/Categories/Rings/*.{png,jpg,jpeg,webp}', { eager: true }),
  Bangles: import.meta.glob('../../assets/Categories/Bangles/*.{png,jpg,jpeg,webp}', { eager: true }),
  Bracelets: import.meta.glob('../../assets/Categories/Bracelets/*.{png,jpg,jpeg,webp}', { eager: true }),
  Pendants: import.meta.glob('../../assets/Categories/Pendants/*.{png,jpg,jpeg,webp}', { eager: true }),
  Brooches: import.meta.glob('../../assets/Categories/Brooches/*.{png,jpg,jpeg,webp}', { eager: true }),
  Sets: import.meta.glob('../../assets/Categories/Sets/*.{png,jpg,jpeg,webp}', { eager: true }),
};

// Helper function to turn glob modules into standard image URL arrays
const getCategoryImages = (categoryName) => {
  const modules = categoryModules[categoryName] || {};
  return Object.values(modules).map((mod) => mod.default);
};

// 1. Categories configuration (Necklaces removed)
const shopCategories = [
  { id: 1, name: 'Earrings', image: getCategoryImages('Earrings')[0] || 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Rings', image: getCategoryImages('Rings')[0] || 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Bangles', image: getCategoryImages('Bangles')[0] || 'https://images.unsplash.com/photo-1611591470712-304b419ac83b?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'Bracelets', image: getCategoryImages('Bracelets')[0] || 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=400' },
  { id: 5, name: 'Pendants', image: getCategoryImages('Pendants')[0] || 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400' },
  { id: 6, name: 'Brooches', image: getCategoryImages('Brooches')[0] || 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600' },
  { id: 7, name: 'Sets', image: getCategoryImages('Sets')[0] || 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=400' },
];

// 2. Automatically generate products with PKR pricing
const generateAllProducts = () => {
  let allProds = [];
  let idCounter = 1;

  Object.keys(categoryModules).forEach((catName) => {
    const images = getCategoryImages(catName);
    images.forEach((imgPath, index) => {
      // Pricing converted to PKR format (e.g., Rs. 350,000)
      const randomPkrPrice = (350000 + index * 45000).toLocaleString();
      allProds.push({
        id: idCounter++,
        category: catName,
        title: `${catName} Edition ${index + 1}`,
        description: `Exquisite artisan crafted fine ${catName.toLowerCase()} designed to elevate your everyday elegance.`,
        price: `Rs. ${randomPkrPrice}`,
        image: imgPath,
        badge: index === 0 ? 'NEW' : index === 3 ? 'FEATURED' : null,
        rating: 5,
      });
    });
  });

  return allProds;
};

const shopProducts = generateAllProducts();

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter products when a category circle is clicked
  const filteredProducts = selectedCategory
    ? shopProducts.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase())
    : shopProducts;

  return (
    <section id="shop-page" className="shop-page-section">
      <div className="shop-page-container">
        
        {/* Page Heading */}
        <h2 className="shop-page-title">Shop</h2>

        {/* Circular Category Selector */}
        <div className="shop-categories-circles">
          {shopCategories.map((cat) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <div 
                key={cat.id} 
                className={`category-circle-item ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedCategory(isSelected ? null : cat.name)}
              >
                <div className="circle-img-wrap">
                  <img src={cat.image} alt={cat.name} />
                </div>
                <span className="circle-label">{cat.name}</span>
              </div>
            );
          })}
        </div>

        {/* Toolbar Bar */}
        <div className="shop-toolbar">
          <span className="results-count">
            Showing 1–{filteredProducts.length} of {shopProducts.length} results
          </span>
          <div className="toolbar-actions">
            <div className="sorting-dropdown">
              <span>Default sorting</span>
              <ChevronDown size={14} />
            </div>
            <button className="filter-btn">
              <SlidersHorizontal size={14} />
              FILTER
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="shop-main-grid">
          {filteredProducts.map((product) => (
            <motion.div 
              className="shop-grid-card"
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="shop-card-image-box">
                {product.badge && <span className="product-badge">{product.badge}</span>}
                <img src={product.image} alt={product.title} />
              </div>

              <div className="shop-card-details">
                <div>
                  <span className="card-cat-tag">{product.category.toUpperCase()}</span>
                  <h3 className="card-item-title">{product.title}</h3>
                  {product.description && <p className="card-item-desc">{product.description}</p>}
                </div>
                
                <div className="card-price-row">
                  <div className="price-box">
                    <span className="current-price">{product.price}</span>
                  </div>

                  {product.rating && (
                    <div className="star-rating">
                      {'★'.repeat(product.rating)}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="shop-pagination">
          <button className="page-num active">1</button>
          <button className="page-num">2</button>
          <button className="page-num next">›</button>
        </div>

      </div>
    </section>
  );
};

export default Shop;