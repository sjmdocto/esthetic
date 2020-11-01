import AsyncStorage from '@react-native-community/async-storage';

/**
 * Helper function for addToCloset()
 *
 * Make clothingItem object into a JSON string,
 * then add that string to AsyncStorage.
 * @param {object} clothingItem
 * @param {string} key - a uuidv4 used for key in AsyncStorage
 */
const addClothingToAsyncStorage = async (clothingItem, key) => {
  try {
    const jsonValue = JSON.stringify(clothingItem);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.warn('Error occurred when adding to AsyncStorage: ' + e);
  }
};

export default addClothingToAsyncStorage;
