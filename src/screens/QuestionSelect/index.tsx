import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import {
  ActivityIndicator,
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
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const { navigate } = useNavigation();

  const handleEnvironmentSelected = (environment: string) => {
    setEnvironmentSelected(environment);

    if (environment === 'all') {
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
        _page: page,
        limit: 8,
      };

      const { data } = await api.get('questionnaires', { params });

      if (!data) {
        return setLoading(true);
      }

      if (page > 1) {
        setQuestionnaires(oldState => [...oldState, ...data]);
        setFilteredQuestionnaire(oldState => [...oldState, ...data]);
      } else {
        setQuestionnaires(data);
        setFilteredQuestionnaire(data);
      }

      setLoading(false);
      setLoadingMore(false);
    } catch (error) {
      Alert.alert(
        'Deu ruim 😢',
        'Não conseguimos resgatar os questionários 😭',
      );
    }
  };

  const handleFetchMore = (distance: number) => {
    if (distance < 1) {
      return;
    }

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    fetchQuestionnaires();
  };

  const handleQuestionnaireSelected = (questionnaire: QuestionnaireProps) => {
    navigate('QuestionAnswer', questionnaire);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              onPress={() => {
                setEnvironmentSelected(String(item.key));
                handleEnvironmentSelected(String(item.key));
              }}>
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
          renderItem={({ item }) => (
            <CardPrimary
              data={item}
              onPress={() => handleQuestionnaireSelected(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore ? <ActivityIndicator size="large" /> : <></>
          }
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
