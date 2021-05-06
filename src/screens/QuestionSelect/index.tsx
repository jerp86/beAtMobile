import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';

import {
  Container,
  HeaderContainer,
  Questionnaire,
  SubTitle,
  Title,
} from './styles';

import { CardPrimary, EnvironmentButton, Header, Load } from '../../components';

import { px } from '../../utils';
import {
  QuestionnaireEnvironmentProps,
  QuestionnaireProps,
} from '../../lib/storage';
import api from '../../services/api';

export const QuestionSelect = () => {
  const [environments, setEnvironments] = useState<
    QuestionnaireEnvironmentProps[]
  >([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [questionnaires, setQuestionnaires] = useState<QuestionnaireProps[]>(
    [],
  );
  const [filteredQuestionnaire, setFilteredQuestionnaire] = useState<
    QuestionnaireProps[]
  >([]);
  const [loading, setLoading] = useState(true);

  const handleEnvironmentSelected = (environment: string) => {
    setEnvironmentSelected(environment);

    if (environmentSelected === 'all') {
      return setFilteredQuestionnaire(questionnaires);
    }

    const filtered = questionnaires.filter(
      questionnaire => questionnaire.environment === environment,
    );

    setFilteredQuestionnaire(filtered);
  };

  const fetchQuestionnaires = async () => {
    try {
      const params = {
        _sort: 'title',
        _order: 'asc',
      };

      const { data } = await api.get('questionnaires', { params });

      setQuestionnaires(data);
      setFilteredQuestionnaire(data);
      setLoading(false);
    } catch (error) {
      Alert.alert(
        'Deu ruim 😢',
        'Não conseguimos resgatar os questionários 😭',
      );
    }
  };

  useEffect(() => {
    const fetchEnvironment = async () => {
      try {
        const params = {
          _sort: 'title',
          _order: 'asc',
        };

        const { data } = await api.get('questionnaires_environments', {
          params,
        });

        setEnvironments([
          {
            key: 'all',
            title: 'Todos',
          },
          ...data,
        ]);
      } catch (error) {
        Alert.alert(
          'Deu ruim 😢',
          `Não conseguimos resgatar os questionários 😭\n${error.message}`,
        );
      }
    };

    fetchEnvironment();
  }, []);

  useEffect(() => {
    fetchQuestionnaires();
  }, []);

  if (loading) {
    return <Load />;
  }

  return (
    <Container>
      <HeaderContainer>
        <Header />

        <Title>Escolha uma das opções</Title>
        <SubTitle>para responder o questionário</SubTitle>
      </HeaderContainer>

      <View>
        <FlatList
          data={environments}
          keyExtractor={item => String(item.key)}
          renderItem={({ item }) => (
            <EnvironmentButton
              active={item.key === environmentSelected}
              onPress={() => handleEnvironmentSelected(item.key)}>
              {item.title}
            </EnvironmentButton>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>

      <Questionnaire>
        <FlatList
          data={filteredQuestionnaire}
          keyExtractor={item => String(item.key)}
          renderItem={({ item }) => <CardPrimary data={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </Questionnaire>
    </Container>
  );
};

const styles = StyleSheet.create({
  environmentList: {
    justifyContent: 'center',
    height: px(40),
    paddingHorizontal: px(32),
    marginVertical: px(24),
  },
});
