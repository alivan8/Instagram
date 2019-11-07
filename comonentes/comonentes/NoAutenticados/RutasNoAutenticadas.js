import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const SignIn = () => <Text>componente Signin</Text>;

const RutasNoAutenticadas = createStackNavigator({
  SignIn: {
    screen: SignIn,
  },
});

export default createAppContainer(RutasNoAutenticadas);
