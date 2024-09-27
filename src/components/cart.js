// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';
import './cart.css'; // Import the CSS file

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-text">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className='cart-div'>
              <img src={item.image} className='cartImage'/>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
            </div>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove from Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
