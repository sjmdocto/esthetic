import * as FileSystem from 'expo-file-system';

/**
 * @async
 * @function writePhotoToDisk
 * @param {object} clothingItem
 * @param {string} photoBase64
 * @returns {Promise<void>}
 */
const writePhotoToDisk = async (clothingItem, photoBase64) => {
  const filename = FileSystem.documentDirectory + clothingItem.key + '.png';
  try {
    await FileSystem.writeAsStringAsync(filename, photoBase64, {
      encoding: FileSystem.EncodingType.Base64,
    });
  } catch (e) {}
};

export default writePhotoToDisk;
