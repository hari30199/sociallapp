import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import fonts from '@constants/Fonts';
import colors from '@constants/Colors';
import images from '@constants/Images';
import SvgUri from 'react-native-svg-uri';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

const Liveclasses = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        {/* ----cards--- */}

        <View style={styles.card}>
          <View style={styles.live}>
            <ImageBackground
              style={{height: 120}}
              source={images.liveimg}
              imageStyle={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
              <View>
                <Text
                  style={{color: colors.white, fontSize: 9, left: 10, top: 4}}>
                  English
                </Text>
              </View>
              <View
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',
                  height: 90,
                }}>
                <SvgUri source={images.liveicon} />
              </View>
            </ImageBackground>
          </View>

          {/* --------userdetails------ */}

          <View style={styles.detailcont}>
            <View
              style={{
                width: '30%',
                height: 53,
                backgroundColor: 'blue',
                borderRadius: 50,
                left: 4,
              }}></View>
            <View
              style={{
                width: '70%',
                height: 80,
                justifyContent: 'center',
                paddingLeft: 8,
              }}>
              <Text style={styles.username}>username</Text>
              <Text style={styles.teachercode}>Teacher code: AGHDJK</Text>
            </View>
          </View>

          {/* -------date and time------- */}

          <View style={styles.datetimecont}>
            <SvgUri style={{left: 10}} source={images.liveclock} />
            <Text style={styles.time}>8:00 AM</Text>
            <SvgUri style={{left: 34}} source={images.livedate} />
            <Text style={styles.date}>7th July, 2022</Text>
          </View>

          {/* -------------button--------- */}

          <View style={styles.buttoncont}>
            <TouchableOpacity style={styles.touchable}>
              <Text style={{fontFamily: fonts.Bold, color: colors.white}}>
                Join Live
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={{width:'45%',height:192,backgroundColor:'yellow',margin:10}}><Text>2</Text></View>
        <View style={{width:'45%',height:192,backgroundColor:'yellow',margin:10}}><Text>3</Text></View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  subcontainer: {
    width: '100%',
    alignItems: 'center',
    height: 'auto',
    flexWrap: 'wrap',
  },
  card: {
    width: '45%',
    height: 270,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: colors.white,
  },
  live: {
    width: '100%',
    height: 110,
  },
  detailcont: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    top: 7,
  },
  username: {
    fontFamily: fonts.Semibold,
    fontSize: 14,
    color: colors.black,
  },
  teachercode: {
    fontFamily: fonts.Medium,
    fontSize: 9,
    color: colors.black,
  },
  datetimecont: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontFamily: fonts.Semibold,
    fontSize: 9,
    color: colors.lightgrey,
    left: 12,
  },
  date: {
    fontFamily: fonts.Semibold,
    fontSize: 9,
    color: colors.lightgrey,
    left: 40,
  },
  buttoncont: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    width: '80%',
    height: 35,
    backgroundColor: colors.activecolor,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Liveclasses;
