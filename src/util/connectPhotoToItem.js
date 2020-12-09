import * as FileSystem from 'expo-file-system';

const connectPhotoToItem = async (clothingItem) => {
  const fileUri = FileSystem.documentDirectory + clothingItem.key + '.png';
  let photo;
  try {
    photo = await FileSystem.readAsStringAsync(fileUri, {
      encoding: FileSystem.EncodingType.Base64,
    });
  } catch (e) {
    console.warn(e);
  }
  const newClothingItem = {
    colorTag: clothingItem.colorTag,
    typeTag: clothingItem.typeTag,
    key: clothingItem.key,
    photo: photo,
    date: clothingItem.date,
  };
  return newClothingItem;
};

export default connectPhotoToItem;
