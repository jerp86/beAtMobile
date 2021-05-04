import styled from 'styled-components/native';

import { colors } from '../../styles/colors';
import { px } from '../../utils';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  font-size: ${px(32)}px;
  font-weight: bold;
  text-align: center;
  color: ${colors.purpleDark};
  margin-top: ${px(38)}px;
`;

export const ImageWelcome = styled.Image`
  width: ${px(292)}px;
  height: ${px(284)}px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: ${px(18)}px;
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

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: ${px(24)}px;
  text-shadow: ${px(1)}px ${px(1)}px ${px(1)}px ${colors.shadowText};
`;
