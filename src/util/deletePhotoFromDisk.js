import * as FileSystem from 'expo-file-system';

/**
 * @async
 * @function deletePhotoFromDisk
 * @param {object} clothingItem
 * @param {string} photoBase64
 * @returns {Promise<void>}
 */
const deletePhotoFromDisk = async (clothingItem) => {
  const filename = FileSystem.documentDirectory + clothingItem.key + '.png';
  try {
    await FileSystem.deleteAsync(filename);
  } catch (e) {}
};

export default deletePhotoFromDisk;
