import React ,{useContext,useState,useEffect}from 'react';
import { StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { AuthContext } from '../Users/Authcontext';
import StudentsTab from './StudentsTab';
import Register from '@screens/Register';
import Batches from '@screens/Batches';
import Home from '@screens/Home';
import Chats from '@screens/Chats';
import Login from '@screens/Login';
import Profile from '@screens/Profile';
import Usertype from '@screens/Usertype';
import OtpScreen from '@screens/OtpScreen';
import Instituteinput from '@screens/Instituteinput';
import SettingsScreen from '@screens/SettingsScreen';
import Batchesdetail from '@screens/Batchesdetail';
import Signin from '@screens/Signin'
import TeachersTab from './TeachersTab'

const Stack = createStackNavigator();

const App = () => {
  const {userInfo,userinfo} = useContext(AuthContext);


  return (
   
    <NavigationContainer>
      <StatusBar backgroundColor='white' barStyle="dark-content" />
      <Stack.Navigator  screenOptions={{headerShown: false}}>
      

            <Stack.Screen name="Home"  component={StudentsTab} /> 
            <Stack.Screen name="initial" component={Home} />
            <Stack.Screen name="Batches" component={Batches} />
            <Stack.Screen name="Batchesdetail" component={Batchesdetail} />
            <Stack.Screen name="Chats" component={Chats} />
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="SettingsScreen" component={SettingsScreen}/>
           
     
          <Stack.Screen name="Homess" component={Usertype} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signin" component={Signin}/> 
          <Stack.Screen name="Register" component={Register}/>
          <Stack.Screen name="OtpScreen" component={OtpScreen}/>
          <Stack.Screen name="Instituteinput" component={Instituteinput}/>  
      
    
     
      </Stack.Navigator> 
    </NavigationContainer>
    
  );
};

export default App;

 