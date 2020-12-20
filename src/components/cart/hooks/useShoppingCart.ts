import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../modules/index';
import cartSlice from '../../../modules/cart';
import productSlice from '../../../modules/product';

export default function useShoppingCart() {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.cart.list);
  const subTotal = useSelector((state: RootState) => state.cart.subTotal);

  const onToggle = useCallback(
    (id: string) => {
      dispatch(cartSlice.actions.checkedToggle(id));
    },
    [dispatch],
  );

  const onRemove = useCallback(
    async (id: string) => {
      await dispatch(cartSlice.actions.removeItem({ id }));
      await dispatch(productSlice.actions.cartItemRemove(id));
    },
    [dispatch],
  );

  useEffect(() => {
    if (list.length === 0) return;

    let price = 0;
    let count = 0;
    let discountable = 0;
    let noDiscount = 0;

    list.forEach((item) => {
      if (item.checked) {
        price += item.price * item.count;
        count += item.count;
        if (item.availableCoupon === undefined || item.availableCoupon) {
          discountable += item.price * item.count;
        } else {
          noDiscount += item.price;
        }
      }
    });

    dispatch(
      cartSlice.actions.setSubTotal({ price, count, discountable, noDiscount }),
    );
  }, [dispatch, list]);

  return { list, subTotal, onRemove, onToggle };
}
