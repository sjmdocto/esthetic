import makeClothingItem from './makeClothingItem';

describe('makeClothingItem function unit tests: ', () => {
  test('Creates object', () => {
    const clothingItem = makeClothingItem('base64', 1, 2);
    expect(clothingItem).toMatchObject({
      photo: 'base64',
      colorTag: 1,
      typeTag: 2,
      key: expect.any(String),
    });
  });
});
