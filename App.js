import React from 'react';

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
import About from './src/components/about/About';
import Contact from './src/components/contact/Contact';
import UserData from './src/components/userData/UserData';
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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="User" component={UserData} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
