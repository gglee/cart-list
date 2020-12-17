import { combineReducers } from 'redux';
import product, { ProductState } from './product';
import cart, { CartState } from './cart';

export type RootState = {
  product: ProductState;
  cart: CartState;
};

const rootReducer = combineReducers({
  product: product.reducer,
  cart: cart.reducer,
});

export default rootReducer;
