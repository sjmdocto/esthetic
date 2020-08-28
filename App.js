import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import Menu from './components/Menu';
import {MenuProvider} from 'react-native-popup-menu';
import AsyncStorage from '@react-native-community/async-storage';

// import AsyncStorage from '@react-native-community/async-storage';

// **Potentially will use for notch devices**
// import {getDeviceId} from 'react-native-device-info';

// const EST_ORANGE = 'rgb(227, 131, 4)';
// const EST_ORANGE_TRANSP = 'rgba(227, 131, 4, 0.92)';

// To-do: android phones w/notches need paddingTop

// const clothingItems = [
//   {name: 'Red Tee', colorTag: 4, typeTag: 6, key: '0'},
//   {name: 'Black Pants', colorTag: 1, typeTag: 7, key: '1'},
//   {name: 'Red Octobers', colorTag: 4, typeTag: 10, key: '2'},
//   {name: 'White AF1', colorTag: 2, typeTag: 10, key: '3'},
//   {name: 'Green Crocs', colorTag: 7, typeTag: 10, key: '4'},
//   {name: 'Yellow pants', colorTag: 6, typeTag: 7, key: '5'},
//   {name: 'Black Jacket', colorTag: 1, typeTag: 1, key: '6'},
//   {name: 'Blue Dress Shirt', colorTag: 8, typeTag: 2, key: '7'},
//   {name: 'Orange Tsinelas', colorTag: 5, typeTag: 10, key: '8'},
//   {name: 'Black AF1 Activities', colorTag: 1, typeTag: 10, key: '9'},
//   {name: 'WHAT ARE THOSE!!!!', colorTag: 1, typeTag: 10, key: '10'},
//   {name: 'e-boy hoodie', colorTag: 1, typeTag: 4, key: '11'},
//   {name: 'Purple tee', colorTag: 9, typeTag: 6, key: '12'},
//   {name: 'Multicolored shoes', colorTag: 10, typeTag: 10, key: '13'},
//   {name: 'Grey jacket', colorTag: 4, typeTag: 1, key: '14'},
//   {name: 'White pants', colorTag: 2, typeTag: 7, key: '15'},
//   {name: 'Yellow shorts', colorTag: 6, typeTag: 8, key: '16'},
//   {name: 'Green button up', colorTag: 7, typeTag: 5, key: '17'},
// ];

const clothingItems = [
  {photoURI: './resources.test.jpg', colorTag: 4, typeTag: 6, key: '0'},
  {photoURI: './resources.test.jpg', colorTag: 1, typeTag: 7, key: '1'},
  {photoURI: './resources.test.jpg', colorTag: 4, typeTag: 10, key: '2'},
  {photoURI: './resources.test.jpg', colorTag: 2, typeTag: 10, key: '3'},
  {photoURI: './resources.test.jpg', colorTag: 7, typeTag: 10, key: '4'},
  {photoURI: './resources.test.jpg', colorTag: 6, typeTag: 7, key: '5'},
  {photoURI: './resources.test.jpg', colorTag: 1, typeTag: 1, key: '6'},
  {photoURI: './resources.test.jpg', colorTag: 8, typeTag: 2, key: '7'},
  {photoURI: './resources.test.jpg', colorTag: 5, typeTag: 10, key: '8'},
  {photoURI: './resources.test.jpg', colorTag: 1, typeTag: 10, key: '9'},
  // {photoURI: './resources.test.jpg', colorTag: 1, typeTag: 10, key: '10'},
  // {photoURI: './resources.test.jpg', colorTag: 1, typeTag: 4, key: '11'},
];

const App = () => {
  // Async storage stuff
  const [wardrobe, setWardrobe] = useState(getClothing);

  useEffect(() => {
    console.log('App.wardrobe = ' + wardrobe);
  }, [wardrobe]);

  const getWardrobe = () => {
    return wardrobe;
  };

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
      // console.log('Keys = ' + keys);
    } catch (e) {
      console.log(e);
    }

    if (keys === undefined) {
      console.warn('keys = undefined');
    } else {
      return keys;
    }
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
   * Gets all clothingItem objects from AsyncStorage
   * @return {array}
   */
  const getClothing = () => {
    // 1) Get keys
    let clothingKeys = getKeysToWardrobe();
    // console.log('clothingKeys = ' + clothingKeys);

    // 2) Get values from key-value pairs
    let clothing = wardrobeKeysToItems(clothingKeys);
    console.log('getClothing returns: ' + clothing);
    return clothing;
  };

  /**
   * Helper function for addToWardrobe
   *
   * Make clothingItem object into a JSON string,
   * then add that string to AsyncStorage.
   * @param clothingItem
   * @param base64 - base64 representation of clothingItem's photo
   */
  const addToAsyncStorage = async (clothingItem, base64) => {
    try {
      const jsonValue = JSON.stringify(clothingItem);
      await AsyncStorage.setItem(base64, jsonValue);
      console.log('addToAsyncStorage: clothingItemStr = ' + jsonValue);
      const parseTest = JSON.parse(jsonValue);
      console.log('parseTest: ' + JSON.stringify(parseTest));
      console.log('Added to AsyncStorage');
    } catch (e) {
      console.log('Error occurred when adding to AsyncStorage:');
      console.log(e);
    }
  };

  /**
   * Add clothingItem object to wardrobe
   * @param clothingItem
   * @param base64 - base64 representation of clothingItem's photo
   */
  const addToWardrobe = (clothingItem, base64) => {
    let oldWardrobe = getWardrobe();
    let newWardrobe;
    console.log('oldWardrobe = ' + oldWardrobe);

    if (oldWardrobe === undefined) {
      newWardrobe = [clothingItem];
    } else {
      newWardrobe = oldWardrobe.push(clothingItem);
    }

    // Add the clothingItem to wardrobe
    setWardrobe(newWardrobe);
    // Then add it to AsyncStorage
    addToAsyncStorage(clothingItem, base64);
  };

  /* FILTER STUFF */

  // Filter state variables
  const [filterColor, setFilterColor] = useState(0);
  const [filterType, setFilterType] = useState(0);

  /* FILTER MENU STUFF */

  // Filter menu state variable
  const [menuVisible, setMenuVisible] = useState(false);

  /**
   * Wrapper for setMenuVisible(true).
   * Used to open Menu modal
   */
  const openMenuHandler = () => {
    setMenuVisible(true);
  };
  /**
   * Wrapper for setMenuVisible(false).
   * Used to close Menu modal
   */
  const closeMenuHandler = () => {
    setMenuVisible(false);
  };

  console.log('App: re-rendered');
  console.log('MATH TEST: ' + 10 / 3);
  return (
    <MenuProvider>
      <SafeAreaView style={styles.main}>
        <Menu
          visible={menuVisible}
          onClose={closeMenuHandler}
          //filterColor={filterColor}
          setFilterColor={setFilterColor}
          //filterType={filterType}
          setFilterType={setFilterType}
        />
        <Header onPressMenu={openMenuHandler} addToWardrobe={addToWardrobe} />
        <Body
          filterColor={filterColor}
          filterType={filterType}
          // wardrobe={wardrobe}
          wardrobe={clothingItems}
        />
      </SafeAreaView>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});

export default App;
