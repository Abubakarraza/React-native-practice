import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [isLoading, setisLoading] = useState(false);
  const [token, settoken] = useState(null);
  const login = async () => {
    setisLoading(true);
    await AsyncStorage.setItem('UserToken', 'adjafjafafdjlfl');
    setisLoading(false);
  };
  const logout = () => {
    settoken(null);
    setisLoading(false);
    AsyncStorage.removeItem('UserToken');
  };
  const isLogged = async () => {
    try {
      setisLoading(true);
      const tokens = await AsyncStorage.getItem('UserToken');
      settoken(tokens);
      setisLoading(false);
    } catch (error) {
      console.log(`Logged is error ${error}`);
    }
  };
  useEffect(() => {
    isLogged();
  }, []);
  return (
    <AuthContext.Provider value={{isLoading, token, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
