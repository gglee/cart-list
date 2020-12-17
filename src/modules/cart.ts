import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './product';

export interface ShoppingItemState extends Product {
  count?: number;
  checked?: boolean;
}

export interface CartState {
  list: ShoppingItemState[];
}

const initialState: CartState = {
  list: [],
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<ShoppingItemState>) {
      state.list.push({ ...action.payload, count: 1, checked: true });
    },
    removeProduct(state, action: PayloadAction<ShoppingItemState>) {
      state.list = state.list.filter(
        (product) => product.id !== action.payload.id,
      );
    },
  },
});

export default cart;
