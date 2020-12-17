import React from 'react';
import styled from 'styled-components';
import ShoppingItemList from './ShoppingItemList';
import useShoppingCart from './hooks/useShoppingCart';

export type ShoppingCartProps = {};

function ShoppingCart() {
  const { list } = useShoppingCart();

  return (
    <Block>
      <header>
        <h2>장바구니</h2>
        <p>가격</p>
      </header>
      <ShoppingItemList list={list} />
    </Block>
  );
}

const Block = styled.div`
  header {
    border-bottom: 1px solid #0f1111;
    p {
      text-align: right;
      margin: 0;
    }
  }
`;

export default ShoppingCart;
