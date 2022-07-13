import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import images from '@constants/Images';
import fonts from '@constants/Fonts';
import colors from '@constants/Colors';

export default function Usertype() {
  const [Usertype, setUsertype] = useState([]);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={style.headcontainer}>
        <Image
          style={{width: 350, height: 400}}
          source={images.usertype}></Image>
      </View>

      <View style={{flex: 3}}>
        <View style={style.subcontainer}>
          <Text style={style.heading}>You are a</Text>

          <TouchableOpacity
            style={[
              style.touchables,
              {
                backgroundColor:
                  Usertype != 'student' ? colors.white : colors.activecolor,
              },
            ]}
            onPress={() => {
              setUsertype('student'),
                navigation.navigate('Login', {type: 'student'});
            }}>
            <Text
              style={[
                style.text,
                {color: Usertype != 'student' ? colors.black : colors.white},
              ]}>
              Student
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              style.touchables,
              {
                backgroundColor:
                  Usertype == 'teacher' ? colors.activecolor : colors.white,
              },
            ]}
            onPress={() => {
              setUsertype('teacher'),
                navigation.navigate('Signin', {type: 'teacher'});
            }}>
            <Text
              style={[
                style.text,
                {color: Usertype == 'teacher' ? colors.white : colors.black},
              ]}>
              Teacher
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  subcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  headcontainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  heading: {
    fontFamily: fonts.Bold,
    color: colors.black,
    fontSize: 34,
    bottom: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.Bold,
  },
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
  },
});
