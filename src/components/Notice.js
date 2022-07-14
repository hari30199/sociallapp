import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react'

import fonts from '@constants/Fonts';
import colors from '@constants/Colors';
import images from '@constants/Images';
import SvgUri from 'react-native-svg-uri';


const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

const Notce = () => {
  return (
    <View style={styles.container}>
    <View style={styles.subcontainer}>
      <View style={styles.datecontainer}>
        <Image style={{width:'80%',height:80,borderRadius:10}} source={images.notice1}/>
      </View>
      <View style={styles.card}>
        <View style={{width: '75%'}}>
          <View style={{width: '100%', height: 55, paddingTop: 5}}>
            <Text style={styles.subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ....</Text>
          </View>

          <View style={styles.timings}>
            <Text style={styles.tdtext}> By Hari on July 14, 2022</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.download}>
          <SvgUri source={images.testdownload} />
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.subcontainer}>
      <View style={styles.datecontainer}>
        <Image style={{width:'80%',height:80,borderRadius:10}} source={images.notice2}/>
      </View>
      <View style={styles.card}>
        <View style={{width: '75%'}}>
          <View style={{width: '100%', height: 55, paddingTop: 5}}>
            <Text style={styles.subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ....</Text>
          </View>

          <View style={styles.timings}>
            <Text style={styles.tdtext}> By Hari on July 14, 2022</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.download}>
          <SvgUri source={images.testdownload} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    // justifyContent:'center',
  },
  notfoundtxt: {
    fontFamily: fonts.Medium,
    fontSize: 12,
    color: colors.black,
    textAlign: 'center',
  },
  subcontainer: {
    width: width * 1,
    height: 100,
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor:colors.hwcard
  },
  datecontainer: {
    width: width * 0.25,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  datetxt: {
    fontFamily: fonts.Bold,
    textAlign: 'center',
    color: colors.white,
  },
  card: {
    paddingTop:10,
    width: width * 0.75,
    height: 80,
    backgroundColor: colors.hwcard,
    flexDirection: 'row',
    paddingLeft: 10,
  },
  heading: {
    fontFamily: fonts.Semibold,
    fontSize: 18,
    color: colors.black,
  },
  subheading: {
    fontFamily: fonts.Medium,
    fontSize: 12,
    color: colors.grey,
  },
  timings: {
    width: '100%',
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tdtext: {
    fontSize: 10,
    fontFamily: fonts.Semibold,
    color: colors.lightgrey,
  },
  download: {
    width: '25%',
    height: 80,
    backgroundColor: colors.hwcard,
    justifyContent: 'center',
    alignItems: 'center',
  },
});



export default Notce