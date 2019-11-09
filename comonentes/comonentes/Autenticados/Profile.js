import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text> Profile </Text>
        <Button
          title="Publicaciones"
          onPress={() => {
            navigation.navigate('Publicacion');
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e58',
  },
});
