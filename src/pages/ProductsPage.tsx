import React from 'react';
import ProductCardGrid from '../components/common/ProductCardGrid';
import useUsableProducts from '../pages/hooks/useUsableProducts';

export type ProductsPageProps = {};

function ProductsPage(props: ProductsPageProps) {
  const { list } = useUsableProducts();

  return <ProductCardGrid products={list || []} />;
}

export default ProductsPage;
