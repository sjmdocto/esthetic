import React from 'react';
import {View, FlatList, Text, StyleSheet, Dimensions} from 'react-native';

/*
NOTE: If all the item tiles fit on screen,
the grid does not scroll on Android.
Basically, scrolling capability only works
if it's actually needed on Android.
*/
const SCREENWIDTH = Dimensions.get('window').width;

// "useEffect() tells your component to do something after every render."
// will need to use this to update photo grid

// but also look into this:
// "Additionally, useEffect() runs after every render.
// Therefore, it is like a componentDidMount(), componentDidUpdate(),
// and componentWillUnMount() all in one."
// which is task heavy

// should be moved to App.js since all parts of app need access to it
const clothingItems = [
  {name: 'Red Shirt', color: 4, key: '0'},
  {name: 'Black Pants', color: 1, key: '1'},
  {name: 'Red Octobers', color: 4, key: '2'},
  {name: 'White AF1', color: 2, key: '3'},
  {name: 'Green Crocs', color: 7, key: '4'},
  {name: 'Yellow pants', color: 6, key: '5'},
  {name: 'YANKEE WITH NO BRIM!!!', color: 1, key: '6'},
  {name: 'Blue Dress Shirt', color: 8, key: '7'},
  {name: 'Orange Tsinelas', color: 5, key: '8'},
  {name: 'Black AF1 Activities', color: 1, key: '9'},
  {name: 'WHAT ARE THOSE!!!!', color: 1, key: '10'},
  {name: 'e-boy clothing', color: 1, key: '11'},
  {name: 'Purple tee', color: 9, key: '12'},
  {name: 'Multicolored shoes', color: 10, key: '13'},
  {name: 'Grey outerwear', color: 4, key: '14'},
  {name: 'White pants', color: 2, key: '15'},
  {name: 'Yellow shorts', color: 6, key: '16'},
  {name: 'Green button up', color: 7, key: '17'},
];

const Body = () => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        data={clothingItems}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'lightgray',
    margin: 1,
    flex: 1,
    height: SCREENWIDTH / 3,
    width: SCREENWIDTH / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Body;
