import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import fonts from '@constants/Fonts';
import colors from '@constants/Colors';
import images from '@constants/Images';
import SvgUri from 'react-native-svg-uri';

const Overview = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={{width: '100%', flexDirection: 'row'}}>
          <View style={styles.card}>
            <View style={styles.images}>
              <SvgUri source={images.ovbatches} />
            </View>
            <View style={styles.textcontainer}>
              <Text style={styles.text}>Batch Start Date</Text>
              <Text style={styles.text}>15/05/2022</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.images}>
              <SvgUri source={images.ovqrcode} />
            </View>
            <View style={styles.textcontainer}>
              <Text style={styles.text}>Batch Code</Text>
              <Text style={styles.text}>ISHFGSE</Text>
            </View>
          </View>
        </View>
        <View style={styles.container2}>
          <SvgUri source={images.ovwbatch} />
          <Text style={styles.text}>No notice yet!</Text>
        </View>
      </View>
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  subcontainer: {
    width: '90%',
  },
  card: {
    width: '50%',
    height: 70,
    flexDirection: 'row',
  },
  images: {
    width: '30%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textcontainer: {
    width: '70%',
    height: 70,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  text: {
    fontFamily: fonts.Regular,
    color: colors.black,
    fontSize: 12,
  },
  container2: {
    width: '100%',
    height: 400,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
