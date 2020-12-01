import React from 'react';
import styled from 'styled-components';
import { product } from '../../modules/product';

export type ProductCardPorps = {
  product: product;
};

function ProductCard({ product }: ProductCardPorps) {
  return (
    <Black>
      <Thumbnail>
        <img src={product.coverImage} alt="thumbnail" />
      </Thumbnail>
      <Content>
        <h4>{product.title}</h4>
        <p>{`가격: ${product.price}`}</p>
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
  padding-top: 75%;
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

const Content = styled.div`
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
`;

export default ProductCard;
