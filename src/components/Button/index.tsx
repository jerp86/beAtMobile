import React, { ReactNode } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { ButtonText, Container } from './styles';

interface ButtonProps extends RectButtonProps {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};
