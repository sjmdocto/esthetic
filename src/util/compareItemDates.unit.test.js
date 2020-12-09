import compareItemDates from './compareItemDates';

describe('compareItemDates function unit tests: ', () => {
  const date1 = new Date('December 7, 2020 04:31:00'); // earlier date
  const date2 = new Date('December 7, 2020 04:31:01'); // later date
  const item1 = {
    date: date1,
  };
  const item2 = {
    date: date2,
  };

  test('Date 1 is earlier than Date 2, so result = 1', () => {
    let result = compareItemDates(item1, item2);
    expect(result).toBe(1);
  });
  test('Date 1 is later than Date 2, so result = -1', () => {
    let result = compareItemDates(item2, item1);
    expect(result).toBe(-1);
  });
  test('Date 1 is equal to Date 2, so result = 0', () => {
    let result = compareItemDates(item1, item1);
    expect(result).toBe(0);
  });
});
