import React from 'react';
import { Button } from '../../components';

import {
  About,
  AlertLabel,
  Container,
  Controller,
  Info,
  Name,
  TipContainer,
  TipImage,
  TipText,
} from './styled';

export const QuestionAnswer = () => {
  return (
    <Container>
      <Info>
        <Name>Título</Name>

        <About>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          saepe molestiae laudantium cupiditate odit modi impedit nisi ratione.
        </About>
      </Info>

      <Controller>
        <TipContainer>
          <TipImage
            source={{ uri: 'https://source.unsplash.com/random' }}
            resizeMode="stretch"
          />

          <TipText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </TipText>
        </TipContainer>

        <AlertLabel>Lorem ipsum dolor sit amet consectetur:</AlertLabel>

        <Button onPress={() => console.log('Clicou')}>Salvar Respostas</Button>
      </Controller>
    </Container>
  );
};
