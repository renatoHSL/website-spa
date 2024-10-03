import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Services from './pages/Products/Services';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import CategoryPage from './pages/Products/CategoryPage';
import ProductPageWrapper from './pages/Products/ProductPage';
import ReviewsPage from './pages/ReviewsPage/ReviewsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <WhatsAppButton />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/:categoryId" element={<CategoryPage />} />
          <Route path="/services/:categoryId/:productId" element={<ProductPageWrapper />} />
          <Route path="/reviews" element={<ReviewsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
