import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

/** Construct a clothingItem object
 * @param photo - photo in base64 representation
 * @param colorTag - selected colorTag for the clothing item
 * @param typeTag - selected typeTag for the clothing item
 * @return {object}
 */
const makeClothingItem = (photo, colorTag, typeTag) => {
  const key = uuidv4();
  const clothingItem = {
    photo: photo,
    colorTag: colorTag,
    typeTag: typeTag,
    key: key,
  };
  return clothingItem;
};

export default makeClothingItem;
