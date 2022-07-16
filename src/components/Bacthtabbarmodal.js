import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
  Text,
  Pressable,
  Dimensions,
  Image,
} from 'react-native';
import Tabbuttonsvg from '@component/Tabbuttonsvg';
import colors from '@constants/Colors';
import SvgUri from 'react-native-svg-uri';
import images from '@constants/Images';
import fonts from '@constants/Fonts';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather'
import {TextInput} from 'react-native-gesture-handler';
const {width} = Dimensions.get('screen');

export default function Batchtabbarmodal({bgColor}) {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [code, setcode] = useState('');
  const [errcode, seterrcode] = useState('');

  const validation = () => {
    if (code == '') return seterrcode('Field is required');
  };

  return (
    <View style={styles.container} pointerEvents="box-none">
      <Tabbuttonsvg color={bgColor} style={styles.background} />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                width: width * 0.65,
                height: 400,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <View style={styles.subcontainer}>
                <Text style={styles.text1}>Enter the{'\n'}Teacher Code</Text>
                <Text style={styles.text2}>
                  If you have a teacher code please enter below!
                </Text>
              </View>
              <View style={styles.subcontainer}>
                <View style={styles.textinputcontainer}>
                  <TouchableOpacity>
                    <Image
                      source={images.Qrcode}
                      style={{width: 18, height: 18, top: 22}}></Image>
                  </TouchableOpacity>

                  <TextInput
                    style={styles.textfield}
                    placeholder="Enter Teacher code"
                    value={code}
                    onChangeText={text => setcode(text)}></TextInput>
                </View>
                <Text>
                  {code == '' ? (
                    <Text style={{color: 'red', textAlign: 'center', left: 10}}>
                      {errcode}
                    </Text>
                  ) : (
                    <Text></Text>
                  )}
                </Text>
              </View>
              <View style={{width: width * 0.7, alignItems: 'center'}}>
                <TouchableOpacity
                  style={[styles.touchables, {backgroundColor: colors.orange}]}
                  onPress={() => validation()}>
                  <Text style={[styles.touchablestext, {color: colors.white}]}>
                    Save
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchables}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.touchablestext}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Feather name='plus'  color={colors.white} size={22}/>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 88,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -40.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 66,
    height: 66,
    borderRadius: 37,
    backgroundColor: colors.activecolor,
  },
  buttonIcon: {
    fontSize: 16,
    color: '#004382',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttons: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  touchables: {
    width: width * 0.6,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.3,
    borderColor: colors.grey,
    marginTop: 20,
  },
  touchablestext: {
    fontSize: 16,
    fontFamily: fonts.Bold,
    color: colors.black,
  },
  subcontainer: {
    width: width * 0.7,
    justifyContent: 'center',
    // alignItems:'center'
  },
  text1: {
    fontFamily: fonts.Semibold,
    fontSize: 22,
    color: colors.black,
    textAlign: 'center',
  },
  text2: {
    textAlign: 'center',
    width: '80%',
    fontFamily: fonts.Medium,
    fontSize: 12,
    color: colors.black,
    top: 10,
    alignSelf: 'center',
  },
  textinputcontainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    width: '100%',
    borderBottomColor: colors.textinput,
    marginTop: 18,
  },
  textfield: {
    top: 10,
    left: 16,
  },
});
