import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
console.reportErrorsAsExceptions = false;
import {NavigationContainer, TabRouter} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Comp from './src/Comp';
import ProductList from './src/components/flatlist/List';
import Counter from './src/components/counterApp/Counter';
import RandomColorGenerator from './src/components/randomColorGenerator/RandomColorGenerator';
import FetchData from './src/components/fetchData/FetchData';
import LoginPage from './src/components/loginPage/LoginPage';
import Home from './src/components/home/Home';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{title: 'Login Page'}}
        />
        <Stack.Screen name="List" component={ProductList} />
        <Stack.Screen name="Random" component={RandomColorGenerator} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={({route}) => ({
            title: route.params.email,
            headerStyle: {backgroundColor: 'blue'},
            headerTitleAlign: 'center',
            headerTintColor: 'black',
            headerRight: () => (
              <Button
                title="info"
                onPress={() => Alert.alert('hello this is info')}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
