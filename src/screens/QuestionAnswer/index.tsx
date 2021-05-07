/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/core';
import { FlatList, StyleSheet } from 'react-native';

import { ModalScreen } from '../ModalScreen';
import { About, Container, Info, Name, TipContainer, TipText } from './styled';

import api from '../../services/api';
import { px } from '../../utils';

import {
  QuestionnaireEnvironmentProps,
  QuestionProps,
} from '../../lib/storage';

interface Props {
  questionnaire: {
    id: string;
    title: string;
    userCreated: string;
    dateCreated: Date;
    environment: string;
    questionsId: [string];
  };
}

export const QuestionAnswer = () => {
  const [questions, setQuestions] = useState<QuestionProps[]>([]);
  const [questionSelected, setQuestionSelected] = useState<string>('');
  const [
    environmentSelected,
    setEnvironmentSelected,
  ] = useState<QuestionnaireEnvironmentProps>();

  const route = useRoute();
  const { questionnaire } = route.params as Props;

  useEffect(() => {
    questionnaire.questionsId.map(async id => {
      const { data } = await api.get(`questions/${id}`);

      if (!questions) {
        return setQuestions(data);
      }

      return setQuestions(oldState => [...oldState, data]);
    });

    async function fetchEnvironment() {
      const { environment } = questionnaire;
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
        <Name>{questionnaire.title}</Name>

        <About>{environmentSelected?.info}</About>
      </Info>

      {questions && (
        <FlatList
          data={questions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <TipContainer onPress={() => setQuestionSelected(item.question)}>
              <TipText>{item.question}</TipText>
              {item.question === questionSelected && (
                <ModalScreen
                  visible={item.question === questionSelected}
                  question={questionSelected}
                />
              )}
            </TipContainer>
          )}
          contentContainerStyle={styles.environmentList}
        />
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  environmentList: {
    justifyContent: 'center',
    paddingHorizontal: px(32),
    marginVertical: px(24),
  },
});
