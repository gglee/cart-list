import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './product';

export type subTotal = {
  count: number;
  price: number;
  discountable: number;
  noDiscount: number;
};

export interface ShoppingItemState extends Product {
  count: number;
  checked: boolean;
}

export interface CartState {
  list: ShoppingItemState[];
  subTotal: subTotal;
}

const initialState: CartState = {
  list: [],
  subTotal: {
    count: 0,
    price: 0,
    discountable: 0,
    noDiscount: 0,
  },
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    checkedToggle(state, action: PayloadAction<string>) {
      state.list.forEach((item) => {
        if (item.id === action.payload) {
          item.checked = !item.checked;
        }
      });
    },
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
    setSubTotal(state, action: PayloadAction<subTotal>) {
      state.subTotal.price = action.payload.price;
      state.subTotal.count = action.payload.count;
      state.subTotal.discountable = action.payload.discountable;
      state.subTotal.noDiscount = action.payload.noDiscount;
    },
  },
});

export default cart;
