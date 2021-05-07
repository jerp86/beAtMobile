import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Text, Title } from './styles';

interface QuestionnaireProps extends RectButtonProps {
  data: {
    title: string;
    questionsId?: [string];
  };
}

export const CardPrimary = ({ data, ...rest }: QuestionnaireProps) => {
  return (
    <Container {...rest}>
      <Title>
        {data.title.length < 30 ? data.title : `${data.title.substr(0, 30)}...`}
      </Title>

      <Text>{`Há ${data.questionsId?.length ?? 0} perguntas`}</Text>
    </Container>
  );
};
