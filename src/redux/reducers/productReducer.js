// src/redux/reducers/productReducer.js
import { SET_PRODUCTS } from '../actions/types';

const initialState = {
  products: [],
  
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
      
    default:
      return state;
  }
};
