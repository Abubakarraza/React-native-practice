import './src/ignoreWarning';
import React from 'react';
console.reportErrorsAsExceptions = false;
import {AuthProvider} from './src/context/AuthContext';
import AppNav from './src/appNav/AppNav';
const App = () => {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};
export default App;
