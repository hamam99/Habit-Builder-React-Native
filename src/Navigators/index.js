import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Introduction, Splash } from '../Containers';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Introduction"
        component={Introduction}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
