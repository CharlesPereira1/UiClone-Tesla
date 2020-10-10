import React, { useCallback, useLayoutEffect, useState } from 'react';
import useWrapperScroll from '../useWhapperScroll';

import { Container } from './styles';
import { CarModel } from '../ModelsContext';
import { useTransform } from 'framer-motion';

interface Props {
  model: CarModel;
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>;

const ModelOverlay: React.FC<Props> = ({ model, children }) => {
  const { scrollY } = useWrapperScroll();

  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight,
    } as SectionDimensions;
  }, []);

  const [dimensions, setDimensions] = useState<SectionDimensions>(
    getSectionDimensions(),
  );

  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions()));
    }

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  const sectonScrollProgress = useTransform(
    scrollY,
    (y) => (y - dimensions.offsetTop) / dimensions.offsetHeight,
  );

  const opacity = useTransform(sectonScrollProgress, [-0.42, -0.05], [0, 1]);

  return <Container style={{ opacity }}>{children}</Container>;
};

export default ModelOverlay;
