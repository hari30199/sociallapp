import 'react-native-gesture-handler';
import React from 'react';
import {Text,TouchableOpacity,StyleSheet,View} from 'react-native'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '@screens/Home';
import Chats from '@screens/Chats';
import Batches  from '@screens/Batches';
import Profile from '@screens/Profile';
import Hometabbarmodal from '@component/Hometabbarmodal';
import Batchtabbarmodal from '@component/Bacthtabbarmodal';


const BottomBar = createBottomTabNavigator();

export default function TabBar ({barColor}) {
  const modalcon = global.tabbuttonprops
  // useEffect(()=>{
  //   modalcon
  //   global.tabbuttonprops
  //   console.log(global.tabbuttonprops)
  //   return modalcon
  // },[])
  BottomBar.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0 && navigation.state.routes.routeName === "Profile") {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
  };
  return (

<BottomBar.Navigator
tabBar={(props) => (
  <View style={styles.navigatorContainer}>
    <BottomTabBar
      {...props}
      
    />
  </View>
)}
tabBarOptions={{
  keyboardHidesTabBar:true,
  showIcon: true,
 
  style: styles.navigator,
  tabStyle: {
    backgroundColor: 'white',
    // display:'none'
  }
}}
>

<BottomBar.Screen
   name="home"
   component={Home}
   options={{
           
    tabBarIcon: ({color}) => (
      <Icon name="home" color={color} size={32} />
    ),
    headerShown:false,
    
  }}
/>
<BottomBar.Screen
         name="Batches"
         component={Batches}
  options={{
    tabBarIcon: ({ color }) => (
      <MaterialIcons name="speaker-notes" color={color} size={28} />
    )
  }}
/>
<BottomBar.Screen
  name="Rocket"
  component={Chats}
  options={{
    tabBarButton: (props) => (modalcon == 'var' || modalcon == undefined?
      <Hometabbarmodal bgColor={barColor} {...props}/> : <Batchtabbarmodal bgColor={barColor} {...props}/>
    )
  }}
/>
<BottomBar.Screen
  name="Chats"
  component={Chats}
  options={{
    tabBarIcon: ({color}) => (
        <Icon name="wechat" color={color} size={32} />
    ),
    headerShown:false
  }}
/>
<BottomBar.Screen
   name="Profile"
   component={Profile}
   options={{
     tabBarIcon: ({color}) => (
     <Icon name="account" color={color} size={32} />
     ),
     headerShown:false
   }}
  // options={({ route}) => ({
  //   tabBarVisible: getTabBarVisibility(route)
  // })}

/>

</BottomBar.Navigator>

);
}
const styles = StyleSheet.create({
container: {
flex: 1,
},
navigatorContainer: {
position: 'absolute',
bottom: 0,
left: 0,
right: 0,
shadowColor: "#000",
shadowOffset: {
width: 0,
height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,
},
navigator: {
borderTopWidth: 0,
backgroundColor: 'transparent',
elevation: 60
},
xFillLine: {
position: 'absolute',
bottom: 0,
left: 0,
right: 0,
height: 34
}
});
