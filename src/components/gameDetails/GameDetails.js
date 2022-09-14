import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';

const GameDetails = ({navigation, route}) => {
  const {title, subtitle, image, description, isFree, price} = route.params;
  return (
    <ScrollView>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.container}>
          <Text style={{fontSize: 18, fontWeight: '600', color: 'green'}}>
            {isFree ? 'Free' : <Text style={{color: 'red'}}>$ {price}</Text>}
          </Text>
          <Image
            source={image}
            style={{
              width: '90%',
              height: undefined,
              aspectRatio: 1,
              borderRadius: 12,
              marginVertical: 12,
            }}
          />

          <Text
            style={{
              color: 'black',
              fontSize: 24,
              fontWeight: '700',
              textAlign: 'center',
            }}>
            {title}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '700',
              textAlign: 'center',
            }}>
            {subtitle}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              marginHorizontal: 12,
              textAlign: 'left',
            }}>
            {description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: undefined,
    borderColor: '#333',
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 12,
    marginBottom: 12,
  },
});

export default GameDetails;
