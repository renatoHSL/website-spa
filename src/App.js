import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import CategoryPage from './components/Products/CategoryPage';

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
