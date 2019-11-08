import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {RutasNoAutenticadas} from './comonentes/comonentes/NoAutenticados/RutasNoAutenticadas';

const SignIn = createAppContainer(RutasNoAutenticadas);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <SignIn />
      </View>
    );
  }
}
