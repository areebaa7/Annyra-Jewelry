import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Search, X, ArrowRight, Menu as MenuIcon } from 'lucide-react';
import './Hero.css';
import heroImage from '../../assets/hero-model.jpg'; 
import inspirationImage from '../../assets/hero-model1.jpg'; 
import careGuideImage from '../../assets/hero-model2.jpg';    

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 968);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const desktopOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const desktopScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.96]);

  const heroOpacity = isMobile ? 1 : desktopOpacity;
  const heroScale = isMobile ? 1 : desktopScale;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <motion.section 
      ref={heroRef}
      className="anny-hero-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ opacity: heroOpacity, scale: heroScale }}
    >
      {/* Outer Burgundy Border Frame */}
      <div className="hero-border-frame">

        {/* --- DEFAULT HERO VIEW --- */}
        <div className="hero-view-container">
          {/* Left Content Side (Beige Section) */}
          <div className="hero-left-col">
            <motion.div className="top-brand-row" variants={itemVariants}>
              <span className="store-logo">ANNY</span>
              <span className="top-subtext">FINE JEWELRY<br />SINCE 2009</span>
            </motion.div>

            <div className="middle-content">
              <motion.h1 className="hero-main-title" variants={itemVariants}>
                REFINED<br />JEWELRY
              </motion.h1>

              <motion.div className="hero-subtitle-row" variants={itemVariants}>
                <span>JEWELRY HOUSE</span>
                <span className="dash">—</span>
                <span>EST. 2023</span>
              </motion.div>
            </div>

            <motion.p className="hero-bottom-desc" variants={itemVariants}>
              A CONSIDERED COLLECTION OF FINE JEWELRY COMBINING TRADITIONAL TECHNIQUES WITH MODERN REFINEMENT, CREATED TO STAND THE TEST OF TIME.
            </motion.p>
          </div>

          {/* Right Image Side */}
          <div className="hero-right-col">
            <motion.img 
              src={heroImage} 
              alt="Model wearing rings with red gemstones" 
              className="hero-model-image"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* --- SHUTTER DOWN MENU OVERLAY --- */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="menu-shutter-overlay"
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="menu-shutter-left">
                <div className="top-brand-row">
                  <span className="store-logo">ANNY</span>
                </div>

                <div className="menu-links-list">
                  <a href="#shop" className="menu-link">SHOP</a>
                  <a href="#about-us" className="menu-link">ABOUT US</a>
                  <a href="#contact" className="menu-link">CONTACT</a>
                  <a href="#blog" className="menu-link">BLOG</a>
                </div>

                <div className="menu-footer-info">
                  <a href="mailto:shop@anny.com" className="menu-email">SHOP@ANNY.COM</a>
                  <p className="menu-phone">+33 1 42 68 53 90</p>
                  <a href="#privacy" className="menu-privacy">PRIVACY POLICY</a>
                </div>
              </div>

              <div className="menu-shutter-right">
                <a href="#inspiration" className="menu-card-link">
                  <div className="menu-card-content">
                    <span>INSPIRATION</span>
                    <ArrowRight size={18} />
                  </div>
                  <img src={inspirationImage} alt="Inspiration" className="menu-card-img" />
                </a>

                <a href="#care-guide" className="menu-card-link">
                  <div className="menu-card-content">
                    <span>CARE GUIDE</span>
                    <ArrowRight size={18} />
                  </div>
                  <img src={careGuideImage} alt="Care Guide" className="menu-card-img" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- SEARCH POPUP OVERLAY (Click outside to close) --- */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div 
              className="search-dropdown-overlay"
              onClick={(e) => {
                if (e.target === e.currentTarget) setIsSearchOpen(false);
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="search-input-wrapper">
                <Search size={18} className="search-bar-icon" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  autoFocus 
                  className="search-bar-input"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Action Buttons */}
        <div className="nav-action-buttons">
          <button className="icon-btn search-btn" onClick={toggleSearch} aria-label="Search">
            {isSearchOpen ? <X size={18} /> : <Search size={18} />}
          </button>
          <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <>
                <X size={16} />
                <span>CLOSE</span>
              </>
            ) : (
              <>
                <MenuIcon size={16} />
                <span>MENU</span>
              </>
            )}
          </button>
        </div>

      </div>
    </motion.section>
  );
};

export default Hero;