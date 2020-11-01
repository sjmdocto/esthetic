import AsyncStorage from '@react-native-community/async-storage';
/**
 * Helper function for getSavedCloset.
 *
 * Gets keys for all the data (clothingItems) in AsyncStorage.
 * @return {array} - Array of all the keys
 */
const getStorageKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (e) {
    console.log(e);
  }
};

export default getStorageKeys;
