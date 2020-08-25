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

// To-do: Fix tile size when there aren't 3 items per row

/**
 * Holds clothing item grid
 * @param {*} props
 * @param {array} props.wardrobe - all saved clothing items
 * @param {integer} props.filterColor
 * @param props.filterType
 */

const Body = (props) => {
  // Async storage stuff
  const [wardrobe, setWardrobe] = useState(getClothing);

  /**
   * Helper function for getClothing.
   *
   * Gets keys for all the clothingItems in AsyncStorage.
   * @return {array} - Array of all the keys
   */
  const getKeysToWardrobe = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
      console.log('Keys = ' + keys);
    } catch (e) {
      console.log(e);
    }
    return keys;
  };

  /**
   * Helper function for getClothing.
   *
   * Uses keys to get the values of each Asyncstorage clothingItem objects
   * @param {array} - Keys for each clothingItem object
   * @return {array} - Array of all the clothingItem objects
   */
  const wardrobeKeysToItems = (keys) => {
    let i = 0;
    let items = [];

    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(keys[i]);
        console.log(JSON.parse(jsonValue));
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        console.log(e);
      }
    };

    for (i = 0; i < keys.length; i++) {
      items[i] = getData();
      //items[i] = AsyncStorage.getItem(keys[i]);
      console.log(items[i]);
      //items[i] = items[i].photoURI;
    }
    return items;
  };

  /**
   * Gets all clothingItem objects from AsyncStorage, updates the wardrobe with them,
   * and then returns the wardrobe.
   * @return {array}
   */
  const getClothing = () => {
    // 1) Get keys
    let clothingKeys = getKeysToWardrobe();
    console.log('clothingKeys = ' + clothingKeys);
    // 2) Get values from key-value pairs
    let clothing = wardrobeKeysToItems(clothingKeys);
    return clothing;
  };

  /**
   * Filters wardrobe by the currently selected color and type filters
   * @param {items} - wardrobe
   * @param {filterColor}
   * @param {filterType}
   * @return {array} - the filtered wardrobe
   */
  const filterItems = (items, filterColor, filterType) => {
    console.log('filterItems: items= ' + items);
    if (items === undefined) {
      return []; // !!! bad in relation to <Image> call !!!
    }
    // 1) No color filter, no type filter
    if (filterColor === 0 && filterType === 0) {
      return items;
    }
    // 2) Color filter, but no type filter
    else if (filterColor !== 0 && filterType === 0) {
      return items.filter((item) => item.colorTag === filterColor);
    }
    // 3) No color filter, type filter only
    else if (filterColor === 0 && filterType !== 0) {
      return items.filter((item) => item.typeTag === filterType);
    }
    // 4) Color filter and type filter
    else if (filterColor !== 0 && filterType !== 0) {
      let filterByColor = items.filter((item) => item.colorTag === filterColor);
      let filtered = filterByColor.filter(
        (item) => item.typeTag === filterType,
      );
      return filtered;
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        data={filterItems(wardrobe, props.filterColor, props.filterType)}
        renderItem={({item}) => (
          <View style={styles.item}>
            {/* <Text>{item.photoURI}</Text> */}
            <Image source={{uri: item.photoURI}} />
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
