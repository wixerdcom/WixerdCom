import { memo } from 'react';

const LoadingSpinner = memo(() => (
  <div className="flex items-center justify-center min-h-[40px]">
    <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';
export default LoadingSpinner; 