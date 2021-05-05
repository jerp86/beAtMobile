import React, { ReactNode } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { ButtonText, Container } from './styles';

export interface ButtonProps extends RectButtonProps {
  children: ReactNode;
  inactive?: boolean;
}

export const Button = ({
  children,
  inactive = false,
  ...rest
}: ButtonProps) => {
  return (
    <Container inactive={inactive} {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};
