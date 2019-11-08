import React from 'react';
import {Text, View, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const SignIn = props => {
  const {navigation} = props;
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>componente ssSignIn</Text>
      <Button
        title="navegar- SignUp"
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      />
    </View>
  );
};

const SignUp = props => {
  const {navigation} = props;
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>Componente Sign up</Text>
      <Button
        title="regresar"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export const RutasNoAutenticadas = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
    },
    SignUp: {
      screen: SignUp,
    },
  },
  {
    navigationOptions: () => ({
      title: 'sdfa',
    }),
  },
);

// export default createAppContainer(RutasNoAutenticadas);
sdfssdfafsdfsdfafsfsdfsdfsdfasdfsdfsdfsdfa;

;