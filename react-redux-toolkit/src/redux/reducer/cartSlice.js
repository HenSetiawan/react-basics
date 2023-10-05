/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const product = {
        id: action.payload.id,
        image: action.payload.image,
        price: action.payload.price,
        title: action.payload.title,
        count: 1,
      };
      state.value.push(product);
    },
    incrementCountById: (state, action) => {
      state.value.map((product) => {
        if (product.id === action.payload) {
          product.count++;
        }
      });
    },
    decrementCountById: (state, action) => {
      state.value.map((product) => {
        if (product.id === action.payload) {
          if (product.count !== 1) {
            product.count--;
          } else {
            state.value = state.value.filter(
              (productItem) => productItem.id !== product.id
            );
          }
        }
      });
    },
    deleteProductById: (state, action) => {
      state.value = state.value.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProductToCart,
  incrementCountById,
  decrementCountById,
  deleteProductById,
} = cartSlice.actions;

export default cartSlice.reducer;
