import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Home = ({route, navigation}) => {
  const {email} = route.params;
  return (
    <View style={styles.container}>
      <Text>Hello This is your Email:{`${email}`}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
