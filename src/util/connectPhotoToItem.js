import * as FileSystem from 'expo-file-system';

/**
 * @async
 * @function connectPhotoToItem
 * @param {object} clothingItem
 * @returns {Promise<object>}
 */
const connectPhotoToItem = async (clothingItem) => {
  const fileUri = FileSystem.documentDirectory + clothingItem.key + '.png';
  let photo;
  try {
    photo = await FileSystem.readAsStringAsync(fileUri, {
      encoding: FileSystem.EncodingType.Base64,
    });
  } catch (e) {}
  const newClothingItem = {
    key: clothingItem.key,
    date: clothingItem.date,
    colorTag: clothingItem.colorTag,
    typeTag: clothingItem.typeTag,
    photo: photo,
  };
  return newClothingItem;
};

export default connectPhotoToItem;
