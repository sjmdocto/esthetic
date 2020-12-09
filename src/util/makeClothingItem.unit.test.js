import makeClothingItem from './makeClothingItem';

describe('makeClothingItem function unit tests: ', () => {
  test('Creates object', () => {
    const clothingItem = makeClothingItem(1, 2);
    expect(clothingItem).toMatchObject({
      colorTag: 1,
      typeTag: 2,
      key: expect.any(String),
      date: expect.any(Number),
    });
  });
});
