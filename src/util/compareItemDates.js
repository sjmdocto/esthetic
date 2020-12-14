/**
 * @function compareItemDates
 * @param {object} item1
 * @param {object} item2
 */
const compareItemDates = (item1, item2) => {
  // Date 1 is earlier than Date 2, so result = 1,
  // and when called with array.sort(), Date 1 comes after Date 2
  if (item2.date - item1.date > 0) {
    return 1;
  }
  // Date 1 is later than Date 2, so result = -1,
  // and when called with array.sort(), Date 1 comes before Date 2
  else if (item2.date - item1.date < 0) {
    return -1;
  }
  // Date 1 is equal to Date 2, so result = 0,
  // and when called with array.sort(), order is unchanged
  // NOTE: this shouldn't happen because Date objects theoretically
  // won't be created at the same time
  else {
    return 0;
  }
};

export default compareItemDates;
