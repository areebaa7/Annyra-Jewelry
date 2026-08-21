import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Shop from './components/ShopSection/Shop'; // Standalone Shop page
import CustomerReviews from './components/CustomerReviews/CustomerReviews';
import AboutUs from './components/AboutUs/AboutUs';
import Gallery from './components/Gallery/Gallery';
import OurCollection from './components/ShopSection/OurCollection';
import Bestsellers from './components/ShopSection/Bestsellers';
import './index.css';

const HomePage = () => (
  <>
    <Hero />
    <OurCollection />
    <AboutUs />
    <Bestsellers />
    <Gallery />
    <CustomerReviews />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;