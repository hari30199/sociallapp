import React, {useContext, useState, useEffect} from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import fonts from '@constants/Fonts';
import colors from '@constants/Colors';
import images from '@constants/Images';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RegisterScreen = ({navigation, route}) => {
  const [email, setEmail] = useState('');
  const [erroremailmsg, seterroremailmsg] = useState('');
  const emailmatch = /^[a-zA-Z ]{3,30}$/;

  const submit = () => {
    if (email == '') return seterroremailmsg('Field is required');
    else return navigation.navigate('OtpScreen');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <View style={styles.head}>
            <View style={styles.backbutn}>
              <TouchableOpacity
                onPress={navigation.goBack}
                style={{
                  width: 60,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{width: 14, height: 24, left: 4, top: 4}}
                  source={images.backicon}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{justifyContent: 'center', alignItems: 'center', top: 30}}>
              <Text
                style={{
                  fontFamily: fonts.Bold,
                  color: colors.activecolor,
                  fontSize: 34,
                  textAlign: 'center',
                }}>
                Do you go to{'\n'}tutions or coaching?
              </Text>
              <Text
                style={{
                  fontFamily: fonts.Medium,
                  color: colors.grey,
                  fontSize: 16,
                  textAlign: 'center',
                }}>
                what’s the name of your{'\n'}coaching center / titution classes?
              </Text>
            </View>
          </View>

          <View style={styles.wrapper}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <View style={styles.textinputcontainer}>
                <Image
                  source={images.institute}
                  style={{width: 20, height: 18, top: 22}}></Image>
                <TextInput
                  style={styles.textfield}
                  placeholder="Enter Your Name"
                  value={email}
                  onChangeText={text => setEmail(text)}></TextInput>
              </View>
              <Text>
                {!emailmatch.test(email) ? (
                  <Text style={{color: 'red', textAlign: 'center', left: 10}}>
                    {erroremailmsg}
                  </Text>
                ) : (
                  <Text style={{height: 0}}></Text>
                )}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('OtpScreen')}>
                <Text
                  style={{
                    fontFamily: fonts.Medium,
                    fontSize: 12,
                    color: colors.activecolor,
                    top: 16,
                  }}>
                  I Don’t study in any coaching
                </Text>
              </TouchableOpacity>
              <View style={{alignItems: 'center', top: 260}}>
                <View style={{top: 10, alignItems: 'center'}}>
                  <TouchableOpacity
                    style={styles.touchables}
                    onPress={() => submit()}>
                    <Text style={styles.text}>Next</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    width: '80%',
    top: 80,
    height: 580,
    backgroundColor: colors.white,
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 6,
    marginBottom: 6,
    height: 56,
    paddingLeft: 30,
  },
  link: {
    color: 'orange',
  },
  button: {
    backgroundColor: 'orange',
    color: 'white',
    height: 44,
    textAlign: 'center',
    borderRadius: 5,
    paddingTop: 12,
    fontWeight: 'bold',
    fontSize: 16,
  },
  head: {
    backgroundColor: 'white',
    width: '100%',
    height: 200,
  },
  backbutn: {
    backgroundColor: 'white',
    width: '100%',
    top: 10,
  },
  login: {
    top: 80,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    left: 16,
    fontFamily: 'Segoe UI',
  },
  log: {
    top: 90,
    left: 16,
  },
  content: {
    width: '100%',
    height: 400,
    alignItems: 'center',
  },
  bottomView: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    bottom: -20,
  },
  headcontainer: {
    flex: 3,
    paddingTop: 40,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  bottomcontainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  inputcontainer: {
    flex: 5,
    paddingLeft: 40,
    backgroundColor: colors.white,
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
  text: {
    fontSize: 16,
    fontFamily: fonts.Bold,
    color: colors.white,
  },
  bottomcontent: {
    flexDirection: 'row',
    top: 14,
  },
  textinputcontainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    width: '90%',
    borderBottomColor: colors.textinput,
    marginTop: 18,
  },
  textfield: {
    top: 10,
    left: 16,
  },
});

export default RegisterScreen;
