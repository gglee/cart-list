import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Product = {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  score: number;
  availableCoupon?: boolean;
  keep?: boolean;
};

export interface ProductState {
  products: Product[][] | null;
  recent: {
    list: Product[] | null;
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
    setProducts(state, action: PayloadAction<Product[][]>) {
      state.products = action.payload;
    },
    getList(state, action: PayloadAction<Product[]>) {
      state.recent.list = action.payload;
    },
    fetchMore(state, action: PayloadAction<Product[]>) {
      state.recent.list = action.payload;
    },
    cartToggle(state, action: PayloadAction<Product>) {
      state.recent.list?.forEach((product) => {
        if (product.id === action.payload.id) {
          product.keep = !product.keep;
        }
      });
    },
    cartItemRemove(state, action: PayloadAction<string>) {
      if (state.recent.list && state.recent.list.length !== 0) {
        state.recent.list.forEach((product) => {
          if (product.id === action.payload) {
            product.keep = false;
          }
        });
      }
    },
  },
});

export default products;
