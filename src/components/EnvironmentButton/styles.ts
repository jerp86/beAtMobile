import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { EnvironmentButtonProps } from './index';

import { colors, fonts } from '../../styles';
import { px } from '../../utils';

export const Container = styled(RectButton)<EnvironmentButtonProps>`
  background-color: ${({ active }) =>
    !active ? colors.white : colors.purpleDark};
  align-items: center;
  justify-content: center;
  width: ${px(76)}px;
  height: ${px(40)}px;
  border-radius: ${px(12)}px;
  margin-horizontal: ${px(5)}px;
`;

export const Text = styled.Text<EnvironmentButtonProps>`
  color: ${({ active }) => (!active ? colors.purpleDark : colors.white)};
  font-family: ${({ active }) => (!active ? fonts.text : fonts.heading)};
`;
