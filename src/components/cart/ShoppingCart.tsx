import React from 'react';
import styled from 'styled-components';
import ShoppingItemList from './ShoppingItemList';
import Counter from './Counter';
import useShoppingCart from './hooks/useShoppingCart';

export type ShoppingCartProps = {};

function ShoppingCart() {
  const { list } = useShoppingCart();

  return (
    <Block>
      <div className="head">
        <h2>장바구니</h2>
        <p>가격</p>
      </div>
      <ShoppingItemList list={list} />
      <Counter />
    </Block>
  );
}

const Block = styled.div`
  .head {
    border-bottom: 1px solid #0f1111;
    p {
      text-align: right;
      margin-bottom: 0.25rem;
      margin-top: 0;
    }
  }
`;

export default ShoppingCart;
