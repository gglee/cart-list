import { useCallback, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsData } from '../../modules/__data__/products.data';
import productSlice, { product } from '../../modules/product';
import { RootState } from '../../modules/index';
import useScrollPagination from '../../lib/hooks/useScrollPagination';

export default function useUsableProducts() {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.product.products);
  const list = useSelector((state: RootState) => state.product.recent.list);
  const [isFinished, setIsFinished] = useState(false);
  const cursor = useRef(1);

  const chunks = (array: product[], size: number) => {
    let results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    return results;
  };

  useEffect(() => {
    const sortScoreOrder = (a: product, b: product) => b.score - a.score;
    const sorted = productsData.sort(sortScoreOrder);
    const optimizeData = chunks(sorted, 5);
    dispatch(productSlice.actions.setProducts(optimizeData));
  }, [dispatch]);

  useEffect(() => {
    if (data && !list) {
      const list = data.slice(0, 1).flat();
      dispatch(productSlice.actions.getList(list));
    }
  }, [dispatch, data, list]);

  const onLoadMoreByOffset = useCallback(() => {
    if (data && list) {
      const next = list.concat(
        data.slice(cursor.current, cursor.current + 1).flat(),
      );
      cursor.current += 1;
      if (data?.length === cursor.current) {
        setIsFinished(true);
      }
      dispatch(productSlice.actions.fetchMore(next));
    }
  }, [dispatch, list, data]);

  useScrollPagination({
    offset: list?.length,
    onLoadMoreByOffset,
  });

  return { list, isFinished };
}
