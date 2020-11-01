import AsyncStorage from '@react-native-community/async-storage';
/**
 * Helper function for getCloset.
 *
 * Gets keys for all the data (clothingItems) in AsyncStorage.
 * @return {array} - Array of all the keys
 */
const getKeysToCloset = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
    console.log('getKeysToCloset.keys: ' + keys);
    return keys;
  } catch (e) {
    console.log(e);
  }
};

export default getKeysToCloset;
