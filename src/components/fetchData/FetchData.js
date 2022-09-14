import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const fetchdetails = async () => {
    try {
      const datas = await fetch('https://dummyjson.com/products', {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const res = await datas.json();
      setData(res.products);
      setLoaded(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdetails();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25, color: 'black', fontWeight: '500'}}>
        List Of Product
      </Text>
      {loaded ? (
        <ActivityIndicator style={styles.loaded} size={'large'} />
      ) : (
        <FlatList
          data={data}
          renderItem={elem => {
            return (
              <View style={styles.card}>
                <Image style={styles.img} source={{uri: elem.item.thumbnail}} />
                <View style={styles.subParent}>
                  <View style={styles.productHeight}>
                    <Text style={styles.productText}>{elem.item.title}</Text>
                  </View>
                  <Text style={styles.productId}>
                    | id:
                    {elem.item.id < 10 ? `0${elem.item.id}` : `${elem.item.id}`}
                  </Text>
                </View>
                <Text style={styles.price}>price: ${elem.item.price}</Text>
                <Text style={styles.description}>Description:</Text>
                <Text style={{color: 'black'}}>{elem.item.description}</Text>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};
export default FetchData;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    height: 465,
    width: 300,
    backgroundColor: 'white',
    marginTop: 20,
    padding: 10,
  },
  img: {
    height: 230,
    width: '100%',
    borderRadius: 12,
  },
  subParent: {
    position: 'relative',
    width: '100%',
    height: 85,
  },
  productText: {
    fontSize: 22,
    fontWeight: '500',
    color: 'black',
    position: 'absolute',
    width: '75%',
    left: 0,
  },
  productId: {
    position: 'absolute',
    right: 5,
    width: '25%',
    fontSize: 22,
    fontWeight: '500',
    color: 'black',
    marginLeft: 5,
  },
  price: {
    fontSize: 20,
    color: 'black',

    fontWeight: '500',
  },
  description: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  loaded: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productHeight: {
    height: '100%',
  },
});
