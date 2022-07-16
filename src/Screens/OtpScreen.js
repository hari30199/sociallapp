import {
  Animated,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import fonts from '@constants/Fonts';
import colors from '@constants/Colors';
import images from '@constants/Images';
import {useNavigation} from '@react-navigation/native';
import Svg, {Circle} from 'react-native-svg-uri';

const CELL_SIZE = 55;
const CELL_BORDER_RADIUS = 8;
const DEFAULT_CELL_BG_COLOR = '#fff';
const NOT_EMPTY_CELL_BG_COLOR = '#3557b7';
const ACTIVE_CELL_BG_COLOR = '#f7fafe';

const {Value, Text: AnimatedText} = Animated;

const CELL_COUNT = 4;
const source = {
  uri: 'https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png',
};

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({hasValue, index, isFocused}) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 1 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

const AnimatedExample = () => {
  const [value, setValue] = useState('');
  const navigation = useNavigation();
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({index, symbol, isFocused}) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    setTimeout(() => {
      animateCell({hasValue, index, isFocused});
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', top: 26}}>
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

          <Text
            style={{
              fontSize: 24,
              fontFamily: fonts.Bold,
              left: 24,
              color: colors.activecolor,
              top: 6,
            }}>
            OTP Verification
          </Text>
        </View>
      </View>
      <View style={{flex: 6, justifyContent: 'center', alignItems: 'center'}}>
       <Image  source={images.Otpscreen}/>
      </View>
      <View style={{flex: 6, alignItems: 'center'}}>
        <Text
          style={{fontSize: 22, fontFamily: fonts.Medium, color: colors.black}}>
          Verification Code
        </Text>
        <Text
          style={{
            textAlign: 'center',
            top: 20,
            fontSize: 12,
            fontFamily: fonts.Medium,
            color: colors.grey,
          }}>
          We have to see the code verification to{'\n'}Your Mobile Number
        </Text>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFiledRoot}
          keyboardType="number-pad"
          renderCell={renderCell}
        />
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>

        
        <Text
          style={{
            top: 40,
            fontSize: 12,
            fontFamily: fonts.Medium,
            color: colors.black,
          }}>
          +91 90088 37734
        </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.touchables}
          onPress={() => navigation.navigate('tab')}>
          <Text style={styles.text}>Send again</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  codeFiledRoot: {
    height: CELL_SIZE,
    marginTop: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: '#3759b8',
    backgroundColor: '#fff',
    textDecorationLine: 'underline',

    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },

  // =======================

  root: {
    minHeight: 800,
    padding: 20,
  },
  title: {
    paddingTop: 50,
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 40,
  },
  icon: {
    width: 217 / 2.4,
    height: 158 / 2.4,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subTitle: {
    paddingTop: 30,
    color: '#000',
    textAlign: 'center',
  },
  nextButton: {
    marginTop: 30,
    borderRadius: 60,
    height: 60,
    backgroundColor: '#3557b7',
    justifyContent: 'center',
    minWidth: 300,
    marginBottom: 100,
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
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
});

export default AnimatedExample;
