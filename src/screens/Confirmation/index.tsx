import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';

import { Container, Content, Emoji, Footer, SubTitle, Title } from './styles';

import { Button } from '../../components';
import { UserProps } from '../../lib/storage';

export const Confirmation = () => {
  const { navigate } = useNavigation();
  const route = useRoute();

  const { name } = route.params as UserProps;

  const onMoveOn = () => navigate('QuestionSelect');

  return (
    <Container>
      <Content>
        <Emoji>😁️</Emoji>

        <Title>Prontinho</Title>
        {name && <Title>{name}</Title>}
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
