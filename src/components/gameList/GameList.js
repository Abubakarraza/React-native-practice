import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const GameList = ({image, price, title, subtitle, isFree, onPress}) => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image style={styles.imageStyle} source={image} />
        <View style={{width: Dimensions.get('window').width - 220}}>
          <Text style={{fontSize: 16, color: 'black'}}>{title}</Text>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              textTransform: 'uppercase',
            }}
            numberOfLines={1}>
            {subtitle}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.4}
        onPress={onPress}>
        <Text style={{color: 'white', fontSize: 14, textAlign: 'center'}}>
          {isFree ? 'Free' : <Text>${price}</Text>}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  imageStyle: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginRight: 8,
  },
  btn: {
    width: 100,
    backgroundColor: '#0aada8',
    padding: 10,
    borderRadius: 8,
  },
});

export default GameList;
