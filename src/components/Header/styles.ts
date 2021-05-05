import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { colors, fonts } from '../../styles';
import { px } from '../../utils';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-vertical: ${px(20)}px;
  margin-top: ${getStatusBarHeight()}px;
`;

export const Greeting = styled.Text`
  font-family: ${fonts.text};
  font-size: ${px(32)}px;
  color: ${colors.purpleDark};
`;

export const UserName = styled.Text`
  font-family: ${fonts.heading};
  font-size: ${px(32)}px;
  line-height: ${px(40)}px;
  color: ${colors.purpleDark};
`;

export const ImageHeader = styled.Image`
  width: ${px(70)}px;
  height: ${px(70)}px;
  border-radius: ${px(35)}px;
`;
