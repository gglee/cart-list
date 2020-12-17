import { useCallback, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../modules/index';
import productSlice from '../../../modules/product';
import cartSlice from '../../../modules/cart';

export default function useShoppingCart() {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.cart.list);

  const onRemove = useCallback(
    async (id: string) => {
      await dispatch(cartSlice.actions.removeItem({ id }));
      await dispatch(productSlice.actions.cartItemRemove(id));
    },
    [dispatch],
  );

  return { list, onRemove };
}
