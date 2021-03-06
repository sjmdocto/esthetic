import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @async
 * @function addToStorage
 * @param {object} clothingItem
 * @returns {Promise<void>}
 */
const addToStorage = async (clothingItem) => {
  try {
    const jsonValue = JSON.stringify(clothingItem);
    await AsyncStorage.setItem(clothingItem.key, jsonValue);
  } catch (e) {
    console.warn('Error occurred when adding to AsyncStorage: ' + e);
  }
};

export default addToStorage;
