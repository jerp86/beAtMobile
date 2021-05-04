import React from 'react';

import { Container, Content, Emoji, Footer, SubTitle, Title } from './styles';

import { Button } from '../../components';

export const Confirmation = () => {
  return (
    <Container>
      <Content>
        <Emoji>😁️</Emoji>

        <Title>Prontinho</Title>
        <SubTitle>
          Agora você está pronto para criar e responder questionários! 📝
        </SubTitle>

        <Footer>
          <Button>Começar</Button>
        </Footer>
      </Content>
    </Container>
  );
};
