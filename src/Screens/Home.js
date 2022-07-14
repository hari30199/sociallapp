import {useIsFocused} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import fonts from '@constants/Fonts';
import colors from '@constants/Colors';
import images from '@constants/Images';
import SvgUri from 'react-native-svg-uri';
import Homecarousel from '@component/Homecarousel';
import Stats from '@component/Stats';

export default function Home() {
  const isFocused = useIsFocused();
  const names = isFocused ? 'some' : 'var';
  global.tabbuttonprops = names;
  // console.log('home', names);


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      {/* header  */}

      <View style={styles.header}>
        <View
          style={{
            width: '80%',
            height: 100,
            paddingLeft: 19,
            justifyContent: 'center',
          }}>
          <Text style={styles.username}>User Name</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontFamily: fonts.Medium, fontSize: 12}}>
              Teacher :{' '}
            </Text>
            <Text
              style={{
                fontFamily: fonts.Medium,
                color: colors.orange,
                fontSize: 12,
              }}>
              PJKKDE
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '20%',
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SvgUri source={images.Notification} />
        </View>
      </View>

      {/* posters */}

      <ScrollView
        style={{backgroundColor: colors.white}}
        contentContainerStyle={{alignItems: 'center', paddingBottom: 120}}>
        <Homecarousel />
        <Stats/>
        <View style={styles.poster}>
          <View style={styles.postercontent}>
            {/* posterheader  */}

            <View style={styles.posterheader}>
              <View style={{width: '22%', height: 80, paddingLeft: 10}}>
                <TouchableOpacity style={styles.profileimagetouch}>
                  <Image />
                </TouchableOpacity>
              </View>
              <View style={{width: '68%', height: 80, paddingLeft: 16}}>
                <TouchableOpacity>
                  <Text style={styles.postusername}>User Name</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      top: 10,
                    }}>
                    <SvgUri source={images.global} />
                    <Text
                      style={{fontFamily: fonts.Medium, color: colors.black}}>
                      {' '}
                      2m
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  width: '10%',
                  height: 80,
                  justifyContent: 'center',
                  top: 14,
                }}>
                <SvgUri
                  style={{height: 70, width: 40}}
                  source={images.postdetail}
                />
              </TouchableOpacity>
            </View>

            {/* poster description       */}
            <View style={styles.description}>
              <Text style={styles.textdes}>
                Create a welcome post that includes details about your business
                and why people should like your Page....
              </Text>
            </View>

            {/* poster assest */}

            <View style={styles.mainimage}></View>

            {/* posterbuttons */}
            <View style={styles.posterbuttons}>
              <TouchableOpacity style={styles.posterbutton}>
                <SvgUri source={images.like} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.posterbutton}>
                <SvgUri source={images.comments} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.posterbutton}>
                <SvgUri source={images.share} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.postercontent}>
            {/* posterheader  */}

            <View style={styles.posterheader}>
              <View style={{width: '22%', height: 80, paddingLeft: 10}}>
                <TouchableOpacity style={styles.profileimagetouch}>
                  <Image />
                </TouchableOpacity>
              </View>
              <View style={{width: '68%', height: 80, paddingLeft: 16}}>
                <TouchableOpacity>
                  <Text style={styles.postusername}>User Name</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      top: 10,
                    }}>
                    <SvgUri source={images.global} />
                    <Text
                      style={{fontFamily: fonts.Medium, color: colors.black}}>
                      {' '}
                      2m
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  width: '10%',
                  height: 80,
                  justifyContent: 'center',
                  top: 14,
                }}>
                <SvgUri
                  style={{height: 70, width: 40}}
                  source={images.postdetail}
                />
              </TouchableOpacity>
            </View>

            {/* poster description       */}
            <View style={styles.description}>
              <Text style={styles.textdes}>
                Create a welcome post that includes details about your business
                and why people should like your Page....
              </Text>
            </View>

            {/* poster assest */}

            <View style={styles.mainimage}></View>

            {/* posterbuttons */}
            <View style={styles.posterbuttons}>
              <TouchableOpacity style={styles.posterbutton}>
                <SvgUri source={images.like} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.posterbutton}>
                <SvgUri source={images.comments} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.posterbutton}>
                <SvgUri source={images.share} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.postercontent}>
            {/* posterheader  */}

            <View style={styles.posterheader}>
              <View style={{width: '22%', height: 80, paddingLeft: 10}}>
                <TouchableOpacity style={styles.profileimagetouch}>
                  <Image />
                </TouchableOpacity>
              </View>
              <View style={{width: '68%', height: 80, paddingLeft: 16}}>
                <TouchableOpacity>
                  <Text style={styles.postusername}>User Name</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      top: 10,
                    }}>
                    <SvgUri source={images.global} />
                    <Text
                      style={{fontFamily: fonts.Medium, color: colors.black}}>
                      {' '}
                      2m
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  width: '10%',
                  height: 80,
                  justifyContent: 'center',
                  top: 14,
                }}>
                <SvgUri
                  style={{height: 70, width: 40}}
                  source={images.postdetail}
                />
              </TouchableOpacity>
            </View>

            {/* poster description       */}
            <View style={styles.description}>
              <Text style={styles.textdes}>
                Create a welcome post that includes details about your business
                and why people should like your Page....
              </Text>
            </View>

            {/* poster assest */}

            <View style={styles.mainimage}></View>

            {/* posterbuttons */}
            <View style={styles.posterbuttons}>
              <TouchableOpacity style={styles.posterbutton}>
                <SvgUri source={images.like} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.posterbutton}>
                <SvgUri source={images.comments} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.posterbutton}>
                <SvgUri source={images.share} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
    width: '100%',
    flexDirection: 'row',
  },
  username: {
    fontFamily: fonts.Bold,
    fontSize: 26,
    color: colors.activecolor,
  },
  headercontent: {
    width: '20%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  postercontent: {
    width: '90%',
    height: 450,
    backgroundColor: colors.postbg,
    borderRadius: 10,
    margin: 10,
  },
  poster: {
    width: '100%',
    alignItems: 'center',
  },
  posterheader: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    // backgroundColor:'yellow',
    alignItems: 'center',
    paddingTop: 14,
  },
  profileimagetouch: {
    width: '100%',
    backgroundColor: colors.activecolor,
    height: 70,
    borderRadius: 80,
  },
  postusername: {
    fontFamily: fonts.Bold,
    color: colors.black,
    fontSize: 23,
    top: 6,
  },
  description: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textdes: {
    width: '90%',
    fontFamily: fonts.Medium,
    fontSize: 12,
    color: colors.black,
  },
  mainimage: {
    width: '100%',
    height: 240,
    backgroundColor: 'yellow',
    top: 10,
  },
  posterbuttons: {
    width: '100%',
    height: 60,
    top: 14,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  posterbutton: {
    width: '20%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
