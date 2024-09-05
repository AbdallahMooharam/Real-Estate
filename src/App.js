import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Products from './components/products/Products';
import ProductDetail from './components/productDetail/ProductDetail';
import ContactUs from './components/contactUs/ContactUs';
import Auth from './components/pages/Auth';
import Footer from './components/footer/Footer';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Transitions from './components/transitions/Transitions';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Transitions>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/product/:id"
            element={
              <ProtectedRoute>
                <ProductDetail />
              </ProtectedRoute>
            }
          />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/auth" element={<Auth />} />
          { }
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Transitions>
      <Footer />
    </Router>
  );
}

export default App;
