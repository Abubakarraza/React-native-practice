import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GameDetails from '../../components/gameDetails/GameDetails';
import BottomNavigation from '../bottomNavigation/BottomNavigation';
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={BottomNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetails}
        options={({route}) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  );
};
export default MyStack;
