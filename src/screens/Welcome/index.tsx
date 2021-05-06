import React from 'react';
import { useNavigation } from '@react-navigation/core';

import {
  Button,
  Container,
  Icon,
  ImageWelcome,
  SubTitle,
  Title,
} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Welcome = () => {
  const uri =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frevistacapitaleconomico.com.br%2Fwp-content%2Fuploads%2F2020%2F12%2Fagrotools-transformacao-digital-750x430.jpg&f=1&nofb=1';

  const { navigate } = useNavigation();
  const handleStart = async () => {
    const userName = await AsyncStorage.getItem('@beAt:user');
    console.log({ userName });
    if (userName) {
      return navigate('QuestionSelect');
    }

    navigate('UserIdentification');
  };

  return (
    <Container>
      <Title>
        Faça análises {'\n'}
        territoriais de {'\n'}
        forma ágil e digital
      </Title>

      <ImageWelcome source={{ uri }} resizeMode="contain" />

      <SubTitle>
        Ferramentas tecnológicas moduladas que garantem análises na medida certa
        para o seu negócio.
      </SubTitle>

      <Button activeOpacity={0.7} onPress={handleStart}>
        <Icon name="chevron-right" />
      </Button>
    </Container>
  );
};
