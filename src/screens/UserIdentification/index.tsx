import React, { useState } from 'react';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import {
  Container,
  Content,
  Emoji,
  Footer,
  Form,
  Header,
  Input,
  KeyboardContainer,
  Title,
} from './styles';

import { Button } from '../../components';

export const UserIdentification = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!name);
  };

  const handleInputFocus = () => setIsFocused(true);

  const handleInputChange = (value: string) => {
    setIsFilled(!!value);
    setName(value);
  };

  const { navigate } = useNavigation();
  const handleSubmit = () => {
    navigate('Confirmation');
  };

  return (
    <Container>
      <KeyboardContainer
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Form>
              <Header>
                <Emoji>{isFilled ? '😄️' : '😀️'}</Emoji>

                <Title>Como podemos {'\n'} chamar você?</Title>
              </Header>

              <Input
                placeholder="Digite o nome"
                isFocused={isFocused}
                isFilled={isFilled}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />

              <Footer>
                <Button onPress={handleSubmit}>Confirmar</Button>
              </Footer>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardContainer>
    </Container>
  );
};
