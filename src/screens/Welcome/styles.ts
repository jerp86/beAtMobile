import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { px } from '../../utils';
import { colors, fonts } from '../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  padding-horizontal: ${px(20)}px;
`;

export const Title = styled.Text`
  font-family: ${fonts.heading};
  font-size: ${px(32)}px;
  text-align: center;
  color: ${colors.purpleDark};
  margin-top: ${px(38)}px;
  line-height: ${px(38)}px;
`;

export const ImageWelcome = styled.Image`
  width: ${px(275)}px;
  height: ${px(275)}px;
  border-radius: ${px(10)}px;
`;

export const SubTitle = styled.Text`
  font-family: ${fonts.text};
  font-size: ${px(18)}px;
  text-align: center;
  padding-horizontal: ${px(20)}px;
  color: ${colors.purpleDark};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.purpleLight};
  align-items: center;
  justify-content: center;
  border-radius: ${px(16)}px;
  margin-bottom: ${px(8)}px;
  width: ${px(56)}px;
  height: ${px(56)}px;
`;

export const Icon = styled(Feather)`
  color: ${colors.white};
  font-size: ${px(32)}px;
`;
