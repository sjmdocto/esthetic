import compareItemDates from './compareItemDates';
import connectPhotoToItem from './connectPhotoToItem';
import getStorageKeys from './getStorageKeys';
import storageKeysToItems from './storageKeysToItems';

/**
 * Gets all clothingItem objects from AsyncStorage
 * @return {Promise<Array>}
 */

const getSavedCloset = async () => {
  let keys = [];
  let closet = [];
  const asyncSort = async () => {
    closet.sort(compareItemDates);
  };
  try {
    // 1) Get keys
    keys = await getStorageKeys();
    console.log('getStorageKeys returned.');
    // 2) Get values from key-value pairs
    closet = await storageKeysToItems(keys);
    // 3) Sort closet by dates
    await asyncSort();
    console.log('storageKeysToItems returned.');
    // 4) Connect photos to items in closet
    if (closet.length !== 0) {
      const closetWithPhotos = await Promise.all(
        closet.map(connectPhotoToItem),
      );
      return closetWithPhotos;
    } else {
      return closet;
    }
  } catch (e) {}
};

export default getSavedCloset;
