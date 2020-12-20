import { combineReducers } from 'redux';
import product, { ProductState } from './product';
import cart, { CartState } from './cart';
import payment, { PaymentState } from './payment';

export type RootState = {
  product: ProductState;
  cart: CartState;
  payment: PaymentState;
};

const rootReducer = combineReducers({
  product: product.reducer,
  cart: cart.reducer,
  payment: payment.reducer,
});

export default rootReducer;
