import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { colors, fonts } from '../../styles';
import { px } from '../../utils';

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  background-color: ${colors.gray};
`;

export const Info = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-horizontal: ${px(30)}px;
  padding-vertical: ${px(50)}px;
  background-color: ${colors.gray};
`;

export const Controller = styled.View`
  background-color: ${colors.white};
  padding-horizontal: ${px(20)}px;
  padding-top: ${px(20)}px;
  padding-bottom: ${getBottomSpace() || px(20)}px;
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

export const TipContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.purpleLight};
  padding: ${px(20)}px;
  border-radius: ${px(20)}px;
  position: relative;
  bottom: ${px(60)}px;
`;

export const TipImage = styled.Image`
  width: ${px(56)}px;
  height: ${px(56)}px;
`;

export const TipText = styled.Text`
  flex: 1;
  color: ${colors.gray};
  font-family: ${fonts.text};
  font-size: ${px(17)}px;
  text-align: justify;
  margin-left: ${px(20)}px;
`;

export const AlertLabel = styled.Text`
  color: ${colors.purple};
  font-family: ${fonts.complement};
  font-size: ${px(12)}px;
  margin-bottom: ${px(5)}px;
`;
