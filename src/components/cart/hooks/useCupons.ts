import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import paymentSlice, { Cupon } from '../../../modules/payment';
import { cuponData } from '../../../modules/__data__/cupon.data';
import { RootState } from '../../../modules/index';

export default function useCupons() {
  const dispatch = useDispatch();
  const cupons = useSelector((state: RootState) => state.payment.cupons);
  const current = useSelector((state: RootState) => state.payment.currentCupon);

  const selectCupon = useCallback(
    (cupon: Cupon) => {
      dispatch(paymentSlice.actions.selectedCupon(cupon));
    },
    [dispatch],
  );

  useEffect(() => {
    if (!cupons) {
      dispatch(paymentSlice.actions.setCupons(cuponData));
    }
  }, [dispatch]);

  return { cupons, current, selectCupon };
}
