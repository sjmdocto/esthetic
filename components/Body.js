import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

/*
NOTE: If all the item tiles fit on screen,
the grid does not scroll on Android.
Basically, scrolling capability only works
if it's actually needed on Android.
*/
const SCREENWIDTH = Dimensions.get('window').width;
const numColumns = 3;

// To-do: Fix tile size when there aren't 3 items per row

/**
 * Holds clothing item grid
 * @param {*} props
 * @param {array} props.getWardrobe - all saved clothing items
 * @param {integer} props.filterColor
 * @param props.filterType
 */

const Body = (props) => {
  // const [filteredWardrobe, setFilteredWardrobe] = useState(props.getWardrobe);
  console.log('Body: re-rendered.');

  /**
   * Filters wardrobe by the currently selected color and type filters
   * @param {items} - wardrobe
   * @param {filterColor}
   * @param {filterType}
   * @return {array} - the filtered wardrobe
   */
  const filterItems = (wardrobe, filterColor, filterType) => {
    console.log('filterItems: wardrobe = ' + wardrobe);

    if (wardrobe === undefined) {
      console.log('option 0');
      return []; // !!! bad in relation to <Image> call !!!
    }
    // 1) No color filter, no type filter
    else if (filterColor === 0 && filterType === 0) {
      console.log('option 1');
      return wardrobe;
    }
    // 2) Color filter, but no type filter
    else if (filterColor !== 0 && filterType === 0) {
      console.log('option 2');
      return wardrobe.filter((item) => item.colorTag === filterColor);
    }
    // 3) No color filter, type filter only
    else if (filterColor === 0 && filterType !== 0) {
      console.log('option 3');
      return wardrobe.filter((item) => item.typeTag === filterType);
    }
    // 4) Color filter and type filter
    else if (filterColor !== 0 && filterType !== 0) {
      let filterByColor = wardrobe.filter(
        (item) => item.colorTag === filterColor,
      );
      let filtered = filterByColor.filter(
        (item) => item.typeTag === filterType,
      );
      console.log('option 4');
      console.log('filterItems: wardrobe[0].uri = ' + wardrobe[0].photoURI);
      return filtered;
    }
  };

  // const formatGrid = (wardrobe, numColumns) => {
  //   let numLastRow = wardrobe % numColumns;
  //   let formattedWardrobe = wardrobe.push()
  // };
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={numColumns}
        data={filterItems(props.wardrobe, props.filterColor, props.filterType)}
        renderItem={({item}) => (
          <View style={styles.item}>
            {/* <Image source={{uri: item.photoURI}} style={styles.photo} /> */}
            <Image
              source={require('./resources/test.jpg')}
              style={styles.photo}
            />
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
    // backgroundColor: 'lightgray',
    margin: 1,
    flex: 1 / 3,
    height: SCREENWIDTH / 3,
    width: SCREENWIDTH / 3,
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderColor: 'black',
    // borderWidth: 2,
  },
  photo: {
    height: SCREENWIDTH / 3,
    width: SCREENWIDTH / 3,
  },
});

export default Body;
