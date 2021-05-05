import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Confirmation,
  QuestionSelect,
  UserIdentification,
  Welcome,
} from '../screens';

import { colors } from '../styles';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}>
    <stackRoutes.Screen name="Welcome" component={Welcome} />
    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />
    <stackRoutes.Screen name="Confirmation" component={Confirmation} />
    <stackRoutes.Screen name="QuestionSelect" component={QuestionSelect} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
