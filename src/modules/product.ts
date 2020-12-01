import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type product = {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  score: number;
  keep: boolean;
};

export interface ProductState {
  products: product[];
}

const initialState: ProductState = {
  products: [],
};

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<{ products: product[] }>) {
      state.products = action.payload.products;
    },
  },
});

export default products;
