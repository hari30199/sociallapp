import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import fonts from '@constants/Fonts';
import colors from '@constants/Colors';
import images from '@constants/Images';
import SvgUri from 'react-native-svg-uri';

export default function Homework () {
  return (
    <View style={styles.container}>
      <SvgUri source={images.notfound} />
      <Text style={styles.notfoundtxt}>You have not been assigned{'\n'}any homework yet!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.white,
    alignItems:'center',
    justifyContent:'center'
  },
  notfoundtxt:{
    fontFamily:fonts.Medium,
    fontSize:12,
    color:colors.black,
    textAlign:'center'
  }
})

