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

import fonts from '@constants/Fonts';
import colors from '@constants/Colors';
import images from '@constants/Images';

import Homework from '@component/Homework';
import OverView from '@component/Overview';
import Fees from '@component/Fees';
import Tests from '@component/Tests';
import Notice from '@component/Notice';
import Studymaterial from '@component/Studymaterial';
import Liveclasses from '@component/Liveclasses';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');


const Info = () => <OverView />;

const Batche = () => <Studymaterial />;

const Homeworktab = () => <Liveclasses />;

const fees = () => <Fees/>;

const test = () => <Tests />;

const notice = () => <Notice />;

const homework = () => <Homework/>;

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
  Info: Info,
  second: Batche,
  seconds: Homeworktab,
  fees : fees,
  test : test,
  notice : notice,
  homework : homework,
});

export default function Batchesdetail() {

  const isFocused = useIsFocused();
  const names = isFocused ? 'some' : 'var';
  global.tab = names;


  const navigation = useNavigation();
  // navigation.setOptions({ tabBarVisible: false })
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Info', title: 'Overview'},
    {key: 'second', title: 'Study Material'},
    {key: 'seconds', title: 'Live Classes'},
    {key: 'fees', title: 'Fees'},
    {key: 'test', title: 'Tests'},
    {key: 'notice', title: 'Notice'},
    {key: 'homework', title: 'Homework'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      getTestID={({route}) => route.testID}
      indicatorStyle={{backgroundColor: 'white'}}
      style={styles.tabbar}
      scrollEnabled={true}
      renderLabel={({route, focused}) => (
        <Text
          style={[
            styles.tabbarlabel,
            {color: focused ? colors.activecolor : colors.inactivecolor,
              borderBottomWidth: !focused ? 0 : 2,
              borderBottomColor:focused ? colors.orange : colors.inactivecolor},

          ]}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'white'}}>
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
                }}>
                Nschool Academy
              </Text>
              <Text
                style={{
                  fontFamily: fonts.Medium,
                  color: colors.grey,
                  fontSize: 18,
                }}>
                Science Class
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
        scrollEnabled={true}
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
    width:width * 0.88,
    alignSelf:'center'
  },
  tabbarlabel: {
    fontFamily: fonts.Semibold,
    fontSize: 16,

  },
  head: {
    backgroundColor: 'white',
    width: '100%',
    height: 160,
  },
  backbutn: {
    backgroundColor: 'white',
    width: '100%',
    top: 10,
  },
});
