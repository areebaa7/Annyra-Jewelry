import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './CustomerReviews.css';

const reviewsData = [
  {
    id: 1,
    quote: "Scelerisque sem amet, porttitor neque augue. Non augue eleifend massa sit scelerisque. Tortor enim ac sed diam purus gravida amet.",
    name: "Gretchen Calzoni",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    quote: "Adipiscing nec amet, malesuada mattis vulputate massa id. Tempus elit odio turpis venenatis turpis ut. Vulputate ac penatibus.",
    name: "Lydia Dokidis",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    quote: "Tempor sit nunc, ac et non eu. Ultrices blandit vehicula vestibulum aliquam. Imperdiet faucibus et urna, sagittis.",
    name: "Carla Ekstrom Bothman",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400",
  },
];

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Self-scrolling automatic interval every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  const currentReview = reviewsData[currentIndex];
  const prevIndex = currentIndex === 0 ? reviewsData.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === reviewsData.length - 1 ? 0 : currentIndex + 1;

  const leftReview = reviewsData[prevIndex];
  const rightReview = reviewsData[nextIndex];

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        
        {/* Section Heading */}
        <h2 className="reviews-heading">Customers Reviews</h2>

        {/* Carousel Wrapper */}
        <div className="carousel-wrapper">
          
          {/* Rectangular Left Arrow Button */}
          <button className="carousel-arrow left-arrow" onClick={handlePrev} aria-label="Previous Review">
            <ChevronLeft size={20} />
          </button>

          {/* Carousel Track */}
          <div className="carousel-track">
            
            {/* Left Side Text-Only Preview Card */}
            <div className="side-card left-peek" onClick={handlePrev}>
              <p className="peek-quote">{leftReview.quote}</p>
            </div>

            {/* Active Center Card with White Rectangular Border & Beige BG */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentReview.id}
                className="center-active-card"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="card-inner-white-frame">
                  <div className="center-avatar-box">
                    <img src={currentReview.image} alt={currentReview.name} />
                  </div>
                  <blockquote className="center-quote">
                    {currentReview.quote}
                  </blockquote>
                  <h4 className="center-name">{currentReview.name}</h4>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Side Text-Only Preview Card */}
            <div className="side-card right-peek" onClick={handleNext}>
              <p className="peek-quote">{rightReview.quote}</p>
            </div>

          </div>

          {/* Rectangular Right Arrow Button */}
          <button className="carousel-arrow right-arrow" onClick={handleNext} aria-label="Next Review">
            <ChevronRight size={20} />
          </button>

        </div>

        {/* Pagination Dots */}
        <div className="pagination-dots">
          {reviewsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`dot ${currentIndex === idx ? 'active' : ''}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomerReviews;