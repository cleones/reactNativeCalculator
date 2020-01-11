import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Display = ({value}) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'flex-end',
  },
  displayValue: {
    fontSize: 60,
    color: '#fff',
  },
});
export default Display;
