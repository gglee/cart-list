import { useCallback, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../modules/index';
import productSlice from '../../../modules/product';
import cartSlice from '../../../modules/cart';

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
    let price = 0;
    let count = 0;

    list.forEach((item) => {
      if (item.checked) {
        price += item.price * item.count;
        count += item.count;
      }
    });

    dispatch(cartSlice.actions.setSubTotal({ price, count }));
  }, [dispatch, list]);

  return { list, subTotal, onRemove, onToggle };
}
