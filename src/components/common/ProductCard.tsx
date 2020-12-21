import React from 'react';
import styled, { css } from 'styled-components';
import { Product } from '../../modules/product';
import useCartToggle from './hooks/useCartToggle';

export type ProductCardPorps = {
  product: Product;
};

type ContentType = {
  active?: boolean;
};

function ProductCard({ product }: ProductCardPorps) {
  const { onCartToggle } = useCartToggle();
  return (
    <Black>
      <Thumbnail>
        <img src={product.coverImage} alt="thumbnail" />
      </Thumbnail>
      <Content active={product.keep}>
        <h4>{product.title}</h4>
        <p>{`가격: ${product.price.toLocaleString()}`}</p>
        <button type="button" onClick={() => onCartToggle(product)}>
          {product.keep ? `장바구니 빼기 >` : `장바구니 담기 >`}
        </button>
      </Content>
    </Black>
  );
}

const Black = styled.div`
  width: 27rem;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
`;

const Thumbnail = styled.div`
  width: 100%;
  padding-top: 120%;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

const Content = styled.div<ContentType>`
  padding: 1rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  h4 {
    font-size: 1rem;
    margin: 0;
    margin-bottom: 0.25rem;
    line-height: 1.5;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    overflow-y: hidden;
    color: #999999;
  }
  p {
    margin: 0;
    word-break: break-word;
    overflow-wrap: break-word;
    font-size: 0.875rem;
    line-height: 1.5;
    color: black;
    margin-bottom: 1.5rem;
  }
  button {
    background: #3360ff;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 0.25rem;
    word-break: keep-all;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.25s color ease-in-out;
    ${(props) =>
      props.active &&
      css`
        color: #858a8d;
        background: #f9f9f9;
      `}
    &:hover,
    &:focus {
    }
    &:active {
      color: #858a8d;
      background: #f9f9f9;
    }
  }
`;

export default ProductCard;
