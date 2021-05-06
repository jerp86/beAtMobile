/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/core';

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
import api from '../../services/api';
import { QuestionnaireEnvironmentProps } from '../../lib/storage';

interface Props {
  question: {
    id: string;
    title: string;
    userCreated: string;
    dateCreated: Date;
    environment: string;
    questionsId: [string];
  };
}

export const QuestionAnswer = () => {
  const [
    environmentSelected,
    setEnvironmentSelected,
  ] = useState<QuestionnaireEnvironmentProps>();

  const route = useRoute();
  const { question } = route.params as Props;

  useEffect(() => {
    async function fetchEnvironment() {
      const { environment } = question;
      const response = await api.get(
        `questionnaires_environments/${environment}`,
      );

      setEnvironmentSelected(response.data);
    }

    fetchEnvironment();
  }, []);

  return (
    <Container>
      <Info>
        <Name>{question.title}</Name>

        <About>{environmentSelected?.info}</About>
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
