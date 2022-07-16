import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import fonts from '@constants/Fonts';
import colors from '@constants/Colors';
import images from '@constants/Images';
import SvgUri from 'react-native-svg-uri';
import BatchmodalGuest from '@component/BatchmodalGuest';

export default function Stats() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View
          style={{
            width: '100%',
            height: 100,
            paddingLeft: 19,
            justifyContent: 'center',
          }}>
          <Text style={styles.heading}>
            Stats
          </Text>
        </View>
      </View>

      {/* -----Modal----- */}

      <ScrollView style={{backgroundColor: colors.white}}>
        <View style={styles.contianer}>
          <View style={styles.centercontainer}>
            <View
              style={{
                width: '35%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                
                style={[
                  styles.touchables,
                  {backgroundColor: colors.skyblue1},
                ]}>
                    <Text style={styles.TouchableOpacitytext}>0</Text>
              </TouchableOpacity>
            </View>
            <View style={{width: '65%',justifyContent:'center'}}>
              <Text style={styles.h1}>Test Attempted</Text>
              <Text style={styles.h2}>No movements since last week</Text>
            </View>
          </View>
        </View>
        <View style={[styles.contianer, {flexDirection: 'row'}]}>
          <View style={[styles.coloum, {backgroundColor: colors.green}]}>
           
            <View
              style={{
                width: '100%',
                height: 98,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                
                style={[styles.touchables, {backgroundColor: colors.green1,width:83}]}>
                <Text style={styles.TouchableOpacitytext}>3</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.h3}>Assigments{'\n'}Submited</Text>
          </View>
          <View style={[styles.coloum, {backgroundColor: colors.pink}]}>
            <View
              style={{
                width: '100%',
                height: 108,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={[styles.touchables, {backgroundColor: colors.pink1,width:86}]}>
                <Text style={styles.TouchableOpacitytext}>2</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.h3}>Classes{'\n'}Attended</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
    width: '100%',
    flexDirection: 'row',
    marginTop:-20
  },
  heading: {
    fontFamily: fonts.Semibold,
    fontSize: 20,
    color: colors.black,
  },
  headercontent: {
    width: '20%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contianer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  centercontainer: {
    width: '90%',
    height: 120,
    backgroundColor: colors.skyblue,
    borderRadius: 10,
    flexDirection: 'row',
  },
  coloum: {
    width: '44%',
    height: 180,
    backgroundColor: colors.pink,
    borderRadius: 10,
    margin: 5,
  },
  title: {
    color: colors.grey,
    fontFamily: fonts.Semibold,
    fontSize: 18,
    textAlign: 'center',
  },
  touchables: {
    width:'60%',
    height:80,
    borderRadius: 100,
    justifyContent:'center',
    alignItems:'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flex: 1,
    paddingTop: 160,
    paddingBottom: 160,
    width: '100%',
    alignItems: 'center',
    paddingLeft: 10,
    justifyContent: 'center',
  },
  TouchableOpacitytext:{
    fontSize:36,
    fontFamily:fonts.Semibold,
    color:colors.black,
    borderBottomWidth:3,
    borderBottomColor:colors.black,
    // width:30
  },
  h1:{
    fontFamily:fonts.Semibold,
    fontSize:18,
    color:colors.black
  },
  h2:{
    fontFamily:fonts.Light,color:colors.black,fontSize:12,marginTop:6
  },
  h3:{
    textAlign:'center',top:10,fontFamily:fonts.Semibold,color:colors.black,fontSize:18
  }
});