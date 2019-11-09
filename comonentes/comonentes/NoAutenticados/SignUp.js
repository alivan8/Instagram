import React, {Component} from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

import {connect} from 'react-redux';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.numero);
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text> SignUp </Text>
        <Button title="Aumentar" onPress={this.props.aumentar} />
        <Button
          title="SignUp"
          onPress={() => {
            navigation.goBack();
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

const mapStateToProps = state => {
  return {
    prop: state.prop,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    aumentar: () => {
      dispatch({
        type: 'AUMENTAR_REDUCER_PRUEBA',
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
