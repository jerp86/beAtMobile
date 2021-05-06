import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { colors, fonts } from '../../styles';
import { px } from '../../utils';

export const Container = styled(RectButton)`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.purple};
  max-width: 45%;
  border-radius: ${px(20)}px;
  padding: ${px(8)}px;
  margin: ${px(8)}px;
`;

export const Title = styled.Text`
  color: ${colors.gray};
  font-family: ${fonts.heading};
  margin-vertical: ${px(8)}px;
`;

export const Text = styled.Text`
  color: ${colors.gray};
  font-family: ${fonts.text};
`;
