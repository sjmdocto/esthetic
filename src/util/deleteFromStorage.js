import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Delete clothingItem object from AsyncStorage
 * @async
 * @function deleteFromStorage
 * @param {string} key - key of item to remove (a uuidv4)
 * @returns {Promise<void>}
 */
const deleteFromStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.warn(e);
  }
};

export default deleteFromStorage;
