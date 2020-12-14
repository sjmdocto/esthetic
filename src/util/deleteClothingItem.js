/**
 * More efficient array deletion function
 * @function deleteFromArray
 * @param {array} array
 * @return {array}
 */
const deleteFromArray = (key, array) => {
  let isFound = false;
  let i = 0;
  let length = array.length;
  let filteredCloset = [];
  while (isFound === false && i < length) {
    if (key !== array[i].key) {
      filteredCloset.push(array[i]);
    } else {
      isFound = true;
    }
    i++;
  }
  // Now that the item to remove has been found,
  // no need to check if keys match up
  while (i < length) {
    filteredCloset.push(array[i]);
    i++;
  }
  return filteredCloset;
};

/**
 * Delete clothingItem object from closet
 * @function deleteClothingItem
 * @param {string} key - key of item to remove (a uuidv4)
 * @returns {array}
 */
const deleteClothingItem = (key, closet) => {
  // Delete item from closet array
  let newCloset = deleteFromArray(key, closet);
  return newCloset;
};

export default deleteClothingItem;
