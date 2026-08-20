import React from 'react';
import Hero from './components/Hero/Hero';
import ShopSection from './components/ShopSection/ShopSection';
import Footer from './components/Footer/Footer';
import './index.css';
import CustomerReviews from './components/CustomerReviews/CustomerReviews';
import AboutUs from './components/AboutUs/AboutUs';
import Gallery from './components/Gallery/Gallery';
import OurCollection from './components/ShopSection/OurCollection';
const App = () => {
  return (
    <div className="App">
      <Hero />
      <ShopSection />
      <OurCollection/>
      <AboutUs/>
      <Gallery/>
      <CustomerReviews/>
      <Footer/>
    </div>
  );
};

export default App;