import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { colors, fonts } from '../../styles';
import { px } from '../../utils';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background-color: ${colors.purpleLight};
  height: ${px(56)}px;
  border-radius: ${px(16)}px;
`;

export const ButtonText = styled.Text`
  font-family: ${fonts.heading};
  font-size: ${16}px;
  color: ${colors.white};
`;
