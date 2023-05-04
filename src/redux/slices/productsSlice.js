import { createSlice } from "@reduxjs/toolkit";
import { fetchReadProduct, fetchReadProducts } from "../thunks/productsThunk";

const initialState = {
  loading: false,
  error: {},
  products: [],
  product: {},
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetProducts: (state) => {
      state.loading = false;
      state.error = {};
      state.products = [];
      state.product = {};
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReadProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.products = action.payload.data;
    });
    builder.addCase(fetchReadProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.products = [];
    });
    builder.addCase(fetchReadProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.product = action.payload.data[0];
    });
    builder.addCase(fetchReadProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.products = {};
    });
  }
});

export const { resetProducts } = productsSlice.actions;

export default productsSlice.reducer;