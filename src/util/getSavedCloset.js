import getStorageKeys from './getStorageKeys';
import storageKeysToItems from './storageKeysToItems';

/**
 * Gets all clothingItem objects from AsyncStorage
 * @return {array}
 */
const getSavedCloset = () => {
  // 1) Get keys
  let keys = getStorageKeys();
  // 2) Get values from key-value pairs
  let closet = storageKeysToItems(keys);

  return closet;
};

export default getSavedCloset;
