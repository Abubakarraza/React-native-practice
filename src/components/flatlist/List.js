import React, {useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
} from 'react-native';
const list = () => {
  const [status, setStatus] = useState(true);
  const student = [
    {
      name: 'Abubakar',
      rollNo: 1223,
      key: '1',
    },
    {
      name: 'Abubakar',
      rollNo: 1223,
      key: '2',
    },
    {
      name: 'Abubakar',
      rollNo: 1223,
      key: '3',
    },
    {
      name: 'Abubakar',
      rollNo: 1223,
      key: '4',
    },
    {
      name: 'Raza',
      rollNo: 32,
      key: '5',
    },
    {
      name: 'ansari',
      rollNo: 33,
      key: '6',
    },
  ];
  return (
    <SafeAreaView style={style.container}>
      <FlatList
        style={style.list}
        data={student}
        horizontal={status ? true : false}
        renderItem={e => {
          return (
            <View style={style.design}>
              <Text> {e.item.name}</Text>
            </View>
          );
        }}
      />
      <View style={style.btn}>
        <Button
          title={status ? 'Change to vertical' : 'Change to Horizontal'}
          onPress={status ? () => setStatus(false) : () => setStatus(true)}
        />
      </View>
    </SafeAreaView>
  );
};
export default list;
const style = StyleSheet.create({
  design: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    margin: 20,
    backgroundColor: 'red',
  },
  container: {
    padding: 0,
    flex: 1,
  },
  list: {
    flex: 1,
  },
  btn: {
    flex: 3,
  },
});
