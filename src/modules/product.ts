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
    prefetched: product[] | null;
    end: boolean;
  };
}

const initialState: ProductState = {
  products: null,
  recent: {
    list: null,
    prefetched: null,
    end: false,
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
  },
});

export default products;
