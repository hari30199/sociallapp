import { StyleSheet, Text, View ,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import fonts from '@constants/Fonts';
import colors from '@constants/Colors';
import images from '@constants/Images';
import SvgUri from 'react-native-svg-uri';

const Fees = () => {
  return (
    <View style={{flex:1,alignItems:'center'}}>
      <View style={{width:'90%',height:400,justifyContent:'center'}}>
        <ScrollView contentContainerStyle={{justifyContent:'center',alignItems:'center',height:400}}>
          <SvgUri source={images.payfees}/>
          <TouchableOpacity
                    style={styles.touchables}
                    >
                    <Text style={styles.text}>Pay Now</Text>
                  </TouchableOpacity>
        </ScrollView>
      
      </View>
      
    </View>
  )
}

export default Fees

const styles = StyleSheet.create({
  touchables: {
    backgroundColor: colors.activecolor,
    width: 300,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    margin: 6,
    borderColor: colors.grey,
    borderWidth: 0.3,
    top:110
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.Bold,
    color: colors.white,
  },
})