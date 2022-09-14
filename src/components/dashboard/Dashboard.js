import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const Dashboard = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: 24,
          fontWeight: '700',
          textAlign: 'center',
        }}>
        Game On{' '}
      </Text>
      <Image
        source={require('../../assests/login.jpg')}
        style={{
          width: '70%',
          height: undefined,
          aspectRatio: 1,
          transform: [{rotate: '-5deg'}],
        }}
      />
      <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          backgroundColor: '#AD40AF',
          borderRadius: 12,
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text style={{color: 'white', textAlign: 'center'}}>
          Let's Begin <Icon name="chevron-forward" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Dashboard;
