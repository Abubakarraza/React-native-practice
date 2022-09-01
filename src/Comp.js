import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
const Comp = () => {
  return (
    <View style={style.container}>
      <View style={[style.box1, style.commonStyle]}></View>
      <View style={[style.box2, style.commonStyle]}></View>
      <View style={[style.box3, style.commonStyle]}></View>
      <View style={[style.box4, style.commonStyle]}>
        <Image style={style.image} source={require('../src/assests/img.jpg')} />
      </View>
      {/* <View style={[style.box4, style.commonStyle]}></View> */}
      <View style={style.subParent}>
        <View style={[style.box5, style.commonStyle]}></View>
      </View>
    </View>
  );
};
export default Comp;
const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  box1: {
    backgroundColor: 'red',
    bottom: 0,
    right: 0,
  },
  box2: {
    backgroundColor: 'green',
    right: 0,
  },
  box3: {
    backgroundColor: 'yellow',
    bottom: 0,
  },
  box4: {
    backgroundColor: 'brown',

    top: 0,
  },
  box5: {
    backgroundColor: 'violet',
  },
  subParent: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  commonStyle: {
    position: 'absolute',
    height: 100,
    width: 100,
  },
  image: {
    height: 100,
    width: 100,
  },
});
