import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

/** Construct a clothingItem object
 * @function makeClothingItem
 * @param colorTag - selected colorTag for the clothing item
 * @param typeTag - selected typeTag for the clothing item
 * @return {object}
 */
const makeClothingItem = (colorTag, typeTag) => {
  const key = uuidv4();
  const date = new Date();
  const time = date.getTime();
  const clothingItem = {
    colorTag: colorTag,
    typeTag: typeTag,
    key: key,
    date: time,
  };
  return clothingItem;
};

export default makeClothingItem;
