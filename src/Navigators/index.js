import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash} from '../Containers';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
