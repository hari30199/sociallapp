
import React, {useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,SafeAreaView} from 'react-native';
import CustomSwitch from '../components/custome';
import Overview from '@component/Overview';
import Studymaterial from '@component/Studymaterial';
import Liveclasses from '@component/Liveclasses';
import Tests from '@component/Tests';
import Fees from '@component/Fees';
import Notice from '@component/Notice';
import Homework from '@component/Homework';
import fonts from '@constants/Fonts';
import colors from '@constants/Colors';
import images from '@constants/Images';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation()
    const [BatchsTab, setBatchsTab] = useState(1);

    const onSelectSwitch = value => {
        setBatchsTab(value);
      };
      return (
<SafeAreaView style={{flex:1,backgroundColor:'white'}}>
<View style={{width:'100%',backgroundColor:'white',}} >
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
<CustomSwitch
  selectionMode={1}
  option1="Overview"
  option2="study Material"
  option3="Live Classes"
  option4="Fees"
  option5="Tests"
  option6="Notice"
  option7="Homework"
  onSelectSwitch={onSelectSwitch}
  />
</View>


{BatchsTab == 1 &&
<View style={{width:'100%',height:'auto'}}>
  <Overview/>
</View>
}
{BatchsTab == 2 &&
  <View style={{width:'100%',height:'auto'}}>
    <Studymaterial/>
  </View>
}
{BatchsTab == 3 &&
  <View style={{width:'100%',height:'auto',flex:1}}>
    <Liveclasses/>
  </View>
}
{BatchsTab == 4 &&
  <View style={{width:'100%',height:'auto'}}>
    <Fees/>
  </View>
}
{BatchsTab == 5 &&
  <View style={{width:'100%',height:'auto'}}>
    <Tests/>
  </View>
}
{BatchsTab == 6 &&
  <View style={{width:'100%',height:'auto'}}>
    <Notice/>
  </View>
}
{BatchsTab == 7 &&
  <View style={{backgroundColor:'white',flex:1}}>
    <Homework/>
  </View>
}


</SafeAreaView>
);
}

const styles = StyleSheet.create({
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
})