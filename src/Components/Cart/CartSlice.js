import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartState: false,
    cartItems: JSON.parse(localStorage.getItem("items")) || [],
    totalItems: 0,
    discount: 0,
  },

  reducers: {
    showMiniCart: (state) => {
      state.cartState = true;
    },
    hideMiniCart: (state) => {
      state.cartState = false;
    },

    addToCart: (state, action) => {
      const newItem = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
      localStorage.setItem("items",JSON.stringify(state.cartItems))
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      const idNeedToRemove = item.id;
      state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove);
    },

    clearCart: (state, action) => {
      state.cartItems = [];
    },

    setQuantity: (state, action) => {
      const { item, quantity } = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === item.id);
      state.cartItems[index].quantity = quantity;
      localStorage.setItem("items",JSON.stringify(state.cartItems))
    },

    setDiscount: (state, action) => {
      state.discount = action.payload;
    },
  },
});

export default CartSlice.reducer;
export const { setDiscount, showMiniCart, hideMiniCart, totalCartItems, addToCart, removeFromCart, clearCart, setQuantity} = CartSlice.actions
