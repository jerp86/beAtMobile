import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

import { px } from '../../utils';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Animation = styled(LottieView)`
  background-color: transparent;
  width: ${px(200)}px;
  height: ${px(200)}px;
`;
