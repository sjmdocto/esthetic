import {createContext} from 'react';

const FilterContext = createContext({
  filterColor: 0,
  setFilterColor: () => {},
  filterType: 0,
  setFilterType: () => {},
});

export default FilterContext;
