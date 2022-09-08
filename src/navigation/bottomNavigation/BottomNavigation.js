import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ContactTab, HomeTab} from '../homeTab/Tab';
import List from '../../components/flatlist/List';
import FetchData from '../../components/fetchData/FetchData';
import Icon from 'react-native-vector-icons/AntDesign';
const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="home"
                size={24}
                color={focused ? '#006600' : '#8e8e93'}
              />
            );
          },
          tabBarLabelStyle: {color: 'black'},
        }}
      />
      <Tab.Screen
        name="ContactTab"
        component={ContactTab}
        options={{headerShown: false}}
      />
      <Tab.Screen name="List" component={List} options={{}} />
      <Tab.Screen name="Data" component={FetchData} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BottomNavigation;
