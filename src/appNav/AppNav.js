import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import AuthStack from '../navigation/stack/AuthStack';
import MyStack from '../navigation/stack/MyStack';

const AppNav = () => {
  const {isLoading, token} = useContext(AuthContext);
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {token !== null ? <MyStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default AppNav;
