import AsyncStorage from '@react-native-community/async-storage';

/**
 * Helper function for getSavedCloset.
 *
 * Uses keys to get the values of each AsyncStorage clothingItem object
 * @param {array} keys - keys for each clothingItem object
 * @return {array} - Array of all the clothingItem objects
 */
const storageKeysToItems = (keys) => {
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

export default storageKeysToItems;
