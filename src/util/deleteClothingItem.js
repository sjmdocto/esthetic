/**
 * More efficient array deletion function
 * @param {array} array - oldWardrobe
 * @return {array}
 */
const deleteFromArray = (key, array) => {
  let isFound = false;
  let i = 0;
  let length = array.length;
  let filteredWardrobe = [];
  while (isFound === false && i < length) {
    if (key !== array[i].key) {
      filteredWardrobe.push(array[i]);
    } else {
      isFound = true;
    }
    i++;
  }
  // Now that the item to remove has been found,
  // no need to check if keys match up
  while (i < length) {
    filteredWardrobe.push(array[i]);
    i++;
  }
  return filteredWardrobe;
};

/**
 * Delete clothingItem object from closet
 * @param {string} key - key of item to remove (a uuidv4)
 */
const deleteClothingItem = (key, closet) => {
  // Delete item from wardrobe array
  let newWardrobe = deleteFromArray(key, closet);
  return newWardrobe;
};

export default deleteClothingItem;
