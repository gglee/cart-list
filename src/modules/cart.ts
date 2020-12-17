import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './product';

export interface ShoppingItemState extends Product {
  count: number;
  checked: boolean;
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
    addItem(state, action: PayloadAction<ShoppingItemState>) {
      state.list.push(action.payload);
    },
    removeItem(state, action: PayloadAction<{ id: string }>) {
      state.list = state.list.filter(
        (product) => product.id !== action.payload.id,
      );
    },
    increase(state, action: PayloadAction<string>) {
      state.list.forEach((item) => {
        if (item.id === action.payload) {
          item.count += 1;
        }
      });
    },
    decrease(state, action: PayloadAction<string>) {
      state.list.forEach((item) => {
        if (item.id === action.payload) {
          item.count -= 1;
        }
      });
    },
  },
});

export default cart;
