import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BotttomNav = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text>About</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
        <Text>Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('User')}>
        <Text>User</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 20,
    paddingVertical: 20,
  },
});

export default BotttomNav;
