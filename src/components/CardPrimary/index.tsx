import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import { px } from '../../utils';

import { Container, Text } from './styles';

interface QuestionProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

export const CardPrimary = ({ data, ...rest }: QuestionProps) => {
  return (
    <Container {...rest}>
      <SvgFromUri uri={data.photo} width={px(70)} height={px(70)} />

      <Text>{data.name}</Text>
    </Container>
  );
};
