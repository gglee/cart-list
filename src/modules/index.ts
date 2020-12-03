import { combineReducers } from 'redux';
import product, { ProductState } from './product';

export type RootState = {
  product: ProductState;
};

const rootReducer = combineReducers({
  product: product.reducer,
});

export default rootReducer;
