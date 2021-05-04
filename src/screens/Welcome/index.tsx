import React from 'react';

import {
  Button,
  ButtonText,
  Container,
  ImageWelcome,
  SubTitle,
  Title,
} from './styles';

export const Welcome = () => {
  const uri =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frevistacapitaleconomico.com.br%2Fwp-content%2Fuploads%2F2020%2F12%2Fagrotools-transformacao-digital-750x430.jpg&f=1&nofb=1';

  return (
    <Container>
      <Title>
        Faça análises {'\n'}
        territoriais de {'\n'}
        forma ágil e digital
      </Title>

      <ImageWelcome source={{ uri }} resizeMode="cover" />

      <SubTitle>
        Ferramentas tecnológicas moduladas {'\n'}
        que garantem análises na medida certa {'\n'}
        para o seu negócio.
      </SubTitle>

      <Button activeOpacity={0.7}>
        <ButtonText>
          {'>'}
        </ButtonText>
      </Button>
    </Container>
  );
};