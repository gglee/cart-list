import React from 'react';
import styled from 'styled-components';
import ShoppingItem from './ShoppingItem';
import { ShoppingItemState } from '../../modules/cart';

export type ShoppingItemListProps = {
  list: ShoppingItemState[];
};

function ShoppingItemList({ list }: ShoppingItemListProps) {
  return (
    <Block>
      {list.length === 0 && (
        <Empty>
          <h2>상품이 없습니다.</h2>
        </Empty>
      )}
      {list.map((item) => (
        <ShoppingItem shoppingItem={item} key={item.id} />
      ))}
    </Block>
  );
}

const Block = styled.div``;

const Empty = styled.div`
  padding: 1rem;
`;

export default ShoppingItemList;
