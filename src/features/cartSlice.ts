import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {MealType} from '../types/MealType';

interface InitialState {
  cartItem: MealType[];
}

const initialState: InitialState = {
  cartItem: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: InitialState, action: PayloadAction<MealType>) => {
      state.cartItem.push(action.payload);
    },
    removeFromCart: (state: InitialState, action: PayloadAction<string>) => {
      state.cartItem = state.cartItem.filter(
        item => item.idMeal !== action.payload,
      );
    },
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
