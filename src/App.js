// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/productList';
import Cart from './components/cart';
const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Products</Link> | <Link to="/cart">Cart</Link>
      </nav>
      <Routes>
        {/* Use 'element' prop for rendering components */}
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
