import React from 'react';
import {View, FlatList, Text, StyleSheet, Dimensions} from 'react-native';

/*
NOTE: If all the item tiles fit on screen,
the grid does not scroll on Android.
Basically, scrolling capability only works
if it's actually needed on Android.
*/
const SCREENWIDTH = Dimensions.get('window').width;

// To-do: Fix tile size when there aren't 3 items per row

const Body = (props) => {
  const filterItems = (items, filterColor, filterType) => {
    // 1) No color filter, no type filter
    if (filterColor === 0 && filterType === 0) {
      return items;
    }
    // 2) Color filter, but no type filter
    else if (filterColor !== 0 && filterType === 0) {
      return items.filter((item) => item.color === filterColor);
    }
    // 3) No color filter, type filter only
    else if (filterColor === 0 && filterType !== 0) {
      return items.filter((item) => item.type === filterType);
    }
    // 4) Color filter and type filter
    else if (filterColor !== 0 && filterType !== 0) {
      let filterByColor = items.filter((item) => item.color === filterColor);
      let filtered = filterByColor.filter((item) => item.type === filterType);
      return filtered;
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        data={filterItems(
          props.clothingItems,
          props.filterColor,
          props.filterType,
        )}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
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
    backgroundColor: 'lightgray',
    margin: 1,
    flex: 1,
    height: SCREENWIDTH / 3,
    width: SCREENWIDTH / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Body;
