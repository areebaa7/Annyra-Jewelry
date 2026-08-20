import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';
import aboutModelImage from '../../assets/about-model.jpg'; // Update this path to match your asset image

const AboutUs = () => {
  return (
    <>
      {/* SEO Meta Tags Injection for Jewelry Brand */}
      <div style={{ display: 'none' }}>
        <title>About Us | Anny Fine Jewelry House</title>
        <meta 
          name="description" 
          content="Discover the heritage of Anny Fine Jewelry House. Combining traditional craftsmanship with modern refinement, we create timeless pieces designed to stand the test of time." 
        />
        <meta name="keywords" content="about fine jewelry, luxury jewelry house, artisan craftsmanship, bespoke diamonds, gold jewelry heritage" />
      </div>

      <section id="about-us" className="about-section">
        <div className="about-container">
          
          {/* Left Side: Image with minimal luxury scroll entrance */}
          <motion.div 
            className="about-image-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-image-frame">
              <img 
                src={aboutModelImage} 
                alt="Model wearing Anny fine jewelry artisan necklace" 
                className="about-model-img"
              />
            </div>
          </motion.div>

          {/* Right Side: Editorial Text with staggered minimal entrance */}
          <motion.div 
            className="about-content-col"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          >
            <div className="about-text-wrapper">
              
              <h2 className="about-heading">ABOUT US</h2>

              <div className="about-paragraphs">
                <p>
                  Founded with a passion for exquisite craftsmanship, Anny Fine Jewelry House curates exceptional collections that blend heritage artisan techniques with contemporary elegance. Every diamond, gemstone, and precious metal is ethically sourced and meticulously handcrafted to celebrate life's most precious milestones.
                </p>
                <p>
                  Our atelier is dedicated to creating timeless heirlooms. From classic engagement rings to bespoke statement necklaces, we believe that true luxury lies in meticulous detail, uncompromising quality, and pieces designed to be passed down through generations.
                </p>
                <p className="about-quote-signoff">
                  Rooted in tradition, shaped by modern refinement — created to stand the test of time.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default AboutUs;