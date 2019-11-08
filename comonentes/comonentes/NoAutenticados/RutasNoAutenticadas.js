import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const SignIn = () => <Text>componente Sssssssssssssignin</Text>;

export const RutasNoAutenticadas = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Iniciar sesion',
    },
  },
});

// export default createAppContainer(RutasNoAutenticadas);
