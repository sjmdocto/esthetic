import React, {useState, useContext} from 'react';
import {View} from 'react-native';
import Header from '../../components/Header/Header';
import Grid from '../../components/Grid/Grid';
import FilterMenu from '../../components/FilterMenu/FilterMenu';
import deleteClothingItem from '../../util/deleteClothingItem';
import deleteFromStorage from '../../util/deleteFromStorage';
import {MenuProvider} from 'react-native-popup-menu';
import ClosetContext from '../../util/ClosetContext';

/**
 * @param {*} props
 * @param {array} props.closet
 *
 * @param {number} props.filterColor
 * @param {function} props.setFilterColor
 * @param {number} props.filterType
 * @param {function} props.setFilterType
 */

const ClosetScreen = ({navigation}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  // Wrapper for setMenuVisible(true)
  const openFilterMenu = () => {
    setMenuVisible(true);
  };
  // Wrapper for setMenuVisible(false).
  const closeFilterMenu = () => {
    setMenuVisible(false);
  };

  const [filterColor, setFilterColor] = useState(0);
  const [filterType, setFilterType] = useState(0);
  const {closet, setCloset} = useContext(ClosetContext);

  const onDelete = (key) => {
    let updatedCloset = deleteClothingItem(key, closet);
    setCloset(updatedCloset);
    deleteFromStorage(key);
  };

  return (
    <MenuProvider>
      <View style={{flex: 1}}>
        <FilterMenu
          visible={menuVisible}
          onClose={closeFilterMenu}
          setFilterColor={setFilterColor}
          setFilterType={setFilterType}
        />
        <Header
          openFilterMenu={openFilterMenu}
          openCamera={() => navigation.navigate('Camera')}
        />
        <Grid
          closet={closet}
          filterColor={filterColor}
          filterType={filterType}
          onDelete={onDelete}
        />
      </View>
    </MenuProvider>
  );
};

export default ClosetScreen;
