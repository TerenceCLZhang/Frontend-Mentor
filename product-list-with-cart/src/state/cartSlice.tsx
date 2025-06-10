import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItemType } from "../types/CartItemType";

interface CartState {
  cart: CartItemType[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemType>) => {
      if (!state.cart.find((item) => item.name === action.payload.name)) {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<String>) => {
      state.cart = state.cart.filter((item) => item.name !== action.payload);
    },
    incrementItem: (state, action: PayloadAction<String>) => {
      const item = state.cart.find((item) => item.name === action.payload);

      if (!item) {
        console.log("ERROR: Item not found");
        return;
      }

      item.amount++;
      item.totalPrice = item.totalPrice + item.pricePerProduct;
    },
    decrementItem: (state, action: PayloadAction<String>) => {
      const item = state.cart.find((item) => item.name === action.payload);

      if (!item) {
        console.log("ERROR: Item not found");
        return;
      }

      item.amount--;
      item.totalPrice = item.totalPrice - item.pricePerProduct;

      if (item.amount <= 0) {
        state.cart = state.cart.filter((item) => item.name !== action.payload);
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementItem, decrementItem } =
  cartSlice.actions;
export default cartSlice.reducer;
