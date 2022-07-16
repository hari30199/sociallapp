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
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

const Tests = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        {/* ----cards--- */}

        <TouchableOpacity style={styles.card}>
          {/* --------testdetails------ */}

          <View style={styles.detailcont}>
            <View
              style={{
                width: '80%',
                height: 80,
                justifyContent: 'center',
                paddingLeft: 12,
              }}>
              <Text style={styles.username}>Test 1</Text>
              <Text style={styles.teachercode}>Subject Name</Text>
            </View>
            <Feather name='download' color={colors.activecolor} size={16} style={{}}/>
          </View>

          {/* -------date and time------- */}

          <View style={styles.datetimecont}>
            <View>
              <Text style={styles.time}>
              <MaterialCommunityIcons name='clock-time-three-outline' sixe={10} color={colors.orange}  style={{left:10}}/>8:00 AM</Text>
            </View>
            <View>
              <Text style={styles.date}>
              <Feather name='calendar' color={colors.orange} size={10} style={{left:36}}/> 2 hr
              </Text>
            </View>
          </View>
        </TouchableOpacity>
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
    width: '40%',
    height: 120,
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
    backgroundColor: colors.postbg,
  },

  detailcont: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    top: 7,
  },
  username: {
    fontFamily: fonts.Bold,
    fontSize: 18,
    color: colors.black,
  },
  teachercode: {
    fontFamily: fonts.SemiBold,
    fontSize: 12,
    color: colors.black,
  },
  datetimecont: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    right: 12,
  },
});

export default Tests;
