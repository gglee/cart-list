import React from 'react';
import styled from 'styled-components';
import useShoppingCart from './hooks/useShoppingCart';

export type CounterProps = {};

function Counter() {
  const { subTotal } = useShoppingCart();
  return (
    <Block>
      <SubTotal>
        <span>{`소계(${subTotal.count}개 품목): `}</span>
        <span>{subTotal.price}</span>
      </SubTotal>
      <Payment></Payment>
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
  margin-top: 5rem;
`;

export default Counter;
