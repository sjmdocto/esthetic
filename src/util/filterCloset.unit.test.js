import filterCloset from './filterCloset';

describe('filterCloset function unit tests: ', () => {
  const testCloset = [
    {photo: 'base64', colorTag: 1, typeTag: 1, key: 1},
    {photo: 'base64', colorTag: 1, typeTag: 1, key: 2},
    {photo: 'base64', colorTag: 1, typeTag: 2, key: 3},
    {photo: 'base64', colorTag: 1, typeTag: 2, key: 4},
    {photo: 'base64', colorTag: 2, typeTag: 2, key: 5},
  ];

  test('Closet is empty', () => {
    const emptyCloset = [];
    const filteredCloset = filterCloset(emptyCloset, 1, 0);
    expect(filteredCloset).toStrictEqual([]);
  });
  test('No color filter, no type filter', () => {
    const filteredCloset = filterCloset(testCloset, 0, 0);
    expect(filteredCloset).toBe(testCloset);
  });
  test('Color filter, but no type filter', () => {
    const expectedCloset = [
      {photo: 'base64', colorTag: 1, typeTag: 1, key: 1},
      {photo: 'base64', colorTag: 1, typeTag: 1, key: 2},
      {photo: 'base64', colorTag: 1, typeTag: 2, key: 3},
      {photo: 'base64', colorTag: 1, typeTag: 2, key: 4},
    ];
    const filteredCloset = filterCloset(testCloset, 1, 0);
    expect(filteredCloset).toStrictEqual(expectedCloset);
  });
  test('No color filter, type filter only', () => {
    const expectedCloset = [
      {photo: 'base64', colorTag: 1, typeTag: 1, key: 1},
      {photo: 'base64', colorTag: 1, typeTag: 1, key: 2},
    ];
    const filteredCloset = filterCloset(testCloset, 0, 1);
    expect(filteredCloset).toStrictEqual(expectedCloset);
  });
  test('Color filter and type filter', () => {
    const expectedCloset = [
      {photo: 'base64', colorTag: 1, typeTag: 1, key: 1},
      {photo: 'base64', colorTag: 1, typeTag: 1, key: 2},
    ];
    const filteredCloset = filterCloset(testCloset, 1, 1);
    expect(filteredCloset).toStrictEqual(expectedCloset);
  });
});
