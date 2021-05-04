import styled from 'styled-components/native';

import { colors, fonts } from '../../styles';
import { px } from '../../utils';

interface Props {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const KeyboardContainer = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-horizontal: ${px(54)}px;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Emoji = styled.Text`
  font-size: ${px(44)}px;
  margin-bottom: ${px(24)}px;
`;

export const Title = styled.Text`
  font-family: ${fonts.heading};
  font-size: ${px(24)}px;
  line-height: ${px(32)}px;
  text-align: center;
  color: ${colors.purpleDark};
`;

export const Input = styled.TextInput<Props>`
  border-bottom-width: ${px(1)}px;
  border-color: ${({ isFocused, isFilled }) => (isFocused || isFilled) ? colors.purple : colors.gray};
  color: ${colors.purpleDark};
  width: 100%;
  margin-top: ${px(40)}px;
  padding: ${px(10)}px;
  font-size: ${px(18)}px;
  text-align: center;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: ${px(40)}px;
  padding-horizontal: ${px(20)}px;
`;
