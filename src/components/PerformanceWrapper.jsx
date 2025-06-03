import { memo, Suspense } from 'react';
import { usePerformanceTracker } from '../hooks/usePerformanceTracker';

const PerformanceWrapper = memo(({ id, children }) => {
  usePerformanceTracker(id);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {children}
    </Suspense>
  );
});

PerformanceWrapper.displayName = 'PerformanceWrapper';
export default PerformanceWrapper; 