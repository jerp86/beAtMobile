import React from 'react';
import { View } from 'react-native';
import { Container, Greeting, ImageHeader, UserName } from './styles';

export const Header = () => {
  return (
    <Container>
      <View>
        <Greeting>Olá,</Greeting>
        <UserName>Jerp</UserName>
      </View>

      <ImageHeader
        source={{ uri: 'https://source.unsplash.com/random/?people' }}
        resizeMode="cover"
      />
    </Container>
  );
};
