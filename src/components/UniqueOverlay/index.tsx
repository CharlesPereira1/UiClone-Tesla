import React from 'react';

import { Container, Header, Logo, Burger, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer>
        <ul>
          <li>
            <a href="#">Ui Clone</a>
          </li>
          <li>
            <a href="#">made with love</a>
          </li>
          <li>
            <a href="#">by Charles Pereira</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
