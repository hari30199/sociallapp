import {SafeAreaView, StyleSheet,FlatList, Text, View,TextInput,Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import fonts from '@constants/Fonts'
import colors from '../constants/Colors'
import images from '../constants/Images'
import SvgUri from 'react-native-svg-uri';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id:'1',
    name:"Tokiyo",
    message:"contact me at 9 clk",
    time:"30min ago"
},
{
  id:'2',
  name:"Berlin",
  message:"contact me at 9 clk",
  time:"30min ago"
},
{
    id:'3',
    name:"Stockholm",
    message:"We need your help",
    time:"Active"
},
{
  id:'4',
    name:"Cincinnati",
    message:"We need your help",
    time:"8hour ago"       
},
{
    id:'5',
    name:"Denver",
    message:"contact me at 6 clk",  
    time:'Active'     
},
{
  id:'6',
  name:"Agastha",
  message:"I am Busy",  
  time:'today'     
},
];

const rightSwipeActions = () =>{
 
  return (
    <View style={{backgroundColor:"#ff8303",justifyContent:'center',alignItems:'flex-end'}}>
      <Text style={{color:colors.white,paddingHorizontal:10,fontWeight:'600',paddingHorizontal:30,paddingVertical:20}}>Delete</Text>
    </View>
  )
}


const App = () => {
const navigation = useNavigation()


const Item = ({name,message,time,backgroundColor}) => (
  <Swipeable style={{backgroundColor}}
    renderRightActions={rightSwipeActions}
    >
    <TouchableOpacity style={{padding:1,flexDirection:'row',borderRadius:7}} onPress={()=>navigation.navigate('Messagecomponent')}  
   >
      <View >
        <TouchableOpacity>
        <Image style={{borderRadius:100,width:60,height:60}} resizeMode='cover' source={images.ChatProfile1}></Image>
        </TouchableOpacity>
      </View>
      <View style={{width:"100%"}}>
      <View style={{flexDirection:'row',alignItems:'center',width:'80%',justifyContent:'space-between',paddingHorizontal:10}}>
        <Text style={{fontSize:18,color:colors.black,lineHeight:20,fontFamily:fonts.Bold,padding:4}}>{name}</Text>
        <Text style={{fontFamily:fonts.Regular,fontSize:10,color:colors.black}}><SvgUri style={{paddingHorizontal:4,alignItems:'center'}} source={images.Active} />{time}</Text> 
      </View>
      <View style={{paddingHorizontal:12}}>  
      <Text style={{fontSize:12,color:colors.black,fontFamily:fonts.Regular,padding:4}}>{message}</Text>
        </View>
        </View>
    </TouchableOpacity>
    </Swipeable>
  )


  const renderItem = ({ item }) => (
    <Item name={item.name} message={item.message} time={item.time}/>
  );

  const Seperator = () =>{
    return(
        <View style={{height:25,backgroundColor:"white"}}></View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.header}>
       <Text style={styles.textHeader}>Chats</Text>
       </View>
       <View style={styles.searchBar}>
        <TextInput 
             style={styles.input}
             placeholderTextColor='#b2d0ee'
             placeholder="search"
        />
          <SvgUri  source={images.SearchIcon} />
       </View>
       <View style={styles.chatList}>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Seperator}  
      />
       </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,backgroundColor:colors.white,alignItems:'center'
  },
  header:{
    width:'90%',  
},
textHeader:{
    fontFamily:fonts.Bold,
    fontSize:26,
    color:"#004382",
    padding:10          
},
    searchBar:{
        flexDirection:'row',
        marginTop:20,
        width:'90%', 
        backgroundColor:"#e4f0fc",        
        alignItems:'center',
        borderRadius:20,  
    },
    input: {           
        paddingLeft:30,
        fontSize:16,
        width:'90%',
        bottom:0,            
      }, 
      chatList:{
        marginTop:30,
        width:"90%",
      }

});

export default App;
