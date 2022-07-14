// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   Modal,
// } from 'react-native';
// import fonts from '@constants/Fonts';
// import colors from '@constants/Colors';
// import images from '@constants/Images';
// import SvgUri from 'react-native-svg-uri';
// import BatchmodalGuest from '@component/BatchmodalGuest';

// export default function Batches() {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.header}>
//         <View
//           style={{
//             width: '100%',
//             height: 100,
//             paddingLeft: 19,
//             justifyContent: 'center',
//           }}>
//           <Text style={styles.heading}>
//             Check out these cool{'\n'}feature below!
//           </Text>
//         </View>
//       </View>

//       {/* -----Modal----- */}

//       <Modal animationType="slide" transparent={true} visible={modalVisible}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <BatchmodalGuest />
//           </View>
//         </View>
//       </Modal>

//       <ScrollView style={{backgroundColor: colors.white}}>
//         <View style={styles.contianer}>
//           <View style={styles.centercontainer}>
//             <View
//               style={{
//                 width: '60%',
//                 height: 140,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}>
//               <Text style={styles.title}>Live Classes</Text>
//               <TouchableOpacity
//                 onPress={() => setModalVisible(!modalVisible)}
//                 style={[
//                   styles.touchables,
//                   {backgroundColor: colors.skyblue1, top: 20},
//                 ]}>
//                 <SvgUri source={images.RightArrow} />
//               </TouchableOpacity>
//             </View>
//             <View style={{width: '37%', height: 160, top: 10}}>
//               <View
//                 style={{
//                   width: '100%',
//                   backgroundColor: colors.skyblue1,
//                   borderRadius: 10,
//                   height: 140,
//                   justifyContent: 'flex-end',
//                   alignItems: 'center',
//                   paddingBottom: 1,
//                 }}>
//                 {/* <SvgUri source={images.liveclass}/> */}
//               </View>
//             </View>
//           </View>
//         </View>
//         <View style={[styles.contianer, {flexDirection: 'row'}]}>
//           <View style={[styles.coloum, {backgroundColor: colors.green}]}>
//             <View
//               style={{
//                 width: '100%',
//                 height: 120,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 top: 8,
//               }}>
//               <SvgUri source={images.submithomework} />
//             </View>
//             <View
//               style={{
//                 width: '100%',
//                 height: 80,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <Text style={styles.title}>Submit{'\n'}Homework</Text>
//             </View>
//             <View
//               style={{
//                 width: '100%',
//                 height: 98,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <TouchableOpacity
//                 onPress={() => setModalVisible(!modalVisible)}
//                 style={[styles.touchables, {backgroundColor: colors.green1}]}>
//                 <SvgUri source={images.RightArrow} />
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={[styles.coloum, {backgroundColor: colors.pink}]}>
//             <View
//               style={{
//                 width: '100%',
//                 height: 120,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 top: 8,
//               }}>
//               <SvgUri source={images.Studymaterial} />
//             </View>
//             <View
//               style={{
//                 width: '100%',
//                 height: 80,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <Text style={styles.title}>Study{'\n'}Material</Text>
//             </View>
//             <View
//               style={{
//                 width: '100%',
//                 height: 98,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <TouchableOpacity
//                 onPress={() => setModalVisible(!modalVisible)}
//                 style={[styles.touchables, {backgroundColor: colors.pink1}]}>
//                 <SvgUri source={images.RightArrow} />
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: colors.white,
//     width: '100%',
//     flexDirection: 'row',
//   },
//   heading: {
//     fontFamily: fonts.Semibold,
//     fontSize: 26,
//     color: colors.activecolor,
//   },
//   headercontent: {
//     width: '20%',
//     height: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   contianer: {
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   centercontainer: {
//     width: '90%',
//     height: 160,
//     backgroundColor: colors.skyblue,
//     borderRadius: 20,
//     flexDirection: 'row',
//   },
//   coloum: {
//     width: '44%',
//     height: 300,
//     backgroundColor: colors.pink,
//     borderRadius: 20,
//     margin: 5,
//   },
//   title: {
//     color: colors.grey,
//     fontFamily: fonts.Semibold,
//     fontSize: 18,
//     textAlign: 'center',
//   },
//   touchables: {
//     padding: 20,
//     borderRadius: 50,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     flex: 1,
//     paddingTop: 160,
//     paddingBottom: 160,
//     width: '100%',
//     alignItems: 'center',
//     paddingLeft: 10,
//     justifyContent: 'center',
//   },
// });
import { SafeAreaView, StyleSheet, Text, View,TextInput,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import fonts from '@constants/Fonts'
import colors from '@constants/Colors'
import images from '@constants/Images'
import SvgUri from 'react-native-svg-uri';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native'


const Batches = () => {
  const navigation = useNavigation()
  return (
   <SafeAreaView style={{flex:1,backgroundColor:colors.white,alignItems:'center'}}>
   <View style={styles.header}> 
    <Text style={styles.textHeader}>Batches</Text>
   </View>
   <View style={styles.searchBar}> 
   <TextInput
          style={styles.input}
          placeholderTextColor='#b2d0ee'
          placeholder="search"
        />
   <SvgUri  source={images.SearchIcon} />
   </View>
   <TouchableOpacity onPress={()=>navigation.navigate('Batchesdetail')}
              style={styles.cardContent}>
                <LinearGradient
          colors={['#000428', '#004788' ]}
          style={styles.linearGradient}
        >
        <View style={{left:5}}>          
        <Image source={images.Batch1} style={{width:130,height:100,borderRadius:10}}></Image>
             </View>
             <View style={{left:10,padding:15}}>
                <Text style={styles.cardHeader}>NSchool Academy</Text>
                <Text style={styles.cardTitle}>science</Text>
             </View>
        </LinearGradient>         
 </TouchableOpacity>
 <TouchableOpacity style={styles.cardContent} onPress={()=>navigation.navigate('Batchesdetail')}>
                <LinearGradient
          colors={['#000428', '#004788' ]}
          style={styles.linearGradient}
        >
        <View style={{left:5}}>          
        <Image source={images.Batch2} style={{width:130,height:100,borderRadius:10}}></Image>
             </View>
             <View style={{left:10,padding:15}}>
                <Text style={styles.cardHeader}>NSchool Academy</Text>
                <Text style={styles.cardTitle}>science</Text>
             </View>
        </LinearGradient>         
 </TouchableOpacity>
 
   </SafeAreaView>
  )
}

export default Batches

const styles = StyleSheet.create({
    header:{
        width:'90%',  
    },
    textHeader:{
        fontFamily:fonts.Bold,
        fontSize:26,
        color:"#004382",
        padding:10          
    },
    searchBar:{
        flexDirection:'row',
        marginTop:20,
        width:'90%', 
        backgroundColor:"#e4f0fc",        
        alignItems:'center',
        borderRadius:20,  
    },
    input: {           
        paddingLeft:30,
        fontSize:16,
        width:'90%',
        bottom:0,       
      },     
      cardContent:{
        width:"90%",                      
        marginTop:27,                                           
        top: 8,       
      },
      linearGradient: {
        flexDirection:'row',
        alignItems: 'center',        
        borderRadius: 5,
        height:115,
        borderRadius:10   
      },
      cardHeader:{
        fontSize:18,
        fontFamily:fonts.Bold,
        color:colors.white,
        padding:2
    },
      cardTitle:{
        fontSize:16,
        fontFamily:fonts.Bold,
        color:colors.white,
        padding:2
    },
})