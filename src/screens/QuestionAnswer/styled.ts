import styled from 'styled-components/native';

import { colors, fonts } from '../../styles';
import { px } from '../../utils';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${colors.gray};
`;

export const Info = styled.View`
  align-items: center;
  justify-content: center;
  padding-horizontal: ${px(16)}px;
  padding-top: ${px(48)}px;
  padding-bottom: ${px(8)}px;
  background-color: ${colors.gray};
`;

export const Name = styled.Text`
  font-family: ${fonts.heading};
  font-size: ${px(24)}px;
  color: ${colors.purpleDark};
  margin-top: ${px(16)}px;
`;

export const About = styled.Text`
  font-family: ${fonts.text};
  font-size: ${px(17)}px;
  color: ${colors.purpleDark};
  text-align: center;
  margin-top: ${px(8)}px;
`;

export const TipContainer = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.purple};
  margin-bottom: ${px(8)}px;
  padding: ${px(8)}px;
  border-radius: ${px(20)}px;
`;

export const TipText = styled.Text`
  flex: 1;
  color: ${colors.white};
  font-family: ${fonts.text};
  font-size: ${px(17)}px;
  text-align: justify;
  margin-horizontal: ${px(8)}px;
`;
