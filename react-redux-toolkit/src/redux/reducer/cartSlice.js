/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


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

      let isAlreadyExist = false;
      state.value.map((product) => {
        if (product.id === action.payload.id) {
          isAlreadyExist = true;
        }
      });

      if (isAlreadyExist) {
        state.value.map((product) => {
          if (product.id === action.payload.id) {
            product.count++;
          }
        });
      } else {
        toast.success("success add to cart !");
        state.value.push(product);
      }
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
    deleteAll: (state) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProductToCart,
  incrementCountById,
  decrementCountById,
  deleteProductById,
  deleteAll,
} = cartSlice.actions;

export default cartSlice.reducer;
