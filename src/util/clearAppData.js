import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @async
 * @function clearAppData
 * @returns {Promise<void>}
 */
const clearAppData = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(keys);
  } catch (error) {
    console.error('Error clearing app data.');
  }
};

export default clearAppData;
