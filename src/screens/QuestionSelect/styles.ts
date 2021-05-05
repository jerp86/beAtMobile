import styled from 'styled-components/native';

import { colors, fonts } from '../../styles';
import { px } from '../../utils';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.gray};
`;

export const HeaderContainer = styled.View`
  padding-horizontal: ${px(32)}px;
`;

export const Title = styled.Text`
  font-family: ${fonts.heading};
  font-size: ${px(17)}px;
  line-height: ${px(20)}px;
  margin-top: ${px(16)}px;
  color: ${colors.purpleDark};
`;

export const SubTitle = styled.Text`
  font-family: ${fonts.text};
  font-size: ${px(17)}px;
  line-height: ${px(20)}px;
  color: ${colors.purpleDark};
`;
