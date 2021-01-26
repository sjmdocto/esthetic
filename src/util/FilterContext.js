import colorKey from './colorKey';
import typeKey from './typeKey';
import {createContext} from 'react';

const FilterContext = createContext({
  filterColor: colorKey.none,
  setFilterColor: () => {},
  filterType: typeKey.none,
  setFilterType: () => {},
});

export default FilterContext;
