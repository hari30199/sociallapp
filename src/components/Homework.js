import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import fonts from '@constants/Fonts';
import colors from '@constants/Colors';
import images from '@constants/Images';
import SvgUri from 'react-native-svg-uri';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export default function Homework() {
  return (
    // <View style={styles.container}>
    //   <SvgUri source={images.notfound} />
    //   <Text style={styles.notfoundtxt}>You have not been assigned{'\n'}any homework yet!</Text>
    // </View>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.datecontainer}>
          <Text style={styles.datetxt}>15{'\n'}Feb</Text>
        </View>
        <View style={styles.card}>
          <View style={{width: '75%'}}>
            <View style={{width: '100%', height: 55, paddingTop: 5}}>
              <Text style={styles.heading}>Science</Text>
              <Text style={styles.subheading}>Created by Neethu</Text>
            </View>

            <View style={styles.timings}>
              <SvgUri source={images.time} />
              <Text style={styles.tdtext}> 8:00 AM</Text>
              <SvgUri style={{left: 20}} source={images.datecard} />
              <Text style={[styles.tdtext, {left: 20}]}> 7th July, 2022</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.download}>
            <SvgUri source={images.download} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
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
    width: width * 0.9,
    height: 80,
    marginTop: 20,
    flexDirection: 'row',
  },
  datecontainer: {
    width: width * 0.2,
    height: 80,
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  datetxt: {
    fontFamily: fonts.Bold,
    textAlign: 'center',
    color: colors.white,
  },
  card: {
    width: width * 0.7,
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
    color: colors.lightgrey,
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
