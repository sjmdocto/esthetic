import deleteClothingItem from './deleteClothingItem';

describe('deleteClothingItem function unit tests:', () => {
  const closet = [
    {photo: 'item_0', colorTag: 1, typeTag: 1, key: 0},
    {photo: 'item_1', colorTag: 1, typeTag: 1, key: 1},
    {photo: 'item_2', colorTag: 1, typeTag: 2, key: 2},
    {photo: 'item_3', colorTag: 1, typeTag: 2, key: 3},
    {photo: 'item_4', colorTag: 2, typeTag: 2, key: 4},
  ];

  test('Removes item at array[0]', () => {
    const expected = [
      {photo: 'item_1', colorTag: 1, typeTag: 1, key: 1},
      {photo: 'item_2', colorTag: 1, typeTag: 2, key: 2},
      {photo: 'item_3', colorTag: 1, typeTag: 2, key: 3},
      {photo: 'item_4', colorTag: 2, typeTag: 2, key: 4},
    ];
    let updatedCloset = deleteClothingItem(0, closet);
    expect(updatedCloset).toStrictEqual(expected);
  });

  test('Removes last item of array', () => {
    const expected = [
      {photo: 'item_0', colorTag: 1, typeTag: 1, key: 0},
      {photo: 'item_1', colorTag: 1, typeTag: 1, key: 1},
      {photo: 'item_2', colorTag: 1, typeTag: 2, key: 2},
      {photo: 'item_3', colorTag: 1, typeTag: 2, key: 3},
    ];
    let updatedCloset = deleteClothingItem(4, closet);
    expect(updatedCloset).toStrictEqual(expected);
  });

  test('Removes item in middle of array', () => {
    const expected = [
      {photo: 'item_0', colorTag: 1, typeTag: 1, key: 0},
      {photo: 'item_1', colorTag: 1, typeTag: 1, key: 1},
      {photo: 'item_3', colorTag: 1, typeTag: 2, key: 3},
      {photo: 'item_4', colorTag: 2, typeTag: 2, key: 4},
    ];
    let updatedCloset = deleteClothingItem(2, closet);
    expect(updatedCloset).toStrictEqual(expected);
  });
});
