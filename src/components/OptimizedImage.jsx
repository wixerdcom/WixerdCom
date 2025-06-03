import { memo, useState, useEffect } from 'react';
import { useImage } from '../context/ImageProvider';

const OptimizedImage = memo(({ src, alt, className, priority = false, ...props }) => {
  const { optimizeImageUrl, preloadImage } = useImage();
  const [loaded, setLoaded] = useState(false);
  const optimizedSrc = optimizeImageUrl(src);

  useEffect(() => {
    if (priority && optimizedSrc) {
      preloadImage(optimizedSrc);
    }
  }, [optimizedSrc, priority, preloadImage]);

  if (!optimizedSrc) return null;

  return (
    <>
      {!loaded && <div className="animate-pulse bg-gray-200 w-full h-full" />}
      <img
        src={optimizedSrc}
        alt={alt || ''}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'}`}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </>
  );
});

OptimizedImage.displayName = 'OptimizedImage';
export default OptimizedImage; 