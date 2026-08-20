import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

// Import your custom images from your assets folder here:
import galleryImg1 from '../../assets/gallery-1.jpg';
import galleryImg2 from '../../assets/gallery-2.jpg';
import galleryImg3 from '../../assets/gallery-3.jpg';
import galleryImg4 from '../../assets/gallery-4.jpg';
import galleryImg5 from '../../assets/hero-model2.jpg';
import galleryImg6 from '../../assets/gallery-6.jpg';
import galleryImg7 from '../../assets/gallery-7.jpg';
import galleryImg8 from '../../assets/gallery-8.jpg';

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        
        {/* Floating Collage Images with Minimal Staggered Animations */}
        
        {/* Top-Left Small Ring */}
        <motion.div 
          className="gallery-item item-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <img src={galleryImg1} alt="Jewelry Detail 1" />
        </motion.div>

        {/* Mid-Left Model Necklace */}
        <motion.div 
          className="gallery-item item-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={galleryImg2} alt="Model Necklace 1" />
        </motion.div>

        {/* Top-Center Model Shoulder / Ring */}
        <motion.div 
          className="gallery-item item-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <img src={galleryImg3} alt="Model Ring Close-up" />
        </motion.div>

        {/* Top-Right Earring Model */}
        <motion.div 
          className="gallery-item item-4"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <img src={galleryImg4} alt="Model Earrings" />
        </motion.div>

        {/* Far Right Small Earrings */}
        <motion.div 
          className="gallery-item item-5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img src={galleryImg5} alt="Earrings Flatlay" />
        </motion.div>

        {/* Bottom-Left Green Shirt Pendant */}
        <motion.div 
          className="gallery-item item-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <img src={galleryImg6} alt="Gold Pendant Outfit" />
        </motion.div>

        {/* Center Crystal / Gemstone */}
        <motion.div 
          className="gallery-item item-7"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <img src={galleryImg7} alt="Raw Diamond Crystal" />
        </motion.div>

        {/* Bottom-Right Small Emerald Ring */}
        <motion.div 
          className="gallery-item item-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img src={galleryImg8} alt="Emerald Ring" />
        </motion.div>

        {/* Centerpiece Instagram Callout Card */}
        <motion.div 
          className="instagram-card-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="instagram-card-content">
            <div className="insta-top-row">
              <svg 
                className="insta-icon" 
                xmlns="http://www.w3.org/2000/svg" 
                width="26" 
                height="26" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <span className="insta-brand-title">Instagram</span>
            </div>
            <span className="insta-handle">@anny.jewelry</span>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="insta-follow-btn">
            FOLLOW US
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Gallery;