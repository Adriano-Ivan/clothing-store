
import { createSlice } from '@reduxjs/toolkit';
import { addCartItem, removeCartItem, clearCartItem } from './cart.utils';

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    addItemToCart(state,action){
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    removeItemFromCart(state,action){
      state.cartItems = removeCartItem(state.cartItems,action.payload);
    },
    clearItemFromCart(state,action){
      state.cartItems = clearCartItem(state.cartItems,action.payload);
    },
    setIsCartOpen (state, action){
      state.isCartOpen = action.payload;
    }
  }
});

export const {addItemToCart, removeItemFromCart, clearItemFromCart, setIsCartOpen} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

// export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         cartItems: payload,
//       };
//     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen: payload,
//       };
//     default:
//       return state;
//   }
// };
