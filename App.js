import React, {useState} from 'react';
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

const App = () => {
  /* ASYNC STORAGE STUFF */
  const [wardrobe, setWardrobe] = useState(getClothing);

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
   * @param {array} keys - keys for each clothingItem object
   * @return {array} - Array of all the clothingItem objects
   */
  const wardrobeKeysToItems = (keys) => {
    let i = 0;
    let items = [];

    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(keys[i]);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        console.warn(e);
      }
    };

    for (i = 0; i < keys.length; i++) {
      items[i] = getData();
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
    // 2) Get values from key-value pairs
    let clothing = wardrobeKeysToItems(clothingKeys);
    return clothing;
  };

  /**
   * Helper function for addToWardrobe
   *
   * Make clothingItem object into a JSON string,
   * then add that string to AsyncStorage.
   * @param {object} clothingItem
   * @param {string} key - a uuidv4 used for key in AsyncStorage
   */
  const addToAsyncStorage = async (clothingItem, key) => {
    try {
      const jsonValue = JSON.stringify(clothingItem);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.warn('Error occurred when adding to AsyncStorage: ' + e);
    }
  };

  /**
   * Add clothingItem object to wardrobe
   * @param {object} clothingItem
   * @param {string } key - a uuidv4 used for key in AsyncStorage
   */
  const addToWardrobe = (clothingItem, key) => {
    let oldWardrobe = getWardrobe(); // array
    let newWardrobe; // array

    /* if oldWardrobe is empty,
     * then let newWardrobe be a new array with just the clothingItem
     */
    if (oldWardrobe === undefined) {
      newWardrobe = [clothingItem];
    } else {
      // else, create a new array containing oldWardrobe plus new clothingItem
      newWardrobe = [...oldWardrobe, clothingItem];
    }

    // Update wardrobe state variable
    setWardrobe(newWardrobe);

    // Then add the clothing item to AsyncStorage
    addToAsyncStorage(clothingItem, key);
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

  return (
    <MenuProvider>
      <SafeAreaView style={styles.main}>
        <Menu
          visible={menuVisible}
          onClose={closeMenuHandler}
          setFilterColor={setFilterColor}
          setFilterType={setFilterType}
        />
        <Header onPressMenu={openMenuHandler} addToWardrobe={addToWardrobe} />
        <Body
          filterColor={filterColor}
          filterType={filterType}
          wardrobe={wardrobe}
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
