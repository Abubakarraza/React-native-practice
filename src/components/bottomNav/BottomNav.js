import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Home from '../home/Home';
import List from '../flatlist/List';
import LoginPage from '../loginPage/LoginPage';
import {NavigationContainer} from '@react-navigation/native';
const BottomNav = () => {
  const Tab = createBottomTabNavigator();
  return <View></View>;
};

const styles = StyleSheet.create({});

export default BottomNav;
