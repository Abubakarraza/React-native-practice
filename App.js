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
import BottomNav from './src/components/bottomNav/BottomNav';
import {View} from 'react-native';
import BottomNavigation from './src/navigation/bottomNavigation/BottomNavigation';
import OtherNavigation from './src/navigation/otherNavigation/OtherNavigation';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default App;
