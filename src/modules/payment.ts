import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Cupon = {
  type: string;
  title: string;
  discountRate?: number;
  discountAmount?: number;
};

export interface PaymentState {
  cupons: Cupon[] | null;
  currentCupon: Cupon | null;
  discount: number;
  price: number;
}

const initialState: PaymentState = {
  cupons: null,
  price: 0,
  currentCupon: null,
  discount: 0,
};

const payment = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setCupons(state, action: PayloadAction<Cupon[]>) {
      state.cupons = action.payload;
    },
    selectedCupon(state, action: PayloadAction<Cupon>) {
      state.currentCupon = action.payload;
    },
    setPrice(state, action: PayloadAction<number>) {
      state.price = action.payload;
    },
    setDiscountPrice(state, action: PayloadAction<number>) {
      state.discount = action.payload;
    },
  },
});

export default payment;
