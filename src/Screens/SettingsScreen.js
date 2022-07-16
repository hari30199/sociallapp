import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

import fonts from '@constants/Fonts';
import colors from '@constants/Colors';
import images from '@constants/Images';
import SvgUri from 'react-native-svg-uri';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {useNavigation} from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* -----Header---- */}
      <View style={styles.head}>
        <View style={styles.backbutn}>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={{
              width: 60,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 14, height: 24, left: 4, top: 4}}
              source={images.backicon}
            />
          </TouchableOpacity>
          <Text style={styles.headtxt}> Settings</Text>
        </View>
      </View>

      {/* ---------main container------ */}
      <View style={styles.listcontainer}>
        <TouchableOpacity style={styles.list}>
          <View style={styles.imageleft}>
            <SvgUri source={images.settingsprofile} />
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>Account Settings</Text>
          </View>
          <View style={styles.imageright}>
            <Ionicons name='play' size={20} color={colors.activecolor}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list}>
          <View style={styles.imageleft}>
            <SvgUri source={images.help} />
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>Help Center</Text>
          </View>
          <View style={styles.imageright}>
          <Ionicons name='play' size={20} color={colors.activecolor}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list}>
          <View style={styles.imageleft}>
            <SvgUri source={images.privacypolicy} />
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>Privacy Policy</Text>
          </View>
          <View style={styles.imageright}>
          <Ionicons name='play' size={20} color={colors.activecolor}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list}>
          <View style={styles.imageleft}>
            <SvgUri source={images.temrs} />
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>Terms of Service</Text>
          </View>
          <View style={styles.imageright}>
          <Ionicons name='play' size={20} color={colors.activecolor}/>
          </View>
        </TouchableOpacity>
      </View>

      {/* -------bottomView-------- */}
      <View style={styles.bottomView}>
        <TouchableOpacity>
          <Text style={styles.signout}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  head: {
    backgroundColor: 'white',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backbutn: {
    backgroundColor: 'white',
    width: '100%',
    top: 10,
    flexDirection: 'row',
  },
  headtxt: {
    color: colors.activecolor,
    fontFamily: fonts.Bold,
    fontSize: 22,
    top: 2,
  },

  listcontainer: {
    width: '90%',
    height: 500,
    alignSelf: 'center',
  },
  list: {
    width: '100%',
    height: 50,
    backgroundColor: colors.postbg,
    flexDirection: 'row',
    marginTop: 20,
  },
  imageleft: {
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textcontainer: {
    width: '70%',
    height: 50,
    justifyContent: 'center',
    paddingLeft: 14,
  },
  text: {
    fontFamily: fonts.Medium,
    color: colors.black,
    fontSize: 14,
  },
  imageright: {
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  signout: {
    color: colors.orange,
    fontFamily: fonts.Bold,
    fontSize: 22,
    top: 2,
    textAlign: 'center',
  },
});

export default SettingsScreen;
