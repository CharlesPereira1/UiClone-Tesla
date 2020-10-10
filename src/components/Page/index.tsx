import React from 'react';

import { ModelsWrapper, ModelsSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
          ].map((modelName) => (
            <ModelsSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Only for Delivery"
                />
              }
            />
          ))}
        </div>

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
