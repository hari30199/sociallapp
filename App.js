import React from 'react';
import {Text,StatusBar} from 'react-native'
import { AuthProvider } from './src/Users/Authcontext';
import Navigation from './src/Navigation/Navigation';

const App = () => {
    return (
      <AuthProvider>
          <Navigation/>
      </AuthProvider>
   
    );
};

export default App;
