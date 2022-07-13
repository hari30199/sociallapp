import 'react-native-gesture-handler';
import React,{useContext,useState,useEffect} from 'react';
import { Text,View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Home from '../Screens/Home';
import Chats from '../Screens/Chats';
import Batches  from '../Screens/Batches';
import Profile from '../Screens/Batches';


const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    
  return (

    <Tab.Navigator
     keyboardHidesTabBar={true}
      screenOptions={{
        tabBarHideOnKeyboard:true,
        headerShadowVisible:true,
        keyboardHidesTabBar:true,
        showLabel: true,
      }}>

          <Tab.Screen
          name="home"
          component={Home}
          options={{
           
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={32} />
            ),
            headerShown:false,
            
          }}
        />
      <Tab.Screen
        name="Batches"
        component={Batches}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="speaker-notes" color={color} size={28} />
          ),
          headerShown:false
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({color}) => (
              <Icon name="wechat" color={color} size={32} />
          ),
          headerShown:false
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (<Icon name="account" color={color} size={32} />
          ),
          headerShown:true,
          tabStyle: { display: "none" }
        }}
        
      />
    </Tab.Navigator>
   
  );
};

export default BottomNavigator;
