import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const CustomButton = ({selectionMode, option1, option2, onSelectSwitch}) => {
  const [getSelctionMode, setSelectionMode] = useState(selectionMode);
  const updateSwitch = value => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: getSelctionMode == 1 ? '#AD40AF' : '#e4e4e4',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 12,
        }}
        activeOpacity={1}
        onPress={() => updateSwitch(1)}>
        <Text
          style={{
            color: getSelctionMode == 1 ? 'white' : '#AD40AF',
            fontSize: 14,
          }}>
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: getSelctionMode == 2 ? '#AD40AF' : '#e4e4e4',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 12,
        }}
        activeOpacity={1}
        onPress={() => updateSwitch(2)}>
        <Text
          style={{
            color: getSelctionMode == 2 ? 'white' : '#AD40AF',
            fontSize: 14,
          }}>
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: '100%',
    marginTop: 12,

    display: 'flex',
    backgroundColor: '#e4e4e4',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: '#AD40AF',
  },
});

export default CustomButton;
