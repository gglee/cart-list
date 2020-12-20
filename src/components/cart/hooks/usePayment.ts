import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import paymentSlice from '../../../modules/payment';

export default function usePayment() {
  const dispatch = useDispatch();
  const cupon = useSelector((state: RootState) => state.payment.currentCupon);
  const finalPrice = useSelector((state: RootState) => state.payment.price);
  const discount = useSelector((state: RootState) => state.payment.discount);
  const subTotal = useSelector((state: RootState) => state.cart.subTotal);

  useEffect(() => {
    const { discountable, price, noDiscount } = subTotal;
    if (cupon?.discountAmount) {
      dispatch(
        paymentSlice.actions.setPrice(
          discountable - cupon.discountAmount + noDiscount,
        ),
      );
      dispatch(paymentSlice.actions.setDiscountPrice(cupon.discountAmount));
      return;
    }

    if (cupon?.discountRate) {
      dispatch(
        paymentSlice.actions.setPrice(
          discountable * (1 - cupon.discountRate / 100) + noDiscount,
        ),
      );
      dispatch(
        paymentSlice.actions.setDiscountPrice(
          discountable - discountable * (1 - cupon.discountRate / 100),
        ),
      );
      return;
    }
    dispatch(paymentSlice.actions.setPrice(price));
    dispatch(paymentSlice.actions.setDiscountPrice(0));
  }, [dispatch, cupon, subTotal]);

  return { finalPrice, discount };
}
