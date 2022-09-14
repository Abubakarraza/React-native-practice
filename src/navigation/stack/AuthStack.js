import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginUi from '../../components/loginUi/LoginUi';
import Register from '../../components/register/Register';
import Dashboard from '../../components/dashboard/Dashboard';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Login" component={LoginUi} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
