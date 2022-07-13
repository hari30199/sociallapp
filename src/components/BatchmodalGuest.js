import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  Image,
} from 'react-native';
import fonts from '@constants/Fonts';
import colors from '@constants/Colors';
import images from '@constants/Images';
import {SvgUri} from 'react-native-svg';

const DATA = [
  {
    id: require('../assests/batch.png'),
    title: 'The classroom experience, From the comfort of your home!',
  },
  {
    id: require('../assests/batch.png'),
    title: 'Raise your hand to ask doubt and get them solved instantly',
  },
  {
    id: require('../assests/batch.png'),
    title: 'Get recordings of the classess for your reference',
  },
];

const BatchmodalGuest = () => {
  const [active, setactive] = useState(0);

  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      return setactive(slide);
    }
  };
  return (
    <View style={styles.centeredView}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={change}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {DATA.map((data, index) => (
          <View style={styles.item}>
            <View style={{width: '100%', height: 300}}>
              <Image source={require('../assests/batch.png')} />
            </View>
            <View>
              <Text style={styles.text} key={index}>
                {data.title}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {DATA.map((i, k) => (
          <View
            key={k}
            style={[
              styles.paginationDot,
              {
                backgroundColor:
                  k == active ? colors.activecolor : colors.white,
              },
            ]}></View>
        ))}
      </View>
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
    flex: 1,
    paddingTop: 160,
    paddingBottom: 160,
    width: '100%',
    alignItems: 'center',
    paddingLeft: 10,
    justifyContent: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
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
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: colors.white,
    padding: 30,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    width: 340,
  },
  text: {
    fontSize: 15,
    fontFamily: fonts.Medium,
    color: colors.black,
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
  },
  paginationDot: {
    width: '5%',
    height: 6,
    margin: 3,
    borderRadius: 10,
  },
});

export default BatchmodalGuest;
