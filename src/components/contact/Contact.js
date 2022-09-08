import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Contact = () => {
  const Navigation = useNavigation();
  return (
    <View>
      <Text>Contact</Text>
      <Button
        title="Go To Login"
        onPress={() => Navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Contact;
