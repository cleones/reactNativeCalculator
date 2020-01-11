import React from 'react';
import {Text, StyleSheet, Dimensions, TouchableHighlight} from 'react-native';

const SizeButton = Dimensions.get('window').width / 4;

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: SizeButton,
    width: SizeButton,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  buttonDouble: {
    width: SizeButton * 2,
  },
  buttonTriple: {
    width: SizeButton * 3,
  },
});

const Button = ({label, onclick, double, triple, operation}) => {
  const styleButton = [styles.button];
  if (double) {
    styleButton.push(styles.buttonDouble);
  }
  if (triple) {
    styleButton.push(styles.buttonTriple);
  }
  if (operation) {
    styleButton.push(styles.operationButton);
  }

  return (
    <TouchableHighlight onPress={() => onclick(label)}>
      <Text style={styleButton}>{label}</Text>
    </TouchableHighlight>
  );
};

export default Button;
