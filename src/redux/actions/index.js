// src/redux/actions/index.js
import axios from 'axios';
import { ADD_TO_CART, REMOVE_FROM_CART, SET_PRODUCTS } from './types';

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    dispatch({
      type: SET_PRODUCTS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching products', error);
  }
};

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});
