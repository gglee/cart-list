import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type product = {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  score: number;
  availableCoupon?: boolean;
  keep?: boolean;
};

export interface ProductState {
  products: product[][] | null;
  recent: {
    list: product[] | null;
  };
}

const initialState: ProductState = {
  products: null,
  recent: {
    list: null,
  },
};

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<product[][]>) {
      state.products = action.payload;
    },
    getList(state, action: PayloadAction<product[]>) {
      state.recent.list = action.payload;
    },
    fetchMore(state, action: PayloadAction<product[]>) {
      state.recent.list = action.payload;
    },
    cartToggle(state, action: PayloadAction<product>) {
      state.recent.list?.forEach((product) => {
        if (product.id === action.payload.id) {
          product.keep = !product.keep;
        }
      });
    },
  },
});

export default products;
