import React from 'react';
import styled from 'styled-components';
import { ShoppingItemState } from '../../modules/cart';
import { MdCheckBox } from 'react-icons/md';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { BiChevronUp } from 'react-icons/bi';
import { BiChevronDown } from 'react-icons/bi';
import useCountingItem from './hooks/useCountingItem';

export type ShoppingItemProps = {
  shoppingItem: ShoppingItemState;
};

function ShoppingItem({ shoppingItem }: ShoppingItemProps) {
  const { onIncrease, onDecrease } = useCountingItem();
  return (
    <Block>
      <Left>
        <CheckBox>
          {shoppingItem.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </CheckBox>
        <Thumbnail>
          <img src={shoppingItem.coverImage} alt={shoppingItem.title} />
        </Thumbnail>
        <Information>
          <h3>{shoppingItem.title}</h3>
          <div className="counting">
            <div className="count">{`수량: ${shoppingItem.count}`}</div>
            <div className="buttons">
              <button onClick={() => onIncrease(shoppingItem.id)}>
                <BiChevronUp />
              </button>
              <button
                disabled={shoppingItem.count === 1}
                onClick={() => onDecrease(shoppingItem.id)}
              >
                <BiChevronDown />
              </button>
            </div>
          </div>
        </Information>
      </Left>
      <Right>
        <Price>{`${shoppingItem.price}원`}</Price>
      </Right>
    </Block>
  );
}

const Block = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Left = styled.div`
  display: flex;
`;

const Right = styled.div``;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const Thumbnail = styled.div`
  width: 11.25rem;
  height: 11.25rem;
  padding-left: 0.5rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Information = styled.div`
  padding-left: 1rem;
  h3 {
    margin: 0;
  }
  .counting {
    display: flex;
    justify-content: space-around;
    max-width: 6.875rem;
    margin-top: 1rem;
    padding: 0.25rem;
    border: 1px solid #d5d9d9;
    border-radius: 0.5rem;
    box-shadow: 0 2px 5px 0 rgba(213, 217, 217, 0.5);
    .count {
      display: flex;
      align-items: center;
      padding: 0.5rem;
    }
    .buttons {
      display: flex;
      flex-direction: column;
      margin-left: 0.25rem;
      button {
        outline: none;
        border: none;
        word-break: keep-all;
        background: #f0f2f2;
        cursor: pointer;
        &:active {
          background: #d6d9d9;
        }
        &:disabled {
          cursor: default;
        }
      }
      button + button {
        border-top: 1px solid #cccccc;
      }
    }
  }
`;

const Price = styled.div`
  display: flex;
  font-size: 1.125rem;
  font-weight: 700;
`;

export default ShoppingItem;
