import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, Greeting, ImageHeader, UserName } from './styles';

export const Header = () => {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    const loadStorageUserName = async () => {
      const user = await AsyncStorage.getItem('@beAt:user');
      setUserName(user || '');
    };

    loadStorageUserName();
  }, []);

  return (
    <Container>
      <View>
        <Greeting>Olá,</Greeting>
        <UserName>{userName}</UserName>
      </View>

      <ImageHeader
        source={{
          uri:
            'https://user-images.githubusercontent.com/54115624/116924489-533e5880-ac2e-11eb-9f5e-535b6ebc51e8.png',
        }}
        resizeMode="stretch"
      />
    </Container>
  );
};
