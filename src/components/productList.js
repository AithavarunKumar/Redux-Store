// src/components/ProductList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart } from '../redux/actions';
import './productList.css'; // Import the CSS file

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? (<p className="loading-text">Loading products...</p>) : (
        <div className="product-container">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <button className="add-to-cart-btn" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
