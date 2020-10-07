import { useMotionValue } from 'framer-motion';
import { useContext, useEffect } from 'react';
import ModelsContext from './ModelsContext';

export default function useWrapperScroll() {
  const { wrapperRef } = useContext(ModelsContext);

  const scrollY = useMotionValue(0);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    if (wrapperRef.current) {
      const updateScrollValue = () => {};

      wrapperRef.current.addEventListener('scroll', updateScrollValue);

      return () =>
        wrapperRef.current?.removeEventListener('scroll', updateScrollValue);
    }
  }, [wrapperRef]);

  return { scrollY, scrollYProgress };
}
