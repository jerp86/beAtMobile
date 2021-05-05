import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { Container, HeaderContainer, SubTitle, Title } from './styles';

import { EnvironmentButton, Header } from '../../components';

import { px } from '../../utils';

const QUESTIONS_ENVIRONMENTS = {
  data: [
    { key: 'living_room', title: 'Sala' },
    { key: 'bedroom', title: 'Quarto' },
    { key: 'kitchen', title: 'Cozinha' },
    { key: 'bathroom', title: 'Banheiro' },
  ],
};

export interface EnvironmentsProps {
  key: string;
  title: string;
}

export const QuestionSelect = () => {
  const [environments, setEnvironments] = useState<EnvironmentsProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');

  const handleEnvironmentSelected = (environment: string) => {
    setEnvironmentSelected(environment);
  };

  useEffect(() => {
    const fetchEnvironment = async () => {
      const { data } = await QUESTIONS_ENVIRONMENTS;
      setEnvironments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data,
      ]);
    };

    fetchEnvironment();
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <Header />

        <Title>De qual ambiente</Title>
        <SubTitle>você responder o questionário?</SubTitle>
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
