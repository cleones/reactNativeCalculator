import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './Components/Button';
import Display from './Components/Display';

const InicialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operation, setOperation] = useState(InicialState.operation);
  const [clearDisplay, setClearDisplay] = useState(InicialState.operation);
  const [values, setvalues] = useState([...InicialState.values]);
  const [current, setCurrent] = useState(InicialState.current);

  const addValue = n => {
    if (n === undefined) {
      return '0';
    }
    if (n === '.' && displayValue.includes('.')) {
      return;
    }
    const clear = displayValue === '0' || clearDisplay;
    const currentValue = clear ? n : displayValue + n;
    setDisplayValue(currentValue);
    setClearDisplay(false);

    if (n !== '.') {
      const newValue = parseFloat(currentValue);
      const copyValues = [...values];
      copyValues[current] = newValue;
      setvalues([...copyValues]);
    }
  };

  const changeOperation = op => {
    if (!current) {
      setOperation(op);
      setCurrent(1);
      setClearDisplay(true);
      return;
    }
    const equals = op === '=';
    const copyValues = [...values];
    try {
      copyValues[0] = eval(`${copyValues[0]} ${operation} ${copyValues[1]} `);
    } catch (e) {
      copyValues[0] = values[0];
    }
    copyValues[1] = 0;
    setDisplayValue(copyValues[0]);
    setOperation(equals ? null : operation);
    setCurrent(equals ? 0 : 1);
    setvalues([...copyValues]);
    setClearDisplay(!equals);
  };

  const clearMemory = () => {
    setDisplayValue('0');
    setOperation(InicialState.operation);
    setClearDisplay(InicialState.operation);
    setvalues([...InicialState.values]);
    setCurrent(InicialState.operation);
  };

  return (
    <View style={styles.container}>
      <View>
        <Display style={styles.display} value={displayValue} />
      </View>
      <View style={styles.button}>
        <Button label="AC" triple onclick={clearMemory} />
        <Button label="/" operation onclick={changeOperation} />
        <Button label="7" onclick={addValue} />
        <Button label="8" onclick={addValue} />
        <Button label="9" onclick={addValue} />
        <Button label="*" operation onclick={changeOperation} />
        <Button label="4" onclick={addValue} />
        <Button label="5" onclick={addValue} />
        <Button label="6" onclick={addValue} />
        <Button label="-" operation onclick={changeOperation} />
        <Button label="1" onclick={addValue} />
        <Button label="2" onclick={addValue} />
        <Button label="3" onclick={addValue} />
        <Button label="+" operation onclick={changeOperation} />
        <Button label="0" triple onclick={addValue} />
        <Button label="=" operation onclick={changeOperation} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  display: {
    flex: 2,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
export default App;
