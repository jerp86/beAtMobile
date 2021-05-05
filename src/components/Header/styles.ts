import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { colors, fonts } from '../../styles';
import { px } from '../../utils';

export const Container = styled.View`
  flexDirection: row,
  align-items: center,
  justify-content: space-between,
  width: 100%,
  padding-vertical: ${px(20)}px,
  margin-top: ${getStatusBarHeight()},
`;

export const Greeting = styled.Text`
  font-family: ${fonts.text},
  fontSize: ${px(32)}px,
  color: ${colors.purpleDark},
`;

export const UserName = styled.Text`
  font-family: ${fonts.heading},
  fontSize: ${px(32)}px,
  lineHeight: ${px(40)}px,
  color: ${colors.purpleDark},
`;

export const ImageHeader = styled.Image`
  width: ${px(70)}px;
  height: ${px(70)}px;
  border-radius: ${px(35)}px;
`;
