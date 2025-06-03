import { memo, Suspense } from 'react';

const RouteWrapper = memo(({ children }) => {
  return (
    <Suspense fallback={
      <div className="min-h-[200px] animate-pulse bg-gray-100" />
    }>
      {children}
    </Suspense>
  );
});

RouteWrapper.displayName = 'RouteWrapper';
export default RouteWrapper; 