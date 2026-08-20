import React from 'react';
import { Search, Menu as MenuIcon } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Top Navigation / Links Row */}
        <div className="footer-top-row">
          {/* Column 1: Navigation Links */}
          <div className="footer-nav-col">
            <ul className="footer-links-list">
              <li><a href="#shop">SHOP</a></li>
              <li><a href="#philosophy">PHILOSOPHY</a></li>
              <li><a href="#artistry">ARTISTRY</a></li>
              <li><a href="#about">ABOUT</a></li>
            </ul>
          </div>

          {/* Column 2: Social Links */}
          <div className="footer-social-col">
            <ul className="footer-links-list">
              <li><a href="#facebook">FACEBOOK</a></li>
              <li><a href="#instagram">INSTAGRAM</a></li>
              <li><a href="#twitter">X (TWITTER)</a></li>
              <li><a href="#tiktok">TIKTOK</a></li>
            </ul>
          </div>

          {/* Column 3: Newsletter Subscription */}
          <div className="footer-newsletter-col">
            <h3 className="newsletter-title">STAY CONNECTED</h3>
            <p className="newsletter-desc">NEW RELEASES, COLLECTIONS, AND SELECTED BRAND UPDATES.</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="newsletter-input"
                aria-label="Email Address"
              />
              <button type="button" className="subscribe-btn">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        {/* Middle Contact & Brand Section */}
        <div className="footer-middle-row">
          <div className="footer-contacts">
            <a href="mailto:shop@anny.com" className="contact-link">SHOP@ANNY.COM</a>
            <span className="contact-separator">+33 1 42 68 53 90</span>
          </div>
        </div>

        {/* Massive Giant Brand Typography at the Bottom */}
        <div className="giant-brand-title">
          <span>ANNYRA</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;