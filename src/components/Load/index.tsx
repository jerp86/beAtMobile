import React from 'react';

import loadAnimation from '../../assets/load.json';

import { Animation, Container } from './styles';

export const Load: React.FC = () => (
  <Container>
    <Animation source={loadAnimation} autoPlay loop />
  </Container>
);
