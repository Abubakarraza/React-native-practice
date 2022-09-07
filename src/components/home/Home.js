import React from 'react';
import {View, StyleSheet, Text, Button, Image, ScrollView} from 'react-native';

import BotttomNav from '../bottomNav/BotttomNav';
const Home = ({navigation}) => {
  const description =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry';
  return (
    <ScrollView scrollEnabled>
      <View style={styles.container}>
        <View style={styles.subParent}>
          <Image
            style={styles.image}
            source={require('../../assests/fsdd.jpg')}
          />
          <Text style={styles.text}>Welcome to Faisalabad</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.nav}>
          <View style={styles.line}></View>
          <BotttomNav />
          <View
            style={[
              styles.line,
              {
                marginBottom: 15,
              },
            ]}></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  image: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    borderRadius: 20,
    alignItems: 'stretch',
  },
  subParent: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: '500',
    color: '#5097C9',
    textTransform: 'uppercase',
  },
  description: {
    fontSize: 15,
    color: 'black',
    paddingVertical: 20,
    paddingHorizontal: 10,
    textAlign: 'left',
    lineHeight: 20,
  },
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: 'grey',
  },
  nav: {
    marginVertical: 20,
  },
});

export default Home;
