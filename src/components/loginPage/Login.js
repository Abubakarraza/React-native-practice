import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import logo from '../../assests/login.jpg';
const Login = () => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={logo}
        style={{width: '90%', height: undefined, aspectRatio: 1}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
