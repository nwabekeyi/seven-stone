// AddToCart.js

import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart
const initialState = {
  cart: [], // Array to hold cart items
  qty: 0, // Total quantity
  total: 0, // Total price
  delivery: 5, // Delivery charge
  itemCount: 0, // Number of items in the cart
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateQty: (state, action) => {
      const { id, qty } = action.payload;
      state.cart = state.cart.map(item =>
        item.id === id ? { ...item, qty } : item
      );
      state.qty = state.cart.reduce((acc, item) => acc + item.qty, 0);
      state.itemCount = state.cart.length;
    },
    updateCart: (state, action) => {
      state.cart.push(action.payload);
      state.qty += action.payload.qty;
      state.itemCount = state.cart.length;
    },
    CartItem: (state, action) => {
      state.cart = action.payload;
      state.itemCount = action.payload.length;
    },
  },
});

// Action creators
export const { updateQty, updateCart, CartItem} = cartSlice.actions;

// Reducer
export default cartSlice.reducer;
