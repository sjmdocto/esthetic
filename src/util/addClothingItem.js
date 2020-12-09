/** Add clothingItem to closet
 * @param currentCloset
 * @param clothingItem
 * @return {array}
 */
const addClothingItem = (currentCloset, clothingItem) => {
  let oldCloset = currentCloset; // array
  let newCloset; // array

  // if (oldCloset is empty)
  if (oldCloset.length === 0) {
    newCloset = [clothingItem];
  } else {
    // else, create a new array containing oldWardrobe plus new clothingItem
    newCloset = [clothingItem, ...oldCloset];
  }
  return newCloset;
};

export default addClothingItem;
