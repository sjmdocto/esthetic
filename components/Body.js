import React from 'react';
import {View, FlatList, StyleSheet, Dimensions, Image} from 'react-native';

/*
NOTE: If all the item tiles fit on screen,
the grid does not scroll on Android.
Basically, scrolling capability only works
if it's actually needed on Android.
*/

// GLOBAL CONSTANTS
const SCREENWIDTH = Dimensions.get('window').width;
const numColumns = 3;
const EMPTY_WARDROBE = {photo: null, colorTag: null, typeTag: null};

// To-do: Fix tile size when there aren't 3 items per row

/**
 * Holds clothing item grid
 * @param {*} props
 * @param {array} props.wardrobe - all saved clothing items
 * @param {integer} props.filterColor
 * @param props.filterType
 */

const Body = (props) => {
  /**
   * Filters wardrobe by the currently selected color and type filters
   * @param {items} - wardrobe
   * @param {filterColor}
   * @param {filterType}
   * @return {array} - the filtered wardrobe
   */
  const filterItems = (wardrobe, filterColor, filterType) => {
    if (wardrobe === undefined) {
      return EMPTY_WARDROBE;
    }
    // 1) No color filter, no type filter
    else if (filterColor === 0 && filterType === 0) {
      return wardrobe;
    }
    // 2) Color filter, but no type filter
    else if (filterColor !== 0 && filterType === 0) {
      return wardrobe.filter((item) => item.colorTag === filterColor);
    }
    // 3) No color filter, type filter only
    else if (filterColor === 0 && filterType !== 0) {
      return wardrobe.filter((item) => item.typeTag === filterType);
    }
    // 4) Color filter and type filter
    else if (filterColor !== 0 && filterType !== 0) {
      let filterByColor = wardrobe.filter(
        (item) => item.colorTag === filterColor,
      );
      let filtered = filterByColor.filter(
        (item) => item.typeTag === filterType,
      );
      return filtered;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={numColumns}
        data={filterItems(props.wardrobe, props.filterColor, props.filterType)}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Image
              source={{uri: `data:image/png;base64,${item.photo}`}}
              style={styles.photo}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    margin: 1,
    flex: 1 / 3,
    height: SCREENWIDTH / 3,
    width: SCREENWIDTH / 3,
  },
  photo: {
    height: SCREENWIDTH / 3,
    width: SCREENWIDTH / 3,
  },
});

export default Body;
