import React, {useContext, useState, useEffect} from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {AuthContext} from '../Users/Authcontext';

const LoginScreen = ({navigation, route}) => {
  const [name, setname] = useState(null);
  const [phone, setphone] = useState(null);
  const {isLoading, login} = useContext(AuthContext);
  const [errormsg, seterrormsg] = useState('');
  const [errorms, seterrorms] = useState('');
  const [erroremailmsg, seterroremailmsg] = useState('');
  const [errorpassmsg, seterrorpassmsg] = useState('');
  const [errorpassmatchmsg, seterrormatchpassmsg] = useState('');
  const emailmatch = 'hari';
  const passwordmatch = '9876543210';
  // const { type} = props.route.params;
  // console.log(route.params.type)

  // const submit = () => {
  //   if (email == null || password == null)
  //   return seterroremailmsg ('Enter your name '), seterrormatchpassmsg('Password must contain atleat 8 characters')
  //   // if (email == null )
  //   // return seterroremailmsg ('Enter your valid Email ')
  //   else if (emailmatch != 'hari')
  //   return seterrormsg ('Enter your  name ')
  //   // if (password == null)
  //   // return seterrormatchpassmsg('Password must contain atleat 8 characters')
  //   else if (passwordmatch != '9876543210')
  //   return seterrormatchpassmsg('Password must contain atleat 8 characters')
  //   else
  //   return navigation.navigate('Usertype')
  //   }

  const submit = () => {
    if (name == null || phone == null) return seterrorms('field is required');
  };

  return isLoading ? (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Loading...</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps={'always'}>
        <View style={styles.head}></View>

        <View style={styles.wrapper}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TextInput
              style={styles.input}
              value={name}
              placeholder="Enter name"
              onChangeText={text => setname(text)}
              maxLength={50}
            />
            <View style={{bottom: 6}}>
              <Text>
                {name == null ? (
                  <Text style={{color: 'red', textAlign: 'center', left: 10}}>
                    {errorms}
                  </Text>
                ) : (
                  <Text style={{height: 0}}></Text>
                )}
              </Text>
            </View>
            <TextInput
              style={styles.input}
              value={phone}
              placeholder="Enter Phone"
              onChangeText={text => setphone(text)}
              // secureTextEntry
              maxLength={25}
            />
            {route.params.type == 'student' && (
              <View>
                <TextInput
                  style={styles.input}
                  // value={password}
                  placeholder="Enter Teachercode"
                  // onChangeText={text => setPassword(text)}
                  // secureTextEntry
                  maxLength={25}
                />
                <TouchableOpacity>
                  <Text>dont have teacher code</Text>
                </TouchableOpacity>
              </View>
            )}
          </KeyboardAvoidingView>
          <View style={{bottom: 8}}>
            {/* <Text>{ passwordmatch.test(password)? (<Text></Text>):( <Text style={{color:'red',textAlign:'center',left:10,bottom:10}}>{errorpassmatchmsg}</Text>) }</Text> */}
          </View>
          <TouchableOpacity
            title="Login"
            onPress={() => navigation.navigate('OtpScreen')}>
            <Text style={styles.button}>Login </Text>
          </TouchableOpacity>

          <View style={styles.body}>
            <View style={styles.sectionContainer}></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    width: '80%',
    top: 50,
    left: 40,
    height: 570,
  },
  input: {
    width: '100%',
    borderRadius: 6,
    marginBottom: 12,
    height: 56,
    paddingLeft: 30,
    backgroundColor: 'white',
  },
  link: {
    color: 'black',
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 44,
    textAlign: 'center',
    borderRadius: 5,
    paddingTop: 12,
    fontWeight: 'bold',
    fontSize: 16,
    top: 20,
  },
  head: {
    backgroundColor: 'white',
    width: '100%',
    // height:200,
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
});

export default LoginScreen;
