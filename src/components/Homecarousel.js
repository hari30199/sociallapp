import * as React from 'react';
import {
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  Animated,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {
  State,
  FlingGestureHandler,
  Directions,
} from 'react-native-gesture-handler';
const {width} = Dimensions.get('screen');

const DATA = [
  {
    title: 'Afro vibes',
    location: 'Mumbai, India',
    date: 'Nov 17th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/07/Afro-vibes-flyer-template.jpg',
  },
  {
    title: 'Jungle Party',
    location: 'Unknown',
    date: 'Sept 3rd, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2019/11/Jungle-Party-Flyer-Template-1.jpg',
  },
  {
    title: '4th Of July',
    location: 'New York, USA',
    date: 'Oct 11th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/4th-Of-July-Invitation.jpg',
  },
  {
    title: 'Summer festival',
    location: 'Bucharest, Romania',
    date: 'Aug 17th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/07/Summer-Music-Festival-Poster.jpg',
  },
  {
    title: 'BBQ with friends',
    location: 'Prague, Czech Republic',
    date: 'Sept 11th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/BBQ-Flyer-Psd-Template.jpg',
  },
  {
    title: 'Festival music',
    location: 'Berlin, Germany',
    date: 'Apr 21th, 2021',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/Festival-Music-PSD-Template.jpg',
  },
  {
    title: 'Beach House',
    location: 'Liboa, Portugal',
    date: 'Aug 12th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/Summer-Beach-House-Flyer.jpg',
  },
];

const OVERFLOW_HEIGHT = 0;
const SPACING = 18;
const VISIBLE_ITEMS = 2;
const ITEM_WIDTH = width * 0.66;
const ITEM_HEIGHT = ITEM_WIDTH * 1;

const OverflowItems = ({scrollX, data}) => {
  const translateY = scrollX.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [OVERFLOW_HEIGHT, 0, -OVERFLOW_HEIGHT],
  });
  return (
    <View style={{height: OVERFLOW_HEIGHT, overflow: 'hidden'}}>
      <Animated.View style={{transform: [{translateY}]}}>
        {data.map((item, index) => {
          return (
            <Animated.View key={index} style={styles.itemContainer}>
              {/* <Text style={[styles.title]} numberOfLines={1}>
                 {item.title}
               </Text> */}
              <View style={styles.itemContainerRow}>
                {/* <Text style={[styles.location]}>
                   <EvilIcons
                     name='location'
                     size={16}
                     color='black'
                     style={{ marginRight: 5 }}
                   />
                   {item.location}
                 </Text> */}
                {/* <Text style={[styles.date]}>{item.date}</Text> */}
              </View>
            </Animated.View>
          );
        })}
      </Animated.View>
    </View>
  );
};

function Pagination({index, data}) {
  return (
    <View style={styles.pagination} pointerEvents="none">
      {data.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              index === i
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
        );
      })}
    </View>
  );
}

export default function Homecarousel() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = React.useState(0);
  const [data, setData] = React.useState(DATA);

  const setAnimatedIndex = React.useCallback(i => {
    setIndex(i);
    scrollX.setValue(i);
  }, []);

  // interconnected animations aka reactive animations :D
  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollX,
      useNativeDriver: true,
    }).start();
  });

  //  React.useEffect(() => {
  //    if (index === data.length - VISIBLE_ITEMS - 2) {
  //      console.log('fetch more')
  //      const newData = [...data, ...data];

  //      setData(newData);
  //    }
  //  }, [index]);

  return (
    <FlingGestureHandler
      direction={Directions.LEFT}
      onHandlerStateChange={e => {
        if (e.nativeEvent.state === State.END) {
          if (index === data.length - 1) {
            setAnimatedIndex(0);
            return;
          }
          setAnimatedIndex(index + 1);
        }
      }}>
      <FlingGestureHandler
        direction={Directions.RIGHT}
        onHandlerStateChange={e => {
          if (e.nativeEvent.state === State.END) {
            if (index === 0) {
              //  setAnimatedIndex(data.length - 1)
              return;
            }
            setAnimatedIndex(index - 1);
          }
        }}>
        <SafeAreaView style={styles.container}>
          {/* <StatusBar hidden /> */}
          <OverflowItems scrollX={scrollXAnimated} data={data} />
          <>
            <FlatList
              data={data}
              keyExtractor={(_, index) => String(index)}
              scrollEnabled={false}
              inverted
              pagingEnabled={true}
              renderToHardwareTextureAndroid
              removeClippedSubviews={false}
              contentContainerStyle={{
                flex: 1,
                justifyContent: 'center',
                padding: SPACING * 1,
                //  flexDirection:'row'
              }}
              CellRendererComponent={({children, index, style, ...props}) => {
                const cellStyle = [
                  style,

                  // I want each item to have a higher zIndex than the previous one,
                  // in reversed order due to the FlatList being inverted
                  {zIndex: data.length - index},
                ];

                // OverflowableView for Android...
                return (
                  <View style={cellStyle} index={index} {...props}>
                    {children}
                  </View>
                );
              }}
              renderItem={({item, index}) => {
                const inputRange = [index - 1, index, index + 1];
                const translateX = scrollXAnimated.interpolate({
                  inputRange,
                  outputRange: [120, 1, -20],
                });
                const opacity = scrollXAnimated.interpolate({
                  inputRange,
                  outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
                });
                const scale = scrollXAnimated.interpolate({
                  inputRange,
                  outputRange: [0.8, 1, 1.4],
                });
                return (
                  <Animated.View
                    style={{
                      position: 'absolute',
                      width: ITEM_WIDTH,
                      top: -ITEM_HEIGHT / 2,
                      borderRadius: 10,
                      overflow: 'hidden',
                      transform: [{translateX}, {scale}],
                      opacity,
                    }}>
                    <Image
                      source={{uri: item.poster}}
                      style={{width: ITEM_WIDTH, height: ITEM_HEIGHT}}
                    />

                    {/* <Text>hai</Text> */}
                  </Animated.View>
                );
              }}
            />
            <View style={{flexBasis: 'auto', backgroundColor: 'red'}}>
              {/* <Pagination index={index} data={data} ></Pagination> */}
              {/* <Text>hi</Text> */}
            </View>
          </>
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -1,
  },
  location: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
  },
  itemContainer: {
    height: OVERFLOW_HEIGHT,
    padding: SPACING,
  },
  itemContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paginationDot: {
    width: 40,
    height: 10,
    borderRadius: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginHorizontal: 1,
  },
  paginationDotActive: {backgroundColor: 'lightblue'},
  paginationDotInactive: {backgroundColor: 'gray'},
});
