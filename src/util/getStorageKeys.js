import AsyncStorage from '@react-native-async-storage/async-storage';
/**
 * Helper function for getSavedCloset.
 *
 * Gets keys for all the data (clothingItems) in AsyncStorage.
 * @async
 * @function getStorageKeys
 * @return {Promise<Array>} - Array of all the keys
 */
const getStorageKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (e) {
    console.warn(e);
  }
};

export default getStorageKeys;
