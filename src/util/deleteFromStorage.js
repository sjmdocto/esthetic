import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Delete clothingItem object from AsyncStorage
 * @param {string} key - key of item to remove (a uuidv4)
 */
const deleteFromStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.warn(e);
  }
};

export default deleteFromStorage;
