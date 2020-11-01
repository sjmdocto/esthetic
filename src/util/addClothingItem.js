/** Add clothingItem to closet
 * @param currentCloset
 * @param clothingItem
 * @return {array}
 */
const addClothingItem = (currentCloset, clothingItem) => {
  let oldCloset = currentCloset; // array
  let newCloset; // array
  /* if oldWardrobe is empty,
   * then let newWardrobe be a new array with just the clothingItem
   */
  if (oldCloset === undefined) {
    newCloset = [clothingItem];
  } else {
    // else, create a new array containing oldWardrobe plus new clothingItem
    newCloset = [clothingItem, ...oldCloset];
  }
  return newCloset;
};

export default addClothingItem;
