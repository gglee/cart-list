import { useRef, useCallback, useEffect } from 'react';
import { getScrollBottom, getScrollTop } from '../utils';

type Params = {
  offset?: number | null;
  onLoadMore?: (cursor: string) => any;
  onLoadMoreByOffset?: (offset: number) => any;
};

export default function useScrollPagination({
  offset,
  onLoadMoreByOffset,
}: Params) {
  const last = useRef<number | null>(null);

  const preventBottomStick = useCallback(() => {
    if (getScrollBottom() === 0) {
      window.scrollTo(0, getScrollTop() - 1);
    }
  }, []);

  const loadMoreUsingOffset = useCallback(async () => {
    if (!offset || !onLoadMoreByOffset) return;
    if (offset === last.current) return;
    last.current = offset;
    await onLoadMoreByOffset(offset);
    preventBottomStick();
  }, [offset, onLoadMoreByOffset, preventBottomStick]);

  const onScroll = useCallback(() => {
    const scrollBottom = getScrollBottom();
    if (scrollBottom < window.screen.height) {
      loadMoreUsingOffset();
    }
  }, [loadMoreUsingOffset]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);
}
