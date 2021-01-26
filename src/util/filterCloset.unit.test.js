import filterCloset from './filterCloset';
import colorKey from './colorKey';
import typeKey from './typeKey';

describe('filterCloset function unit tests: ', () => {
  const testCloset = [
    {
      photo: 'base64',
      colorTag: colorKey.black,
      typeTag: typeKey.outerwear,
      key: 1,
    },
    {
      photo: 'base64',
      colorTag: colorKey.black,
      typeTag: typeKey.outerwear,
      key: 2,
    },
    {photo: 'base64', colorTag: colorKey.black, typeTag: typeKey.pants, key: 3},
    {photo: 'base64', colorTag: colorKey.black, typeTag: typeKey.pants, key: 4},
    {photo: 'base64', colorTag: 2, typeTag: typeKey.pants, key: 5},
  ];

  test('Closet is empty', () => {
    const emptyCloset = [];
    const filteredCloset = filterCloset(
      emptyCloset,
      colorKey.black,
      typeKey.none,
    );
    expect(filteredCloset).toStrictEqual([]);
  });
  test('No color filter, no type filter', () => {
    const filteredCloset = filterCloset(
      testCloset,
      colorKey.none,
      typeKey.none,
    );
    expect(filteredCloset).toBe(testCloset);
  });
  test('Color filter, but no type filter', () => {
    const expectedCloset = [
      {
        photo: 'base64',
        colorTag: colorKey.black,
        typeTag: typeKey.outerwear,
        key: 1,
      },
      {
        photo: 'base64',
        colorTag: colorKey.black,
        typeTag: typeKey.outerwear,
        key: 2,
      },
      {
        photo: 'base64',
        colorTag: colorKey.black,
        typeTag: typeKey.pants,
        key: 3,
      },
      {
        photo: 'base64',
        colorTag: colorKey.black,
        typeTag: typeKey.pants,
        key: 4,
      },
    ];
    const filteredCloset = filterCloset(
      testCloset,
      colorKey.black,
      typeKey.none,
    );
    expect(filteredCloset).toStrictEqual(expectedCloset);
  });
  test('No color filter, type filter only', () => {
    const expectedCloset = [
      {
        photo: 'base64',
        colorTag: colorKey.black,
        typeTag: typeKey.outerwear,
        key: 1,
      },
      {
        photo: 'base64',
        colorTag: colorKey.black,
        typeTag: typeKey.outerwear,
        key: 2,
      },
    ];
    const filteredCloset = filterCloset(
      testCloset,
      colorKey.none,
      typeKey.outerwear,
    );
    expect(filteredCloset).toStrictEqual(expectedCloset);
  });
  test('Color filter and type filter', () => {
    const expectedCloset = [
      {
        photo: 'base64',
        colorTag: colorKey.black,
        typeTag: typeKey.outerwear,
        key: 1,
      },
      {
        photo: 'base64',
        colorTag: colorKey.black,
        typeTag: typeKey.outerwear,
        key: 2,
      },
    ];
    const filteredCloset = filterCloset(
      testCloset,
      colorKey.black,
      typeKey.outerwear,
    );
    expect(filteredCloset).toStrictEqual(expectedCloset);
  });
});
