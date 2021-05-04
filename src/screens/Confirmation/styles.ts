import styled from 'styled-components/native';

import { colors, fonts } from '../../styles';
import { px } from '../../utils';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${px(30)}px;
`;

export const Emoji = styled.Text`
  font-size: ${px(78)}px;
  margin-bottom: ${px(64)}px;
`;

export const Title = styled.Text`
  font-family: ${fonts.heading};
  font-size: ${px(22)}px;
  line-height: ${px(30)}px;
  text-align: center;
  color: ${colors.purpleDark};
`;

export const SubTitle = styled.Text`
  font-family: ${fonts.text};
  text-align: center;
  font-size: ${px(17)}px;
  padding-vertical: ${px(16)}px;
  color: ${colors.purpleDark};
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: ${px(40)}px;
  padding-horizontal: ${px(50)}px;
`;
