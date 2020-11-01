import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import addToCloset from './addToCloset';

const savePhoto = async (currentCloset, photo, colorTag, typeTag) => {
  /** Construct a clothingItem object
   * @param photo - photo in base64 representation
   * @param colorTag - selected colorTag for the clothing item
   * @param typeTag - selected typeTag for the clothing item
   * @param key - a uuidv4 used for key in AsyncStorage and Flatlist
   */
  const key = uuidv4();

  const clothingItem = {
    photo: photo,
    colorTag: colorTag,
    typeTag: typeTag,
    // key: key,
  };

  // Add new clothingItem to closet
  let newCloset = await addToCloset(currentCloset, clothingItem, key);
  console.log('savePhoto.closet: ' + newCloset);
  return newCloset;
};

export default savePhoto;
