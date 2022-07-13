import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import colors from '@constants/Colors';
import SvgUri from 'react-native-svg-uri';
import images from '@constants/Images';
import fonts from '@constants/Fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export default function StudentsInfo() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 75}}>
        <View style={styles.subcontainer}>
          {/* ----------basicinfo----- */}

          <View style={styles.basicinfo}>
            <Text
              style={{
                fontFamily: fonts.Medium,
                fontSize: 16,
                color: colors.black,
              }}>
              Basic Information
            </Text>
            <TouchableOpacity>
              <SvgUri source={images.editicon} />
            </TouchableOpacity>
          </View>
          <View style={{width: width * 0.8, height: height * 0.45}}>
            <View style={styles.textinputcontainer}>
              <Image
                source={images.user}
                style={{width: 16, height: 18, top: 22}}></Image>
              <TextInput
                style={styles.textfield}
                placeholder="Student Name"
                // value={email}
                // onChangeText={text => setEmail(text)}
              ></TextInput>
            </View>
            <View style={styles.textinputcontainer}>
              <Image
                source={images.call}
                style={{width: 18, height: 18, top: 22}}></Image>
              <TextInput
                style={styles.textfield}
                placeholder="Phone Number"
                // value={email}
                // onChangeText={text => setEmail(text)}
              ></TextInput>
            </View>
            <View style={styles.textinputcontainer}>
              <SvgUri
                source={images.mail}
                style={{width: 16, height: 18, top: 26}}></SvgUri>
              <TextInput
                style={styles.textfield}
                placeholder="Emailid@gmail.com"
                // value={email}
                // onChangeText={text => setEmail(text)}
              ></TextInput>
            </View>
            <View style={styles.textinputcontainer}>
              <SvgUri
                source={images.rollno}
                style={{width: 16, height: 18, top: 26}}
              />
              <TextInput
                style={styles.textfield}
                placeholder="Roll Number"
                // value={email}
                // onChangeText={text => setEmail(text)}
              ></TextInput>
            </View>
            <View style={styles.textinputcontainer}>
              <SvgUri
                source={images.datepicker}
                style={{width: 16, height: 18, top: 26}}
              />
              <TextInput
                style={styles.textfield}
                placeholder="Date of Join"
                // value={email}
                // onChangeText={text => setEmail(text)}
              ></TextInput>
            </View>
          </View>
        </View>
        <View style={[styles.subcontainer, {height: height * 0.4}]}>
          <View style={styles.basicinfo}>
            <Text
              style={{
                fontFamily: fonts.Medium,
                fontSize: 16,
                color: colors.black,
              }}>
              Parent’s Information
            </Text>
            <TouchableOpacity>
              <SvgUri source={images.editicon} />
            </TouchableOpacity>
          </View>
          <View style={{width: width * 0.8, height: height * 0.45}}>
            <View style={styles.textinputcontainer}>
              <Image
                source={images.user}
                style={{width: 16, height: 18, top: 22}}></Image>
              <TextInput
                style={styles.textfield}
                placeholder="Student Name"
                // value={email}
                // onChangeText={text => setEmail(text)}
              ></TextInput>
            </View>
            <View style={styles.textinputcontainer}>
              <Image
                source={images.call}
                style={{width: 18, height: 18, top: 22}}
              />
              <TextInput
                style={styles.textfield}
                placeholder="Phone Number"
                // value={email}
                // onChangeText={text => setEmail(text)}
              ></TextInput>
            </View>
            <View style={styles.textinputcontainer}>
              <SvgUri
                source={images.mail}
                style={{width: 16, height: 18, top: 26}}
              />
              <TextInput
                style={styles.textfield}
                placeholder="Emailid@gmail.com"
                // value={email}
                // onChangeText={text => setEmail(text)}
              ></TextInput>
            </View>
            <View style={styles.textinputcontainer}>
              <SvgUri
                source={images.address}
                style={{width: 16, height: 18, top: 22}}
              />
              <TextInput
                style={styles.textfield}
                placeholder="Address"
                // value={email}
                // onChangeText={text => setEmail(text)}
              ></TextInput>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // paddingBottom:50
  },
  subcontainer: {
    width: width * 0.9,
    height: height * 0.5,
    backgroundColor: colors.postbg,
    marginTop: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  textinputcontainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    width: '90%',
    borderBottomColor: colors.textinput,
    marginTop: 20,
  },
  textfield: {
    width: width,
    top: 10,
    left: 16,
  },
  basicinfo: {
    width: width * 0.8,
    height: height * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 15,
  },
});
