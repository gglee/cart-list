import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import cartSlice from '../../../modules/cart';

export default function useCountingItem() {
  const dispatch = useDispatch();

  const onIncrease = useCallback(
    (id: string) => {
      dispatch(cartSlice.actions.increase(id));
    },
    [dispatch],
  );

  const onDecrease = useCallback(
    (id: string) => {
      dispatch(cartSlice.actions.decrease(id));
    },
    [dispatch],
  );

  return { onIncrease, onDecrease };
}
