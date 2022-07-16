import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {useNavigation,useIsFocused} from '@react-navigation/native';
import SvgUri from 'react-native-svg-uri';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Feather from 'react-native-vector-icons/Feather'


import fonts from '@constants/Fonts';
import colors from '@constants/Colors';
import images from '@constants/Images';

import StudentsInfo from '@component/StudentsInfo';
import Homework from '@component/Homework';
import ProfileBatches from '@component/ProfileBatches';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');


const Info = () => <StudentsInfo />;

const Batche = () => <ProfileBatches />;

const Homeworktab = () => <Homework />;

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
  Info: Info,
  second: Batche,
  seconds: Homeworktab,
});

export default function TabViewExample() {

  const isFocused = useIsFocused();
  const names = isFocused ? 'some' : 'var';
  global.tab = names;


  const navigation = useNavigation();
  // navigation.setOptions({ tabBarVisible: false })
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Info', title: 'Info'},
    {key: 'second', title: 'Batches'},
    {key: 'seconds', title: 'Homework'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      getTestID={({route}) => route.testID}
      indicatorStyle={{backgroundColor: 'orange'}}
      style={styles.tabbar}
      renderLabel={({route, focused}) => (
        <Text
          style={[
            styles.tabbarlabel,
            {color: focused ? colors.activecolor : colors.inactivecolor},
          ]}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{width: width, height: height * 0.33}}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={navigation.goBack}
              style={styles.headerbuttons}>
              <Image
                style={{width: 14, height: 24, left: 4, top: 4}}
                source={images.backicon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('SettingsScreen')}
              style={styles.headerbuttons}>
             <Feather name='settings'  size={22} color={colors.black} style={{top:10,right:10}}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profilecontainer}>
          <View style={styles.profileimage}></View>
          <TouchableOpacity style={{left:44,bottom:10}}>
          <Feather name='edit'  size={18} color={colors.black} style={{}}/>

          </TouchableOpacity>
         
          <Text
            style={{
              fontFamily: fonts.Semibold,
              color: colors.black,
              fontSize: 22,
            }}>
            User Name
          </Text>
        </View>
      </View>

      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.container}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    // backgroundColor:'white'
  },
  tabbar: {
    backgroundColor: 'white',
    shadowColor: 'white',
  },
  tabbarlabel: {
    fontFamily: fonts.Semibold,
    fontSize: 16,
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerbuttons: {
    width: 60,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilecontainer: {
    width: width,
    backgroundColor: colors.white,
    height: height * 0.266,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileimage: {
    width: width * 0.4,
    height: height * 0.18,
    backgroundColor: colors.activecolor,
    borderRadius: 90,
  },
});
