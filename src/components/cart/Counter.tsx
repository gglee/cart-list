import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useShoppingCart from './hooks/useShoppingCart';
import useCupons from './hooks/useCupons';
import SelectedCupon from './SelectedCupon';
import CuponMenu from './CuponMenu';
import useToggle from '../../lib/hooks/useToggle';
import usePayment from './hooks/usePayment';

export type CounterProps = {};

function Counter(props: CounterProps) {
  const { subTotal } = useShoppingCart();
  const { cupons, current } = useCupons();
  const { finalPrice, discount } = usePayment();
  const [cuponMenu, toggleCuponMenu] = useToggle(false);

  const onOutsideClick = useCallback(() => {
    toggleCuponMenu();
  }, [toggleCuponMenu]);

  if (subTotal.count === 0) return null;

  return (
    <Block>
      <SubTotal>
        <span>{`소계(${subTotal.count}개 품목): `}</span>
        <span>{subTotal.price}</span>
      </SubTotal>
      <Payment>
        <div className="info">
          <h4>최종 결제 금액</h4>
          <div className="total">
            <span>총 상품금액</span>
            <span className="price">{`${subTotal.price}원 - 할인금액`}</span>
            <SelectedCupon cupon={current} onClick={toggleCuponMenu} />
            <CuponMenu
              visible={cuponMenu}
              menu={cupons}
              onClose={onOutsideClick}
            />
            <span className="price">{` ${discount}원 =`}</span>
            <span className="final-price">
              {finalPrice}
              <span>원</span>
            </span>
          </div>
        </div>
        <div className="buttons">
          <Link to="/products">
            <button>계속 쇼핑하기</button>
          </Link>
          <button disabled>구매하기</button>
        </div>
      </Payment>
    </Block>
  );
}

const Block = styled.div`
  margin-top: 1rem;
  border-top: 1px solid #0f1111;
`;
const SubTotal = styled.div`
  text-align: right;
  margin-top: 0.25rem;
`;

const Payment = styled.div`
  margin: 4rem;
  h4 {
    margin: 0;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid #c8c8c8;
    padding: 2rem;
    span {
      margin-left: 0.75rem;
    }
    .total {
      position: relative;
      display: flex;
      align-items: center;
      margin-left: 1rem;
      .final-price {
        color: #f43142;
        font-size: 1.5rem;
        font-weight: 600;
        span {
          font-size: 1rem;
          margin: 0;
        }
      }
    }
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    button {
      outline: none;
      border: none;
      cursor: pointer;
      background: #ff5600;
      color: white;
      border-radius: 0.25rem;
      padding: 1rem;
      font-size: 1.125rem;
      font-weight: bold;
    }
    a {
      margin-right: 1rem;
    }
  }
`;

export default Counter;
