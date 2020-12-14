import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Helper function for getSavedCloset.
 *
 * Uses keys to get the values of each AsyncStorage clothingItem object
 * @async
 * @function storageKeysToItems
 * @param {array} keys - keys for each clothingItem object
 * @return {Promise<Array>} - Array of all the clothingItem objects
 */
const storageKeysToItems = async (keys) => {
  try {
    let items = [];
    for (let i = 0; i < keys.length; i++) {
      const jsonValue = await AsyncStorage.getItem(keys[i]);
      let data;
      if (jsonValue != null) {
        data = JSON.parse(jsonValue);
      } else {
        data = null;
      }
      items.push(data);
    }
    return items;
  } catch (e) {}
};

export default storageKeysToItems;
