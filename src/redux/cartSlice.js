import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cartslice",
  initialState,
  reducers: {
    // add to cart
    addToCart: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        state.carts = [...state.carts, temp];
      }
    },

    //delete item from cart
    removeToCart: (state, action) => {
      const data = state.carts.filter((item) => item.id !== action.payload);
      state.carts = data;
    },

    //remove single item from cart
    removeSingleItem: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.carts[itemIndex].qnty >= 1) {
        state.carts[itemIndex].qnty -= 1;
      }
    },

    // make cart empty
    emptyCart: (state, action) => {
      state.carts = [];
    },
  },
});

export const { addToCart, removeToCart, removeSingleItem, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
