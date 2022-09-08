import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Contact from '../../components/contact/Contact';
import Home from '../../components/home/Home';
import LoginPage from '../../components/loginPage/LoginPage';
const Stack = createNativeStackNavigator();
const HomeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={Home} />
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
  );
};
const ContactTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export {HomeTab, ContactTab};
