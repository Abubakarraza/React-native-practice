import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={{fontSize: 40, color: 'black', fontWeight: '600'}}>
          {count}
        </Text>
      </View>
      <View style={styles.view}>
        <TouchableOpacity onPress={e => setCount(count + 1)}>
          <View
            style={{
              height: 90,
              width: 200,
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 50, color: 'white'}}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.view}>
        <TouchableOpacity onPress={() => setCount(0)}>
          <View
            style={{
              height: 90,
              width: 200,
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 30, color: 'white'}}>Reset</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.view}>
        <TouchableOpacity onPress={() => setCount(count - 1)}>
          <View
            style={{
              height: 90,
              width: 200,
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 50, color: 'white'}}>-</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Counter;
const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  btn: {
    height: 130,
    width: 300,
    flex: 2,
    backgroundColor: 'black',
  },
  btntext: {
    color: 'white',
  },
});
