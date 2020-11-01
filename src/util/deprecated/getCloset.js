import getKeysToCloset from './getKeysToCloset';
import closetKeysToItems from './closetKeysToItems';

/**
 * Gets all clothingItem objects from AsyncStorage
 * @return {array}
 */
const getCloset = () => {
  // 1) Get keys
  let closetKeys = getKeysToCloset();
  console.log('getCloset.keys: ' + closetKeys);
  // 2) Get values from key-value pairs
  let closet = closetKeysToItems(closetKeys);
  console.log('getCloset.closet: ' + closet);
  return closet;
};

export default getCloset;
