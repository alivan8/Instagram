import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {RutasNoAutenticadas} from './comonentes/comonentes/NoAutenticados/RutasNoAutenticadas';
import {RutasAutenticadas} from './comonentes/comonentes/Autenticados/RutasAutenticadas';

const SignIn = createAppContainer(RutasNoAutenticadas);
const Home = createAppContainer(RutasAutenticadas);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        {/**<SignIn /> */}
        <Home />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
