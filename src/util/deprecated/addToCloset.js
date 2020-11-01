import getCloset from './getCloset';
import addClothingToAsyncStorage from './addClothingToAsyncStorage';

/**
 * Add clothingItem object to closet
 * @param {object} clothingItem
 * @param {string} key - a uuidv4 used for key in AsyncStorage
 */
const addToCloset = async (currentCloset, clothingItem, key) => {
  let oldCloset = currentCloset; // array
  let newCloset; // array
  console.log('addToCloset.oldCloset: ' + oldCloset);
  /* if oldWardrobe is empty,
   * then let newWardrobe be a new array with just the clothingItem
   */
  if (oldCloset === undefined) {
    newCloset = [clothingItem];
  } else {
    // else, create a new array containing oldWardrobe plus new clothingItem
    newCloset = [clothingItem, ...oldCloset];
  }

  // Update wardrobe state variable
  // setCloset(newCloset);

  // Then add the clothing item to AsyncStorage
  await addClothingToAsyncStorage(clothingItem, key);
  console.log('addToCloset.closet: ' + newCloset);
  return newCloset;
};

export default addToCloset;
