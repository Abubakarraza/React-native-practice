import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, FlatList} from 'react-native';

const RandomColorGenerator = () => {
  const [color, setColor] = useState([]);
  console.log(color);
  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setColor([...color, randomColor()])}>
        <Text style={{color: 'white', fontSize: 20}}>
          Generate Random Color
        </Text>
      </TouchableOpacity>
      <FlatList
        data={color}
        renderItem={({item}) => {
          return (
            <View style={styles.parent}>
              <View
                style={{
                  backgroundColor: item,
                  height: 100,
                  width: '80%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>{item}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default RandomColorGenerator;
const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingBottom: 80,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 12,
    marginRight: 10,
    height: 60,
  },
  parent: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 120,
  },
});
