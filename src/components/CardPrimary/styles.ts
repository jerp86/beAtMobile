import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { colors, fonts } from '../../styles';
import { px } from '../../utils';

export const Container = styled(RectButton)`
  flex: 1;
  align-items: center;
  background-color: ${colors.gray};
  max-width: 45%;
  border-radius: ${px(20)}px;
  padding-vertical: ${px(8)}px;
  margin: ${px(10)}px;
`;

export const Text = styled.Text`
  color: ${colors.purpleLight};
  font-family: ${fonts.heading};
  margin-vertical: ${px(16)}px;
`;
