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
const {width} = Dimensions.get('screen');

export default function Hometabbarmodal({bgColor}) {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
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
                <Image source={images.Nobacth} />
              </View>
              <View style={styles.subcontainer}>
                <Text style={styles.text1}>No batches found?</Text>
                <Text style={styles.text2}>
                  You are not currently enrolled in any batches
                </Text>
              </View>
              <View style={{width: width * 0.7, alignItems: 'center'}}>
                <TouchableOpacity
                  style={styles.touchables}
                  onPress={() => console.log('he')}>
                  <Text style={styles.touchablestext}>Invite</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchables}
                  onPress={() => {
                    navigation.navigate('Batches'),
                      setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.touchablestext}>Explore feature</Text>
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
    alignItems: 'center',
  },
  text1: {
    fontFamily: fonts.Semibold,
    fontSize: 22,
    color: colors.black,
  },
  text2: {
    textAlign: 'center',
    width: '70%',
    fontFamily: fonts.Medium,
    fontSize: 12,
    color: colors.black,
  },
});
