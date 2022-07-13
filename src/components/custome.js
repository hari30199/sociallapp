import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import fonts from '@constants/Fonts';
import colors from '@constants/Colors';

export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
  onSelectSwitch,
}) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = value => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => updateSwitchData(1)}>
          <Text
            style={[
              styles.text,
              {
                color:
                  getSelectionMode == 1
                    ? colors.activecolor
                    : colors.inactivecolor,
                borderBottomColor:
                  getSelectionMode == 1 ? colors.orange : colors.white,
              },
            ]}>
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updateSwitchData(2)}>
          <Text
            style={[
              styles.text,
              {
                color:
                  getSelectionMode == 2
                    ? colors.activecolor
                    : colors.inactivecolor,
                borderBottomColor:
                  getSelectionMode == 2 ? colors.orange : colors.white,
              },
            ]}>
            {option2}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updateSwitchData(3)}>
          <Text
            style={[
              styles.text,
              {
                color:
                  getSelectionMode == 3
                    ? colors.activecolor
                    : colors.inactivecolor,
                borderBottomColor:
                  getSelectionMode == 3 ? colors.orange : colors.white,
              },
            ]}>
            {option3}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updateSwitchData(4)}>
          <Text
            style={[
              styles.text,
              {
                color:
                  getSelectionMode == 4
                    ? colors.activecolor
                    : colors.inactivecolor,
                borderBottomColor:
                  getSelectionMode == 4 ? colors.orange : colors.white,
              },
            ]}>
            {option4}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updateSwitchData(5)}>
          <Text
            style={[
              styles.text,
              {
                color:
                  getSelectionMode == 5
                    ? colors.activecolor
                    : colors.inactivecolor,
                borderBottomColor:
                  getSelectionMode == 5 ? colors.orange : colors.white,
              },
            ]}>
            {option5}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updateSwitchData(6)}>
          <Text
            style={[
              styles.text,
              {
                color:
                  getSelectionMode == 6
                    ? colors.activecolor
                    : colors.inactivecolor,
                borderBottomColor:
                  getSelectionMode == 6 ? colors.orange : colors.white,
              },
            ]}>
            {option6}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updateSwitchData(7)}>
          <Text
            style={[
              styles.text,
              {
                color:
                  getSelectionMode == 7
                    ? colors.activecolor
                    : colors.inactivecolor,
                borderBottomColor:
                  getSelectionMode == 7 ? colors.orange : colors.white,
              },
            ]}>
            {option7}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '94%',
    backgroundColor: 'white',
    justifyContent: 'center',
    height: 70,
    paddingLeft: 26,
  },
  text: {
    alignSelf: 'center',
    marginRight: 40,
    fontFamily: fonts.Semibold,
    borderBottomWidth: 2,
    borderBottomColor: 'orange',
    fontSize: 16,
  },
});
