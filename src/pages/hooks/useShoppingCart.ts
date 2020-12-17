import { useCallback, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules/index';

export default function useShoppingCart() {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.cart.list);

  return { list };
}
