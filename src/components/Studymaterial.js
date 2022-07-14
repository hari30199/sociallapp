import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';

import fonts from '@constants/Fonts';
import colors from '@constants/Colors';
import images from '@constants/Images';
import SvgUri from 'react-native-svg-uri';
import { ScrollView } from 'react-native-gesture-handler';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

const Studymaterial = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <ScrollView>
        <View style={styles.card}>
          <View style={styles.image}>
            <Image style={styles.imagestyle} source={images.jpgfile}></Image>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>Tamil notes.pdf</Text>
          </View>
          <TouchableOpacity style={styles.touchables}>
            <SvgUri source={images.smdownload} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchables}>
            <SvgUri source={images.smshare} />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.image}>
            <Image style={styles.imagestyle} source={images.pdffile} />
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>social science.jpg</Text>
          </View>
          <TouchableOpacity style={styles.touchables}>
            <SvgUri source={images.smdownload} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchables}>
            <SvgUri source={images.smshare} />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.image}>
            <Image style={styles.imagestyle} source={images.zipfile} />
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>science.zip</Text>
          </View>
          <TouchableOpacity style={styles.touchables}>
            <SvgUri source={images.smdownload} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchables}>
            <SvgUri source={images.smshare} />
          </TouchableOpacity>
        </View>
        </ScrollView>
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
    width: '90%',
    height: 400,
  },
  card: {
    width: '100%',
    backgroundColor: colors.hwcard,
    height: 80,
    marginTop: 14,
    flexDirection: 'row',
    borderRadius: 10,
  },
  image: {
    width: '20%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagestyle: {width: '64%', height: 60},
  textcontainer: {
    width: '50%',
    height: 80,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  text: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.black,
  },
  touchables: {
    width: '15%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Studymaterial;
