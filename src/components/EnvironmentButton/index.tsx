import React, { ReactNode } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Text } from './styles';

export interface EnvironmentButtonProps extends RectButtonProps {
  children: ReactNode;
  active?: boolean;
}

export const EnvironmentButton = ({
  children,
  active = false,
  ...rest
}: EnvironmentButtonProps) => {
  return (
    <Container active={active} {...rest}>
      <Text active={active}>{children}</Text>
    </Container>
  );
};
