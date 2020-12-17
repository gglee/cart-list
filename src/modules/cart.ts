import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { product } from './product';

export interface CartState {
  list: product[];
}

const initialState: CartState = {
  list: [],
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<product>) {
      state.list.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<product>) {
      state.list = state.list.filter(
        (product) => product.id !== action.payload.id,
      );
    },
  },
});

export default cart;
