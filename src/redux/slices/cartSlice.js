import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      const productId = action.payload;
      if (!state.products.includes(productId)) {
        state.products.push(productId);
      }
    },
    removeProductFromCart: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter((id) => id !== productId);
      localStorage.setItem('cartProducts', JSON.stringify(state.products));
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;