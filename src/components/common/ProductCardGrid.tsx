import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import { product } from '../../modules/product';

export type ProductCardGridProps = {
  products: product[];
};

function ProductCardGrid({ products }: ProductCardGridProps) {
  return (
    <Block>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  margin: -1rem;
  flex-wrap: wrap;
`;

export default ProductCardGrid;
