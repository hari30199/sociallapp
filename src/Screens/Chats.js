import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import fonts from '@constants/Fonts';
import colors from '@constants/Colors';
import images from '@constants/Images';

const {width} = Dimensions.get('screen');

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                width: width * 0.8,
                height: 500,
                borderRadius: 15,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: width * 0.7,
                  height: 220,
                  backgroundColor: 'yellow',
                }}>
                <Image></Image>
              </View>
              <View
                style={{
                  width: width * 0.7,
                  height: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: fonts.Semibold,
                    fontSize: 22,
                    color: colors.black,
                  }}>
                  No batches found?
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    width: '70%',
                    fontFamily: fonts.Medium,
                    fontSize: 12,
                    color: colors.black,
                  }}>
                  You are not currently enrolled in any batches
                </Text>
              </View>
              <View
                style={{width: width * 0.7, height: 180, alignItems: 'center'}}>
                <TouchableOpacity
                  style={styles.touchables}
                  onPress={() => console.log('he')}>
                  <Text style={styles.touchablestext}>Invite</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchables}>
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
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
    // padding: 35,
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
  button: {
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
    height: 60,
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
});

export default App;
