import addClothingItem from './addClothingItem';

describe('addClothingItem function unit tests: ', () => {
  const clothingItem0 = {photo: 'base64', colorTag: 1, typeTag: 1, key: 1};
  const clothingItem1 = {photo: 'base64', colorTag: 2, typeTag: 2, key: 2};
  test('Closet is empty', () => {
    const emptyCloset = [];
    const newCloset = addClothingItem(emptyCloset, clothingItem0);
    expect(newCloset.length).toBe(1);
  });
  test('Closet contains at least one item', () => {
    const currentCloset = [clothingItem0];
    const newCloset = addClothingItem(currentCloset, clothingItem1);
    expect(newCloset.length).toBe(currentCloset.length + 1);
  });
});
