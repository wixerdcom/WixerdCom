import { memo } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const LazyComponent = memo(({ height = '200px', children }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div ref={ref} style={{ minHeight: height }}>
      {isVisible && children}
    </div>
  );
});

LazyComponent.displayName = 'LazyComponent';
export default LazyComponent; 