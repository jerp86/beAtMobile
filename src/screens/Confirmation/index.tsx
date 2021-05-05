import React from 'react';
import { useNavigation } from '@react-navigation/core';

import { Container, Content, Emoji, Footer, SubTitle, Title } from './styles';

import { Button } from '../../components';

export const Confirmation = () => {
  const { navigate } = useNavigation();

  const onMoveOn = () => navigate('QuestionSelect');

  return (
    <Container>
      <Content>
        <Emoji>😁️</Emoji>

        <Title>Prontinho</Title>
        <SubTitle>
          Agora você está pronto para criar e responder questionários! 📝
        </SubTitle>

        <Footer>
          <Button onPress={onMoveOn}>Começar</Button>
        </Footer>
      </Content>
    </Container>
  );
};
