import {createSlice} from "@reduxjs/toolkit";
import {Product} from "../models/Product";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    price: 0,
  },
  reducers: {
    addToCart: (state, value) => {
      const payloadProductIndex = state.products.findIndex(
        (product: Product) => product.name === value.payload.name
      );
      if (payloadProductIndex === -1) {
        (state.products as Product[]) = [value.payload, ...state.products];
      } else {
        (state.products[payloadProductIndex] as Product).quantity +=
          value.payload.quantity;
      }
    },
    removeFromCart: (state, value) => {
      (state.products as Product[]) = state.products.filter(
        (product: Product) => product.name !== value.payload.name
      );
    },
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
