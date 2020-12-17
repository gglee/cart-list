import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../modules/index';
import productSlice, { Product } from '../../../modules/product';
import cartSlice from '../../../modules/cart';

export default function useCartToggle() {
  const dispatch = useDispatch();
  const productList = useSelector((state: RootState) => state.cart.list);

  const onCartToggle = useCallback(
    async (product: Product) => {
      const { keep } = product;
      if (keep === undefined || !keep) {
        if (productList && productList.length >= 3) {
          alert('장바구니에는 최대 3개의 상품이 담길 수 있습니다');
          return;
        }
        await dispatch(
          cartSlice.actions.addItem({ ...product, count: 1, checked: true }),
        );
      } else {
        await dispatch(cartSlice.actions.removeItem({ id: product.id }));
      }

      await dispatch(productSlice.actions.cartToggle(product));
    },
    [dispatch, productList],
  );

  return { onCartToggle };
}
