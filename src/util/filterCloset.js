import colorKey from './typeKey';
import typeKey from './typeKey';

/**
 * Filters closet by the currently selected color and type filters
 * @function filterCloset
 * @param {closet}
 * @param {filterColor}
 * @param {filterType}
 * @return {array} - the filtered closet
 */
const filterCloset = (closet, filterColor, filterType) => {
  // 0) closet is empty
  if (!(closet.length > 0) || !Array.isArray(closet)) {
    // return {photo: null, colorTag: null, typeTag: null};
    return [];
  }
  // 1) No color filter, no type filter
  else if (filterColor === colorKey.none && filterType === typeKey.none) {
    return closet;
  }
  // 2) Color filter, but no type filter
  else if (filterColor !== colorKey.none && filterType === typeKey.none) {
    return closet.filter((item) => item.colorTag === filterColor);
  }
  // 3) No color filter, type filter only
  else if (filterColor === colorKey.none && filterType !== typeKey.none) {
    return closet.filter((item) => item.typeTag === filterType);
  }
  // 4) Color filter and type filter
  else if (filterColor !== colorKey.none && filterType !== typeKey.none) {
    let filterByColor = closet.filter((item) => item.colorTag === filterColor);
    let filtered = filterByColor.filter((item) => item.typeTag === filterType);
    return filtered;
  }
};

export default filterCloset;
