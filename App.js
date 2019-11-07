import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {RutasNoAutenticadas} from './comonentes/comonentes/NoAutenticados/RutasNoAutenticadas';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> App </Text>
      </View>
    );
  }
}
